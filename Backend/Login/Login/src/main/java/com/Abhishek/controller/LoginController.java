package com.Abhishek.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Abhishek.Services.LoginServiceImpl;
import com.Abhishek.entity.Logininfo;
import com.Abhishek.entity.Pair;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

	@Autowired
	private LoginServiceImpl service;
	
	@GetMapping("/{username}/{password}")
	public Pair login(@PathVariable String username, @PathVariable String password) {
		return service.Login(username, password);
	}
	
	@PostMapping("/signup")
	public Logininfo signup(@RequestBody Logininfo info) {
		return service.Signup(info);
	}
	
	@GetMapping("/userdata/{id}")
	public Logininfo test(@PathVariable int id) {
		return service.test(id);
	}
	
}
