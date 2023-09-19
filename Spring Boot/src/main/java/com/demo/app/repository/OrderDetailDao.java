package com.demo.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.app.model.OrderDetail;

@Repository
public interface OrderDetailDao extends CrudRepository<OrderDetail, Integer> {

}
