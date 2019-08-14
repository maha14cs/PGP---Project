package com.niit.Backend.dao;

import java.util.List;

import com.niit.Backend.model.Fact;

public interface FactDAO {
	
	public List<Fact> getFactList();
	public Fact getFact(int factId);
	public boolean addFact(Fact fact);
	public boolean updateFact(Fact fact);
	public boolean deleteFact(Fact fact);
	
}
