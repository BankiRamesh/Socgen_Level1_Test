package com.sg.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sg.model.Coffee;
import com.sg.model.NewUserData;
import com.sg.repositories.NewUserRepo;
import com.sg.repositories.OrderRepositories;

@RestController
@RequestMapping("/user")
public class LoginController {
	
	@Autowired
	NewUserRepo newUserRepo;
	@Autowired
	OrderRepositories orderRepositories;
	
	@RequestMapping(value = "/id", method = RequestMethod.POST)
	public NewUserData newUserData(@RequestBody NewUserData newUserData) {
		List<NewUserData> storedList=null;
		try {
		newUserRepo.save(newUserData);
		//storedList=newUserRepo.findAll();
		return newUserData;
		}
		catch(Exception e){
		 return null;
		}
	}
	
	@RequestMapping(value = "/login")
	public Boolean loginuser(@RequestParam("userId") String userId, @RequestParam("password") String password) {
		List<NewUserData> storedList=null;
		Boolean userExit=false;
		try {
			storedList=newUserRepo.findByUserIdAndPassword(userId,password);
			if(storedList.size()>0) {
				userExit=true;
			}
			return userExit;
		}
		catch(Exception e){
		 return userExit;
		}
	}
	
	@RequestMapping(value = "/order", method = RequestMethod.POST)
	public Coffee newUserData(@RequestBody Coffee coffee) {
		List<Coffee> orderList=null;
		try {
		orderRepositories.save(coffee);
		//orderList=orderRepositories.findAll();
		return coffee;
		}
		catch(Exception e){
		 return null;
		}
	}
	@RequestMapping(value = "/getorderlist")
	public List<Coffee> getOrdersList(@RequestParam("loginuser") String loginuser) {
		List<Coffee> orderList=null;
		try {
		orderList=orderRepositories.findByloginuser(loginuser);
		return orderList;
		}
		catch(Exception e){
		 return null;
		}
	}
	

}

