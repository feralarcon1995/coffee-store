import { useState } from "react"
import { CoffeeItem } from "../../interface/CoffeeItem"
import coffeecup from '/assets/hero-2.jpg'
import { useCoffeeContext } from "../../context/useCoffeeContext"
import { cn } from '../../lib/utils';
import FillHeart from "../icons/FillHeart";
import { OutlineHeart } from "../icons/OutlineHeart";
import CardButton from "./CardButton";


interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  coffee: CoffeeItem
}

const Card = ({ coffee, className, ...props }: CardProps) => {

  const { toggleFavourite, favouriteCoffees } = useCoffeeContext();
  const [img, setImg] = useState(coffee.image);

  const handleError = () => {
    setImg(coffeecup)
  }
  return (
    <article
      {...props}
      className={cn(`animate-fade-up animate-duration-[1400ms]rounded-lg bg-slate-200 hover:bg-slate-300 p-6 transition-all hover:shadow-xl `, { 'bg-beige hover:bg-orange-200': coffee.isHot }, className)}>
      <img
        src={img}
        alt={coffee.title}
        className="mb-3 h-[300px] w-full object-cover rounded-md"
        onError={handleError} />
      <div className="flex flex-col items-start justify-between  min-h-[500px] max-h-full">
        <h2 className="text-3xl font-bold text-coffee">{coffee.title}</h2>
        <p className="text-xl py-2">{coffee.description}</p>
        <p className="text-xl py-2">List of Ingredients:</p>
        <ul>
          {coffee.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <CardButton 
        className={`${coffee.isHot ? 'bg-yellow hover:bg-orange-200' : 'bg-slate-300 hover:bg-slate-400'}` }
        onClick={() => toggleFavourite(coffee.id)} >
          {favouriteCoffees.some(fav => fav.id === coffee.id) ?
            <span className="flex items-center gap-3"><FillHeart/> Remove from Favourites</span>
            :
            <span className="flex items-center gap-3">
              <OutlineHeart/> Add to Favourites'
            </span>}
        </CardButton>
      </div>
    </article>
  )
}

export default Card