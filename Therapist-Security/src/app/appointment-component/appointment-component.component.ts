import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import * as constants from '../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-component',
  templateUrl: './appointment-component.component.html',
  styleUrls: ['./appointment-component.component.css'],
})
export class AppointmentComponentComponent implements OnInit {
  ngOnInit(): void {
    console.log('AppointmentComponentComponent initialized!');
  }
  public appointment: Appointment;

  constructor(private http: HttpClient) {
    this.appointment = {
      id: 1,
      therapistId: 1,
      therapistName: 'Abhang',
      clientId: 1,
      clientName: 'Prashant',
      clientAddress: 'Kharadi, Pune 411014',
      checkinTime: '2023-08-12 18:00:00',
      checkoutTime: '2023-08-12 19:00:00',
      actualCheckinTime: '',
      actualCheckoutTime: '',
      therapistContact: '9999999999',
      status: constants.appointStatusScheduled,
    };
  }

  updateAppointment(appointment: Appointment) {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(appointment);
    console.log(body);
    return this.http.post(
      constants.baseURL + 'appointment' + appointment.id + '/',
      body,
      { headers: headers }
    );
  }

  doGetAppointment(id: number): Observable<Appointment> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(id);
    console.log(body);
    return this.http.get<Appointment>(
      constants.baseURL + 'appointment/' + id + '/'
    );
  }

  doCheckIn(): void {
    this.appointment.status = constants.appointStatusInProgress;

    alert('Calling Update Appointment API with CheckIn');
  }

  doCheckOut(): void {
    this.appointment.status = constants.appointStatusCompleted;
    alert('Calling Update Appointment API with CheckOut');
  }

  doSOS(): void {
    this.appointment.status = constants.appointStatusAlert;
    alert('Calling Update Appointment API with SOS');
  }

  isCheckInDisabled(): boolean {
    if (this.appointment.status != constants.appointStatusScheduled) {
      return true;
    }
    return false;
  }

  isSOSDisabled(): boolean {
    if (
      this.appointment.status == constants.appointStatusAlert
    ) {
      return true;
    }
    return false;
  }

  isEmegencyAppointment() {
    if (this.appointment.status != constants.appointStatusAlert){
      return true
    }
    return false;
  }

  showActualCheckInOut():boolean {
    if (
      this.appointment.status == constants.appointStatusScheduled 
    ) {
      return true;
    }
    return false;
  }

  isCheckoutButtonDisabled(): boolean {
    if (
      this.appointment.status == constants.appointStatusInProgress ||
      this.appointment.status == constants.appointStatusOverdue
    ) {
      return false;
    }
    return true;
  }
}
