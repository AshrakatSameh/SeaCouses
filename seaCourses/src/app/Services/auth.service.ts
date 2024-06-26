import { Injectable, inject } from '@angular/core';
import { LoginRequest } from '../interfaces/login-request';
import { Observable, map } from 'rxjs';
import { AuthResponse } from '../interfaces/auth-response';
import { HttpClient } from '@angular/common/http';
import { jwtDecode } from 'jwt-decode';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl : string = environment.apiUrl;
  private tokenKey='token';

  
  constructor(private http:HttpClient
  ) { }


  getUserDetail = () => {
    const token = this.getToken();
    if (!token) return null;
    const decodedToken: any = jwtDecode(token);
    const userDetail = {
      id: decodedToken.nameid,
      fullName: decodedToken.name,
      email: decodedToken.email,
      roles: decodedToken.role || [],
    };

    return userDetail;
  };

  login(data:LoginRequest): Observable<AuthResponse>{

    return this.http.post<AuthResponse>(`${this.apiUrl}account/login`,data)
    .pipe(map((response)=>{
      if(response.isSuccess){
        localStorage.setItem(this.tokenKey,response.token);
      }
      return response;
    }))
  }

  isLoggedIn = (): boolean => {
    const token = this.getToken();
    if (!token) return false;
    return !this.isTokenExpired();
  };

  private isTokenExpired() {
    const token = this.getToken();
    if (!token) return true;
    const decoded = jwtDecode(token);
    const isTokenExpired = Date.now() >= decoded['exp']! * 1000;
    if (isTokenExpired) this.logout();
    return isTokenExpired;
  }

  
  logout = (): void => {
    // localStorage.removeItem(this.tokenKey);
    localStorage.clear();
  };

  getToken = (): string | null =>
    localStorage.getItem(this.tokenKey) || '';
}
