package kits.edu.final_project.controller;

import kits.edu.final_project.entity.MovieEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
	@PostMapping("/add")
	@ResponseBody
	public ResponseEntity<?> addNewMovie (@RequestBody MovieEntity movieEntity) {
		BaseResponse response = new BaseResponse();
		response.setStatusCode(200);
		response.setData(movieServiceImp.addNewMovie(movieEntity));
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	@PutMapping("/{id}")
	public ResponseEntity<?> replaceMovieById(@RequestBody MovieEntity movieEntity,@PathVariable("id") int id) {
		BaseResponse response = new BaseResponse();
		response.setStatusCode(200);
		response.setData(movieServiceImp.replaceMovieById(movieEntity,id));
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteMovieById (@PathVariable("id") int id) {
		BaseResponse response = new BaseResponse();
		response.setStatusCode(200);
		response.setData(movieServiceImp.deleteMovieById(id));
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
}
