import { IonContent, IonItem, IonLabel, IonList, IonLoading, IonPage } from '@ionic/react';
import React from 'react';
import { useSelector } from 'react-redux';
import SimpleHeader from '../../sharedComponents/SimpleHeader/SimpleHeader';
import MovementCard from '../components/movementCard';
import { detailsSelector } from '../DetailsStore';

const DetailsPage: React.FC = () => {
  const { details, isLoading, errorMessage } = useSelector(detailsSelector);

  const renderDetailsList = () => {
    return (
      <IonList className="movements-list">
        {details.map((detail) => (
          <IonItem key={detail.id}>
            <MovementCard {...detail} />
          </IonItem>
        ))}
      </IonList>
    );
  };

  const renderNoDetails = () => {
    return <IonLabel>This account does not have movements</IonLabel>;
  };

  const renderErrorMessage = () => {
    return <IonLabel>{errorMessage}</IonLabel>;
  };

  return (
    <IonPage>
      <SimpleHeader title={'Details'} goBack={true}/>
      <IonContent>
        {details.length ? renderDetailsList() : renderNoDetails()}
        {errorMessage ? renderErrorMessage() : <></>}

        <IonLoading isOpen={isLoading} message={'fetching your movements...'} />
      </IonContent>
    </IonPage>
  );
};

export default DetailsPage;
