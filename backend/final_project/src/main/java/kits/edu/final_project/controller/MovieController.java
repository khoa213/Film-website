package kits.edu.final_project.controller;

import kits.edu.final_project.entity.MovieEntity;
import kits.edu.final_project.payload.response.BaseResponse;
import kits.edu.final_project.payload.response.MovieResponse;
import kits.edu.final_project.service.imp.GenreMovieServiceImp;
import kits.edu.final_project.service.imp.GenreServiceImp;
import kits.edu.final_project.service.imp.MovieServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("movies")
@CrossOrigin("*")
public class MovieController {
    @Autowired
    MovieServiceImp movieServiceImp;

    @Autowired
    GenreServiceImp genreServiceImp;

    @Autowired
    GenreMovieServiceImp genreMovieServiceImp;

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity<?> getMovies() {
        try {
            List<MovieResponse> movieEntityList = movieServiceImp.getMovies();
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setStatusCode(HttpStatus.OK.value());
            newBaseResponse.setData(movieEntityList);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.OK);
        } catch (Exception ex) {
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());
            newBaseResponse.setMessage("BAD_REQUEST: " + ex);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/limit")
    @ResponseBody
    public ResponseEntity<?> getMoviesLimit(@RequestParam int limit) {
        try {
            List<MovieResponse> movieEntityList = movieServiceImp.getMoviesLimit(limit);
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setData(movieEntityList);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.OK);
        } catch (Exception ex) {
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());
            newBaseResponse.setMessage("BAD_REQUEST: " + ex);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/search")
    @ResponseBody
    public ResponseEntity<?> getMoviesByNameAndActor(@RequestParam String name, @RequestParam String actor ) {
        try {
            List<MovieResponse> movieEntityList = movieServiceImp.getMoviesByNameAndActor(name, actor);
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setData(movieEntityList);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.OK);
        } catch (Exception ex) {
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());
            newBaseResponse.setMessage("BAD_REQUEST: " + ex);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.BAD_REQUEST);
        }

    }

    @PostMapping("/create")
    @ResponseBody
    public ResponseEntity<?> createMovie(@RequestBody MovieResponse objData) {
        try {
            MovieEntity movieEntity =  objData.mapMovieToEntity(objData);
            Set<Integer> genreIdList = objData.getGenreId();
            movieServiceImp.createMovie(movieEntity);
            genreMovieServiceImp.createGenreMovie(genreIdList, movieEntity.getId());
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setData(objData);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.OK);
        } catch (Exception ex) {
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());
            newBaseResponse.setMessage("BAD_REQUEST: " + ex);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.BAD_REQUEST);
        }
    }
}
