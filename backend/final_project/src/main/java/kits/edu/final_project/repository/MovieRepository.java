package kits.edu.final_project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import kits.edu.final_project.entity.MovieEntity;

@Repository
public interface MovieRepository extends JpaRepository<MovieEntity,Integer> {
    
}
