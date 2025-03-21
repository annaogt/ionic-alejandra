import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pagina12Page } from './pagina1.2.page';

describe('Pagina12Page', () => {
  let component: Pagina12Page;
  let fixture: ComponentFixture<Pagina12Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
