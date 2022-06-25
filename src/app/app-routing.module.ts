import { UserComponent } from './pages/user/user.component';
import { HomeComponent } from './pages/home/home.component';
import { BooksComponent } from './pages/books/books.component';
import { UpdatesComponent } from './pages/updates/updates.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "", pathMatch:"full", component: HomeComponent
  },
  {
    path: "books", component: BooksComponent
  },
  {
    path: "updates", component:UpdatesComponent
  },
  {
    path: "user", component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
