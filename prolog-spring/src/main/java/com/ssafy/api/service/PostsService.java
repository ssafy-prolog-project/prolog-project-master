package com.ssafy.api.service;

import com.ssafy.api.entity.User;
import com.ssafy.api.model.Post;
import com.ssafy.api.repository.PostJpaRepo;
import com.ssafy.api.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

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
        return postJpaRepo.findByPostCode(postCode);
    }

    // 단일 게시물 - 작성
    public Post writePost(String uid, String title, String content, String thumnail) {
        //Post post = new Post(userJpaRepo.findByUid(uid).orElseThrow(CUserNotFoundException::new), post.getUsername(), paramsPost.getTitle(), paramsPost.getContent());
        Post post = new Post();
        return postJpaRepo.save(post);
    }
    // 단일 게시물 - 수정
    public Post updatePost(int postCode, String userId, String content, String title, String thumnail){
        Post postUpdate = getPost(postCode);
        Optional<User> user = userJpaRepo.findUserByUid(userId);
        if(!userId.equals(user.get().getUid()) ){ // 작성자 아이디 확인 - 보류
            // throw new CNotOwnerException();
        }
        postUpdate.setContent(content);
        postUpdate.setTitle(title);
        postUpdate.setUpdateDate(LocalDateTime.now());
        postUpdate.setThumbnail(thumnail);
        return postUpdate;
    }
    // 단일 게시물 - 삭제
    public boolean deletePost(int postCode, String userId) {
        Post post = getPost(postCode);
        Optional<User> user = userJpaRepo.findByUid(userId);
        Long msrl = user.get().getMsrl();
        if (msrl == 1) { // admin( 1: admin 2: .user 3: disabled)
            postJpaRepo.delete(post);
            return true;
        } else if (msrl== 3 || userId != user.get().getUid()) {
            //throw new CNotOwnerException();
            System.out.println("error - delete");
            return false;
        } else {
            // users
            postJpaRepo.delete(post);
            return true;
        }
    }
}