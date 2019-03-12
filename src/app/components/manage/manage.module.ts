import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { ManageRoutingModule } from './manage.routing.module';
import { ManageService } from './services/manage.service';
import { ComponentsModule } from 'src/app/commons/components/components.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ManageComponent],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  providers: [ManageService],
  schemas:[NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA]
})
export class ManageModule { }
