import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

// pages 
import { AppsComponent } from './pages/apps/apps.component';
import { OtherComponent } from './pages/other/other.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// components 
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { IpgFormComponent } from './components/ipg-form/ipg-form.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { AppListItemComponent } from './components/app-list-item/app-list-item.component';
import { ToastComponent } from './components/toast/toast.component';

const appRoutes: Routes = [
  { path: 'apps', component: AppsComponent },
  { path: 'other', component: OtherComponent },
  { path: '', component: AppsComponent },
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    AppsComponent,
    OtherComponent,
    NotFoundComponent,
    IpgFormComponent,
    AppListComponent,
    AppListItemComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
