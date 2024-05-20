import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  
  private tenp = environment.apiUrl + 'Trainee/getAllTrainees';

  private delApi= environment.apiUrl + 'Trainee/'
  getAllTrainees(){
    
    return this.http.get(this.tenp);

  }

//  

deletetraineesById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.delApi}/${id}`);
}
}
