import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ContactSupportService {
  private apiUrl = environment.apiUrl;
  private baseApi= this.apiUrl + 'TechSupport/getAllTechSupports'
  constructor( private http: HttpClient) { }

  getAllTrainers(){
    
    return this.http.get(this.baseApi);

  }

//   postcourses(data: any): Observable<any> {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post(this.apiUrl + 'TechSupport/CreateTechSupport', data, { headers });
// }

deletecontactSupportsById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}TechSupport/${id}`);
}

}
