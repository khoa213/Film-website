package kits.edu.final_project;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication()
public class FinalProjectApplication {

	public static void main(String[] args) {
		var ctx = SpringApplication.run(FinalProjectApplication.class, args);


		var properties = ctx.getBean(DefaultProperties.class);

		System.out.println(properties);
	}

}
