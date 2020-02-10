package com.ssafy.api.model.social;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
public class KakaoProfile implements SocialProfile {
    private String id;
    private Properties properties;

    @Override
    public String getName() {
        return new Properties().getNickname();
    }

    @Getter
    @Setter
    @ToString
    private static class Properties {
        private String nickname;
        private String thumbnail_image;
        private String profile_image;
    }
}
