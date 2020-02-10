//package com.ssafy.api.model;
//
//import com.ssafy.api.entity.User;
//import lombok.*;
//import java.text.ParseException;
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.TimeZone;
//
//@Getter
//@Setter
//@ToString
//@AllArgsConstructor
//@NoArgsConstructor
//public class PostDTO {
//    private static final SimpleDateFormat dateFormat
//     = new SimpleDateFormat("yyyy-MM-dd HH:mm");
//
//    private int postCode;
//    private User user;  // 게시글 - 회원의 관계 - N:1
//    private String title;
//    private String coverColor;
//    private String tagList;
//    private String content;
//    private int postLike;
//    private int postView;
//    private String thumbnail;
//    private int postPrev;
//    private int postNext;
//    private boolean pin;
//
//    private String date;
//
//    public Date getSubmissionDateConverted(String timezone) throws ParseException {
//        dateFormat.setTimeZone(TimeZone.getTimeZone(timezone));
//        return dateFormat.parse(this.date);
//    }
//
//    public void setSubmissionDate(Date date, String timezone) {
//        dateFormat.setTimeZone(TimeZone.getTimeZone(timezone));
//        this.date = dateFormat.format(date);
//    }
//}
