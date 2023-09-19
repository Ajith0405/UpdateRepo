package com.demo.app.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.app.model.Product;
import com.demo.app.repository.ProductDao;



@Service
public class ProductService {
	
	@Autowired
	private ProductDao productDao;
	
	public Product addNewProduct(Product pd) {
	   return productDao.save(pd);
	  
	}
	
	public List<Product>getAllProducts(){
		return	(List<Product>) productDao.findAll();
	}
	
	public void deleteProductDetails(Integer productId) {
		productDao.deleteById(productId);
	}
	
	public Product getProductDetailsById(Integer productId) {
	  return productDao.findById(productId).get();
	}
	
	public List<Product> getProductDetails(boolean isSingleProductCheckout, Integer productId) {
		if(isSingleProductCheckout) {
			List<Product>list = new ArrayList<>();
			Product product = productDao.findById(productId).get();
			
			list.add(product);
			return list;
		}else {
			
		}
		return new ArrayList<>();
	}
}

