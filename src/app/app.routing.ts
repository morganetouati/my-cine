import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from "./accueil/index";
import { NavComponent } from "./nav/index";
import { InscriptionComponent } from "./inscription/index";
import { LoginComponent } from "./login/index";
import { ContactComponent } from "./contact/index";
import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
    //full : makes sure the path is absolute path
    {
    	path: 'accueil',
        component: AccueilComponent,
        canActivate: [AuthGuard]
    },
    {
    	path: 'nav',
    	component: NavComponent
    },
    {
    	path: 'inscription',
    	component: InscriptionComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
    	path: 'contact',
    	component: ContactComponent
    },
    { path: '**', redirectTo: '' }
];
export const routing = RouterModule.forRoot(appRoutes);
