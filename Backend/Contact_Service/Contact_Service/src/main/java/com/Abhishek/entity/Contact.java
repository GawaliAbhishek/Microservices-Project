package com.Abhishek.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.hibernate.annotations.Proxy;

@Entity
@Proxy(lazy = false)
public class Contact {
	
	@Id
	private int contid;
	private String email;
	private String contactname;
	private long phone;
	public Long getPhone() {
		return phone;
	}
	public void setPhone(Long phone) {
		this.phone = phone;
	}
	private int userid;
	public int getContid() {
		return contid;
	}
	public void setContid(int contid) {
		this.contid = contid;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContactname() {
		return contactname;
	}
	public void setContactname(String contactname) {
		this.contactname = contactname;
	}
	public Contact() {
		super();
	}
	public Contact(int contid, String email, String contactname, int userid) {
		super();
		this.contid = contid;
		this.email = email;
		this.contactname = contactname;
		this.userid = userid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	

}
