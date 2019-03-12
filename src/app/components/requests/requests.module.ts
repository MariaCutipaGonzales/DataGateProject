import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests.component';
import { RequestsRoutingModule } from './requests.routing.module';
import { ComponentsModule } from 'src/app/commons/components/components.module';
import { RequestsService } from './services/requests.service';

@NgModule({
  declarations: [RequestsComponent],
  imports: [
    CommonModule,
    RequestsRoutingModule,
    ComponentsModule
  ],
  providers: [RequestsService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestsModule { }
