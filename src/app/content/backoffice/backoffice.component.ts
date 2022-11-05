import { Component, OnInit } from '@angular/core';
import { BackofficeService } from './backoffice.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {



  public user!: any;
  public color!: any;

  constructor(private backofficeService: BackofficeService) {
    this.backofficeService.controlUser$.subscribe((res) => {
      this.user = res;
      this.color = res?.colorTheme
    })

  }

  ngOnInit(): void {

  }

}
