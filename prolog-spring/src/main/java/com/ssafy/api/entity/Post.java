package com.ssafy.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="posts")
public class Post extends CommonDateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int postCode;
    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action  = OnDeleteAction.CASCADE)
    private User user;  // 게시글 - 회원의 관계 - N:1

    @Column(nullable = false, length = 100)
    private String title;

    //json - data
    private String content; // json 처리 필요

    @Column(nullable = false) // default 0
    private int postLike;
    @Column(nullable = false) // default 0
    private int postView;
    private String thumbnail;
    private int postPrev;
    private int postNext;

    // 수정 set method 필요?
    public Post setUpdate(User user, String title, String content) {
        this.user = user;
        this.title = title;
        this.content = content;
        return this;
    }
}
