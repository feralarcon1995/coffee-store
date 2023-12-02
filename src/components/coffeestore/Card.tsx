import { useState } from "react"
import { CoffeeItem } from "../../interface/CoffeeItem"
import coffeecup from '/assets/hero-2.jpg'
import { useCoffeeContext } from "../../context/useCoffeeContext"
const Card = ({ coffee, isHot }: { coffee: CoffeeItem, isHot: boolean }) => {

  const { toggleFavourite, favouriteCoffees } = useCoffeeContext();
  const [img, setImg] = useState(coffee.image);

  const handleError = () => {
    setImg(coffeecup)
  }
  return (
    <article key={coffee.id} className={`animate-fade-up animate-duration-[1400ms]rounded-lg p-6 transition-all hover:shadow-xl ${isHot ? 'bg-beige hover:bg-orange-200' : 'bg-slate-200 hover:bg-slate-300'}`}>
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
        <button onClick={() => toggleFavourite(coffee.id)} className="bg-yellow p-4 w-full md:w-max rounded-2xl text-center text-black self-end transition-all hover:bg-beige hover:shadow-lg font-bold border-2 border-transparent hover:border-2 hover:border-coffee hover:font-bold">
          {favouriteCoffees.some(fav => fav.id === coffee.id) ?
            <span className="flex items-center gap-3"> <svg className="w-6 h-6 text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
              <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z" />
            </svg>Remove from Favourites</span>
           : 
            <span className="flex items-center gap-3"><svg className="w-6 h-6 text-dark" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 19">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z" />
            </svg>
              Add to Favourites'
              </span>}
        </button>
      </div>
    </article>
  )
}

export default Card