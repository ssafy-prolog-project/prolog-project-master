package com.ssafy.api.controller.v1;

import com.ssafy.api.advice.exception.CEmailSigninFailedException;
import com.ssafy.api.advice.exception.CUserCommunityIdMatchException;
import com.ssafy.api.model.response.SingleResult;
import com.ssafy.api.service.ResponseService;
import com.ssafy.api.advice.exception.CUserExistException;
import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.config.JwtTokenProvider;
import com.ssafy.api.model.social.KakaoProfile;
import com.ssafy.api.entity.User;
import com.ssafy.api.model.response.CommonResult;
import com.ssafy.api.repository.UserJpaRepo;
import com.ssafy.api.service.user.KakaoService;
import io.swagger.annotations.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Optional;

@Slf4j
@Api(tags = {"1. Sign"})
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1")
public class SignController {

    private final UserJpaRepo userJpaRepo;
    private final JwtTokenProvider jwtTokenProvider;
    private final ResponseService responseService;
    private final PasswordEncoder passwordEncoder;
    private final KakaoService kakaoService;

    @ApiOperation(value = "로그인", notes = "이메일 회원 로그인을 한다.")
    @PostMapping(value = "/signin")
    public SingleResult<String> signin(@ApiParam(value = "회원ID : 이메일", required = true) @RequestParam String id,
                                       @ApiParam(value = "비밀번호", required = true) @RequestParam String password) {

        User user = userJpaRepo.findByUid(id).orElseThrow(CEmailSigninFailedException::new);
        if (!passwordEncoder.matches(password, user.getPassword()))
            throw new CEmailSigninFailedException();

        return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(user.getMsrl()), user.getRoles()));
    }

    @ApiOperation(value = "소셜 로그인", notes = "소셜 회원 로그인을 한다.")
    @PostMapping(value = "/signin/{provider}")
    public SingleResult<String> signinByProvider(
            @ApiParam(value = "서비스 제공자 provider", required = true, defaultValue = "kakao") @PathVariable String provider,
            @ApiParam(value = "소셜 access_token", required = true) @RequestHeader String accessToken
    ) {

        KakaoProfile profile = kakaoService.getKakaoProfile(accessToken);
        User user = userJpaRepo.findByUidAndProvider(String.valueOf(profile.getId()), provider).orElseThrow(CUserNotFoundException::new);
        return responseService.getSingleResult(jwtTokenProvider.createToken(String.valueOf(user.getMsrl()), user.getRoles()));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "소셜 로그아웃", notes = "소셜 회원 로그아웃을 한다.")
    @PostMapping(value = "/signout/{provider}")
    public CommonResult signoutByProvider(
            @ApiParam(value = "서비스 제공자 provider", required = true, defaultValue = "kakao") @PathVariable String provider,
            @ApiParam(value = "소셜 access_token", required = true) @RequestHeader String accessToken
    ) {
        KakaoProfile profile = kakaoService.postKakaoLogout(accessToken);
        User user = userJpaRepo.findByUidAndProvider(String.valueOf(profile.getId()), provider).orElseThrow(CUserNotFoundException::new);

        if(!user.getUid().equals(Long.toString(profile.getId()))){
            throw new CUserCommunityIdMatchException();
        }
        return responseService.getSuccessResult();
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "소셜 언링크", notes = "소셜 회원 언링크을 한다.")
    @PostMapping(value = "/unlink/{provider}")
    public CommonResult unlinkByProvider(
            @ApiParam(value = "서비스 제공자 provider", required = true, defaultValue = "kakao") @PathVariable String provider,
            @ApiParam(value = "소셜 access_token", required = true) @RequestHeader String accessToken
    ) {
        KakaoProfile profile = kakaoService.postKakaoUnlink(accessToken);
        User user = userJpaRepo.findByUidAndProvider(String.valueOf(profile.getId()), provider).orElseThrow(CUserNotFoundException::new);

        if(!user.getUid().equals(Long.toString(profile.getId()))){
            throw new CUserCommunityIdMatchException();
        }
        return responseService.getSuccessResult();
    }

    @ApiOperation(value = "가입", notes = "회원가입을 한다.")
    @PostMapping(value = "/signup")
    public CommonResult signup(@ApiParam(value = "회원ID : 이메일", required = true) @RequestBody String id,
                               @ApiParam(value = "비밀번호", required = true) @RequestBody String password,
                               @ApiParam(value = "이름", required = true) @RequestBody String name) {



        userJpaRepo.save(User.builder()
                .uid(id)
                .password(passwordEncoder.encode(password))
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build());
        return responseService.getSuccessResult();
    }

    @ApiOperation(value = "소셜 계정 가입", notes = "소셜 계정 회원가입을 한다.")
    @PostMapping(value = "/signup/{provider}")
    public CommonResult signupProvider(@ApiParam(value = "서비스 제공자 provider", required = true, defaultValue = "kakao") @PathVariable String provider,
                                       @ApiParam(value = "소셜 access_token", required = true) @RequestHeader String accessToken,
                                       @ApiParam(value = "이름", required = true) @RequestBody String name) {

        KakaoProfile profile = kakaoService.getKakaoProfile(accessToken);
        Optional<User> user = userJpaRepo.findByUidAndProvider(String.valueOf(profile.getId()), provider);
        if (user.isPresent())
            throw new CUserExistException();

        User inUser = User.builder()
                .uid(String.valueOf(profile.getId()))
                .provider(provider)
                .name(name)
                .roles(Collections.singletonList("ROLE_USER"))
                .build();

        userJpaRepo.save(inUser);
        return responseService.getSuccessResult();
    }
}