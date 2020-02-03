package com.ssafy.api.service;

import com.ssafy.api.advice.exception.CUserNotFoundException;
import com.ssafy.api.repository.UserJpaRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class CustomUserDetailService implements UserDetailsService {

    private final UserJpaRepo userJpaRepo;

    public UserDetails loadUserByUsername(String userPk) {
        return userJpaRepo.findByUid(userPk).orElseThrow(CUserNotFoundException::new);
    }
}