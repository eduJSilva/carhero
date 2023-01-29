import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { Observable, Subject } from 'rxjs';

import {
   debounceTime, distinctUntilChanged, map, startWith, switchMap
 } from 'rxjs/operators';

import { Material } from '../material';
import {ValeMateriales} from '../valeMateriales'

import { MaterialService } from '../material.service';
import {ValeMaterialService} from '../valeMaterial.service';

@Component({
  selector: 'app-valesalida',
  templateUrl: './valesalida.component.html',
  styleUrls: ['./valesalida.component.css']
})
export class ValesalidaComponent {
  myControl = new FormControl('');

  materiales$!: Observable<Material[]>;
   searchTerms = new Subject<string>();

  name = new FormControl('');
  materiales!: Material[];
  valemateriales!: ValeMateriales[];

  nombreMaterial!: string;

  preview: string = '';

  formulario = this.fb.group({
    supervisor: ['',[Validators.required]],
    operario: ['',[Validators.required]],
    obra: ['',[Validators.required]],
    materiales: this.fb.array([],[Validators.required,Validators.minLength(1)])
  })

constructor(private fb: FormBuilder, private materialService: MaterialService, private valematerialService: ValeMaterialService){}


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
        this.nombreMaterial = nombre;
        console.log(this.nombreMaterial)
  }
/*
  delete(material: Material): void {
    this.valemateriales =  this.valemateriales.filter(h => h !== material);
    this.valematerialService.deleteMaterial(material).subscribe();
  }
*/

enviar(){
  console.log(this.valemateriales)
}

save() {
  this.preview = JSON.stringify(this.formulario.value);
  console.log(this.preview)
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

  get materialesForms() {
    return this.formulario.get('materiales') as FormArray;
  }

  get supervisor(){
    return this.formulario.get('supervisor');
  }

  get operario(){
    return this.formulario.get('operario');
  }

  get obra(){
    return this.formulario.get('obra');
  }

  getMaterial(index: number) {
    return this.materialesForms.at(index).get('material');
  }

  addAMaterialFormGroup() {
    this.materialesForms.push(
      this.fb.group({
        material: ['',[Validators.required]],
        cantidad: [,[Validators.required, Validators.min(1), Validators.max(2000) ]],
      })
    );
  }

  removeMaterialFormGroup(index: number) {
    this.materialesForms.removeAt(index);
  }

}
