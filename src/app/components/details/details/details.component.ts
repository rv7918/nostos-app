import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../../services/house.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public loading: boolean;
  
  public data: any = [];
  public id = this.route.snapshot.params['i'];

  constructor(private dataService: HouseService, private route: ActivatedRoute) {}

  getHouseDetails() {
    this.loading = true;
    this.dataService.getHouseDetail(this.id).subscribe((data) => {
      this.data = data;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.getHouseDetails();
  }
}