import { TestBed, inject } from '@angular/core/testing';
import { HouseService } from './house.service';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HouseService', () => {
  let serviceHouse: HouseService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule], 
      providers: [HouseService]
    });
    serviceHouse = TestBed.inject(HouseService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(serviceHouse).toBeTruthy();
  });

  it('Test to return House Algood in response', () => {
    let dummyResponse = {
      "url": "https://anapioficeandfire.com/api/houses/1",
      "name": "House Algood",
      "region": "The Westerlands",
      "coatOfArms": "A golden wreath, on a blue field with a gold border(Azure, a garland of laurel within a bordure or)",
      "words": "",
      "titles": [
      ""
      ],
      "seats": [
      ""
      ],
      "currentLord": "",
      "heir": "",
      "overlord": "https://anapioficeandfire.com/api/houses/229",
      "founded": "",
      "founder": "",
      "diedOut": "",
      "ancestralWeapons": [
      ""
      ],
      "cadetBranches": [],
      "swornMembers": []
      }

      serviceHouse.getPagedResponse().subscribe(houses => {
        expect(houses.name).toContain('House Algood');
        expect(houses.url).toEqual('https://anapioficeandfire.com/api/houses/1');
      });
      const req = httpMock.expectOne({ method: 'GET', url: 'https://anapioficeandfire.com/api/houses?page=1&pageSize=10' });
      expect(req.request.method).toEqual('GET');
      req.flush(dummyResponse);
  });

  it('getPagedresponse() method to not be null', inject([HouseService], async (myService: HouseService) => {
        const result = await myService.getPagedResponse()
        expect(result).not.toBeNull();
     })
);

});
