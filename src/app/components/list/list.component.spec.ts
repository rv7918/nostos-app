import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { NgxPaginationModule } from 'ngx-pagination';
import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HouseService } from '../../services/house.service';


describe('ListComponent', () => {
  let serviceHouse: HouseService;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [HttpClientTestingModule, NgxPaginationModule],
      providers: [HouseService]
    })
    .compileComponents();
    serviceHouse = TestBed.inject(HouseService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should display list of houses and .list-item not to be null', () => {
    let el: DebugElement = fixture.debugElement;
    fixture.detectChanges();
    const listItem = el.queryAll(By.css(".list-item"));
    expect(listItem).not.toBe(null);
  });

  it('Loading ... text to be present" ', () => {
    let loading= fixture.nativeElement.querySelector('.loading');
    expect(loading.textContent).toEqual('Loading ...');
  });
});
