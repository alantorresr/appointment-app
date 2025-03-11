//import { NgFor } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { NgFor, NgIf } from '@angular/common';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentSharedService } from '../../services/appointment-shared.service';

@Component({
  selector: 'app-list-view',
  imports: [NgFor],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {
  //appointment?: AppointmentModel;
  appointment: any;
  constructor(private appointmentService: AppointmentService,
    private appointmentSharedService: AppointmentSharedService
  ) { }

  ngOnInit(): void {
   this.getAppointment(1);
   this.appointmentSharedService.refreshAppointments$.subscribe(() => {
    this.getAppointment(1);
  });
  }
  getAppointment(id: number): void {
    this.appointmentService.getAppointment(id).subscribe(data => {
      this.appointment = data;
      //console.log(this.appointment);
    });
  }
  
  updateItem(item: AppointmentModel): void {
    //console.log('appointment a actualizar');
    console.log(item);
    this.appointmentSharedService.selectAppointment(item);
  }


deleteAppointment(id: number): void {
  console.log('borrando id');
  console.log(id);
  this.appointmentService.deleteAppointment(id).subscribe(
    response => {
      console.log('Appointment deleted successfully', response);
      alert('Appointment deleted successfully!');
      this.getAppointment(1);
    },
    error => {
      console.error('Error deleting appointment', error);
      alert('Error deleting appointment');
    }
  );
}

}
