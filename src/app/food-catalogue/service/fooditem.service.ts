import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { API_URL_FC, K8ExternalIp } from 'src/app/constants/uri';

@Injectable({
  providedIn: 'root'
})
export class FooditemService {

  // private apiUrl = K8ExternalIp+'/foodCatalogue/fetchRestaurantAndFoodItemsById/';

  private apiUrl = API_URL_FC+'/foodCatalogue/fetchRestaurantAndFoodItemsById/'

  constructor(private http: HttpClient) { }

  getFoodItemsByRestaurant(id:number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl+id}`)
        .pipe(
          catchError(this.handleError)
        );
    }

    private handleError(error: any) {
      console.error('An error occurred:', error);
      return throwError(error.message || error);
    }
}
