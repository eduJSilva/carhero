import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from './car';
import { Material } from './material';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      {
        id: 0,
        link: 'https://www.carone.com.ar/producto/chevrolet-cruze-5p-14-lt-2019/',
        marca: 'Chevrolet Cruze',
        modelo: '5P 1,4 LT',
        precio: 5680000,
        detalle: '',
        km: 92148,
        anio: 2019,
        imagen: 'https://www.carone.com.ar/wp-content/uploads/2022/11/AD723RL-1-4-300x225.jpg'
      },
      {
        id: 300,
        link: 'https://www.carone.com.ar/producto/chrysler-jeep-compass-2-4-sport-4x2-mt6-2019/',
        marca: 'Chrysler Jeep Compass',
        modelo: '2.4 SPORT 4X2 MT6',
        precio: 5166000,
        detalle: '2019 - 34.195 Km',
        km: 34195,
        anio: 2019,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/nopic-1412-300x225.jpg',
      },
      {
        id: 305,
        link: 'https://www.carone.com.ar/producto/nissan-x-trail-2-5-exclusive-cvt-4x4-2018/',
        marca: 'Nissan X Trail',
        modelo: '2.5 EXCLUSIVE CVT 4X4',
        precio: 5336100,
        detalle: '2018 - 21.187 Km',
        km: 21187,
        anio: 2018,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/nopic-1407-300x225.jpg',
      },
      {
        id: 306,
        link: 'https://www.carone.com.ar/producto/chrysler-jeep-compass-2-4-sport-4x2-mt6-2021/',
        marca: 'Chrysler Jeep Compass',
        modelo: '2.4 SPORT 4X2 MT6',
        precio: 5355000,
        detalle: '2021 - 20.755 Km',
        km: 20755,
        anio: 2021,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/AB879FY-1-3-300x225.jpg',
      },
      {
        id: 307,
        link: 'https://www.carone.com.ar/producto/renault-alaskan-2-3-tdi-intens-4x4-2021/',
        marca: 'Renault Alaskan',
        modelo: '2.3 TDI INTENS 4X4',
        precio: 5360000,
        detalle: '2021 - 31.187 Km',
        km: 31187,
        anio: 2021,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/AB522DW-1-3-300x225.jpg',
      },
      {
        id: 308,
        link: 'https://www.carone.com.ar/producto/volkswagen-amarok-3-0-td-4x4-dc-v6-at-comforl-2018/',
        marca: 'Volkswagen Amarok',
        modelo: '3.0 TD 4X4 DC V6 AT COMFORL.',
        precio: 5387000,
        detalle: '2018 - 115.784 Km',
        km: 115784,
        anio: 2018,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/nopic-1422-300x225.jpg',
      },
      {
        id: 309,
        link: 'https://www.carone.com.ar/producto/volkswagen-amarok-3-0-td-4x4-dc-v6-at-comforl-2019/',
        marca: 'Volkswagen Amarok',
        modelo: '3.0 TD 4X4 DC V6 AT COMFORL.',
        precio: 4794000,
        detalle: '2019 - 89.000 Km',
        km: 89000,
        anio: 2019,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/AB481ZV-1-4-300x225.jpg',
      },
      {
        id: 310,
        link: 'https://www.carone.com.ar/producto/volkswagen-tiguan-1-4t-trendline-aut-2018/',
        marca: 'Volkswagen Tiguan',
        modelo: '1.4T TRENDLINE AUT.',
        precio: 4799000,
        detalle: '2018 - 61.000 Km',
        km: 61000,
        anio: 2018,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/AD158HE-1-4-300x225.jpg',
      },
      {
        id: 311,
        link: 'https://www.carone.com.ar/producto/chevrolet-s10-2-8-cdti-d-cab-ltz-aut-4x4-2020/',
        marca: 'Chevrolet S10',
        modelo: '2.8 CDTI D/CAB LTZ AUT 4X4',
        precio: 4820143,
        detalle: '2020 - 72.000 Km',
        km: 72000,
        anio: 2020,
        imagen:
          'https://www.carone.com.ar/wp-content/uploads/2022/11/AD441QZ-1-4-300x225.jpg',
      },
    ];
    const materiales = [
      {
        id: 0,
        nombre: 'Semaforo poli amarillo 3 x 200'
      },
      {
        id: 1,
        nombre: 'Soporte 101 simple'
      },
      {
        id: 2,
        nombre: 'cemento x 50 kg'
      },
      {
        id: 3,
        nombre: 'jabalinas 3/8'
      },
      {
        id: 4,
        nombre: 'Borneras Bpn4'
      },
      {
        id: 5,
        nombre: 'Sintetico Gris Ral x 20lt'
      },
      {
        id: 6,
        nombre: 'Capuchon de Pvc'
      },
      {
        id: 7,
        nombre: 'Electrodos de 5 1/2'
      },
      {
        id: 8,
        nombre: 'Semaforo Vehic. Alum gris 3 x 200'
      },
      {
        id: 9,
        nombre: 'Semaforo Peatonal Alum gris 200'
      },
      {
        id: 10,
        nombre: 'Lubricante W40'
      },
      {
        id: 11,
        nombre: 'Curva 75 a 45'
      },
    ];
    const valeMateriales = [
{}
    ];
    return {cars, materiales, valeMateriales};
  }



  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(cars: Car[]): number {
    return cars.length > 0 ? Math.max(...cars.map(car => car.id)) + 1 : 11;
  }

  genIdMaterial(materiales: Material[]): number {
    return materiales.length > 0 ? Math.max(...materiales.map(material => material.id)) + 1 : 11;
  }
}
