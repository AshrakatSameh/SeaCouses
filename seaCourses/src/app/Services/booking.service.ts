import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  
  private tenp = environment.apiUrl + 'Trainee';

  getAllTrainees(){
    
    return this.http.get(this.tenp);

  }

  posttrainees(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.tenp + '/AddTrainer', data, { headers });
}

deletetraineesById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.tenp}/${id}`);
}
}
