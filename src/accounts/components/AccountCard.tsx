import React from 'react';
import { IonGrid, IonLabel, IonRow } from '@ionic/react';
import './AccountCard.scss';
import { Account } from '../AccountTypes';

const AccountCard: React.FC<Account> = ({ id, accountType, availableValue }) => {
  return (
    <div className="account-card__container ion-padding">
      <IonGrid>
        <IonRow>
          <IonLabel> &middot; {id} </IonLabel>
          <IonLabel> - {accountType}</IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel>{availableValue}</IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel>Available amount</IonLabel>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <a href="">See Details</a>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AccountCard;
