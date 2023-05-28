import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencie',
  templateUrl: './experiencie.component.html',
  styleUrls: ['./experiencie.component.css']
})
export class ExperiencieComponent implements OnInit {
 miPortfolio:any;
  constructor (private datosPortfolio:PortfolioService) {}

ngOnInit() : void {
    this.datosPortfolio.obtenerDatos().subscribe(data =>{
    console.log(data);
    this.miPortfolio=data;
  });
}
}
