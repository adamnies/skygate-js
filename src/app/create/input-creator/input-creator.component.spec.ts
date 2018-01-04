import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreatorComponent } from './input-creator.component';
import {FormsModule} from '@angular/forms';

describe('InputCreatorComponent', () => {
  let component: InputCreatorComponent;
  let fixture: ComponentFixture<InputCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ InputCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
