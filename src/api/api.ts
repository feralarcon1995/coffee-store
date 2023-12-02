import axios from 'axios';
import { CoffeeItem } from '../interface/CoffeeItem';

const API_URL = 'https://api.sampleapis.com/coffee';

const coffeeClient = axios.create({
  baseURL: API_URL,
})

const api = {
  getHotCoffees: async (): Promise<CoffeeItem[]> => {
    const response = await coffeeClient.get('/hot');
    if (!response) throw new Error('Hot coffes not found.');
    return response.data;
  },
  getIcedCoffee: async (): Promise<CoffeeItem[]> => {
    const response = await coffeeClient.get('/iced');
    if (!response) throw new Error('Iced coffes not found.');
    return response.data;
  }
}

export default api;