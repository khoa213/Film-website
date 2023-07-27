package kits.edu.final_project.service;


import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.payload.request.SignupRequest;
import kits.edu.final_project.payload.response.UserResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService  {
        boolean addUser(SignupRequest request);
    List<UserResponse> getAllUsers();

    UserEntity replaceUserById(@RequestBody UserEntity userEntity, @PathVariable int id);
    boolean replaceStatusUserById(@RequestBody UserEntity userEntity, @PathVariable int id);
//    @Modifying
//    @Query(value = "delete from users u where u.user_id= :id")
    List<UserEntity> deleteUserById(@PathVariable int id);
    Optional<UserEntity> getByUsername(String username);
}
