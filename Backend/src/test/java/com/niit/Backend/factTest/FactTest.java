package com.niit.Backend.factTest;

import static org.junit.Assert.*;

import java.util.List;

import org.junit.BeforeClass;
import org.junit.Ignore;
import org.junit.Test;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.Backend.dao.FactDAO;
import com.niit.Backend.model.Fact;

public class FactTest {

	static FactDAO factdao;
	
	@BeforeClass
	public static void initialize() {
		
		AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext();
		context.scan("com.niit");
		context.refresh();
		factdao = (FactDAO)context.getBean("factDAO");
		
	}
	
	@Ignore
	@Test
	public void addFacttest() {
		
		Fact fact = new Fact();
		fact.setFname("lakshmi");
		fact.setEmail("lakshmi@niit.com");
		fact.setPhone("9874563211");
		assertTrue("Problem in adding faculty:",factdao.addFact(fact));
	}
	
	
	@Test
	public void listFact()
	{
		List<Fact> listfact = factdao.getFactList();
		assertNotNull("problem in listing faculty:",factdao.getFactList());
		
		for(Fact fact:listfact)
		{
			System.out.println(fact.getFactId()+":::"+fact.getFname()+":::"+fact.getEmail()+":::"+fact.getPhone());
		}
	}
	
	@Ignore
	@Test
	public void updateFact() {
		
		Fact fact = factdao.getFact(37);
		fact.setFname("mahalakshmi");
		assertTrue("problem in updating faculty:",factdao.updateFact(fact));
		
	}
	
	//@Ignore
	@Test
	public void deleteFact()
	{
		Fact fact = factdao.getFact(38);
		assertTrue("problem in deleting faculty:",factdao.deleteFact(fact));
		}

}
