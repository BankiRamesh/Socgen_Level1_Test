package com.sg.model;

import java.util.List;

public class Coffee {
	private String loginuser;
	private String id;
	private List<CoffeeName> coffeeName;
	private String status;
	
	public String getLoginuser() {
		return loginuser;
	}
	public void setLoginuser(String loginuser) {
		this.loginuser = loginuser;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public List<CoffeeName> getCoffeeName() {
		return coffeeName;
	}
	public void setCoffeeName(List<CoffeeName> coffeeName) {
		this.coffeeName = coffeeName;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
}
