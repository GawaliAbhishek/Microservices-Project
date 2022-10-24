package com.Abhishek.Enitity;

public class Data {
	private int id;
	private String name;
	private String email;
	private String phone;
	private String profession;
	private String username;
	private Object Contacts[];
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public Object[] getContacts() {
		return Contacts;
	}
	public void setContacts(Object[] contacts) {
		Contacts = contacts;
	}
}
