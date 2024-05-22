import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TellingUSService {

  constructor(private http: HttpClient) { }

  
  private tenp = environment.apiUrl + 'TellingAboutUs/getAllOpinions';

  private delApi= environment.apiUrl + 'TellingAboutUs/'


  getAllOpinions(){
    
    return this.http.get(this.tenp);

  }

  deleteOpinionById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.delApi}${id}`);
  }



}
