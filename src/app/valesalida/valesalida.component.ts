import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Material } from '../material';

import { MaterialService } from '../material.service';
import {ValeMaterialService} from '../valeMaterial.service';

@Component({
  selector: 'app-valesalida',
  templateUrl: './valesalida.component.html',
  styleUrls: ['./valesalida.component.css']
})
export class ValesalidaComponent {
  materiales$!: Observable<Material[]>;
  private searchTerms = new Subject<string>();

  name = new FormControl('');
  materiales!: Material[];
  valemateriales!: Material[];

constructor(private materialService: MaterialService, private valematerialService: ValeMaterialService){}


  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
    this.name.setValue(term);

  }


  getMateriales(): void {
    this.materialService.getMateriales()
        .subscribe(materiales => this.materiales = materiales);
  }

  getValeMateriales(): void {
    this.valematerialService.getvaleMateriales()
        .subscribe(materiales => this.valemateriales = materiales);
  }

  add(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.valematerialService.addMaterial({ nombre } as Material)
      .subscribe(material => {
        this.valemateriales.push(material);
      });
  }

  delete(material: Material): void {
    this.valemateriales = this.valemateriales.filter(h => h !== material);
    this.valematerialService.deleteMaterial(material).subscribe();
  }



  ngOnInit(): void {

    this.getMateriales();
    this.getValeMateriales();

    this.materiales$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.materialService.searchMateriales(term)


      ),

    );
  }

}
