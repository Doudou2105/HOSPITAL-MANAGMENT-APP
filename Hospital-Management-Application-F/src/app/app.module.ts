import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginReceptionistComponent } from './login-receptionist/login-receptionist.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { ServiceDoctorComponent } from './service-doctor/service-doctor.component';
import { ServiceReceptionistComponent } from './service-receptionist/service-receptionist.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageOfPatientComponent } from './page-of-patient/page-of-patient.component';
import { PageOfDoctorComponent } from './page-of-doctor/page-of-doctor.component';
import { PageOfReceptionistComponent } from './page-of-receptionist/page-of-receptionist.component';
import { PageOfAdminComponent } from './page-of-admin/page-of-admin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { PaymentComponent } from './payment/payment.component';
import { BillComponent } from './bill/bill.component';
import { PrescribeComponent } from './prescribe/prescribe.component';
import { ViewsAppointmentFromDoctorComponent } from './views-appointment-from-doctor/views-appointment-from-doctor.component';
import { UpdateAppointmentComponent } from './update/update-appointment/update-appointment.component';
import { ListOfAppointmentComponent } from './list/list-of-appointment/list-of-appointment.component';
import { ListOfDoctorComponent } from './list/list-of-doctor/list-of-doctor.component';
import { LitOfPatientComponent } from './list/lit-of-patient/lit-of-patient.component';
import { ListOfReceptionistComponent } from './list/list-of-receptionist/list-of-receptionist.component';
import { ViewAppointmentComponent } from './viewInfo/view-appointment/view-appointment.component';
import { ViewDoctorComponent } from './viewInfo/view-doctor/view-doctor.component';
import { ViewReceptionistComponent } from './viewInfo/view-receptionist/view-receptionist.component';
import { ViewPatientComponent } from './viewInfo/view-patient/view-patient.component';
import { UpdatePatientComponent } from './update/update-patient/update-patient.component';
import { UpdateDoctorComponent } from './update/update-doctor/update-doctor.component';
import { UpdateReceptionistComponent } from './update/update-receptionist/update-receptionist.component';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { AdminReceptionistComponent } from './admin-receptionist/admin-receptionist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginAdminComponent,
    LoginReceptionistComponent,
    LoginDoctorComponent,
    LoginPatientComponent,
    ServiceDoctorComponent,
    ServiceReceptionistComponent,
    ContactUsComponent,
    AboutUsComponent,
    PageOfPatientComponent,
    PageOfDoctorComponent,
    PageOfReceptionistComponent,
    PageOfAdminComponent,
    AppointmentComponent,
    PaymentComponent,
    BillComponent,
    PrescribeComponent,
    ViewsAppointmentFromDoctorComponent,
    UpdateAppointmentComponent,
    ListOfAppointmentComponent,
    ListOfDoctorComponent,
    LitOfPatientComponent,
    ListOfReceptionistComponent,
    ViewAppointmentComponent,
    ViewDoctorComponent,
    ViewReceptionistComponent,
    ViewPatientComponent,
    UpdatePatientComponent,
    UpdateDoctorComponent,
    UpdateReceptionistComponent,
    AdminPatientComponent,
    AdminReceptionistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule ,
    ReactiveFormsModule
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
