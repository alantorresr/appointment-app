//import { NgFor } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { NgFor, NgIf } from '@angular/common';
import { AppointmentModel } from '../../models/appointment.model';
import { AppointmentSharedService } from '../../services/appointment-shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-view',
  imports: [NgFor,CommonModule],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.css'
})
export class ListViewComponent implements OnInit {
  @Input() roleName: string = '';

  appointment?: AppointmentModel[];
 // appointment: any;
  //appointment: any;
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
    console.log(item.appointmentDate);
    const date = new Date(item.appointmentDate);
    //item.appointmentDate = date.toISOString().split('T')[0];
    //console.log(item.appointmentDate);

    const timeString = item.appointmentDate.split('T')[1]; // Obtener la parte de la hora
    item.time = timeString.substring(0, 5); // Obtener HH:mm
  
    item.appointmentDate = date.toISOString().split('T')[0];
    
    //item.time = date.toTimeString().split('T')[1];
    console.log('time');
    console.log(item.time);

    //const time = new Date(item.time);
    //console.log('const time');
    //console.log(time);
    //item.time = time.toTimeString().split(' ')[0].substring(0, 5); // Formato HH:mm

    
    //console.log('time');
    //console.log(item.time);
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
