import { Component } from '@angular/core';
import { BooleanEmoPipe } from '../../utils/pipes/emo/boolean-emo.pipe';
import { Book } from './book.type';




@Component({
  selector: 'app-librairie',
  standalone: true,
  imports: [BooleanEmoPipe],
  templateUrl: './librairie.component.html',
  styleUrl: './librairie.component.css'
})
export class LibrairieComponent {

  book1: Book = new Book("titre 1" , "author 1", false);
  book2: Book = new Book("titre 2" , "author 2", true);
  book3: Book = new Book("titre 3" , "author 3", false);

  bookList : Book[] = [this.book1, this.book2, this.book3]
}
