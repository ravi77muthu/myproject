import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StuServeService } from './stu-serve.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [StuServeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
