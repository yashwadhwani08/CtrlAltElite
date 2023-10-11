import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-component',
  templateUrl: './appointment-component.component.html',
  styleUrls: ['./appointment-component.component.css'],
})
export class AppointmentComponentComponent {
  clientName: string = 'Anurag Dash';
  therapistName: string = 'Dr. Prashant Abhang';
  clientAddress: string = 'Kharadi, Pune';
  scheduledCheckIn: any = '9:00 a.m.';
  scheduledCheckOut: any = '11:00 a.m.';
}
