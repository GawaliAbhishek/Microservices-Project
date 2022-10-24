package com.Abhishek.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Abhishek.Repo.LoginRepo;
import com.Abhishek.entity.Logininfo;
import com.Abhishek.entity.Pair;

@Service
public class LoginServiceImpl implements LoginServices {
	
	@Autowired
	private LoginRepo repo;

	@Override
	public Pair Login(String username, String password) {
		// TODO Auto-generated method stub
		Logininfo data = repo.findByusername(username);
		boolean login =data.getUsername().equals(username) && data.getPassword().equals(password);
		Pair pair=new Pair(data.getId(),login);
		return pair;
	}

	@Override
	public Logininfo Signup(Logininfo info) {
		// TODO Auto-generated method stub
		Logininfo lastrow=repo.findlastrow();
		info.setId(lastrow.getId()+1);
		return repo.save(info);
	}
	
	public Logininfo test(int id) {
		return repo.getReferenceById(id);
	}

	

}


