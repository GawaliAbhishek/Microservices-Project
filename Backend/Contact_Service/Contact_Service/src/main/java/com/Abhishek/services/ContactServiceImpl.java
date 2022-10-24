package com.Abhishek.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Abhishek.Repo.ContactDataRepo;
import com.Abhishek.entity.Contact;

@Service
public class ContactServiceImpl implements ContactService {
	@Autowired
	private ContactDataRepo repo;
	
//	List<Contact> list =List.of(
//			new Contact(1, "abhishekgawali@gmail.com", "Abhishek Gawali", 1001),
//			new Contact(2, "nishikant@gmail.com", "Nishikant Charls", 1001),
//			new Contact(3, "kamlaharish@gmail.com", "Kamla Hairis", 1002),
//			new Contact(4, "victoriyaBakingham@gmail.com", "Victoriya", 1002),
//			new Contact(5, "nishikant@gmail.com", "Nishikant Charls", 1003),
//			new Contact(6, "Johnmarshal@gmail.com", "John Marshel", 1004),
//			new Contact(7, "lorddulhussi@gmail.com", "JJ Dulhussi", 1004),
//			new Contact(8, "lorddulhussi@gmail.com", "JJ Dulhussi", 1005),
//			new Contact(9, "kamlaharish@gmail.com", "Kamla Hairis", 1006),
//			new Contact(10,"abhishekgawali@gmail.com", "Abhishek Gawali", 1007),
//			new Contact(11,  "victoriyaBakingham@gmail.com", "Victoriya", 1007)
//			);

	@Override
	public List<Contact> getContact(int userid) {
		// TODO Auto-generated method stub
		
		List<Contact> list=repo.findAll();
		
		return list.stream().filter(contact -> contact.getUserid()==userid).collect(Collectors.toList());
	}

	@Override
	public Contact saveContact(Contact toadd) {
		// TODO Auto-generated method stub
		int id=repo.findlastrow().getContid();
		toadd.setContid(id+1);
		
		return repo.save(toadd);
	}

	@Override
	public List<Contact> getContactbyname(String Contactname, int userid) {
		// TODO Auto-generated method stub
		return repo.findByContactnameAndUserid(Contactname, userid);
	}

	@Override
	public List<Contact> getContactbyemail(String email, int userid) {
		// TODO Auto-generated method stub
		return repo.findByEmailAndUserid(email, userid);
	}

	@Override
	public List<Contact> getContactbyphone(long phone, int userid) {
		// TODO Auto-generated method stub
		return repo.findByPhoneAndUserid(phone, userid);
	}

	@Override
	public Contact getContactbyid(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Contact deleteContact(int contactid) {
		// TODO Auto-generated method stub
		Contact todelete=repo.getReferenceById(contactid);
		repo.deleteById(contactid);
		return todelete;
		
	}
	
	
	

}
