package com.ssafy.api.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

import javax.persistence.Column;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Getter
@Setter
@NoArgsConstructor
public class PostDTO {

    //@Size(min=2, max=100)
    @ApiModelProperty(value = "제목", required = true)
    private String title;
    @ApiModelProperty(value = "내용")
    private String body;

    @ApiModelProperty(value = "표지색상")
    private String coverColor;

    @ApiModelProperty(value = "표지이미지")
    private String coverImage;
//    @ApiModelProperty(value = "태그")
//    private String[] tagList;
//    @ApiModelProperty(value = "포스트핀")
//    private boolean pinPost;
//    @ApiModelProperty(value = "프로젝트핀")
//    private boolean pinProject;
}