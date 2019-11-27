import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { PostsComponent } from "./posts/posts.component";
import { PostComponent } from "./post/post.component";
import { AboutExtraComponent } from "./about-extra/about-extra.component";
import { AppRoutingModule } from "./app-routing.module";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    AboutExtraComponent,
    ErrorPageComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
