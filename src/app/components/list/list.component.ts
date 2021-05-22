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

  constructor(private dataService: HouseService) {}

  ngOnInit() {
    this.dataService.getPostsResponse().subscribe({
      next: data => (this.data = data),
      error: err => (this.errorMessage = err)
    });
  }
}