package com.ssafy.api.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, name = "comment_code")
    private int cmtId;
    @Column(name = "username", nullable = false)
    private String userName;
    @Column(name = "content", nullable = false)
    private String comment;
    @Column(name = "create_date")
    private LocalDateTime createTime;
    @Column(name = "update_date")
    private int postId;
}
