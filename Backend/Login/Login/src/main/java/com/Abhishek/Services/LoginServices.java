package com.Abhishek.Services;

import com.Abhishek.entity.Logininfo;
import com.Abhishek.entity.Pair;

public interface LoginServices {
	
	public Pair Login(String username,String password);
	
	public Logininfo Signup(Logininfo info);
	

}
