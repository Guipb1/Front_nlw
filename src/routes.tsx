import React from 'react'; /* toda vez que colocar um componente em tela precisa importar o react*/
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphange';
import CreateOrphanage from './pages/CreateOrphanage';
/* criando um componente*/
/* declarando as rotas, todas as rotas precisa ter o browserrouter*/
/* path é o caminho que vou utilizar*/
/*estrutura padrao de um componente*/
/*exact = compara se a rota esta igual*/
/*switch = apenas uma rota é chamada ao mesmo tempo*/
function Routes() {
    return (
        <BrowserRouter> 
           <Switch>
            <Route path="/" exact component={Landing}/>  
            <Route path="/app" component={OrphanagesMap}/>

            <Route path="/orphanages/create" component={CreateOrphanage}/> 
            <Route path="/orphanage/:id" component={Orphanage}/>  
           </Switch>
        </BrowserRouter>
    );
}

export default Routes;