import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  dataSource: any= new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  nodatafound: boolean = false;
  displayedColumns: string[] = ['bookName', 'author', 'publication', 'qty', 'price', 'branch', 'details'];
  bookData = [
    { bookName: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publication: 'Scribner', qty: 3, price: 500, branch: 'New York', details: 'A novel set in the Jazz Age' },
    { bookName: '1984', author: 'George Orwell', publication: 'Penguin Books', qty: 5, price: 300, branch: 'London', details: 'A dystopian social science fiction' },
    { bookName: 'To Kill a Mockingbird', author: 'Harper Lee', publication: 'J.B. Lippincott & Co.', qty: 2, price: 400, branch: 'Alabama', details: 'A novel about racial injustice' },
    { bookName: 'The Catcher in the Rye', author: 'J.D. Salinger', publication: 'Little, Brown and Company', qty: 4, price: 450, branch: 'California', details: 'A story about teenage angst' },
    { bookName: 'The Da Vinci Code', author: 'Dan Brown', publication: 'Doubleday', qty: 6, price: 600, branch: 'Paris', details: 'A mystery thriller' }
  ];
  constructor( ) { }

  ngOnInit(): void {
    this.getReport();
  }

  getReport() {
    this.dataSource = new MatTableDataSource(this.bookData);
    this.dataSource.paginator = this.paginator; 
    this.dataSource.sort = this.sort; 
    this.nodatafound = this.bookData.length === 0; 
  }
  

}
