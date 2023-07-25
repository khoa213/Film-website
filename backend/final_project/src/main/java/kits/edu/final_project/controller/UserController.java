package kits.edu.final_project.controller;

import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.payload.response.BaseResponse;


import kits.edu.final_project.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    UserService userService;

    @GetMapping("")
   public ResponseEntity<?> getAllUsers(){
        BaseResponse response=new BaseResponse();
        response.setStatusCode(200);
        response.setData(userService.getAllUsers());
//        System.out.println("ol");
//        List<UserEntity> list =userServiceImp.getAllUsers();
//        for (UserEntity user:list) {
//            System.out.println(user.getEmail());
//        }
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }
//    @PostMapping("/add")
//    @ResponseBody
//    public ResponseEntity<?> addNewUser(@RequestBody UserEntity userEntity) {
////        ResponseEntity.status(201).body(userServiceImp.addNewUser(userEntity));
//        BaseResponse response = new BaseResponse();
//        response.setStatusCode(201);
//        response.setData(userServiceImp.addNewUser(userEntity));
//        return new ResponseEntity<>(response,HttpStatus.OK);
//    }
    @PutMapping("/{id}")
    public ResponseEntity<?> replaceUserById(@RequestBody UserEntity userEntity,@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(userService.replaceUserById(userEntity,id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    @PutMapping("/status/{id}")
    public ResponseEntity<?> replaceStatusUserById(@RequestBody UserEntity userEntity,@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(userService.replaceStatusUserById(userEntity,id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserById (@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(userService.deleteUserById(id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
