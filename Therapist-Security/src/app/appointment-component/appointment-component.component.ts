import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment-component',
  templateUrl: './appointment-component.component.html',
  styleUrls: ['./appointment-component.component.css'],
})
export class AppointmentComponentComponent {
  clientName: string = "Anurag Dash";
  therapistName: string = "Dr. Prashant Abhang";  
}
