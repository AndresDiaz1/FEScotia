import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.scss';
import { PATHS } from './AppConstants';
import LoginPage from './login/pages/Login';
import AccountsPage from './accounts/pages/Accounts';
import { useSelector } from 'react-redux';
import { loginSelector } from './login/LoginStore';

const App: React.FC = () => {
  const { user, } = useSelector(loginSelector);

  return(
    <IonApp>
    <IonReactRouter>
      <Route path={PATHS.LOGIN} component={LoginPage} exact={true} />
      <Route path={PATHS.ACCOUNTS} component={AccountsPage} exact={true} />
      <Route
          path="/"
          render={() => {
            return user.id ? <Redirect to={PATHS.ACCOUNTS} /> : <Redirect to={PATHS.LOGIN} />;
          }}
        />    </IonReactRouter>
  </IonApp>
  );
}



export default App;
