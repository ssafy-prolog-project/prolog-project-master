package com.ssafy.api.controller.v1;

import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.entity.Post;
import com.ssafy.api.entity.User;
import com.ssafy.api.model.PostDTO;
import com.ssafy.api.model.response.CommonResult;
import com.ssafy.api.model.response.ListResult;
import com.ssafy.api.model.response.SingleResult;
import com.ssafy.api.repository.UserJpaRepo;
import com.ssafy.api.service.PostsService;
import com.ssafy.api.service.ResponseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@Api(tags={"3.Post"})
@RestController
@RequestMapping("/v1")
@RequiredArgsConstructor
public class PostsController {

    private final PostsService postsService;
    private final ResponseService responseService;

    @ApiOperation(value="게시판 글 목록" , notes= "게시글 리스트 입니다.")
    @GetMapping("/postsAll")
    public ListResult<Post> posts(){
        return responseService.getListResult(postsService.getAllPosts());
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value="글 목록" , notes= "한 계정에 대한 게시글 리스트 입니다.")
    @GetMapping("/post")
    public ListResult<Post> postsById(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        return responseService.getListResult(postsService.getAllPostsByUser(Long.parseLong(id)));
    }

    @ApiOperation(value = "게시판 글 상세", notes = "게시판 글 상세정보를 조회한다.")
    @GetMapping(value = "/post/{postCode}") //id
    public SingleResult<Post> post(@PathVariable int postCode){
        return responseService.getSingleResult(postsService.getPost(postCode));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Post 작성", notes = "글을 새로 작성합니다.")
    @PostMapping(value = "/post") //data : post()
    public SingleResult<Post> post(@RequestBody @Valid PostDTO post){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        return responseService.getSingleResult(postsService.writePost(Long.parseLong(id), post));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Post 수정", notes = "글을 수정합니다.")
    @PutMapping(value ="/post/{postCode}")//id
    public SingleResult<Post> post(@PathVariable int postCode, @RequestBody PostDTO post){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        return responseService.getSingleResult(postsService.updatePost(postCode,Long.parseLong(id), post));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation( value="Post Delete", notes = "글을 삭제합니다.")
    @DeleteMapping(value="/post/{postCode}") // id
    public CommonResult deletePost(@PathVariable int postCode){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String id = authentication.getName();
        postsService.deletePost(Long.parseLong(id),postCode);
        return responseService.getSuccessResult();
    }
}