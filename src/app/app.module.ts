import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormnComponent } from './formn/formn.component';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './users.service';
import { ChartsModule } from 'ng2-charts';







@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormnComponent,
    ListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ChartsModule
    
    
    
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
