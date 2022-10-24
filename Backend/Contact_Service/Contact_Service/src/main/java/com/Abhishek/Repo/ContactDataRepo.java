package com.Abhishek.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.Abhishek.entity.Contact;

public interface ContactDataRepo extends JpaRepository<Contact, Integer>{

	 @Query(value = "SELECT * FROM contact ORDER BY contid DESC LIMIT 1", nativeQuery = true)
	 public Contact findlastrow();
	 
	 public List<Contact> findByContactnameAndUserid(String contactname,int userid);
	 public List<Contact> findByEmailAndUserid(String email,int userid);
	 public List<Contact> findByPhoneAndUserid(long phone,int userid);
}
