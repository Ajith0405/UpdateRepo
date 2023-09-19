package com.demo.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.app.model.Role;
import com.demo.app.repository.RoleDao;

@Service
public class RoleService {
	
	@Autowired
	private RoleDao roleDao;
	
	
	public Role createNewRole(Role role) {
		return roleDao.save(role);
	}
}
