import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment.model';
import Chart from 'chart.js/auto';
//import * as bootstrap from 'bootstrap';

const APPOINTMENT_DATA: Appointment[] = [
  {
    id: 1,
    clientName: 'c1',
    therapistName: 'Hydrogen',
    therapistContact: '1.0079',
    status: 'H',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 2,
    clientName: 'c1',
    therapistName: 'Helium',
    therapistContact: '4.0026',
    status: 'He',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 3,
    clientName: 'c1',
    therapistName: 'Lithium',
    therapistContact: '6.941',
    status: 'Li',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 4,
    clientName: 'c1',
    therapistName: 'Beryllium',
    therapistContact: '9.0122',
    status: 'Be',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 5,
    clientName: 'c1',
    therapistName: 'Boron',
    therapistContact: '10.811',
    status: 'B',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 6,
    clientName: 'c1',
    therapistName: 'Carbon',
    therapistContact: '12.0107',
    status: 'C',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 7,
    clientName: 'c1',
    therapistName: 'Nitrogen',
    therapistContact: '14.0067',
    status: 'N',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 8,
    clientName: 'c1',
    therapistName: 'Oxygen',
    therapistContact: '15.9994',
    status: 'O',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 9,
    clientName: 'c1',
    therapistName: 'Fluorine',
    therapistContact: '18.9984',
    status: 'F',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
  {
    id: 10,
    clientName: 'c1',
    therapistName: 'Neon',
    therapistContact: '20.1797',
    status: 'Ne',
    actualCheckinTime: 'yash',
    actualCheckoutTime: 'yash',
    therapistId: 1,
    clientId: 1,
    clientAddress: 'Kharadi',
    checkinTime: '',
    checkoutTime: '',
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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
}
