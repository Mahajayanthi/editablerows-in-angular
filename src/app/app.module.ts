;
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
//import { MatLabelModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
//import { MatTableDataSource } from '@angular/material/table';
 //import {MatTableDataSource} from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatComponent } from './mat/mat.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
//import { MaterialComponent } from './material/material.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  
    MatComponent,
    ConfirmDialogComponent,
    //MaterialComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatTableModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule
    //NgbModule.forRoot()
   // MatLabelModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
