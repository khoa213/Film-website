package kits.edu.final_project.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kits.edu.final_project.entity.MovieEntity;
import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.payload.response.MovieResponse;
import kits.edu.final_project.payload.response.UserResponse;
import kits.edu.final_project.repository.MovieRepository;
import kits.edu.final_project.service.imp.MovieServiceImp;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;


public interface MovieService  {

//	List<MovieResponse> getMovieList();
//	MovieEntity addNewMovie(@RequestBody MovieEntity movieEntity);
//	MovieEntity replaceMovieById(@RequestBody MovieEntity movieEntity, @PathVariable("id") int id);
//	List<MovieEntity> deleteMovieById(@PathVariable("id") int id);
}
