import { Component } from '@angular/core';
import { BooleanEmoPipe } from '../../utils/pipes/emo/boolean-emo.pipe';
import { Book } from './book.type';
import { FormsModule } from '@angular/forms';

type book = {
  name:string,
  author: string,
  password: string
}

@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [BooleanEmoPipe, FormsModule],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {
  title = 'exo_livre';

  newBook: book = {
    name:"",
    author: "",
    password: ""
  };

  book1: Book = new Book("titre 1" , "author 1", false);
  book2: Book = new Book("titre 2" , "author 2", true);
  book3: Book = new Book("titre 3" , "author 3", false);

  bookList : Book[] = [this.book1, this.book2, this.book3]

  
  addBook(): void {
    this.bookList.push(
      new Book(      
        this.newBook.name,
        this.newBook.author,
        false
      ))
  }
}
