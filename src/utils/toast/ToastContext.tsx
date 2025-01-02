import React, {createContext, ReactNode, useContext} from 'react';
import Toast from 'react-native-toast-message';

export enum ToastTypeEnum {
  success ,
  info  ,
  error  ,
}

type ToastProps = (message: string, toastType: ToastTypeEnum) => void;

const ToastContext = createContext<ToastProps | undefined>(undefined);

export const ToastProvider: React.FC<{children: ReactNode}> = ({ children}) => {

  const showToast: ToastProps = (message, toastType) => {

    const getToastType = (type: ToastTypeEnum): string => {
      if(type === ToastTypeEnum.success) {return 'success';}
      if(type === ToastTypeEnum.error) {return 'error';}
      return 'info';
    };

    Toast.show({text1: message, type: getToastType(toastType)});
  };

return (
    <ToastContext.Provider value={showToast}>
      {children}
      <Toast />
     </ToastContext.Provider>
  );
};

export const useToast = ():ToastProps => {
  const context = useContext(ToastContext);
  if(context) {return context;}
  throw new Error('useToast must be used within a ToastProvider');
};




