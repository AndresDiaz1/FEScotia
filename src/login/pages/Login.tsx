import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonLabel, IonLoading, IonPage } from '@ionic/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import './Login.scss';
import InputFloatingLabel from '../components/inputCustom/InputCustom';
import { useDispatch, useSelector } from 'react-redux';
import { loginSelector, signIn } from '../LoginStore';
import { PATHS } from '../../AppConstants';
import { useHistory } from 'react-router';
import { saveUserOnDB } from '../../data/LoginData';
import { fetchAccounts } from '../../accounts/AccountsStore';

const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>('');
  const [userPass, setUserPassword] = useState<string>('');
  const [isPasswordVisible, setPasswordVisibility] = useState<boolean>(false);
  const { user, logginIn, errorMessage } = useSelector(loginSelector);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (user.id) {
      saveUserOnDB(user);
      dispatch(fetchAccounts(user.id));
      history.push(PATHS.ACCOUNTS);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  const changeInputType = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const login = () => {
    dispatch(signIn({ name: userName, CC: userPass }));
  };

  return (
    <IonPage>
      <IonContent className="login-page ion-padding">
        <div className="login-page__content">
          <div className="login-page__image-container">
            <FontAwesomeIcon icon={faMoneyCheck} size="5x" color="primary" />
          </div>
          <div className="login-page__form">
            <form>
              <InputFloatingLabel
                initialValue={userName}
                label={'Name'}
                type={'text'}
                onChange={({ detail: { value } }) => {
                  if (value != null) setUserName(value);
                }}
                containerClassName={'login-page__input'}
              />
              <InputFloatingLabel
                initialValue={userPass}
                label={'C.C'}
                type={isPasswordVisible ? 'text' : 'password'}
                inputTypeHandler={changeInputType}
                iconName={isPasswordVisible ? faEyeSlash : faEye}
                onChange={({ detail: { value } }) => {
                  if (value != null) setUserPassword(value);
                }}
                containerClassName={'ion-margin-top login-page__input'}
              />
              <IonButton color="scotia-red ion-margin-top" expand="full" onClick={() => login()}>
                Log in
              </IonButton>
              {errorMessage ? <IonLabel color="danger"> {errorMessage}</IonLabel> : <></>}
            </form>
          </div>
        </div>
        <IonLoading isOpen={logginIn} message={'Please wait...'} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
