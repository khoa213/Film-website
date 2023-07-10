package kits.edu.final_project.service.imp;

import java.util.List;

import kits.edu.final_project.entity.MovieEntity;
import org.springframework.stereotype.Service;
import kits.edu.final_project.payload.response.MovieResponse;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

@Service
public interface MovieServiceImp {
    List<MovieResponse> getMovieList();
    MovieEntity addNewMovie(@RequestBody MovieEntity movieEntity);
    MovieEntity replaceMovieById(@RequestBody MovieEntity movieEntity, @PathVariable("id") int id);
    List<MovieEntity> deleteMovieById(@PathVariable("id") int id);
}
