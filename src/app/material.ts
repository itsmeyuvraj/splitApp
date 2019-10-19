
import {NgModule} from '@angular/core'
import{
MatSidenavModule,
MatToolbarModule,
MatIconModule,
MatListModule,
MatTabsModule,
MatCardModule,

} from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input'; 
import {MatDialogModule} from '@angular/material/dialog';






@NgModule({
  imports: [  MatSidenavModule,
    MatToolbarModule,
    MatDialogModule,
    FormsModule,
    MatCheckboxModule,
    MatTabsModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
  MatCardModule],
  exports: [ MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatGridListModule]
})
export class MaterialModule {}