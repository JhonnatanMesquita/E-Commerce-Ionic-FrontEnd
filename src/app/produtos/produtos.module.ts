import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components.module';
import { ProdutosPage } from './produtos.page';



const routes: Routes = [
  {
    path: '',
    component: ProdutosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProdutosPage]
})
export class ProdutosPageModule { }
