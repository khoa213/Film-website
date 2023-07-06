package kits.edu.final_project.service.imp;

import kits.edu.final_project.payload.request.SignupRequest;
import org.springframework.stereotype.Service;

@Service
public interface UserServiceImp {
    boolean addUser(SignupRequest request);
}
