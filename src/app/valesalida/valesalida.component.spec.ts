import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValesalidaComponent } from './valesalida.component';

describe('ValesalidaComponent', () => {
  let component: ValesalidaComponent;
  let fixture: ComponentFixture<ValesalidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValesalidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValesalidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
