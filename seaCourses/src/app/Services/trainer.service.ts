import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  private apiURL = 'http://localhost:5000/api/Trainer/AddTrainer';
  private basicURL = 'http://localhost:5000/api/Trainer';


  getAllTrainers(){
    return this.http.get('http://localhost:5000/api/Trainer');

  }

  posttrainers(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deletetrainersById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}
}
