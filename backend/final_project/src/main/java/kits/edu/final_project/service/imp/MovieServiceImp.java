package kits.edu.final_project.service.imp;

import java.util.List;

import org.springframework.stereotype.Service;
import kits.edu.final_project.payload.response.MovieResponse;

@Service
public interface MovieServiceImp {
    List<MovieResponse> getMovieList();
}
