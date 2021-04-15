import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {IBook} from '../../ibook';
import {BookService} from '../../book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit {
  // @ts-ignore
  sub: Subscription;
  book: IBook ={
    id: 0,
    title: '',
    description: '',
    author: ''
  }
  id: number = 0;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((pramMap: ParamMap) =>{
      // @ts-ignore
      this.id = +pramMap.get("id");
      this.getBookById(this.id);
    })
  }

  ngOnInit(): void {
  }
  getBookById(id: number){
    this.bookService.getBookById(id).subscribe(book =>{
      this.book = book;
    })
  }
  deleteBook(){
    this.bookService.deleteBook(this.id).subscribe(() =>{
      this.router.navigateByUrl("/books")
    })
  }

}
