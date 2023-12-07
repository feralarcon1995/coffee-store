import { createContext, useContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { CoffeeItem } from "../interface/CoffeeItem";

import api from '../api/api';

interface CoffeeContextProps {
  hotCoffees: CoffeeItem[];
  icedCoffees: CoffeeItem[];
  loading: boolean;
  favouriteCoffees: CoffeeItem[];
  toggleFavourite: (id: string) => void;
}

interface CoffeeProviderProps {
  children: React.ReactNode;
}

const CoffeeContext = createContext<CoffeeContextProps | null>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useCoffeeContext = () => {
  const context = useContext(CoffeeContext);
  if (!context) {
    throw new Error('useCoffeeContext must be used within a CoffeeProvider');
  }

  return context;
}

const CoffeeContextProvider: React.FC<CoffeeProviderProps> = ({ children }) => {

  const [hotCoffees, setHotCoffees] = useState<CoffeeItem[]>([]);
  const [icedCoffees, setIcedCoffees] = useState<CoffeeItem[]>([]);
  const [favouriteCoffees, setFavouriteCoffees] = useState<CoffeeItem[]>([]);
  const [loading, setLoading] = useState(false);



  const timeout = (ms: number) => new Promise(res => setTimeout(res, ms));
  const getCoffees = async () => {
    setLoading(true);
    await timeout(2000);
    const hotCoffees = await api.getHotCoffees();
    const icedCoffees = await api.getIcedCoffee();
    setHotCoffees(hotCoffees);
    setIcedCoffees(icedCoffees);
    setLoading(false);
  }

  const toggleFavourite = (id: string) => {
    const favID = hotCoffees.concat(icedCoffees).find((coffee) => coffee.id === id);
    if (favID) {
      const favCoffee = favouriteCoffees.some((fav) => fav.id === id)
      if (!favCoffee) {
        const newFavouriteCoffees = [...favouriteCoffees, favID];
        console.log('fav', newFavouriteCoffees)
        setFavouriteCoffees(newFavouriteCoffees);
        localStorage.setItem('favs', JSON.stringify(newFavouriteCoffees));
        toast.success('Added to Favourites.')
      } else {
        const newFavouriteCoffees = favouriteCoffees.filter((fav) => fav.id !== id);
        console.log('unfav', newFavouriteCoffees)
        setFavouriteCoffees(newFavouriteCoffees);
        localStorage.setItem('favs', JSON.stringify(newFavouriteCoffees));
        toast.success('Removed from Favourites.')
      }
    }
  }

  const getLocalStorageData = () => {
    const localStorageData = localStorage.getItem('favs');
    if (localStorageData) {
      const parseData: CoffeeItem[] = JSON.parse(localStorageData);
      setFavouriteCoffees([...parseData]);
    }
  }
  useEffect(() => {
    getLocalStorageData();
    getCoffees();
  }, []);

  const contextValue: CoffeeContextProps = {
    hotCoffees,
    icedCoffees,
    loading,
    favouriteCoffees,
    toggleFavourite,
  }

  return <CoffeeContext.Provider value={contextValue}>{children}</CoffeeContext.Provider>
}

export default CoffeeContextProvider;