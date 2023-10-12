import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import Chart from 'chart.js/auto';
import { ApiDataServices } from '../api-config.service';
import * as constants from '../constants';
//import * as bootstrap from 'bootstrap';

let APPOINTMENT_DATA: Appointment[] = [
  {
    id: 1,
    clientName: 'Prashant',
    therapistName: 'Abhang',
    therapistContact: '9999999999',
    status: constants.appointStatusScheduled,
    actualCheckinTime: '2023-08-12 18:00:00',
    actualCheckoutTime: '2023-08-12 19:00:00',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi, Pune 411014',
    checkinTime: '2023-08-12 15:00:00',
    checkoutTime: '',
  },
  {
    id: 2,
    clientName: 'Anurag',
    therapistName: 'Dash',
    therapistContact: '9999999998',
    status: constants.appointStatusInProgress,
    actualCheckinTime: '2023-08-12 14:00:00',
    actualCheckoutTime: '2023-08-12 15:00:00',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi, Pune 411014',
    checkinTime: '2023-08-12 14:00:00',
    checkoutTime: '2023-08-15 15:00:00',
  },
  {
    id: 3,
    clientName: 'Yash',
    therapistName: 'Wadhwani',
    therapistContact: '9999999998',
    status: constants.appointStatusCompleted,
    actualCheckinTime: '2023-08-12 13:00:00',
    actualCheckoutTime: '2023-08-12 14:00:00',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi, Pune 411014',
    checkinTime: '2023-08-12 14:00:00',
    checkoutTime: '2023-08-15 15:00:00'
  },
  {
    id: 5,
    clientName: 'Vikram',
    therapistName: 'Karki',
    therapistContact: '9999999998',
    status: constants.appointStatusCompleted,
    actualCheckinTime: '2023-08-12 13:00:00',
    actualCheckoutTime: '2023-08-12 14:00:00',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi, Pune 411014',
    checkinTime: '2023-08-12 14:00:00',
    checkoutTime: '2023-08-15 15:00:00'
  },
  {
    id: 5,
    clientName: 'Aditya',
    therapistName: 'Karki',
    therapistContact: '9999999998',
    status: constants.appointStatusCompleted,
    actualCheckinTime: '2023-08-12 13:00:00',
    actualCheckoutTime: '2023-08-12 14:00:00',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi, Pune 411014',
    checkinTime: '2023-08-12 14:00:00',
    checkoutTime: '2023-08-15 15:00:00'
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  APPOINTMENT_DATA: any;
  constructor(private apiDataService: ApiDataServices){
    this.fetchAppointments();
  }
  public chart: any;
  displayedColumns: string[] = ['id', 'clientName', 'therapistName', 'therapistContact', 'status'];
  dataSource = APPOINTMENT_DATA;

  ngOnInit(): void {
    this.createChart();
  }

  getAppointmentsData() { }



  displayData(row: any) {
    console.log(row);
    //his.router.navigate(["/vendor-list/vendor/a/services/a/details/",sid]);
  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'pie', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Scheduled',
          'Completed',
          'In Progress',
          'Alert',
          'Emergency',
          'Cancelled',
        ],
        datasets: [
          {
            label: 'Count',
            data: [20, 11, 4, 2, 1, 2],
            backgroundColor: [
              'blue',
              'yellow',
              'green',
              'pink',
              'red',
              'black',
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }

  fetchAppointments(){
    try{
      this.apiDataService.postRequest({}, 'appointments')
      .subscribe((response) => {
        if(response.status == '200') {
          this.APPOINTMENT_DATA = response.data;
          console.log(this.APPOINTMENT_DATA);
        }else{
          console.log('error');
        }
      })
    }catch(e){
      console.log('error: ',e);
    }
  }
}
