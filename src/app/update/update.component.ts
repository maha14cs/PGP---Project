import { Component, OnInit, Input } from '@angular/core';
import { Fact } from '../fact';
import { DbserviceService } from '../dbservice.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  @Input() fact:Fact;
 
  constructor(public dbservice:DbserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.getFact();
  }
  getFact():void{
    const uid = +this.route.snapshot.paramMap.get('factId');
    console.log('uid');
    this.dbservice.getFactID(uid).subscribe(res  =>this.fact=res);
  }
  
  save() : void{
    this.dbservice.updateFact(this.fact).subscribe();
  }
  
}
