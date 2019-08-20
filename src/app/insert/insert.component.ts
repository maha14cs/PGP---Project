import { Component, OnInit } from '@angular/core';
import {Fact} from '../fact';
import {DbserviceService} from '../dbservice.service';
@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  facts:Fact[];

  constructor(public dbservice:DbserviceService) { }

  ngOnInit() {
  }
  add(factId:number,fname:string,email:string,phone:string): void {
    console.log(factId);
    factId=factId;
     fname=fname;
     email=email;
     phone=phone;
   
    
     this.dbservice.addFact({factId,fname,email,phone} as Fact)
       .subscribe(fact => {
         //this.facts.push(fact);
         console.log('inside add');
        });
       
   }

}
