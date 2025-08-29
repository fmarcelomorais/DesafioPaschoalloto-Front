import { Routes } from '@angular/router';
import { ListagemComponent } from './components/listagem/listagem.component';
import { FormularioComponentComponent } from './components/formulario-component/formulario-component.component';

export const routes: Routes = [
    { path: '', component: ListagemComponent },
    { path: 'formulario', component: FormularioComponentComponent}
]
