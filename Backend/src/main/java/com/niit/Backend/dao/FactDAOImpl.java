package com.niit.Backend.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.niit.Backend.model.Fact;

@Repository("factDAO")
@Transactional
public class FactDAOImpl implements FactDAO{
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<Fact> getFactList() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from Fact").list();

	}

	@Override
	public Fact getFact(int factId) {
		// TODO Auto-generated method stub
		return (Fact)sessionFactory.getCurrentSession().createQuery("from Fact where factId="+factId).uniqueResult();
	}

	@Override
	public boolean addFact(Fact fact) {
		// TODO Auto-generated method stub
		try
		{
			sessionFactory.getCurrentSession().save(fact);
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}

	@Override
	public boolean updateFact(Fact fact) {
		// TODO Auto-generated method stub
		try
		{
			sessionFactory.getCurrentSession().update(fact);
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}

	@Override
	public boolean deleteFact(Fact fact) {
		// TODO Auto-generated method stub
		try
		{
			sessionFactory.getCurrentSession().delete(fact);
			return true;
		}
		catch(Exception e) {
			return false;
		}
	}

}
