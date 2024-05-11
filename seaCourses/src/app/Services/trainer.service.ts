import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {

  constructor(private http: HttpClient) { }

  private apiURL = 'https://localhost:7146/api/Trainer/AddTrainer';
  private basicURL = 'https://localhost:7146/api/Trainer';


  getAllTrainers(){
    return this.http.get('https://localhost:7146/api/Trainer');

  }

  posttrainers(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiURL, data, { headers });
}

deletetrainersById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.basicURL}/${id}`);
}
}
