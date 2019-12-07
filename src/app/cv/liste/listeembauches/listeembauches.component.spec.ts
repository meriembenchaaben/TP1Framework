import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeembauchesComponent } from './listeembauches.component';

describe('ListeembauchesComponent', () => {
  let component: ListeembauchesComponent;
  let fixture: ComponentFixture<ListeembauchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeembauchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeembauchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
