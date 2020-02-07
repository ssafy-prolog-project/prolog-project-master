package com.ssafy.api.repository;

import com.ssafy.api.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer> {
    List<Comment> findAllByPostId(int postId);
    void deleteCommentByCmtId(int cmtId);

}
