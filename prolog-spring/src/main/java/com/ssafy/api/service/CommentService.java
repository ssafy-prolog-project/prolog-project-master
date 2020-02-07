package com.ssafy.api.service;

import com.ssafy.api.model.Comment;
import com.ssafy.api.repository.CommentRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class CommentService {

    private CommentRepo commentRepo;

    public List<Comment> findAllComments(){
        return commentRepo.findAll();
    }

    // select by postId : 해당게시물의 comment 불러옴
    public Optional<List<Comment>> findByPostId(int postId) {
        Optional<List<Comment>> comments = commentRepo.findAllByPostId(postId);

        return comments;
    }

    //insert
    public Comment save(Comment comment) {
        return commentRepo.save(comment);
    }

    //삭제
    public void deleteCommentByCmtId(int cmtId){
        commentRepo.deleteByCmtId(cmtId);
    }
}
