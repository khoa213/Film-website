package kits.edu.final_project.repository;

import kits.edu.final_project.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity,Integer> {
    @Query(value = "select * from orders o where o.user_id = :userId",nativeQuery = true)
    List<OrderEntity> getPackagebyId(@PathVariable int userId);
}
