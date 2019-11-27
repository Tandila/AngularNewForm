import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService, Users } from "../auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  user: Users[] = [];
  username = "";
  password = "";

  constructor(private authService: AuthService) {}
  form: FormGroup;

  // users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  ngOnInit() {
    this.form = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  authUser() {
    this.authService
      .authUser({
        username: this.form.value.username,
        password: this.form.value.password
      })
      .subscribe(
        user => {
          this.user.push(user);
          this.form.reset();
        },
        error => {
          if (error.error.text) {
            localStorage.setItem("token", error.error.text);
            this.authService.login();
          }
        }
      );
  }
}
