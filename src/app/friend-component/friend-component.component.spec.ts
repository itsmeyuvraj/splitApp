import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendComponentComponent } from './friend-component.component';

describe('FriendComponentComponent', () => {
  let component: FriendComponentComponent;
  let fixture: ComponentFixture<FriendComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
