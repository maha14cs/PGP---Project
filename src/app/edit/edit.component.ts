import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../dbservice.service';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  angForm: FormGroup;
  p: any = {};
  constructor(private route: ActivatedRoute, private router: Router, public dbservice:DbserviceService, private fb: FormBuilder)
  {
    this.createForm();
  }
  ngOnInit() {
  }
  createForm() {
    this.angForm = this.fb.group({
      FactId: ['', Validators.required ],
      FactName: ['', Validators.required ],
      Phone: ['', Validators.required ],
      Email: ['', Validators.required ]
         });
  }

}
