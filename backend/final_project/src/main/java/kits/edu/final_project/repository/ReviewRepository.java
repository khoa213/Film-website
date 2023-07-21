package kits.edu.final_project.repository;

import kits.edu.final_project.entity.ReviewEntity;
import kits.edu.final_project.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewRepository extends JpaRepository<ReviewEntity,Integer> {

}
