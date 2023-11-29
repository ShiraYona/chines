import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiftsListComponent } from './manager/gifts-list/gifts-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { RatingModule } from 'primeng/rating';
import { ToolbarModule } from 'primeng/toolbar';
import { ConfirmationService } from 'primeng/api';
import { GiftEditComponent } from './manager/gift-edit/gift-edit.component';
import { DonorsListComponent } from './manager/donors-list/donors-list.component';
import { DonorEditComponent } from './manager/donor-edit/donor-edit.component';
import { HomeComponent } from './home/home.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { UserGiftsListComponent } from './user/user-gifts-list/user-gifts-list.component';
import { UserHomeComponent } from './user/user-gifts-list/user-home/user-home.component';
import { ShoppingBagComponent } from './user/shopping-bag/shopping-bag.component';
//import { giftsListComponent } from './bank-list/gifts-list.component';
// import { BankEditComponent } from './bank-edit/bank-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    GiftsListComponent,
    GiftEditComponent,
    DonorsListComponent,
    DonorEditComponent,
    HomeComponent,
    ManagerHomeComponent,
    UserGiftsListComponent,
    UserHomeComponent,
    ShoppingBagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TableModule,
    HttpClientModule,
    InputTextModule,
    DialogModule,
    ToolbarModule,
    ConfirmDialogModule,
    InputNumberModule,
    InputTextareaModule,
    RadioButtonModule,
    DropdownModule,
    ButtonModule,
    ReactiveFormsModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
