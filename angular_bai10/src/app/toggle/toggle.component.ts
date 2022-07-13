import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'toggle',
  template: '<div class="toggle-wrapper" [class.checked]="checked" tabindex="0" (click)="toggle()"> <div class="toggle"></div></div>',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {
  @Input() checked = true;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}