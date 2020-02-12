package com.ssafy.api.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Table(name = "posts")
public class Post extends CommonDateEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false)
    private int postCode;

    @ManyToOne(fetch = FetchType.LAZY)
    @OnDelete(action  = OnDeleteAction.CASCADE)
    @JoinColumn(name="msrl")
    //@JsonBackReference
    private User user;  // 게시글 - 회원의 관계 - N:1

    @Column(nullable = false, length = 100)
    private String title;
    @Column
    private String coverColor;
    @Column
    private String tagList;

    @Column(name = "contents")
    private String content;

    @Column(nullable = false, columnDefinition = "int default 0") // default 0
    private int postLike;
    @Column(nullable = false, columnDefinition = "int default 0") // default 0
    private int postView;
    @Column
    private String thumbnail;
    @Column(columnDefinition = "int default 0")
    private int postPrev;
    @Column(columnDefinition = "int default 0")
    private int postNext;
    @Column(columnDefinition = "boolean default false")
    private boolean pinPost;
    @Column(columnDefinition = "boolean default false")
    private boolean pinProject;

    // 생성자
    public Post(User user, String title, String content, String thumbnail, String coverColor, String tagList) {
        this.user = user;
        this.title = title;
        this.content = content;
        this.thumbnail = thumbnail;
        this.coverColor = coverColor;
        this.tagList = tagList;
    }

    // 수정시 데이터 처리
    public Post setUpdate(String title, String content, String thumbnail, String coverColor, String tagList) {
        this.title = title;
        this.content = content;
        this.thumbnail = thumbnail;
        this.coverColor = coverColor;
        this.tagList = tagList;
        return this;
    }
}
