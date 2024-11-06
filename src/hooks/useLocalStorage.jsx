import { useState } from 'react';

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    // ilk açılışta localstorage okuyoruz
    const localVal = localStorage.getItem(key);
    if (localVal === null) {
      // boşsa default değeri, localStorage'a atıyoruz
      // aynı değeri dönüyoruz
      localStorage.setItem(key, JSON.stringify(defaultValue));
      //console.log('local boş', defaultValue);
      return defaultValue;
    } else {
      // localstorage boş değilse
      // defaultValue değerini dönüyoruz
      //console.log('local dolu', localVal);

      return JSON.parse(localVal);
    }
  });
  // value değiştiğinde localstorage'a yazıyoruz
  // ve yeni değeri dönüyoruz
  const setLocalStorage = (newValue) => {
    localStorage.setItem(key, JSON.stringify(newValue));
    setValue(newValue);
  };

  return [value, setLocalStorage];
}