import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService, Users } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  user: Users[] = [];
  username = "";
  password = "";

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.form = new FormGroup({
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      username: new FormControl(null, [
        Validators.required])
    });
  }

  addUser() {
    this.authService
      .addUser({
        username: this.form.value.username,
        password: this.form.value.password
      })
      .subscribe(
        user => {
          this.user.push(user);
          this.form.reset();
        },
        error => {
          console.log(error.error.text);
        }
      );
  }
}
