package com.ssafy.api.repository;

import com.ssafy.api.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer> {
    Optional<List<Comment>> findAllByPostId(int postId);
    Optional<Void> deleteByCmtId(int cmtId);

}
