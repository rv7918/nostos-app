import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { House } from "../models/house.model";

@Injectable({
  providedIn: "root"
})

export class HouseService {
  baseUrl = "https://anapioficeandfire.com/api/houses/";

  constructor(private http: HttpClient) {}

  getPostsResponse(): Observable<House> {
    return this.http.get<House>(this.baseUrl).pipe(
      tap(data => data),
      catchError(this.handleError)
    );
  }

  // Error Handling for HttpResponse
  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occured: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${
        err.message
      }`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
