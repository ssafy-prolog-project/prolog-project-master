package com.ssafy.api.repository;

import com.ssafy.api.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.ArrayList;
import java.util.Optional;

public interface UserJpaRepo extends JpaRepository<User, Long> {
    Optional<User> findByUid(String email);
    Optional<User> findByUidAndProvider(String uid, String provider);
    Optional<User> findByMsrl(Long msrl);
    Optional<User> findTechsByMsrl(Long msrl);


//    @Query(value = "select techs from user_techs t where t.user_msrl = :msrl", nativeQuery = true)
//    ArrayList<String> getUserTechsByMsrl(Long msrl);
}
