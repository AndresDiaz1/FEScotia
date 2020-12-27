import React from 'react';
import { IonButton, IonGrid, IonHeader, IonLabel, IonRow, IonToolbar } from '@ionic/react';
import { clearDB } from '../../data/mainDB';
import { useDispatch } from 'react-redux';
import { logout } from '../../login/LoginStore';
import { PATHS } from '../../AppConstants';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  title: string;
  goBack: boolean;
}

const SimpleHeader: React.FC<HeaderProps> = ({ title, goBack }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const doLogout = async()=> {
    await clearDB()
    dispatch(logout());
    history.push(PATHS.LOGIN);
  }

  return (
    <IonHeader>
      <IonToolbar color="scotia-red">
        <IonGrid>
          <IonRow className="ion-justify-content-between">
            {
              goBack ? 
              <FontAwesomeIcon className="go-back-icon" icon={faAngleLeft} onClick={()=>history.goBack()} size="lg"/>
              :
              <></>
            }
            <IonLabel>{title}</IonLabel>
            <IonButton className="logout-button" size="small" color="light" shape="round" fill="outline" onClick={()=>doLogout()}>Logout</IonButton>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default SimpleHeader;
