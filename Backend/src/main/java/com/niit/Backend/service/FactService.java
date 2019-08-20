package com.niit.Backend.service;

import java.util.List;

import com.niit.Backend.model.Fact;

public interface FactService {
	
	public List<Fact> getFactList();
	public Fact getFact(int factId);
	public boolean addFact(Fact fact);
	public boolean updateFact(Fact fact);
	public boolean deleteFact(Fact fact);

}
