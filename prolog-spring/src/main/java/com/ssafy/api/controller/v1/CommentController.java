package com.ssafy.api.controller.v1;

import com.ssafy.api.entity.Comment;
import com.ssafy.api.entity.User;
import com.ssafy.api.model.response.CommonResult;
import com.ssafy.api.model.response.ListResult;
import com.ssafy.api.service.CommentService;
import com.ssafy.api.service.ResponseService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@Api(tags={"1.comment"})
@RestController
@RequiredArgsConstructor
@RequestMapping(value="/")
public class CommentController {

    private CommentService commentService;
    private final ResponseService responseService; // 결과를 처리할 Service

    // select each post's comments
    @ApiOperation(value = "one" , notes = "한 포스트에 대한 코멘트 리스트")
    @GetMapping(value = "/comment/{postId}")
    public ListResult<Comment> getCommentsEachPost(@PathVariable int postId){
        return responseService.getListResult(commentService.findByPostId(postId).get());
    }
    // delete comments
    @ApiOperation(value = "delete" , notes = "삭제")
    @DeleteMapping(value = "/comment/{commentId}")
    public CommonResult deleteComment(@PathVariable int commentId){
        commentService.deleteCommentByCmtId(commentId);
        return responseService.getSuccessResult();
    }

    //insert comments
    @ApiOperation(value = "all" , notes = "전체")
    @PostMapping(value = "/")
    public ResponseEntity<Comment> save(@RequestBody Comment comment){
        return new ResponseEntity<Comment>(commentService.save(comment), HttpStatus.OK);
    }

    //modify - comments
    @ApiOperation(value = "update", notes = "수정")
    @PutMapping(value="/comment/{commentId}")
    public Comment updateComment( @PathVariable int commentId,@RequestBody Comment comment){
        // 기존 값 find & set

        return commentService.save(comment); // save --> update
    }
}
