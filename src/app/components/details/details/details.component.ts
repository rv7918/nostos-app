import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../../services/house.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public data: any = [];
  errorMessage: string;
  id = '1';

  constructor(private dataService: HouseService) {}

  ngOnInit() {
    this.dataService.getHouseDetail(this.id).subscribe({
      next: data => (this.data = data, console.log(this.data)),
      error: err => (this.errorMessage = err)
    });
  }
}