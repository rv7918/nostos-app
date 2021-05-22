import { Component, OnInit } from '@angular/core';
import { HouseService } from '../../../services/house.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  public data: any = [];
  errorMessage: string;
  id = this.route.snapshot.params['i'];

  constructor(private dataService: HouseService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.dataService.getHouseDetail(this.id).subscribe({
      next: data => (this.data = data, console.log(this.data)),
      error: err => (this.errorMessage = err)
    });
  }
}