package kits.edu.final_project.service.imp;
import kits.edu.final_project.entity.MovieEntity;
import kits.edu.final_project.payload.response.MovieResponse;
import kits.edu.final_project.repository.MovieRepository;
import kits.edu.final_project.service.MovieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;

@Service
public class MovieServiceImp implements MovieService {
    @Autowired
    JdbcTemplate jdbcTemplate;
    @Autowired
    private MovieRepository movieRepository;
    public List<MovieResponse> getMovies() {
        List<MovieEntity> list = movieRepository.findAll();
        MovieResponse movieResponse = new MovieResponse();
        List<MovieResponse> responseList = new ArrayList<>();
        for (MovieEntity movie : list) {
            responseList.add(movieResponse.mapMovieToResponse(movie));
        }
        return responseList;
    }

    @Transactional
    public void createMovie(MovieEntity movieEntity) {
        movieRepository.save(movieEntity);
    }

    public List<MovieResponse> getMoviesLimit(int limit) {
        List<MovieEntity> list = movieRepository.getMoviesLimit(limit);
        MovieResponse movieResponse = new MovieResponse();
        List<MovieResponse> responseList = new ArrayList<>();
        for (MovieEntity movie : list) {
            responseList.add(movieResponse.mapMovieToResponse(movie));
        }
        return responseList;
    }
    public List<MovieResponse> getMoviesByNameAndActor(String name, String actor) {
        String join = "JOIN movie_actor ma ON ma.movie_id = m.movie_id " +
                        "JOIN actor a ON ma.actor_id = a.actor_id WHERE ";
        String sql = "SELECT * FROM movies m ";

        if (actor != "") {
            sql += join;
        } else if (name != "") {
            sql += "WHERE ";
        }
        if (name != "") {
            sql += " AND title LIKE '%" + name + "%'";
        }
        if (actor != "") {
            sql += " AND a.name LIKE '%" + actor + "%'";
        }
        sql += " Order BY release_date DESC";
        sql = sql.replaceFirst("AND","");
        System.out.println("SQL: " + sql);
        List<Map<String, Object>> rawMovies= jdbcTemplate.queryForList(sql);

        MovieResponse movieResponse = new MovieResponse();
        List<MovieResponse> responseList = movieResponse.mapMovieToResponse(rawMovies);
        return responseList;
    }
}
