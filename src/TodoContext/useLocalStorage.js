import React from "react";


function useLocalStorage(itemName,
initialValue) {
  const [item, setItem] = React.useState
  (initialValue);
  const [loading, setLoading] = React.useState
  (true);
  const [error, setError] = React.useState
  (false);
    
React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem
      (itemName);
      
      let parsedItem;
    
      if (!localStorageItem) {
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem = initialValue;
      } else {
      parsedItem = JSON.parse(localStorageItem);
      setItem(parsedItem);
      }
    
      setLoading(false);
      } catch(error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);
  
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };

    return {
      item,
      saveItem, 
      loading, 
      error,
    };
  }

  export { useLocalStorage };


  // localStorage.removeItem('ANIMEPORVER_V1');
// const defaultTodos = [
//   {text: 'Dragon Ball Z', completed: true},
//   {text: 'Atack on Titan', completed: false},
//   {text: 'Naruto Shipuden', completed: true},
//   {text: 'One piece', completed: false},
//   {text: 'Full Metal Alchemist', completed: false},
//   {text: 'Los caballeros del zodiaco', completed: true},
// ];

// localStorage.setItem('ANIMEPORVER_V1', JSON.
// stringify(defaultTodos));