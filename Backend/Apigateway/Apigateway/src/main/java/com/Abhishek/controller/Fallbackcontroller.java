package com.Abhishek.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class Fallbackcontroller {

	@GetMapping("/userfallback")
	public String userFallBackMethod() {
		return "User Service is Down Today ...";
	}
	
	@GetMapping("/contactfallback")
	public String contactfallBackMethod() {
		return "Contact Service is Down Today ...";
	}
	
	@GetMapping("/loginfallback")
	public String loginfallBackMethod() {
		return "Login Service is Down today";
	}
}
