import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataArrayComponent } from './data-array.component';

describe('DataArrayComponent', () => {
  let component: DataArrayComponent;
  let fixture: ComponentFixture<DataArrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataArrayComponent]
    });
    fixture = TestBed.createComponent(DataArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
