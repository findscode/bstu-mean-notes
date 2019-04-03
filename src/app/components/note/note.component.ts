import { Component, OnInit, Input } from '@angular/core';
import Note from '../../interfaces/note.interface';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  @Input() note: Note;

  constructor() { }

  ngOnInit() {
  }

  get title () {
    return this.note.Title;
  }

  get author () {
    return this.note.Author;
  }

  get content () {
    return this.note.Content;
  }

}