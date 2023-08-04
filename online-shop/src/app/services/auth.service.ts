// src/app/auth/auth.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import decode from 'jwt-decode';
import { Observable, tap } from 'rxjs';
export class AuthService {
    private apiUrl = '/api/auth'; // Replace with your backend API URL
  
    constructor(private http: HttpClient) {}
  
    login(username: string, password: string): Observable<any> {
      const loginData = { username, password };
      return this.http.post(`${this.apiUrl}/login`, loginData).pipe(
        tap((response: any) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);
          }
        })
      );
    }
  
    getToken(): string | null {
      return localStorage.getItem('token');
    }
  
    logout() {
      localStorage.removeItem('token');
    }
    getProfile(): Observable<any> {
        return this.http.get(`${this.apiUrl}/auth/profile`);
      }
      
  }