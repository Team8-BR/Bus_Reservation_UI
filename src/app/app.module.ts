import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { UpdateBusComponent } from './update-bus/update-bus.component';
import { DeleteBusComponent } from './delete-bus/delete-bus.component';
import { ShowAllBusesComponent } from './show-all-buses/show-all-buses.component';
import { CheckAvaliabilityComponent } from './check-avaliability/check-avaliability.component';
import { CancelTicketComponent } from './cancel-ticket/cancel-ticket.component';
import { ViewTicketComponent } from './view-ticket/view-ticket.component';
import { GiveFeedbackComponent } from './give-feedback/give-feedback.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';
import { RemoveOwnerComponent } from './remove-owner/remove-owner.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path: 'addOwner', component: AddOwnerComponent},
  {path: 'removeOwner', component: RemoveOwnerComponent},
   {path: 'removeUser', component: RemoveOwnerComponent},
   {path: 'addBus', component: AddBusComponent},
   {path: 'updateBus', component: UpdateBusComponent},
   {path: 'deleteBus', component: DeleteBusComponent},
  // {path: 'getAllTickets', component: GetAllTicketsComponent},
  // {path: 'setAvaliability', component: SetAvaliabilityComponent},
  // {path: 'getAllFeedbacks', component: GetAllFeedbacksComponent},
  {path: 'showAllBuses', component: ShowAllBusesComponent},
  {path: 'bookTicket', component: BookTicketComponent},
  {path: 'viewTicket', component: ViewTicketComponent},
   {path: 'checkAvaliability', component: CheckAvaliabilityComponent},
  {path: 'updateUser', component: UpdateUserComponent},
  {path: 'cancelTicket', component: CancelTicketComponent},
  {path: 'giveFeedback', component: GiveFeedbackComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    BookTicketComponent,
    UpdateBusComponent,
    DeleteBusComponent,
    AddBusComponent,
    ShowAllBusesComponent,
    CheckAvaliabilityComponent,
    CancelTicketComponent,
    ViewTicketComponent,
    GiveFeedbackComponent,
    UpdateUserComponent,
    AddOwnerComponent,
    RemoveOwnerComponent,
    RemoveOwnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
