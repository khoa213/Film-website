package kits.edu.final_project.service;

import kits.edu.final_project.payload.response.GenreResponse;
import kits.edu.final_project.payload.response.ReviewResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface GenreService {
    List<GenreResponse> getGenres();
}
