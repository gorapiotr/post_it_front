import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicNoteFormComponent } from './basic-note-form.component';

describe('BasicNoteFormComponent', () => {
  let component: BasicNoteFormComponent;
  let fixture: ComponentFixture<BasicNoteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicNoteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
