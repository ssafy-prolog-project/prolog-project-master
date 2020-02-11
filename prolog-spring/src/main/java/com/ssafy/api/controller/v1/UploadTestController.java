package com.ssafy.api.controller.v1;

import com.ssafy.api.entity.Post;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiImplicitParams;
import io.swagger.annotations.ApiOperation;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "v1")
public class UploadTestController {

    @ApiOperation(value = "Post 작성", notes = "글을 새로 작성합니다.")
    @PostMapping(value = "/post/{userId}")
    public String post(@PathVariable String userId, @RequestBody String data){

        System.out.println(data);

        return "S2 prolog zzang S2";
    }
}
