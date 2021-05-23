import { Component, OnInit, Input } from '@angular/core';
import { HouseService } from '../../services/house.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public loading: boolean;

  public data: any = [];
  public errorMessage: string;

  constructor(private dataService: HouseService) {}

  getHouses() {
    this.loading = true;
    this.dataService.getHouseResponse().subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
  }

  ngOnInit() {
    // this.dataService.getHouseResponse().subscribe({
    //   next: data => (this.data = data),
    //   error: err => (this.errorMessage = err)
    // });
    this.getHouses();
  }
}