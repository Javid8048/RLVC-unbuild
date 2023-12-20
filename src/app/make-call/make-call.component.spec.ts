import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeCallComponent } from './make-call.component';

describe('MakeCallComponent', () => {
  let component: MakeCallComponent;
  let fixture: ComponentFixture<MakeCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeCallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
