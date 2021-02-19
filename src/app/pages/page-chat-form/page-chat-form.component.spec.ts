import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChatFormComponent } from './page-chat-form.component';

describe('PageChatFormComponent', () => {
  let component: PageChatFormComponent;
  let fixture: ComponentFixture<PageChatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
