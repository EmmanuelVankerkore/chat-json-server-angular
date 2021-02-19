import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatListeComponent } from './page-chat-liste.component';

describe('PageChatListeComponent', () => {
  let component: PageChatListeComponent;
  let fixture: ComponentFixture<PageChatListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChatListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChatListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
