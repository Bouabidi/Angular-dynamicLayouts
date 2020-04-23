import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { CentredContentLayoutComponent } from './centred-content-layout/centred-content-layout.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [MainLayoutComponent, CentredContentLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [MainLayoutComponent, CentredContentLayoutComponent],
})
export class LayoutModule { }
