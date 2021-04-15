import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {BookModule} from './book/book.module';

const routes: Routes = [
  {
  path: '',
  component: HomepageComponent
  },
  {
    path: 'books',
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
