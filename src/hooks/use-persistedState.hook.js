import React from "react";

export default function usePersistedState (initialNumCookies,storageName){

    const [numCookies, setNumCookies] = React.useState(()=>{
      //If the storage is defined, set to the stored value
      //else set to default value 1000
      if(localStorage.getItem(storageName)){
        return JSON.parse(localStorage.getItem(storageName));
      }else{
        return initialNumCookies;
      }
    });

    //Copy number in localStorage everytime numCookies changes.
    React.useEffect(()=>{
      localStorage.setItem(storageName, JSON.stringify(numCookies));
    },[numCookies]);

    return [numCookies, setNumCookies];

  };
