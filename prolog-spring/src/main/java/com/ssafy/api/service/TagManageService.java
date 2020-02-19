package com.ssafy.api.service;

import com.ssafy.api.entity.Post;
import com.ssafy.api.entity.Tag;
import com.ssafy.api.entity.TagManage;
import com.ssafy.api.repository.TagJpaRepo;
import com.ssafy.api.repository.TagManageJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

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
    public List<String> getTagsByPostCode(Post post){
        List<TagManage> mngs = tagManageJpaRepo.findByPost(post).get();
//        System.out.println("여기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!6");
//        System.out.println(mngs);
//        System.out.println("여기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!7");
        List<String> tags = new ArrayList<>();
        if(mngs != null){
//            System.out.println(tags + "여기가 태그값이다!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
            for (int i = 0; i < mngs.size(); i++) {
                tags.add(mngs.get(i).getTag().getTag());
            }
        }
        return tags;
    }

    // tId로 게시물 번호들 찾기
    public List<TagManage> getTagsByTagId(Tag tag){
        return tagManageJpaRepo.findByTag(tag).get();
    }
}
