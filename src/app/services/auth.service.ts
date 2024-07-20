import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, catchError } from 'rxjs';
import { SessionResponse, TokenResponse } from '../interfaces/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly bearerToken = environment.bearerToken;
  private readonly tokenUrl = 'https://api.themoviedb.org/3/authentication/token/new';
  private readonly validateUrl =
    'https://api.themoviedb.org/3/authentication/token/validate_with_login';
  private readonly sessionUrl = 'https://api.themoviedb.org/3/authentication/session/new';
  constructor(private http: HttpClient) {}
  createSession(username: string | null, password: string | null): Observable<SessionResponse> {
    const headers = new HttpHeaders({
      accept: 'application/json',
      Authorization: `Bearer ${this.bearerToken}`,
    });
    return this.http.get<TokenResponse>(this.tokenUrl, { headers }).pipe(
      switchMap((tokenResponse) => {
        const requestToken = tokenResponse.request_token;
        const validateBody = {
          username,
          password,
          request_token: requestToken,
        };
        return this.http.post<TokenResponse>(this.validateUrl, validateBody, {
          headers,
        });
      }),
      switchMap((validateResponse) => {
        const requestToken = validateResponse.request_token;
        const sessionBody = { request_token: requestToken };
        return this.http.post<SessionResponse>(this.sessionUrl, sessionBody, { headers });
      }),
      catchError((error) => {
        console.error('Error in creating session', error);
        throw error;
      }),
    );
  }
}
