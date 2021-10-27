import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {

key="ac185c80e383d5564d3ec8958911b62e";


  constructor(private htpp: HttpClient) { }

mostrarClima(ciudad: string) {

return this.htpp.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${this.key}`);


}


}
