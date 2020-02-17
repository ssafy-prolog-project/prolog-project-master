package com.ssafy.api.service;

import com.ssafy.api.advice.exception.CNotOwnerException;
import com.ssafy.api.advice.exception.CResourceNotExistException;
import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.entity.Post;
import com.ssafy.api.entity.User;
import com.ssafy.api.model.PostDTO;
import com.ssafy.api.repository.PostJpaRepo;
import com.ssafy.api.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Arrays;
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
    //게시물 전체 - By Id
    public List<Post> getAllPostsByUser(Long msrl) {
        return postJpaRepo.findAllByUserMsrl(msrl).orElseThrow(CResourceNotExistException::new);
    }
    //단일 게시물 - 읽기
    public Post getPost(int postCode) {
        // 빈도수 셋팅 필요
        Post post = postJpaRepo.findById(postCode).get();
        int viewCnt= post.getPostView();
        post.setPostView(viewCnt+1);
        postJpaRepo.save(post); // view update
        return postJpaRepo.findById(postCode).orElseThrow(CResourceNotExistException::new);
    }

    // 단일 게시물 - 작성
    public Post writePost(Long msrl, PostDTO post) {
        //ID check - 존재하면 작성가능
        Post newPost = new Post(userJpaRepo.findByMsrl(msrl).orElseThrow(CUserNotFoundException::new),post.getTitle(),post.getBody(),
                post.getCoverImage(),post.getCoverColor(),post.getTagList());
        return postJpaRepo.save(newPost);
    }
    // 단일 게시물 - 수정
    public Post updatePost(int postCode, Long mrsl, PostDTO post) {
        //ID Check 필요
        Post postOrigin = getPost(postCode);
        if(postOrigin.getUser().getMsrl() != mrsl)
            throw new CNotOwnerException();
        List<String> tagListToLowerCase = Arrays.asList(new String[postOrigin.getTagList().size()]);
        for (String target:post.getTagList()) {
            tagListToLowerCase.add(target.toLowerCase());
        }
        postOrigin.setUpdate(post.getTitle(),post.getBody(),post.getCoverImage(),post.getCoverColor(),tagListToLowerCase);
        return postOrigin;
    }

    // 단일 게시물 - 삭제
    public boolean deletePost(Long msrl, int postCode) {
        Post post = getPost(postCode);
        if(post.getUser().getMsrl() != msrl)
            throw new CNotOwnerException();
        postJpaRepo.deleteById(postCode);
        return true;
    }

//    //해쉬태그 이용 검색
//    public List<Post> searchByKeyWords(String searchKeyWord){
//        return postJpaRepo.findAllByKeywords(searchKeyWord).orElseThrow(CResourceNotExistException::new); // Keyword를 이용해서 찾은 Post들을 반환한다.
//    }

}