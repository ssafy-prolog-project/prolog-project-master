package com.ssafy.api.controller.v1;

import com.ssafy.api.model.Comment;
import com.ssafy.api.service.CommentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Api(tags={"1.comment"})
@RestController
@RequiredArgsConstructor
@RequestMapping(value="/")
public class CommentController {

    private CommentService commentService;

    // 모든 comments
    @ApiOperation(value = "all" , notes = "전체")
    @GetMapping(value = "/comment/all")
    public ResponseEntity<List<Comment>> getComments(){
        List<Comment> comments = commentService.findAllComments();
        return new ResponseEntity<List<Comment>>(comments, HttpStatus.OK);
    }

    // select each post's comments
    @ApiOperation(value = "one" , notes = "한 포스트에 대한 코멘트 리스트")
    @GetMapping(value = "/comment/{postId}")
    public ResponseEntity<List<Comment>> getCommentsEachPost(@PathVariable int postId){
        List<Comment> comments = commentService.findByPostId(postId);
        return new ResponseEntity<List<Comment>>(comments, HttpStatus.OK);
    }

    // delete comments
    @ApiOperation(value = "delete" , notes = "삭제")
    @DeleteMapping(value = "/comment/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable int commentId){
        commentService.deleteCommentByCmtId(commentId);
        return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
    }

    //insert comments
    @ApiOperation(value = "all" , notes = "전체")
    @PostMapping()
    public ResponseEntity<Comment> save(@RequestBody Comment comment){

        return new ResponseEntity<Comment>(commentService.save(comment), HttpStatus.OK);
    }

}
