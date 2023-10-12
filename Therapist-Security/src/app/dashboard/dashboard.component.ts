import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
//import * as bootstrap from 'bootstrap';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public chart: any;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
    this.createChart();
  }

  getAppointmentsData() {}

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
