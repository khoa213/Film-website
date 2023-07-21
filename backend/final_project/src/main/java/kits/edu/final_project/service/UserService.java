package kits.edu.final_project.service;


import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.exception.CustomException;
import kits.edu.final_project.payload.request.SignupRequest;
import kits.edu.final_project.payload.response.UserResponse;
import kits.edu.final_project.repository.UserRepository;
import kits.edu.final_project.service.imp.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserService implements UserServiceImp {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Override
    public boolean addUser(SignupRequest request) {
        boolean isSuccess =false;
        try {
            UserEntity user = new UserEntity();
            user.setUsername(request.getUsername());
            user.setPassword(passwordEncoder.encode(request.getPassword()));
            user.setEmail(request.getEmail());
            userRepository.save(user);
            isSuccess=true;
        }catch (Exception e)
        {
            throw new CustomException("Loi them User"+e.getMessage());
        }
return isSuccess;
    }

    @Override
    public List<UserResponse> getAllUsers() {
//        return userRepository.findAll();
        List<UserEntity> list=userRepository.findAll();
        List<UserResponse> responseList=new ArrayList<>();
        try {
//            UserEntity user = new UserEntity();
            for(UserEntity u:list){
                UserResponse userResponse=new UserResponse();
                userResponse.setEmail(u.getEmail());
                userResponse.setId(u.getId());
                userResponse.setUsername(u.getUsername());

                responseList.add(userResponse);
            }
        }catch (Exception e)
        {
            throw new CustomException("Loi get List users"+e.getMessage());
        }
        return responseList;
    }

    @Override
    public UserEntity addNewUser( UserEntity userEntity) {

        return userRepository.save(userEntity);

    }

    @Override
    public UserEntity replaceUserById(UserEntity userEntity, int id) {
        return userRepository.findById(id).map(u->{
            u.setUsername(userEntity.getUsername());
            u.setFirstname(userEntity.getFirstname());
            u.setLastname(userEntity.getLastname());
            u.setPassword(userEntity.getPassword());
            u.setImage(userEntity.getImage());
            u.setEmail(userEntity.getEmail());
            u.setGender(userEntity.getGender());
            return userRepository.save(u);
        })
                .orElseGet(()->{
                    return userRepository.save(userEntity);
                });
//        return null;
    }

    @Override
    public List<UserEntity> deleteUserById(int id) {
//          List<UserEntity> users = userRepository.findAll();
//          List<UserEntity> u = new ArrayList<>();
//          for (UserEntity user:users) {
//                if (user.getId()!=id) {
//                    u.add(user);
//                }
//          }
//          users=u;
//          return users;
////        return userRepository.findById(id).stream().reduce();
        userRepository.deleteById(id);
        return userRepository.findAll();
    }


}
