import React from 'react';
import { IonGrid, IonHeader, IonLabel, IonRow, IonToolbar } from '@ionic/react';

interface HeaderProps {
  title: string;
}

const SimpleHeader: React.FC<HeaderProps> = ({ title }) => {
  return (
    <IonHeader>
      <IonToolbar color="scotia-red">
        <IonGrid>
          <IonRow>
            <IonLabel>{title}</IonLabel>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default SimpleHeader;
