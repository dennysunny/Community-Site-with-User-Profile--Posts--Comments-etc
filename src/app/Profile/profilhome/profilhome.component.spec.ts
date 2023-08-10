import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilhomeComponent } from './profilhome.component';

describe('ProfilhomeComponent', () => {
  let component: ProfilhomeComponent;
  let fixture: ComponentFixture<ProfilhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilhomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
