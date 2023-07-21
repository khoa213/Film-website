package kits.edu.final_project.service.imp;

import kits.edu.final_project.entity.GenreEntity;
import kits.edu.final_project.entity.GenreMovie;
import kits.edu.final_project.payload.response.GenreResponse;
import kits.edu.final_project.repository.GenreRepository;
import kits.edu.final_project.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class GenreServiceImp implements GenreService {
    @Autowired
    GenreRepository genreRepository;
    public List<GenreResponse> getGenres() {
        List<Map<String, Object>> genreList = genreRepository.getGenre();
        GenreResponse genreResponse = new GenreResponse();
        List<GenreResponse> genreResponseList = new ArrayList<>();
        for (Map genreMap: genreList) {
            genreResponseList.add(genreResponse.mapGenreToResponse(genreMap));
        }
        return genreResponseList;
    }
}
