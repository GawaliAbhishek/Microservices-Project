package com.Abhishek.controller;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.Abhishek.Enitity.Contact;
import com.Abhishek.Enitity.Data;
import com.Abhishek.Enitity.User;
import com.Abhishek.services.UserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000/")
public class UserController {

	@Autowired
	private UserService service;

	@Autowired
	private RestTemplate restTemplate;
	
	
	@GetMapping("/{userid}")
	public User findUser(@PathVariable int userid) {
		User user= service.getUser(userid);
		
	
		// http://localhost:8003/contacts/1003	
		@SuppressWarnings("unchecked")
		List<Contact> list=restTemplate.getForObject("http://contact-service/contacts/"+userid, List.class);
		user.setContacts(list.toArray());
		
		return user;
	}
	
	@GetMapping("/getuserdata/{userid}")
	public Data getUserData(@PathVariable int userid) {
	  System.out.println("Here");
		return service.getUserData(userid);
	}
}
