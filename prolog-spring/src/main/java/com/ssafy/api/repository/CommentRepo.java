package com.ssafy.api.repository;

import com.ssafy.api.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer> {
    List<Comment> findAllByPostId(int postId);
    Optional<Void> deleteByCmtId(int cmtId);

//    @Modifying
//    @Query("update Comment c SET c.comment = content  WHERE c.comment_code = :cmtId ")
//    Optional<Void> updatComment();


}
