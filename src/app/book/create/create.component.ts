import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {BookService} from '../../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  book: IBook ={
    id: 0,
    title: '',
    description: '',
    author: ''
  };

  constructor(private bookServie: BookService, private router: Router) { }

  ngOnInit(): void {
  }
  createBook(){
    this.bookServie.createNewBook(this.book).subscribe(() =>{
      this.router.navigateByUrl('/books')
    })
  }

}
