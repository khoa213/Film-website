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

@Service
public class MovieService implements MovieServiceImp {
    @Autowired
    private MovieRepository movieRepository;

	@Override
	public List<MovieResponse> getMovieList() {
		// TODO Auto-generated method stub
		List<MovieEntity> list=movieRepository.findAll();
        List<MovieResponse> responseList=new ArrayList<>();
        for (MovieEntity m : list) {
			MovieResponse movieResponse = new MovieResponse();
			movieResponse.setId(m.getId());
			movieResponse.setTitle(m.getTitle());
			movieResponse.setDesc(m.getDesc());
			movieResponse.setDuration(m.getDuration());
			movieResponse.setReleaseDate(m.getReleaseDate());
			movieResponse.setPrice(m.getPrice());
		}
		return responseList;
	}
}
