import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  
  private tenp = environment.apiUrl + 'Trainer';

  getAllTrainers(){
    
    return this.http.get(this.tenp);

  }

  posttrainers(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.tenp + '/AddTrainer', data, { headers });
}

deletetrainersById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.tenp}/${id}`);
}
}