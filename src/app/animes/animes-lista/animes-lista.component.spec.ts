import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesListaComponent } from './animes-lista.component';

describe('AnimesListaComponent', () => {
  let component: AnimesListaComponent;
  let fixture: ComponentFixture<AnimesListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
