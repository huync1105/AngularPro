import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhGiaNhaCungUngComponent } from './danh-gia-nha-cung-ung.component';

describe('DanhGiaNhaCungUngComponent', () => {
  let component: DanhGiaNhaCungUngComponent;
  let fixture: ComponentFixture<DanhGiaNhaCungUngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhGiaNhaCungUngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhGiaNhaCungUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
