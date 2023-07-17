package kits.edu.final_project.controller;

import kits.edu.final_project.entity.ActorEntity;
import kits.edu.final_project.payload.response.BaseResponse;
import kits.edu.final_project.service.imp.ActorServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/actor")
@CrossOrigin("*")
public class ActorController {
    @Autowired
    private ActorServiceImp actorServiceImp;

    @GetMapping("")
    public ResponseEntity<?> getActor() {
        BaseResponse response=new BaseResponse();
        response.setStatusCode(200);
        response.setData(actorServiceImp.getActor());
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }
    @PostMapping("/add")
    @ResponseBody
    public ResponseEntity<?> addActor(@RequestBody ActorEntity actorEntity) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(201);
        response.setData(actorServiceImp.addActor(actorEntity));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    @PutMapping("/update/{id}")
    public ResponseEntity<?> replaceActorById(@RequestBody ActorEntity actorEntity,@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(actorServiceImp.replaceActorById(actorEntity,id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteActorById(@PathVariable("id") int id) {
        BaseResponse response = new BaseResponse();
        response.setStatusCode(200);
        response.setData(actorServiceImp.deleteActorById(id));
        return new ResponseEntity<>(response,HttpStatus.OK);
    }
}
