import { Component, OnInit } from '@angular/core';
import { BackofficeService } from '../../../backoffice.service';

@Component({
  selector: 'app-acura',
  templateUrl: './acura.component.html',
  styleUrls: ['./acura.component.css']
})
export class AcuraComponent implements OnInit {

  public someText: any = '';

  constructor(private backofficeService: BackofficeService) {
    this.someText = this.backofficeService.control$
  }

  ngOnInit(): void {
  }

}
