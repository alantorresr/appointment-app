//import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-view',
  imports: [NgFor],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {
  appointment: any;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
   this.getAppointment(1);
  }
  getAppointment(id: number): void {
    this.appointmentService.getAppointment(id).subscribe(data => {
      this.appointment = data;
      console.log(this.appointment);
    });
  }
  
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
