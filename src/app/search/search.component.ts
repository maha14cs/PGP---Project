import { Component, OnInit } from '@angular/core';
import { Fact } from '../fact';
import { DbserviceService } from '../dbservice.service';
import { element } from 'protractor';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  facts:Fact;
  constructor(public dbservice:DbserviceService) { }

  ngOnInit() {
    this.getFactById();
  }
  getFactById():void{
    this.dbservice.getAllFact().subscribe(fact  =>this.facts=fact);

  }
  delete(fact:Fact){
    this.dbservice.deleteFact(fact).subscribe(res=>this.facts);

}
}