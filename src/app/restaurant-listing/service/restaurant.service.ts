import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_URL_RL, K8ExternalIp } from 'src/app/constants/uri';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  // private apiUrl = K8ExternalIp+'/restaurant/fetchAllRestaurants';

  private apiUrl = API_URL_RL+'/restaurant/fetchAllRestaurants';

  constructor(private http: HttpClient) { }

  getAllRestaurants(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(error.message || error);
  }
}
