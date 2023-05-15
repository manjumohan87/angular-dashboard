import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements AfterViewInit{
  displayedColumns: string[] = ['id', 'name', 'salary', 'country'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}


export interface PeriodicElement {
  name: string;
  id: number;
  salary: number;
  country: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Dakota Rice', salary: 36738, country: 'Niger'},
  {id: 2, name: 'Helium', salary: 40000, country: 'Curaçao'},
  {id: 3, name: 'Lithium', salary: 45000, country: 'Netherlands'},
  {id: 4, name: 'Beryllium', salary: 90000, country: 'Korea, South'},
  {id: 5, name: 'Boron', salary: 50000, country: 'Niger'},
  // {id: 6, name: 'Carbon', salary: 35000, country: 'Netherlands'},
  // {id: 7, name: 'Nitrogen', salary: 45000, country: 'Curaçao'},
  // {id: 8, name: 'Oxygen', salary: 55000, country: 'Netherlands'},
  // {id: 9, name: 'Fluorine', salary: 40000, country: 'Niger'},
  // {id: 10, name: 'Neon', salary: 20.1797, country: 'Ne'},
  // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];
