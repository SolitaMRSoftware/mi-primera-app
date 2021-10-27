import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  ciudad='';
  temperatura =0;
  humedad =0;

  constructor(private serviceClima: ClimaService) {}

  ngOnInit(): void {}

  mostrarClima() {
    this.serviceClima.mostrarClima(this.ciudad).subscribe((data:any) => {this.temperatura = data.main.temp - 273;
    });
  }

}
