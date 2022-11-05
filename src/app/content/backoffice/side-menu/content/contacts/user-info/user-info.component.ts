import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/shared/interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {


  constructor() { 
    
  }

  @Input()
  public user!: any;

  

  ngOnInit(): void {
    
  }

}
