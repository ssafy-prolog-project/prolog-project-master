package com.ssafy.api.repository;

import com.ssafy.api.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostJpaRepo extends JpaRepository<Post, Integer> {
    Post findByPostCode(int postCode); // select one


}
