import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomCreateComponent } from './room-create.component';

describe('CreateRoomComponent', () => {
  let component: RoomCreateComponent;
  let fixture: ComponentFixture<RoomCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
