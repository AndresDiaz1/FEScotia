import React from 'react';
import { IonCol, IonGrid, IonLabel, IonNote, IonRow } from '@ionic/react';
import moment from 'moment';
import { Detail } from '../DetailsTypes';
import { formatCurrency } from '../../utils/Utils';
import './movementCard.scss';

const MovementCard: React.FC<Detail> = ({ transactionDate, transactionAmount, description }) => {
  return (
    <div className="movement-card__container ion-padding">
      <IonGrid>
        <IonRow>
          <IonCol size="4">
            <IonRow>
              <IonNote color={`${parseInt(transactionAmount) > 0 ? 'success' : 'danger'}`}>{`${
                parseInt(transactionAmount) > 0 ? 'credit' : 'debit'
              }`}</IonNote>
            </IonRow>
          </IonCol>

          <IonCol size="8">
            <IonRow>
              <IonLabel>{moment(transactionDate).format('YYYY-MM-DD')}</IonLabel>
            </IonRow>
            <IonRow>
              <IonNote color={`${parseInt(transactionAmount) > 0 ? 'success' : 'danger'}`}>
                {' '}
                {formatCurrency(parseInt(transactionAmount))}{' '}
              </IonNote>
            </IonRow>
            <IonRow>
              <IonLabel>{description}</IonLabel>
            </IonRow>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
};

export default MovementCard;
