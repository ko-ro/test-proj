import {MatButtonModule} from '@angular/material/button';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { ByDesignComponent } from './by-design/by-design.component';
import { MyDesignComponent } from './my-design/my-design.component';

@NgModule({
  declarations: [
    AppComponent,
    ByDesignComponent,
    MyDesignComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        AppRoutingModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
