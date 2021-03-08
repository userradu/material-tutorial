import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { TabsComponent } from './tabs/tabs.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CardsComponent } from './cards/cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TextComponent } from './text/text.component';
import { CustomComponent } from './custom/custom.component';
import { DialogComponent } from './dialog/dialog.component';
import { ExampleDialogComponent } from './dialog/example-dialog/example-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { IconsComponent } from './icons/icons.component';
import { ThemeChangerComponent } from './theme-changer/theme-changer.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { ThemePickerComponent } from './theme-picker/theme-picker.component';
import { ChartsModule } from 'ng2-charts';
import { ChartComponent } from './chart/chart.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TableComponent,
    FormComponent,
    CardsComponent,
    TextComponent,
    CustomComponent,
    DialogComponent,
    ExampleDialogComponent,
    IconsComponent,
    ThemeChangerComponent,
    ThemePickerComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    ColorPickerModule,
    MatMenuModule,
    ChartsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
