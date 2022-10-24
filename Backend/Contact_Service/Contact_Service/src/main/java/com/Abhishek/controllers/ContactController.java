package com.Abhishek.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Abhishek.entity.Contact;
import com.Abhishek.services.ContactService;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactController {

	@Autowired
	private ContactService service;
	
	//communicating with Another ms
	@GetMapping("/{userid}")
	public List<Contact> findContactofUser(@PathVariable int userid){
		return service.getContact(userid);
	}
	
	
	//Create new Contact
	@PostMapping("/addcontact")
	public Contact addContact(@RequestBody Contact toadd) {
		return service.saveContact(toadd);
	}
	
	
	//Search by name
	@GetMapping("/searchbyname/{contactName}/{userid}")
	public List<Contact> getContactbyName(@PathVariable String contactName,@PathVariable int userid){
		return service.getContactbyname(contactName,userid);
	}
	
	//Serach by id
	@GetMapping("/searchbyid/{id}")
	public Contact getContactbyName(@PathVariable int id){
		return service.getContactbyid(id);
	}
       
	//Search by email
	@GetMapping("/searchbyemail/{email}/{userid}")
	public List<Contact> getContactbyEmail(@PathVariable String email,@PathVariable int userid){
		return service.getContactbyemail(email,userid);
	}
	
      
	//Search by phone
	@GetMapping("/searchbyphone/{phone}/{userid}")
	public List<Contact> getContactbyPhone(@PathVariable long phone,@PathVariable int userid){
		return service.getContactbyphone(phone,userid);
	}
	
	//Delete Contact
	@DeleteMapping("/delete/{id}")
	public Contact deleteContact(@PathVariable int id) {
		return service.deleteContact(id);
	}
}
