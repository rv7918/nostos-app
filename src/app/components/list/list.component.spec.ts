import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import {NgxPaginationModule} from 'ngx-pagination';
import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule, NgxPaginationModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
