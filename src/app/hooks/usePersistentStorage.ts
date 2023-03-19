import { AsyncPersistentStorage } from 'persistor-node';
import { useEffect, useRef, useState } from 'react';
import { persistentStoragePromise } from '../../services/persistentStorage';

let _persistentStorage: AsyncPersistentStorage | undefined;

export const usePersistentStorage = () => {
  const hasValueRef = useRef(false);
  const [, setUpdate] = useState(0);

  useEffect(() => {
    if (!_persistentStorage) {
      persistentStoragePromise
        .then(persistentStorage => {
          _persistentStorage = persistentStorage;

          setUpdate(Date.now());
          persistentStorage.subscribe(() => {
            if (!hasValueRef.current) {
              setUpdate(Date.now());
              hasValueRef.current = true;
            }
          });
        })
        .catch(e => {
          console.error(e);
        });
    }
  }, []);

  return _persistentStorage;
};
