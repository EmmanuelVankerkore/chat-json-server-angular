import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatListeComponent } from './chat-liste.component';

describe('ChatListeComponent', () => {
  let component: ChatListeComponent;
  let fixture: ComponentFixture<ChatListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
