import { Component, OnInit } from '@angular/core';
import { DbserviceService } from '../dbservice.service';
import { Fact } from '../fact';
@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(public dbservice:DbserviceService) { }

  ngOnInit() {
  }

}
