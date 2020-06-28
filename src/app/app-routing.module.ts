import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AddblogComponent } from './addblog/addblog.component';
import { HomepageComponent} from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './auth.guard';
import { LogoutGuard } from './logout.guard';
import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'register', component: RegisterComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'addblog', component: AddblogComponent },
  { path: 'update/:j', component: UpdateComponent },
  { path: '**', component: NotFoundComponent,canActivate:[LogoutGuard] }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
