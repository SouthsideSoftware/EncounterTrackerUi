import { Component } from '@angular/core';

@Component({
  selector: 'app-creature-search',
  templateUrl: './creature-search.component.html',
  styleUrls: ['./creature-search.component.css'],
  template: `
    <mat-form-field>
      <input matInput placeholder="Name" [(ngModel)]="search">
    </mat-form-field>
    <button mat-raised-button color="primary" (click)="onSubmit()">Submit</button>
  `
})
export class CreatureSearchComponent {
  search: string = ''; 

  onSubmit() {
    console.log('Search:', this.search);
  }
}
