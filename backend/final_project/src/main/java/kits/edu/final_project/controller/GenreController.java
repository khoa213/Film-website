package kits.edu.final_project.controller;

import kits.edu.final_project.payload.response.BaseResponse;
import kits.edu.final_project.payload.response.GenreResponse;
import kits.edu.final_project.service.imp.GenreServiceImp;
import org.apache.catalina.filters.ExpiresFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("genres")
@CrossOrigin("*")
public class GenreController {
    @Autowired
    GenreServiceImp genreServiceImp;

    @GetMapping("/all")
    @ResponseBody
    public ResponseEntity<?> getGenres() {
        try {
            List<GenreResponse> genreResponseList = genreServiceImp.getGenres();
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setData(genreResponseList);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.OK);
        } catch (Exception ex) {
            BaseResponse newBaseResponse = new BaseResponse();
            newBaseResponse.setStatusCode(HttpStatus.BAD_REQUEST.value());
            newBaseResponse.setMessage("BAD_REQUEST: " + ex);
            return new ResponseEntity<>(newBaseResponse, HttpStatus.BAD_REQUEST);
        }
    }
}
