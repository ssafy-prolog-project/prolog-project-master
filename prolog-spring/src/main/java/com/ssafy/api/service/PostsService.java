package com.ssafy.api.service;

import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.entity.Post;
import com.ssafy.api.entity.User;
import com.ssafy.api.model.PostDTO;
import com.ssafy.api.model.response.CommonResult;
import com.ssafy.api.repository.PostJpaRepo;
import com.ssafy.api.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class PostsService {
    private final PostJpaRepo postJpaRepo;
    private final UserJpaRepo userJpaRepo;

    //게시물 전체
    public List<Post> getAllPosts() {
        return postJpaRepo.findAll();
    }
    //단일 게시물 - 읽기
    public Post getPost(int postCode) {
        return postJpaRepo.findById(postCode).get();
    }

    // 단일 게시물 - 작성
    public Post writePost(User user, PostDTO post) {
        Post newPost = new Post(user,post.getTitle(),post.getContent(), post.getThumbnail(),post.getCoverColor(),
                post.getTagList());
        return postJpaRepo.save(newPost);
    }
    // 단일 게시물 - 수정
    public Post updatePost(int postCode, User user, PostDTO post) {
        Post postOrigin = getPost(postCode);
        postOrigin.setUpdate(post.getTitle(),post.getContent(),post.getThumbnail(),post.getCoverColor(),post.getTagList());
        //postJpaRepo.save(postOrigin);
        return postOrigin;
    }

    // 단일 게시물 - 삭제
    public boolean deletePost(int postCode) {

        postJpaRepo.deleteById(postCode);
        return true;
    }

}