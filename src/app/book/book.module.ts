import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponent,
    DeleteComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BookModule { }
