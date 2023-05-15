import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {
    path:'', redirectTo:'dashboard',pathMatch:'full'
  },
  {path:'user-profile',component:UserProfileComponent},
  {path:'table-list',component:TableListComponent},
  {path:'typography',component:TypographyComponent},
  {path:'icons',component:IconsComponent},
  {path:'notifications',component:NotificationsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
