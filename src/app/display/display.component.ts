import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { Fact } from '../fact';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  facts:Fact;
  fact:Fact[];
  

  constructor(public dbservice:DbserviceService) { }

  ngOnInit() {
    this.getFact();
  }
  getFact():void{
    this.dbservice.getAllFact().subscribe(fact  =>this.facts=fact);
    }

    deleteEmp(fact:Fact){
      this.dbservice.deleteFact(fact).subscribe((res)=>{
        this.fact.find((uid:Fact,index)=>{
          if(uid.factId==fact.factId){
            this.fact.splice(index,1);
            return true;
          }
          (err) => {
            console.error(err)
          }
        })
      })
    }
  }
