package com.ssafy.api.controller.v1;

import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.entity.Post;
import com.ssafy.api.entity.User;
import com.ssafy.api.model.response.CommonResult;
import com.ssafy.api.model.response.ListResult;
import com.ssafy.api.model.response.SingleResult;
import com.ssafy.api.repository.UserJpaRepo;
import com.ssafy.api.service.PostsService;
import com.ssafy.api.service.ResponseService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.Model;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/post/@userId")
@RequiredArgsConstructor
public class PostsController {

    private final PostsService postsService;
    private final ResponseService responseService;
    private final UserJpaRepo userJpaRepo;


    @ApiOperation(value="게시판 글 목록" , notes= "게시글 리스트 입니다.")
    @GetMapping("/postcard")
    public ListResult<Post> posts(){
        return responseService.getListResult(postsService.getAllPosts());
    }

    @ApiOperation(value = "게시판 글 상세", notes = "게시판 글 상세정보를 조회한다.")
    @GetMapping(value = "/detail/{postCode}")
    public SingleResult<Post> post(@PathVariable int postCode){
        return responseService.getSingleResult(postsService.getPost(postCode).orElseThrow(CUserNotFoundException::new));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Post 작성", notes = "글을 새로 작성합니다.")
    @PostMapping(value = "/user/{userId}")
    public String post(@PathVariable String userId, @RequestBody Post post){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        if(userId.equals(id)){ // Id 일치시 게시글 작성
            postsService.writePost(post);
        }
        return "redirect:/post/postcard";
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Post 수정", notes = "글을 수정합니다.")
    @PutMapping(value ="/update/{postCode}")
    public CommonResult post(@PathVariable int postCode, @RequestBody Post post){
        //User id 대조가 필요함
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        if(post.getUser().getUid().equals(id)){
            postsService.updatePost(post); //
        }
        return responseService.getSuccessResult();
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation( value="Post Delete", notes = "글을 삭제합니다.")
    @DeleteMapping(value="/delete/{postCode}")
    public CommonResult deletePost(@PathVariable int postCode){
        // ID 대조
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        Optional<Post> post = postsService.getPost(postCode);
        if(id.equals(post.get().getUser().getUid())){
            postsService.deletePost(postCode);
        }
        return responseService.getSuccessResult();
    }
}