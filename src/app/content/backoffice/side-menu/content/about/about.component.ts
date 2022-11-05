import { Component, OnInit } from '@angular/core';
import { Car, User } from 'src/app/shared/interface';
import { __values } from 'tslib';
import { BackofficeService } from '../../../backoffice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public user =  this.backofficeService.controlUser$;

  public carsArr: Car[] = [
    {  id: 1, path: 'bmw', brand: 'BMW', series: 'Crossover', model: 'X7', year: 2022, description: "Передняя часть кузова с акцентом на фирменных элементах дизайна BMW подчеркивает монументальность и спортивный характер автомобиля. Сдвоенная решетка радиатора с подсветкой BMW Iconic Glow создает в облике ощущение прогрессивности. Замысловатые двойные планки решетки в сочетании с эксклюзивными хромированными элементами притягивают взгляд.", gasoline: 'Бензин - Дизель', expense: '10.5–9.2 л/100 км', urlLogo: 'assets/img/logo-bmw.jpg', urlImg: '../../../../../../../assets/img/about-bmw.jpg'},
    {  id: 2, path: 'acura', brand: 'Acura', series: 'Premium Sport Crossover', model: 'RDX', year: 2022, description: "Take The Unconventional Road. Feel your adrenaline flow with a hard-hitting 272-HP86 VTEC® Turbo engine and available Super Handling All-Wheel Drive™ that takes on corners with confidence. Available Adaptive Dampers and four IDS drive modes give you precision control over your ride.", gasoline: 'MPG 22 city / 28 highway / 24 combined', expense: '272-HP86 2.0L VTEC TURBO', urlLogo: '../../../assets/img/logo-acura.jpg', urlImg: '../../../assets/img/about-acura.jpg'},
    {  id: 3, path: 'lexus', brand: 'Lexus', series: 'Premium Crossover', model: 'GX 460', year: 2021, description: "GX 460 з двигуном V8 дозволяє рухатися в будь-якому напрямку. Цей позашляховик протестований за найекстремальніших умов. Він оснащений десятьма подушками безпеки та новаторською системою Lexus Safety System +, що забезпечують неймовірний рівень безпеки. Усередині салону ви відчуєте високий рівень майстерності Такумі та насолоджуватиметесь винятковими функціями, серед яких аудіосистема Mark Levinson з 17 динаміками та навігаційна система преміумкласу від Lexus.", gasoline: 'Бензин', expense: '15л/100 км', urlLogo: '../../../assets/img/logo-lexus.jpg', urlImg: '../../../assets/img/about-lexus.jpg'},
    {  id: 4, path: 'dodge', brand: 'Dodge', series: 'Crossover', model: 'DODGE DURANGO ', year: 2022, description: "Inside the Durango, a driver-centric cockpit surrounds you with performance-inspired design and available leather-trim seating. Plus, a wireless charging pad and available features like a 10.1-inch touchscreen and 19-speaker Harman Kardon® Premium Audio System ensure the latest tech is always in reach.", gasoline: 'Бензин ', expense: '18 л/100 км', urlLogo: '../../../assets/img/logo-dodge.jpg', urlImg: '../../../assets/img/about-dodge.jpg'},


  ]

  constructor(private backofficeService: BackofficeService) {   }

  ngOnInit(): void {
  }

 public changeText(txt: string): void{  
    this.backofficeService.control$.next(txt)
  }

}
