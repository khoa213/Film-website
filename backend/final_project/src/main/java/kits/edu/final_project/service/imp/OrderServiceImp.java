package kits.edu.final_project.service.imp;

import kits.edu.final_project.entity.OrderEntity;
import kits.edu.final_project.payload.response.OrderResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
@Service
public interface OrderServiceImp {
    List<OrderResponse> getOrders();
    OrderEntity addOrder( OrderEntity orderEntity);
    OrderEntity updateOrderById(OrderEntity orderEntity,int id);
    boolean deleteOrderById(@PathVariable int id);
}
