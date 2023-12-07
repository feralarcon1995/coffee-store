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
    return response.data.map((coffee: CoffeeItem) => { return { ...coffee, isHot: true, id:'hot_'+coffee.id.toString()} })
  },
  getIcedCoffee: async (): Promise<CoffeeItem[]> => {
    const response = await coffeeClient.get('/iced');
    if (!response) throw new Error('Iced coffes not found.');
    return response.data.map((coffee: CoffeeItem) => { return { ...coffee, isHot: false, id: 'iced_' + coffee.id.toString() } })
  }
}

export default api;