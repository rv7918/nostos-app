import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { DetailsComponent } from './details.component';
import { ActivatedRoute, RouterModule} from '@angular/router';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],
      imports: [HttpClientTestingModule,  RouterModule.forRoot([])], 

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('Back button to be in the view with the text "back" ', () => {
    let button= fixture.nativeElement.querySelector('.btn');
    expect(button.textContent).toEqual('Back');
  });

  it('Loading ... text to be present" ', () => {
    let loading= fixture.nativeElement.querySelector('.loading');
    expect(loading.textContent).toEqual('Loading ...');
  });

});
