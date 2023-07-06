//package kits.edu.final_project.service;
//
//
//import kits.edu.final_project.entity.MovieEntity;
//import kits.edu.final_project.payload.response.ProductResponse;
//import kits.edu.final_project.repository.MovieRepository;
//
//import kits.edu.final_project.service.imp.MovieServiceImp;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.ArrayList;
//import java.util.List;
//
//@Service
//public class MovieService implements MovieServiceImp {
//    @Autowired
//    private MovieRepository productRepository;
//    @Override
//    public List<ProductResponse> getProductByCategory(int id) {
//      List<MovieEntity> list=productRepository.findByGenreId(id);
//      List<ProductResponse> responseList =new ArrayList<>();
//        for (MovieEntity data:list
//             ) {
//            ProductResponse productResponse=new ProductResponse();
//            productResponse.setId(data.getId());
//            productResponse.setTitle(data.getTitle());
//
//            productResponse.setPrice(data.getPrice());
//
//
//            responseList.add(productResponse);
//        }
//
//        return responseList;
//    }
//}
