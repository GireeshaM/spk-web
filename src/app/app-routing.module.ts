import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { CompanyComponent } from './company/company.component';
import { InsightsComponent } from './insights/insights.component';
import { InsightsBlogComponent } from './insights-blog/insights-blog.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'itConsulting',
    loadChildren: () =>
      import('../app/web-modules/web-modules.module').then(
        (m) => m.WebModulesModule
      ),
  },
  {
    path: 'contactUs',
    component: ContactUsComponent,
  },
  {
    path: 'careers',
    component: CareersComponent,
  },
  {
    path: 'company',
    component: CompanyComponent,
  },
  {
    path: 'insights',
    component: InsightsComponent,
  },
  {
    path: 'insightsBlog',
    component: InsightsBlogComponent,
  },

  //{ path: '**', pathMatch: 'full', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
