import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { AdminReceptionistComponent } from './admin-receptionist/admin-receptionist.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { BillComponent } from './bill/bill.component';
import { HomeComponent } from './home/home.component';
import { ListOfAppointmentComponent } from './list/list-of-appointment/list-of-appointment.component';
import { ListOfDoctorComponent } from './list/list-of-doctor/list-of-doctor.component';
import { ListOfReceptionistComponent } from './list/list-of-receptionist/list-of-receptionist.component';
import { LitOfPatientComponent } from './list/lit-of-patient/lit-of-patient.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginDoctorComponent } from './login-doctor/login-doctor.component';
import { LoginPatientComponent } from './login-patient/login-patient.component';
import { LoginReceptionistComponent } from './login-receptionist/login-receptionist.component';
import { PageOfAdminComponent } from './page-of-admin/page-of-admin.component';
import { PageOfDoctorComponent } from './page-of-doctor/page-of-doctor.component';
import { PageOfPatientComponent } from './page-of-patient/page-of-patient.component';
import { PageOfReceptionistComponent } from './page-of-receptionist/page-of-receptionist.component';
import { PaymentComponent } from './payment/payment.component';
import { PrescribeComponent } from './prescribe/prescribe.component';
import { UpdateAppointmentComponent } from './update/update-appointment/update-appointment.component';
import { UpdateDoctorComponent } from './update/update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update/update-patient/update-patient.component';
import { UpdateReceptionistComponent } from './update/update-receptionist/update-receptionist.component';
import { ViewAppointmentComponent } from './viewInfo/view-appointment/view-appointment.component';
import { ViewDoctorComponent } from './viewInfo/view-doctor/view-doctor.component';
import { ViewPatientComponent } from './viewInfo/view-patient/view-patient.component';
import { ViewReceptionistComponent } from './viewInfo/view-receptionist/view-receptionist.component';
import { ViewsAppointmentFromDoctorComponent } from './views-appointment-from-doctor/views-appointment-from-doctor.component';

const routes: Routes = [

  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomeComponent },
  { path: 'adminLogin', component: LoginAdminComponent },
  { path: 'patientLogin', component: LoginPatientComponent },
  { path: 'receptionistLogin', component: LoginReceptionistComponent },
  { path: 'doctorLogin', component: LoginDoctorComponent },
  { path: 'patient-page', component: PageOfPatientComponent },
  { path: 'admin-page', component: PageOfAdminComponent },
  { path: 'doctor-page', component: PageOfDoctorComponent },
  { path: 'receptionist-page', component: PageOfReceptionistComponent },
  { path: 'appointment-page/:patient_id', component: AppointmentComponent },
  { path: 'payment-page', component: PaymentComponent },
  { path: 'bill-page/:patient_id', component: BillComponent},
  { path: 'views-page', component: ViewsAppointmentFromDoctorComponent},
  { path: 'prescribe-page', component: PrescribeComponent},
  { path: 'listDoctor-page', component: ListOfDoctorComponent},
  { path: 'listRecetionist-page', component: ListOfReceptionistComponent},
  { path: 'listAppointment-page', component: ListOfAppointmentComponent},
  { path: 'listPatient-page', component: LitOfPatientComponent},
  { path: 'update-appointment/:appointment_id', component: UpdateAppointmentComponent},
  { path: 'update-patient/:patient_id', component: UpdatePatientComponent},
  { path: 'update-doctor/:doctor_id', component: UpdateDoctorComponent},
  { path: 'update-receptionist/:receptionist_id', component: UpdateReceptionistComponent},
  { path: 'view-appointment/:appointment_id', component: ViewAppointmentComponent},
  { path: 'view-doctor/:doctor_id', component: ViewDoctorComponent},
  { path: 'view-patient/:patient_id', component: ViewPatientComponent},
  { path: 'view-receptionist/:receptionist_id', component: ViewReceptionistComponent},
  { path: 'adminReceptionist', component: AdminReceptionistComponent},
  { path: 'adminPatient', component: AdminPatientComponent},
 
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
