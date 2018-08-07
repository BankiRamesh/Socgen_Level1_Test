package com.sg.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.sg.model.NewUserData;
import java.lang.String;

public interface NewUserRepo extends MongoRepository<NewUserData, String>{
	
	public List<NewUserData> findAll();
	public List<NewUserData> findByUserIdAndPassword(String userid,String passowrd);

}
