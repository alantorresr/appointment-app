import { Component } from '@angular/core';
import { Appointment } from '../../models/appointment.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-appointment-form',
  imports: [FormsModule],
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointment = {
    title: '',
    date: '',
    time: '',
    description: ''
  };

  onSubmit(): void {
    console.log('Appointment saved:', this.appointment);
    // Aquí podrías agregar la lógica para guardar la cita en un servidor o base de datos
    alert('Appointment saved successfully!');
    this.appointment = {
      title: '',
      date: '',
      time: '',
      description: ''
    };
  }
}