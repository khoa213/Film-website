package kits.edu.final_project.service;

import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class CustomUserDetailService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Override
    public UserDetails loadUserByUsername (String username) throws UsernameNotFoundException {
        UserEntity user=userRepository.findByEmail(username);
        if(user!=null){
            User user1= new User(user.getEmail(),user.getPassword(),new ArrayList<>());
            return user1;
        }
        throw new UsernameNotFoundException("User not found");
    }
}
