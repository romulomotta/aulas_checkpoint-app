import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesFormComponent } from './animes-form.component';

describe('AnimesFormComponent', () => {
  let component: AnimesFormComponent;
  let fixture: ComponentFixture<AnimesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
