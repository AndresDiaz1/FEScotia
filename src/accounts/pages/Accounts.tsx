import React, { useEffect } from 'react';
import { IonCol, IonContent, IonGrid, IonLabel, IonLoading, IonPage, IonRow } from '@ionic/react';
import { useDispatch, useSelector } from 'react-redux';
import { accountsSelector } from '../AccountsStore';
import SimpleHeader from '../../sharedComponents/SimpleHeader/SimpleHeader';
import AccountCard from '../components/AccountCard';
import { clearDetails } from '../../details/DetailsStore';

const AccountsPage: React.FC = () => {
  const { accounts, isLoading, errorMessage } = useSelector(accountsSelector);
  const dispatch = useDispatch();


  useEffect(()=> {
    dispatch(clearDetails())
  });

  const renderAccountsList = () => {
    return (
      <IonGrid>
        <IonRow className="accounts-grid">
          {accounts.map((account) => (
            <IonCol key={parseInt(account.id)} sizeXs="12" sizeMd="4">
              <AccountCard {...account} />
            </IonCol>
          ))}
        </IonRow>
      </IonGrid>
    );
  };

  const renderNoAccounts = () => {
    return <IonLabel>You dont have accounts</IonLabel>;
  };

  const renderErrorMessage = () => {
    return <IonLabel>{errorMessage}</IonLabel>;
  };

  return (
    <IonPage>
      <SimpleHeader title={'My Accounts'}  goBack={false}/>
      <IonContent>
        {accounts.length ? renderAccountsList() : renderNoAccounts()}

        {errorMessage ? renderErrorMessage() : <></>}
        <IonLoading isOpen={isLoading} message={'fetching your accounts...'} />
      </IonContent>
    </IonPage>
  );
};

export default AccountsPage;
