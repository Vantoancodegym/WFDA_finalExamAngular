import { Component, OnInit } from '@angular/core';
import {IBook} from '../../ibook';
import {BookService} from '../../book.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  books: IBook[] = [];

  constructor(private bookService: BookService) {
    this.getAllBook();
  }
  ngOnInit(): void {
  }
  getAllBook(){
    this.bookService.getAllBooks().subscribe(books =>{
      this.books = books;
    })
  }


}
