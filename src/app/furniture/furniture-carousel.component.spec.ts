import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureCarouselComponent } from './furniture-carousel.component';

describe('FurnitureCarouselComponent', () => {
  let component: FurnitureCarouselComponent;
  let fixture: ComponentFixture<FurnitureCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
