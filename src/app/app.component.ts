import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListViewComponent} from './components/list-view/list-view.component'
import { AppointmentFormComponent } from './components/appointment-form/appointment-form.component';
import { AppointmentService } from '././services/appointment.service';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,ListViewComponent,AppointmentFormComponent,NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'appointment-app';

  appointment: any;

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
   //this.getAppointment(1);
  }
 /*  getAppointment(id: number): void {
    this.appointmentService.getAppointment(id).subscribe(data => {
      this.appointment = data;
      console.log(this.appointment);
    });
  } */
}
