import { Component, EventEmitter, Input, Output  } from "@angular/core";
import {Author } from '../authors.module';

@Component ({
  selector: 'author-details',
  template:'<div>{{author.firstName}}  {{author.lastName}} <button style="margin-left: 2rem" (click)="select.emit(author)">Select </button>   <button style="margin-left: 2rem" (click)="delete.emit(author.id)"> X</button></div>'
})
export class AuthorDetailsComponent {
  @Input () author : Author;
  @Output () select = new EventEmitter <Author>();
  @Output () delete = new EventEmitter <number> ();


}