package com.Abhishek.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.Abhishek.Enitity.Contact;
import com.Abhishek.Enitity.Data;
import com.Abhishek.Enitity.Logininfo;
import com.Abhishek.Enitity.User;
import com.Abhishek.repo.UserDataRepo;

@Service
public class UserServiceImpl implements UserService {
	@Autowired
	UserDataRepo repo;
	
	@Autowired
	RestTemplate restTemp;
//	List<User> list=List.of(
//			new User(1001, "Jerry haukins", 18, "student"),
//			new User(1002, "Tom Madison", 28, "Fruit Seller"),
//			new User(1003, "Oggy Dust", 8, "student"),
//			new User(1004, "Shriniwas Kaalipantu", 45, "Scientist"),
//			new User(1005, "Jackson Marry",37, "jobber"),
//			new User(1006, "Krishna Yadav", 28, "student"),
//			new User(1007, "Abu muzafer", 68, "senior cityzen")
//			);

	
	@Override
	public User getUser(int userid) {
		// TODO Auto-generated method stub
		List<User>list=repo.findAll();
	    return list.stream().filter(user ->user.getUserid()==userid).findAny().orElse(null);
		
	}
	@Override
	public Data getUserData(int userid) {
		@SuppressWarnings("unchecked")
		List<Contact> list=restTemp.getForObject("http://contact-service/contacts/"+userid, List.class);
		Logininfo userData=restTemp.getForObject("http://login-service/login/userdata/"+userid, Logininfo.class);
		
		Data data=new Data();
		data.setContacts(list.toArray());
		data.setEmail(userData.getEmail());
		data.setName(userData.getName());
		data.setPhone(userData.getPhone());
		data.setProfession(userData.getProfession());
		data.setUsername(userData.getUsername());
		return data;
	}
	
	

}
