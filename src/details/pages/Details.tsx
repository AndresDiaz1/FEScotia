import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import SimpleHeader from '../../sharedComponents/SimpleHeader/SimpleHeader';

const DetailsPage: React.FC = () => {
  return (
    <IonPage>
      <SimpleHeader title={'Details'} />
      <IonContent>
        <p>pagina de detalle</p>
      </IonContent>
    </IonPage>
  );
};

export default DetailsPage;
