package com.demo.app.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.demo.app.model.Role;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {

}
