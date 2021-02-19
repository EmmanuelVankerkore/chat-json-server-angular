import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PageChatListeComponent } from './pages/page-chat-liste/page-chat-liste.component';
import { PageChatFormComponent } from './pages/page-chat-form/page-chat-form.component';
import { ChatCardComponent } from './components/chats/chat-card/chat-card.component';
import { NotFoundErrorComponent } from './components/errors/not-found-error/not-found-error.component';
import { ChatListeComponent } from './components/chats/chat-liste/chat-liste.component';
import { ChatFormComponent } from './components/chats/chat-form/chat-form.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageChatListeComponent,
    PageChatFormComponent,
    ChatListeComponent,
    ChatFormComponent,
    ChatCardComponent,
    NotFoundErrorComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
