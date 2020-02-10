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
    @Column
    private String coverColor;
    @Column
    private String tagList;

    private String content;

    @Column(nullable = false) // default 0
    private int postLike;
    @Column(nullable = false) // default 0
    private int postView;
    @Column
    private String thumbnail;
    @Column
    private int postPrev;
    @Column
    private int postNext;
    @Column
    private boolean pin;

}
