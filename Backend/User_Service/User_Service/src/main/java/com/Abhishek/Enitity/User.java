package com.Abhishek.Enitity;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "UserData")
public class User {

	private int userid;
	private String username;
	public User() {
		super();
	}
	public User(int userid, String username, int age, String work) {
		super();
		this.userid = userid;
		this.username = username;
		this.age = age;
		this.work = work;
	}
	private int age;
	private String work;
	private Object Contacts[];
	public Object[] getContacts() {
		return Contacts;
	}
	public void setContacts(Object[] objects) {
		Contacts = objects;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getWork() {
		return work;
	}
	public void setWork(String work) {
		this.work = work;
	}
	
	
}
