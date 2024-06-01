import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditcardsComponent } from './creditcards.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { DeleteComponent } from './delete/delete.component';
import { PagenotFoundComponent } from '../pagenot-found/pagenot-found.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [{ path: '', component: CreditcardsComponent},
  { path: 'add/:id', component: AddComponent},
  { path: 'view/:id', component: ViewComponent},
  { path: 'edit/:id', component: EditComponent},
  { path: 'delete/:id', component: DeleteComponent},
  { path: '**', component: PagenotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditcardsRoutingModule { }
