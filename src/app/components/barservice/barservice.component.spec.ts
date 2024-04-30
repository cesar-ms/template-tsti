import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarserviceComponent } from './barservice.component';

describe('BarserviceComponent', () => {
  let component: BarserviceComponent;
  let fixture: ComponentFixture<BarserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
