import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LoginComponent} from './component/login/login.component';
import {RegisterComponent} from './component/register/register.component';
import {HomeComponent} from './component/home/home.component';
import {ProfileComponent} from './component/profile/profile.component';
import {BoardAdminComponent} from './component/board-admin/board-admin.component';
import {BoardModeratorComponent} from './component/board-moderator/board-moderator.component';
import {BoardUserComponent} from './component/board-user/board-user.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';
import {CountedOrderTableComponent} from './component/counted-order-table/counted-order-table.component';
import {CountedOrderModal} from './modal/order-modal/counted-order-modal';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BackgroundComponent} from './component/background/background.component';
import {HorizontalChartComponent} from './component/horizontal-chart/horizontal-chart.component';
import {ChartListComponent} from './component/chart-list/chart-list.component';
import {ChartsModule} from 'ng2-charts';
import { SortableColumnComponent } from './component/sortable-column/sortable-column.component';
import { NotificationModalComponent } from './modal/notification-modal/notification-modal.component';
import { AboutComponent } from './component/about/about.component';
import {NotificationTableComponent} from './component/notification-table/notification-table.component';
import { BotComponent } from './component/bot/bot.component';
import {MarketOrderModalComponent} from "./modal/market-order-modal/market-order-modal.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    CountedOrderTableComponent,
    CountedOrderModal,
    BoardUserComponent,
    BackgroundComponent,
    HorizontalChartComponent,
    ChartListComponent,
    SortableColumnComponent,
    NotificationModalComponent,
    NotificationTableComponent,
    AboutComponent,
    MarketOrderModalComponent,
    BotComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
