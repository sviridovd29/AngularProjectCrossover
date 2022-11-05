import { Component, OnInit } from '@angular/core';
import { BackofficeService } from '../../../backoffice.service';

@Component({
  selector: 'app-bmw',
  templateUrl: './bmw.component.html',
  styleUrls: ['./bmw.component.css']
})
export class BmwComponent implements OnInit {
  public someText: any = '';

  constructor(private backofficeService: BackofficeService) {
    this.someText = this.backofficeService.control$
  }

  ngOnInit(): void {
  }

}
