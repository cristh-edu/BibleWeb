import { ListBook } from "./ListBook";

export interface Version {
  name: string;
  description: string;
  books: Array<Book>;
}

interface Book {
  name: ListBook;
  chapter: Array<Chapter>;
}

interface Chapter {
  number: number;
  verses: Array<Verse>;
}

interface Verse {
  verse: number;
  verseEnd?: number;
  text: string;
}
