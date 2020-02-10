package com.ssafy.api.repository;

import com.ssafy.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserJpaRepo extends JpaRepository<User, Long> {
    Optional<User> findByUid(String email);
    Optional<User> findUserByUid(String email);
    Optional<User> findByUidAndProvider(String uid, String provider);
    Optional<User> findMsrlByUidAndProvider(String uid, String provider);
    Optional<User> findUserByMsrl(Long msrl);
    int deleteByMsrl(Long msrl);
}
