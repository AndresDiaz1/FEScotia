import React, { useState, useEffect } from 'react';
import { IonItem, IonLabel, IonInput } from '@ionic/react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { InputChangeEventDetail, TextFieldTypes } from './InputCustomTypes';

interface InputFloatingLabelProps {
  initialValue?: string;
  label: string;
  onChange: (event: CustomEvent<InputChangeEventDetail>) => void;
  type?: TextFieldTypes;
  containerClassName?: string;
  inputTypeHandler?: () => void;
  iconName?: IconProp;
}

const InputFloatingLabel: React.FC<InputFloatingLabelProps> = ({
  initialValue = '',
  label,
  type = 'text',
  containerClassName = '',
  onChange,
  inputTypeHandler,
  iconName,
}: InputFloatingLabelProps) => {
  const [inputValue, setInputValue] = useState(initialValue);

  useEffect(() => {
    setInputValue(initialValue);
  }, [initialValue]);

  return (
    <IonItem className={containerClassName}>
      {inputTypeHandler ? (
        <div onClick={inputTypeHandler} className="login-page__reveal-password-container">
          <FontAwesomeIcon className="login-page__reveal-password-icon" icon={iconName as IconProp} />
        </div>
      ) : (
        ''
      )}
      <IonLabel className={inputValue ? '' : 'ion-hide'} position="floating">
        {label}
      </IonLabel>
      <IonInput
        value={inputValue}
        type={type}
        autofocus={true}
        onIonChange={(event) => {
          const {
            detail: { value },
          } = event;
          if (value != null) setInputValue(value);
          onChange(event);
        }}
        placeholder={label}
        name={label}
      />
    </IonItem>
  );
};

export default InputFloatingLabel;
