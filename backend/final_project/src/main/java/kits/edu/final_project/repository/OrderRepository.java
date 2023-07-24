package kits.edu.final_project.repository;

import kits.edu.final_project.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.PathVariable;

import java.security.Principal;
import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity,Integer> {


    @Query(value = "select * from users u join orders o on u.user_id = o.user_id where username = :username",nativeQuery = true)
    List<OrderEntity> getPackagebyId( String username);
}
