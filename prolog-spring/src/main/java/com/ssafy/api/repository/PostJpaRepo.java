package com.ssafy.api.repository;

import com.ssafy.api.entity.User;
import com.ssafy.api.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface PostJpaRepo extends JpaRepository<Post, Integer> {
    //Optional<Post> findByPostCode(int postCode); // select one
    //Optional<Void> deleteByPostCode(int postCode);
    Optional<List<Post>> findAllByUserMsrl(Long msrl); // user에 해당하는 모든 게시물

//    @Query("SELECT p FROM posts p WHERE p.title LIKE CONCAT('%',:keyword,'%') AND")
//    Optional<List<Post>> findAllByKeywords(@Param("keyword") String keyword);//검색어로 제목 탐색 모든 게시물


}
