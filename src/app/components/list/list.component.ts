import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../services/house.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public data: any = [];
  errorMessage: string;
  query: string;

  getDetails(i) {
    console.log(i +1);
  }

  getIndex() {
    this.data.map((item) => console.log(item))
  }

  constructor(private dataService: HouseService) {}

  ngOnInit() {
    this.dataService.getHouseResponse().subscribe({
      next: data => (this.data = data),
      error: err => (this.errorMessage = err)
    });
    this.getIndex();
  }
}