import { Routes } from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component'), // Per utilizzare correttamente il lazy loading per il caricamento delle componenti ( Quindi utilizzando il loadComponent )
                                                                      // Bisogna ricordarsi di impostare la componente come default ( Vedere la componente loginComponent, nella dichiarazione della classe )
    children: [
      {
        path: '',
        title: 'Home', // Il title viene utilizzato per mostrare su broswer la pagina in cui siamo,
                       // Se guardiamo la sezione delle pagine ( Sopra la barra di ricerca dell'url ) vedremo che ci sarà scritto "Formazione - Login"
        loadComponent: () =>
          import('./components/home-list/home-list.component'),
      },
    ],
  },
];