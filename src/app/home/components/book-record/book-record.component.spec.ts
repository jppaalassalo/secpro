import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRecordComponent } from './book-record.component';

describe('BookRecordComponent', () => {
  let component: BookRecordComponent;
  let fixture: ComponentFixture<BookRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
