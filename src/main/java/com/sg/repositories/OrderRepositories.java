package com.sg.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sg.model.Coffee;

public interface OrderRepositories extends MongoRepository<Coffee, String> { 
	
	public List<Coffee> findByloginuser(String username);

}
