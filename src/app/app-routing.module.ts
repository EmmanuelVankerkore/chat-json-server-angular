import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageChatFormComponent } from './pages/page-chat-form/page-chat-form.component';
import { PageChatListeComponent } from './pages/page-chat-liste/page-chat-liste.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path:"", component:PageChatListeComponent},
  {path:"chats", redirectTo:""},
  {path:"form", component:PageChatFormComponent},
  {path:"404", component:PageNotFoundComponent},
  {path:'**', redirectTo:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
