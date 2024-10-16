export class Book {
    title: string;
    author: string;
    isRead: boolean;
  
    constructor(title: string, author: string, isRead: boolean) {
      this.title = title;
      this.author = author;
      this.isRead = isRead;
    }
  
    toggleReadStatus(): void {
      this.isRead = !this.isRead;
    }
  }