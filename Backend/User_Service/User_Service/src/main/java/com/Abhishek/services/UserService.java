package com.Abhishek.services;

import com.Abhishek.Enitity.Data;
import com.Abhishek.Enitity.User;

public interface UserService {

	public User getUser(int userid);
	public Data getUserData(int userid);
}
