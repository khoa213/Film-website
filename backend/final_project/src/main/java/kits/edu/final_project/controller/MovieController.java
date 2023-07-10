package kits.edu.final_project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kits.edu.final_project.payload.response.BaseResponse;
import kits.edu.final_project.service.imp.MovieServiceImp;

@RestController
@RequestMapping("/movie")
public class MovieController {
	@Autowired
	private MovieServiceImp movieServiceImp;
	
	@GetMapping("")
	public ResponseEntity<?> getMovieList() {
		BaseResponse response = new BaseResponse();
		response.setStatusCode(200);
		response.setData(movieServiceImp.getMovieList());
		return  new ResponseEntity<>(response, HttpStatus.OK);
	}
}
