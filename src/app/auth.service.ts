import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Router } from "@angular/router";

export interface Users {
  id?: number;
  username: string;
  password: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private isAuth = false;

  login() {
    this.isAuth = true;
    this.router.navigate(["/posts"]);
  }

  logout() {
    this.isAuth = false;
    localStorage.removeItem("token");
    this.router.navigate(["/"]);
    alert("your are logged out");
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.isAuth);
      }, 1000);
    });
  }

  addUser(user: Users): Observable<Users> {
    return this.http.post<Users>(
      "http://172.24.1.26:2020/api/auth/register",
      user
    );
  }
  authUser(user: Users) {
    return this.http.post<Users>(
      "http://172.24.1.26:2020/api/auth/login",
      user
    );
  }
}
