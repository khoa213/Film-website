package kits.edu.final_project.repository;

import kits.edu.final_project.entity.OrderEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<OrderEntity,Integer> {
    @Query(value = "SELECT * FROM orders WHERE user_id = :idUser", nativeQuery = true)
    public OrderEntity findByOrderType(int idUser);
}
