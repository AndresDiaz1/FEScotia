import React from 'react';
import { IonContent, IonLabel, IonLoading, IonPage } from '@ionic/react';
import { useSelector } from 'react-redux';
import { accountsSelector } from '../AccountsStore';
import SimpleHeader from '../../sharedComponents/SimpleHeader/SimpleHeader';

const AccountsPage: React.FC = () => {
  const { accounts, isLoading, errorMessage } = useSelector(accountsSelector);

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
