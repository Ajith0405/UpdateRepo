package com.demo.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.app.model.Product;



@Repository
public interface ProductDao extends CrudRepository<Product, Integer>
{
	
}
