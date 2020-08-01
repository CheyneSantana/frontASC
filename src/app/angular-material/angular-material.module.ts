import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , MatTableModule
    , MatDividerModule
    , MatGridListModule
    , MatFormFieldModule
    , MatInputModule
    , MatSortModule
    , MatButtonModule
    , MatIconModule
    , MatSidenavModule
    , MatListModule
    , MatMenuModule
    , MatDialogModule
    , MatSelectModule
    , MatToolbarModule
  ],
  exports: [
    MatTableModule
    , MatDividerModule
    , MatGridListModule
    , MatFormFieldModule
    , MatInputModule
    , MatSortModule
    , MatButtonModule
    , MatIconModule
    , MatSidenavModule
    , MatListModule
    , MatMenuModule
    , MatDialogModule
    , MatSelectModule
    , MatToolbarModule
  ]
})
export class AngularMaterialModule { }
