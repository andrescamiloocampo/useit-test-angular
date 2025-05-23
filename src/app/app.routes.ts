import { Routes } from '@angular/router';
import { DashboardComponent, UserDetailComponent } from './pages';
import { MainLayoutComponent } from './components/layouts';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { authGuard } from './guards/auth-guard.guard';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: DashboardComponent },
      { 
        path: 'user/:id', 
        component: UserDetailComponent,
        data: { renderMode: 'default' }
      },
    ],
  },
];
