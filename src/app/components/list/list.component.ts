import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HouseService } from '../../services/house.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

  p: number;
  itemsPerPage = 10;
  totalItems: any;

  public loading: boolean;
  public data: any = [];
  public errorMessage: string;

  constructor(private dataService: HouseService) {}

  getHouses() {
    this.loading = true;
    this.dataService.getPagedResponse().subscribe((data) => {
      this.data = data;
      this.totalItems = 450;
      this.loading = false;
    });
  }

  getIndex(i) {
    let pageI;
    if (!this.p || this.p === 1) {
      pageI = 0;
    } else {
      pageI= (this.p - 1) * this.itemsPerPage;
    }
    return i + 1 + pageI;
  }

  getPage(page) {
    this.loading = true;
    this.dataService.getPage(page).subscribe((data) => {
      this.data = data;
      this.totalItems = 450;
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