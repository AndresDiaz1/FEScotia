import React from 'react';
import { IonGrid, IonLabel, IonRow } from '@ionic/react';
import './AccountCard.scss';
import { Account } from '../AccountTypes';
import { formatCurrency } from '../../utils/Utils';
import { PATHS } from '../../AppConstants';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchDetails } from '../../details/DetailsStore';

const AccountCard: React.FC<Account> = ({ id, accountType, availableValue }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const goToDetail = () => {
    dispatch(fetchDetails(parseInt(id)));
    history.push(PATHS.DETAILS);
  };

  return (
    <div className="account-card__container ion-padding">
      <IonGrid>
        <IonRow>
          <IonLabel> &middot; {id} </IonLabel>
          <IonLabel> - {accountType}</IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel>{formatCurrency(availableValue)}</IonLabel>
        </IonRow>
        <IonRow>
          <IonLabel>Available amount</IonLabel>
        </IonRow>
        <IonRow className="ion-justify-content-center">
          <IonLabel color="primary" className="account-card__link" onClick={() => goToDetail()}>
            See Details
          </IonLabel>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default AccountCard;
