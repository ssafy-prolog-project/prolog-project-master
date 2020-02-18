package com.ssafy.api.service;

import com.ssafy.api.entity.Post;
import com.ssafy.api.entity.Tag;
import com.ssafy.api.entity.TagManage;
import com.ssafy.api.repository.TagJpaRepo;
import com.ssafy.api.repository.TagManageJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class TagManageService {
    private final TagJpaRepo tagJpaRepo;
    private final TagManageJpaRepo tagManageJpaRepo;

    // Tag 전체
    public List<Tag> getAllTags(){
        return tagJpaRepo.findAll();
    }

    // 게시물 번호로 tId들 찾기
    public List<TagManage> getTagsByPostCode(Post post){

        return tagManageJpaRepo.findByPost(post).get();
    }

    // tId로 게시물 번호들 찾기
    public List<TagManage> getTagsByTagId(Tag tag){
        return tagManageJpaRepo.findByTag(tag).get();
    }
}
