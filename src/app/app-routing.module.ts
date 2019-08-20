import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsertComponent} from './insert/insert.component';
import { DisplayComponent } from './display/display.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [  
{ path :'insert', component:InsertComponent},
{ path :'display', component:DisplayComponent},
{ path :'search', component:SearchComponent},
{ path :'update/:factId', component:UpdateComponent},
{ path :'delete', component:DeleteComponent},
{ path :'edit', component:EditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
