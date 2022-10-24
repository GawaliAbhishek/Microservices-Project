package com.Abhishek.repo;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.Abhishek.Enitity.User;

public interface UserDataRepo extends MongoRepository<User, Integer> {

}
