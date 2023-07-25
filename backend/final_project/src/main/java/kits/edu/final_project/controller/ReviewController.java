package kits.edu.final_project.controller;

import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.payload.request.ReviewRequest;
import kits.edu.final_project.payload.response.BaseResponse;
import kits.edu.final_project.service.ReviewService;
import kits.edu.final_project.service.imp.ReviewServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/review")
@CrossOrigin("*")
public class ReviewController {
    @Autowired
    ReviewService reviewService;
    @GetMapping("")
    public ResponseEntity<?> getAllReviews(){
        BaseResponse response=new BaseResponse();
        response.setStatusCode(200);
        response.setData(reviewService.getAllReviews());

        return  new ResponseEntity<>(response, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteReviewById (@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(reviewService.deleteReviewById(id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateReviewById(@RequestBody ReviewRequest reviewRequest, @PathVariable("id") int id){
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(reviewService.replaceReviewById(reviewRequest,id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
//    @PostMapping("")
//    public ResponseEntity<?> addReview(){
//
//    }
}
