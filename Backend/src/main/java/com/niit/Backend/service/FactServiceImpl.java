package com.niit.Backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.niit.Backend.dao.FactDAO;
import com.niit.Backend.model.Fact;

@Repository("factService")
@Transactional
@Service
public class FactServiceImpl implements FactService{

	@Autowired
	private FactDAO factDAO;
	
	@Override
	public List<Fact> getFactList() {
		// TODO Auto-generated method stub
		return factDAO.getFactList();
	}

	@Override
	public Fact getFact(int factId) {
		// TODO Auto-generated method stub
		return factDAO.getFact(factId);
	}

	@Override
	public boolean addFact(Fact fact) {
		// TODO Auto-generated method stub
		
		factDAO.addFact(fact);
		return true;
	}

	@Override
	public boolean updateFact(Fact fact) {
		// TODO Auto-generated method stub
		factDAO.updateFact(fact);
		return true;
	}

	@Override
	public boolean deleteFact(Fact fact) {
		// TODO Auto-generated method stub
		factDAO.deleteFact(fact);
		return true;
	}

}
