package com.niit.middleware.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.niit.Backend.model.Fact;
import com.niit.Backend.service.FactService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/fact")
public class FactController {
	
	@Autowired
	private FactService factService;
	
	@GetMapping
	public List<Fact> listAllFact()
	{
		List<Fact> fact = factService.getFactList();
		return fact;
	}
	
	@PostMapping
	public ResponseEntity<Void> addFact(@RequestBody Fact fact)
	{
		if(factService.getFact(fact.getFactId())==null)
		{
			factService.addFact(fact);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		}
		else
		{
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}
	
	@PutMapping
	public ResponseEntity<Void> updateFact(@RequestBody Fact fact)
	{
		if(factService.getFact(fact.getFactId())!=null)
		{
			factService.updateFact(fact);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}
	
	@DeleteMapping
	public ResponseEntity<Void> deleteFact(@RequestBody Fact fact)
	{
		if(factService.getFact(fact.getFactId())!=null)
		{
			factService.deleteFact(fact);
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		else
		{
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		}
	}
	
	@GetMapping("/{factId}")
	public ResponseEntity<Fact> getById(@PathVariable("factId") int factId)
	{
		Fact fact = null;
		return new ResponseEntity<Fact>(factService.getFact(factId),HttpStatus.OK);
	}
	

}
