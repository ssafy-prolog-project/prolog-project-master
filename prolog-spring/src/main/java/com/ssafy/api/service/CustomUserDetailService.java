package com.ssafy.api.service;

import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.common.CacheKey;
import com.ssafy.api.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;


@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final UserJpaRepo userJpaRepo;

//    @Cacheable(value = CacheKey.USER, key = "#userPk", unless = "#result == null")
    @Override
    public UserDetails loadUserByUsername(String userPk) {
        return userJpaRepo.findById(Long.valueOf(userPk)).orElseThrow(CUserNotFoundException::new);
    }
}