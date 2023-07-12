package kits.edu.final_project.service.imp;

import kits.edu.final_project.entity.OrderEntity;
import kits.edu.final_project.payload.response.OrderResponse;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface OrderServiceImp {
    List<OrderResponse> getOrders();
    OrderEntity addOrder(OrderEntity orderEntity);
    OrderEntity updateOrderById(OrderEntity orderEntity,int id);
    List<OrderEntity> deleteOrderById(int id);
}
