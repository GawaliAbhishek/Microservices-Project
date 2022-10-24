package com.Abhishek.services;

import java.util.List;

import com.Abhishek.entity.Contact;

public interface ContactService {

	public List<Contact> getContact(int userid);
	public Contact saveContact(Contact toadd);
	public List<Contact> getContactbyname(String Contactname,int userid);
	public List<Contact> getContactbyemail(String email,int userid);
	public List<Contact> getContactbyphone(long phone,int userid);
	public Contact getContactbyid(int id);
	public Contact deleteContact(int contactid);
}
