package com.Abhishek.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.Abhishek.entity.Logininfo;

@Repository
public interface LoginRepo extends JpaRepository<Logininfo, Integer> {
	
	public Logininfo findByusername(String username);
	
	 @Query(value = "SELECT * FROM logininfo ORDER BY Id DESC LIMIT 1", nativeQuery = true)
	 public Logininfo findlastrow();
	
}
