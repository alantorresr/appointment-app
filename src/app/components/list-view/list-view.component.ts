import { NgFor } from '@angular/common';
import { Component} from '@angular/core';

@Component({
  selector: 'app-list-view',
  imports: [NgFor],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent {
items = [
  {AppointmentId: 1,Title:'Appointment 1',Description:'Description 1'},
  {AppointmentId: 2,Title:'Appointment 2',Description:'Description 2'},
  {AppointmentId: 3,Title:'Appointment 3',Description:'Description 3'}
];
updateItem(index: number): void {
  const newTile = prompt('Enter new tile:');
  const newDescription = prompt('Enter new description:');
  if (newTile && newDescription) {
    this.items[index] = { AppointmentId: 1,Title: newTile, Description: newDescription };
  }
}

deleteItem(index: number): void {
  this.items.splice(index, 1);
}
}
