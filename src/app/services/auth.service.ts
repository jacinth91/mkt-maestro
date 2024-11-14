import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}
  private isAuthenticated = false;
  private loggedInUserKey = 'loggedInUser';
  login(username: string, password: string): boolean {
    if (username === 'guest' && password === 'guest') {
      localStorage.setItem(this.loggedInUserKey, JSON.stringify({username}));
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.loggedInUserKey);
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return localStorage.getItem(this.loggedInUserKey) !== null;
  }
}