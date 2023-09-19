package com.demo.app.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.app.model.Cart;
import com.demo.app.model.User;

@Repository
public interface CartDao extends CrudRepository<Cart, Integer> {
		public List<Cart>findByUser(User user);
}
