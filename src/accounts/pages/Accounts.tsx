import React, { useEffect } from 'react';
import { IonContent, IonLabel, IonLoading, IonPage } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { accountsSelector, fetchAccounts } from '../AccountsStore';
import { loginSelector } from '../../login/LoginStore';
import SimpleHeader from '../../sharedComponents/SimpleHeader/SimpleHeader';

const AccountsPage: React.FC = () => {
  const { accounts, isLoading, errorMessage } = useSelector(accountsSelector);
  const { user } = useSelector(loginSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAccounts(user.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderAccountsList = () => {
    return accounts.map((account) => (
      <div key={parseInt(account.id)}>
        <IonLabel>{account.AvailableValue}</IonLabel>
      </div>
    ));
  };

  const renderNoAccounts = () => {
    return <IonLabel>You dont have accounts</IonLabel>;
  };

  const renderErrorMessage = () => {
    return <IonLabel>{errorMessage}</IonLabel>;
  };

  return (
    <IonPage>
      <SimpleHeader title={'My Accounts'} />
      <IonContent>
        {accounts.length ? renderAccountsList() : renderNoAccounts()}

        {errorMessage ? renderErrorMessage() : <></>}
        <IonLoading isOpen={isLoading} message={'fetching your accounts...'} />
      </IonContent>
    </IonPage>
  );
};

export default AccountsPage;
