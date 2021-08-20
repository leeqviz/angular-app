import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProvidersComponent } from './pages/management/providers/providers.component';
import { CategoriesComponent } from './pages/management/categories/categories.component';
import { ProductsComponent } from './pages/management/products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './services/guards/auth.guard';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ManagementComponent } from './pages/management/management.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AccountService } from './services/account.service';
import { AccountInterseptor } from './services/account.interseptor';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PaginationComponent } from './layouts/pagination/pagination.component';
import { LoadingComponent } from './layouts/loading/loading.component';
import { CatalogItemDetailComponent } from './pages/catalog/catalog-item-detail/catalog-item-detail.component';
import { BasketComponent } from './pages/basket/basket.component';
import { ClientGuard } from './services/guards/client.guard';
import { AdministratorGuard } from './services/guards/administrator.guard';
import { NotificationComponent } from './layouts/notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProvidersComponent,
    CategoriesComponent,
    ProductsComponent,
    LoginComponent,
    SignupComponent,
    CatalogComponent,
    ManagementComponent,
    ProfileComponent,
    AboutComponent,
    PrivacyComponent,
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    LoadingComponent,
    CatalogItemDetailComponent,
    BasketComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    AuthGuard,
    ClientGuard,
    AdministratorGuard,
    AccountService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AccountInterseptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
