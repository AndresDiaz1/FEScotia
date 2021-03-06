import React, { useEffect, useState } from 'react';
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
import { getParsedDBItem } from './data/mainDB';
import { User } from './login/LoginTypes';
import { useDispatch } from 'react-redux';
import { setLocallySavedUser } from './login/LoginStore';
import { fetchAccounts } from './accounts/AccountsStore';
import DetailsPage from './details/pages/Details';

const App: React.FC = () => {
  const [savedUser, setSavedUser] = useState<User>();
  const dispatch = useDispatch();

  const validateSavedUser = async () => {
    const savedUser = await getParsedDBItem('user');
    setSavedUser(savedUser);
    if (savedUser?.id) {
      dispatch(setLocallySavedUser(savedUser));
      dispatch(fetchAccounts(savedUser.id));
    }
  };

  useEffect(() => {
    validateSavedUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IonApp>
      <IonReactRouter>
        <Route path={PATHS.LOGIN} component={LoginPage} exact={true} />
        <Route path={PATHS.ACCOUNTS} component={AccountsPage} exact={true} />
        <Route path={PATHS.DETAILS} component={DetailsPage} exact={true} />
        <Route
          path="/"
          render={() => {
            return savedUser?.id ? <Redirect to={PATHS.ACCOUNTS} /> : <Redirect to={PATHS.LOGIN} />;
          }}
        />{' '}
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
