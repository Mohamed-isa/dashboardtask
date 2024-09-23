import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-summary-report',
  templateUrl: './summary-report.component.html',
  styleUrls: ['./summary-report.component.css']
})
export class summaryReportComponent implements OnInit {
  Reports: any[] = [];
  dataSource: any = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nodatafound: boolean = false;
  displayedColumns: string[] = ['vessel', 'repoType', 'refNo', 'action', 'descr', 'raisedOn'];
  bookData = [
    { vessel: 'Alpha', repoType: 'Near Miss', refNo: '675765765765', action: 'Prevention', descr: 'Prevention jhgj', raisedOn: '2023-09-10' },
    { vessel: 'Alpha1', repoType: 'Near Miss', refNo: '675765765765', action: 'Prevention', descr: 'Prevention jhgj Doe', raisedOn: '2023-08-15' },
    { vessel: 'Alpha4', repoType: 'Near Miss', refNo: ' 67576576576567', action: 'Prevention', descr: 'Sam Prevention jhgj', raisedOn: '2023-07-20' },
    { vessel: 'Alpha6', repoType: 'Near Miss Office', refNo: '67587765765765', action: 'Prevention', descr: 'Lisa Prevention jhgj', raisedOn: '2023-09-18' },
    { vessel: 'Alpha', repoType: 'Inspection', refNo: '6757657465765', action: 'Prevention', descr: 'Prevention jhgj Black', raisedOn: '2023-09-25' }
  ];

  constructor() { }

  ngOnInit(): void {
    this.getReport();
  }
getReport(){
  this.dataSource = new MatTableDataSource(this.bookData);
if(this.bookData.length ==0){
  this.nodatafound = true;
}
}

}
