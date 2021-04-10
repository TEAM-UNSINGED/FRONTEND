import React,
{
  createContext,
  useContext,
  useCallback,
  useState,
} from 'react';

export interface InputMessage{
  message: string;
}

interface InputContextData{
  addMessage(message: string): void;
  message: string;
}

const InputContext = createContext<InputContextData>({} as InputContextData);

const InputProvider: React.FC = ({ children }) => {
  const [message, setMessage] = useState('');

  const addMessage = useCallback((message: string) => {
    setMessage(message);
  },
  []);

  return (
    <InputContext.Provider
      value={{
        addMessage,
        message,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

function useInput(): InputContextData {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('useToast must be used within a InputProvider');
  }
  return context;
}

export { InputProvider, useInput };
