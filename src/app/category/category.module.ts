import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryItemComponent } from './category-item';
import { CategoryDataService, CategoryResolveService } from './services';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    CategoryRoutingModule,
  ],
  providers: [
    CategoryDataService,
    CategoryResolveService,
  ]
})
export class CategoryModule { }
