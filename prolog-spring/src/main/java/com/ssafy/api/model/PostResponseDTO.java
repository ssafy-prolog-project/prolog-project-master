package com.ssafy.api.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PostResponseDTO {

    @ApiModelProperty(value = "제목", required = true)
    private String title;
    @ApiModelProperty(value = "내용")
    private String body;

    @ApiModelProperty(value = "표지색상")
    private String coverColor;

    @ApiModelProperty(value = "표지이미지")
    private String coverImage;

    @ApiModelProperty(value = "작성자")
    private String userName; // User Name

    @ApiModelProperty(value = "태그 리스트")
    private String[] tagList; // tag table에 넣을것.
}
