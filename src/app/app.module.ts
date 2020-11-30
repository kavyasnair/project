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
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AuthModule } from './auth/auth.module';
import {AuthGuard} from './auth.guard';
import {AuthsService} from './auths.service';












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
    ChartsModule,
    Ng2OrderModule,
    AuthModule,
    
    
    
    
  ],
  providers: [UsersService,AuthGuard,AuthsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
