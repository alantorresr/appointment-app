import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { AppointmentModel } from '../../models/appointment.model';
import { FormsModule, NgForm } from '@angular/forms';
import { AppointmentSharedService } from '../../services/appointment-shared.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-appointment-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {
  appointment: AppointmentModel = new AppointmentModel(0, '','', '', '',0, 0);
  isUpdating: boolean = false;
  appointmentStatusOptions = [
    { AppointmentStatusId: 1, AppointmentStatusName: 'New' },
    { AppointmentStatusId: 2, AppointmentStatusName: 'Approved' },
    { AppointmentStatusId: 3, AppointmentStatusName: 'Cancelled' },
    { AppointmentStatusId: 4, AppointmentStatusName: 'Completed' },
    { AppointmentStatusId: 5, AppointmentStatusName: 'Rescheduled' }
  ];

  constructor(private appointmentService: AppointmentService,
    private appointmentSharedService: AppointmentSharedService
  ) {}

  ngOnInit(): void {
    this.appointmentSharedService.selectedAppointment$.subscribe(appointment => {
      this.appointment = appointment;
      this.isUpdating = true;
    });
  }

  onSubmit(form: NgForm): void {
    if (this.isUpdating) {
      this.updateAppointment();
    } else {
      this.newAppointment();
    }

    // Reset form after submission
    form.resetForm();
    this.isUpdating = false;
  }

  newAppointment(): void {
    this.appointment.userid=1;
    this.appointment.appointmentStatusId=1;
    this.appointment.appointmentDate = this.appointment.appointmentDate +'T'+ this.appointment.time
   

    this.appointmentService.newAppointment(this.appointment).subscribe(
      response => {
        console.log('Appointment created successfully', response);
        alert('Appointment created successfully!');
        this.appointmentSharedService.triggerRefreshAppointments();
      },
      error => {
        console.error('Error creating appointment', error);
        alert('Error creating appointment');
      }
    );
  }

  updateAppointment(): void {
    this.appointment.userid=1;
    console.log('status');
    console.log(this.appointment.appointmentStatusId);
    //let entero: number = parseInt(this.appointment.appointmentStatusId, 10);
    //this.appointment.appointmentStatusId=1;
    //console.log('actualizar fecha');
    //console.log(this.appointment.appointmentDate);
    //console.log(this.appointment.time);
    this.appointment.appointmentDate = this.appointment.appointmentDate +'T'+ this.appointment.time
   
    if (!this.appointment.appointmentId) {
      alert('Appointment ID is required to update an appointment');
      return;
    }

    this.appointmentService.updateAppointment(Number(this.appointment.appointmentId), this.appointment).subscribe(
      response => {
        console.log('Appointment updated successfully', response);
        alert('Appointment updated successfully!');
        this.appointmentSharedService.triggerRefreshAppointments();
      },
      error => {
        console.error('Error updating appointment', error);
        alert('Error updating appointment');
      }
    );
  }

  
}
