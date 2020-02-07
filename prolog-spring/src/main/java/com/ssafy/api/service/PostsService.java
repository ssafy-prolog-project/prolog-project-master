package com.ssafy.api.service;

import com.ssafy.api.entity.User;
import com.ssafy.api.entity.Post;
import com.ssafy.api.repository.PostJpaRepo;
import com.ssafy.api.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
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
    public Optional<Post> getPost(int postCode) {
        return postJpaRepo.findById(postCode);
    }

    // 단일 게시물 - 작성
//    public Post writePost(String uid, String title, String content, String thumbnail) {
    public Post writePost(Post post) {
        //  Post post = new Post(userJpaRepo.findByUid(uid).orElseThrow(CUserNotFoundException::new), post.getUsername(), paramsPost.getTitle(), paramsPost.getContent())
        //post.setCreateDate(LocalDateTime.now()); // post에서 뭐 줌...?
        return postJpaRepo.save(post);
    }
    // 단일 게시물 - 수정
    public void updatePost(Post post){
        postJpaRepo.save(post);
    }
    // 단일 게시물 - 삭제
    public boolean deletePost(int postCode, String userId) {
        //Post post = getPost(postCode);
        Optional<User> user = userJpaRepo.findUserByUid(userId);
        Long msrl = user.get().getMsrl();
        if (msrl == 1) { // admin( 1: admin 2: .user 3: disabled)
            postJpaRepo.deleteById(postCode);
            return true;
        } else if (msrl== 3 || userId != user.get().getUid()) {
            //throw new CNotOwnerException();
            System.out.println("error - delete");
            return false;
        } else {
            // users
            postJpaRepo.deleteById(postCode);
            return true;
        }
    }
}