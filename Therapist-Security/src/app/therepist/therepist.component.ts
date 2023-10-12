import { Component } from '@angular/core';
import { Therepist } from '../therepist.model';
import * as constants from '../constants';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-therepist',
  templateUrl: './therepist.component.html',
  styleUrls: ['./therepist.component.css']
})
export class TherepistComponent {
  ngOnInit(): void {
    console.log('AppointmentComponentComponent initialized!');
  }
  public th: Therepist;

  constructor(private http: HttpClient) {
    this.th = {
      id: 1,
      name: "Th-1",
      contact: "9975536814",
      address: 'Pune-412114',
    };
  }

}
