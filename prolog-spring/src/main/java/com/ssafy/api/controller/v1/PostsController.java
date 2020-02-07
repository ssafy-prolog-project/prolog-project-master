package com.ssafy.api.controller.v1;

import com.ssafy.api.model.Post;
import com.ssafy.api.model.response.CommonResult;
import com.ssafy.api.model.response.ListResult;
import com.ssafy.api.model.response.SingleResult;
import com.ssafy.api.service.PostsService;
import com.ssafy.api.service.ResponseService;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import io.swagger.models.Model;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostsController {

    private final PostsService postsService;
    private final ResponseService responseService;

    @ApiOperation(value="게시판 글 목록" , notes= "게시글 리스트 입니다.")
    @GetMapping("/posts")
    public ListResult<Post> posts(){
        return responseService.getListResult(postsService.getAllPosts());
    }

    @ApiOperation(value = "게시판 글 상세", notes = "게시판 글 상세정보를 조회한다.")
    @GetMapping(value = "/{postCode}")
    public SingleResult<Post> post(@PathVariable int postCode, Model model){

        return responseService.getSingleResult(postsService.getPost(postCode));
    }

    @ApiImplicitParams({
            @ApiImplicitParam(name = "X-AUTH-TOKEN", value = "로그인 성공 후 access_token", required = true, dataType = "String", paramType = "header")
    })
    @ApiOperation(value = "Post 작성", notes = "글을 새로 작성합니다.")
    @PostMapping(value = "/{userId}")
    public SingleResult<Post> post(@PathVariable String userId, String title, String content, String thumbnail){
        //Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        return responseService.getSingleResult(postsService.writePost(userId,title,
                content,thumbnail));
    }
    @ApiOperation(value = "Post 수정", notes = "글을 수정합니다.")
    @PutMapping(value ="/{postCode}")
    public void/*SingleResult<Post> */post(@PathVariable int postCode, @RequestBody Post post, Model model){


        //return responseService.getSingleResult(postsService.updatePost(postCode,userId,content,title, thumnail));
    }

    @ApiOperation( value="Post Delete", notes = "")
    @DeleteMapping(value="/{postCode}")
    public CommonResult deletePost(@PathVariable int postCode){
        String userId = "";
        postsService.deletePost(postCode,userId);
        return responseService.getSuccessResult();
    }


}