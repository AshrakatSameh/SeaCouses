import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PhotoService implements OnInit {

  private apiUrl= environment.apiUrl + 'Photo';
  fileToUpload!: File | null;
  photoArray: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
   
  }
  getAllPhotos(){
    
    return this.http.get(this.apiUrl);

  }
  deletePhotoById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
