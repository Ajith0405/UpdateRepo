package com.demo.app.services;

import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.app.configuration.JwtRequestFilter;
import com.demo.app.model.Cart;
import com.demo.app.model.OrderDetail;
import com.demo.app.model.OrderInput;
import com.demo.app.model.OrderProductQuantity;
import com.demo.app.model.Product;
import com.demo.app.model.User;
import com.demo.app.repository.CartDao;
import com.demo.app.repository.OrderDetailDao;
import com.demo.app.repository.ProductDao;
import com.demo.app.repository.UserDao;

@Service
public class OrderDetailService {
	
	private static final String ORDER_PLACED = "Placed";
	
	@Autowired
	private OrderDetailDao orderDetailDao;
	
	@Autowired
	private ProductDao productDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private CartDao cartDao;

	public void placeOrder(OrderInput orderInput, boolean isSingleProductCheckout) {
	   	List<OrderProductQuantity> productQuantityList = orderInput.getOrderProductQuantityList();
	   	
	   	for(OrderProductQuantity O: productQuantityList) {
	   		Product product = productDao.findById(O.getProductId()).get();
	   		
	   		String currentUser = JwtRequestFilter.CURRENT_USER;
	   		User user = userDao.findById(currentUser).get();
	   		
	   		OrderDetail orderDetail = new OrderDetail(
	   				orderInput.getFullName(),
	   				orderInput.getFullAddress(),
	   				orderInput.getContactNumber(),
	   				orderInput.getAlternateContactNumber(),
	   				 ORDER_PLACED,product.getProductDiscountedPrice()* O.getQuantity(),
	   				product,
	   				user
	   				);
	   		
	   		//To empty the cart after place order
	   		if(!isSingleProductCheckout) {
	   			List<Cart> carts =  cartDao.findByUser(user);
	   			carts.stream().forEach(x-> cartDao.deleteById(x.getCartId()));
	   					
	   		}
	   		
	   		orderDetailDao.save(orderDetail);
	   	}
	}
}
