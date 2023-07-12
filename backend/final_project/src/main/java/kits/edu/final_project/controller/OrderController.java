package kits.edu.final_project.controller;

import kits.edu.final_project.entity.OrderEntity;
import kits.edu.final_project.payload.response.BaseResponse;
import kits.edu.final_project.service.imp.OrderServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderController {
    @Autowired
    OrderServiceImp orderServiceImp;

    @GetMapping("")
    public ResponseEntity<?> getOrders() {
        BaseResponse response=new BaseResponse();
        response.setStatusCode(200);
        response.setData(orderServiceImp.getOrders());
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(value = "/add")
    @ResponseBody

    public ResponseEntity<?> addOrder(@RequestBody OrderEntity orderEntity) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(201);
        response.setData(orderServiceImp.addOrder(orderEntity));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<?> updateOrderById(@RequestBody OrderEntity orderEntity,@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(orderServiceImp.updateOrderById(orderEntity,id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteOrderById(@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(orderServiceImp.deleteOrderById(id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
