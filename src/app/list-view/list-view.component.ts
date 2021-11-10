import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  date: string;
  registration_no:string;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'},
  {name: 'Arnab',date: '01 Jan 21',registration_no:'ab123XY',details: 'XYZ'}

];


@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})


export class ListViewComponent {

  panelOpenState = false;
  showFiller = false;

  constructor(private router:Router){

  }

  // openNav(page:string):void{
  //   this.router.navigate(['${page}']);
  // }


  displayedColumns: string[] = ['name','date','registration_no', 'details'];
  dataSource = ELEMENT_DATA;

}
