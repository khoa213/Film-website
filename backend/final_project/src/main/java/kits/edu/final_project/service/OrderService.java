package kits.edu.final_project.service;

import kits.edu.final_project.entity.OrderEntity;
import kits.edu.final_project.entity.UserEntity;
import kits.edu.final_project.exception.CustomException;
import kits.edu.final_project.payload.response.OrderResponse;
import kits.edu.final_project.repository.OrderRepository;
import kits.edu.final_project.service.imp.OrderServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import javax.transaction.Transactional;
import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@Service
public interface OrderService  {

    List<OrderResponse> getOrders();
    List<OrderEntity> payment( );
    OrderEntity addOrder( OrderEntity orderEntity);
    OrderEntity updateOrderById(OrderEntity orderEntity,int id);
    boolean deleteOrderById(@PathVariable int id);
}
