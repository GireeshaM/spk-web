import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselModule } from 'primeng/carousel';
import { WebModulesModule } from './web-modules/web-modules.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CareersComponent } from './careers/careers.component';
import { CompanyComponent } from './company/company.component';
import { InsightsComponent } from './insights/insights.component';
import { HttpClientModule } from '@angular/common/http';
import { InsightsBlogComponent } from './insights-blog/insights-blog.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    CareersComponent,
    CompanyComponent,
    InsightsComponent,
    InsightsBlogComponent,
    ChatbotComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    WebModulesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
