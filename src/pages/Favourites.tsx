import { Link } from "react-router-dom";
import Card from "../components/coffeestore/Card";
import { useCoffeeContext } from "../context/useCoffeeContext";

const Favourites = () => {
  const { favouriteCoffees } = useCoffeeContext();
  console.log(favouriteCoffees)
  return (
    <section>
      <article className="background-hero min-h-screen max-h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-6xl md:text-[8rem] text-white text-center animate-fade-up animate-duration-[1400ms] animate-delay-1000">Favourite Coffees</h1>
        <p className="text-white text-xl md:text-2xl py-6 animate-fade-up animate-duration-[1400ms] animate-delay-1000">The flavours of each day</p>
      </article>
      <article className="py-16 animate-fade-up animate-duration-[1400ms] animate-delay-1000">
        {favouriteCoffees.length > 0 ?
          <>
            <h2 className="text-coffee font-bold text-6xl text-center py-12">My coffee selection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 md:p-6 mt-12">
              {favouriteCoffees.map((coffee) => (
                <Card coffee={coffee} key={coffee.id} />
              ))}
            </div>
          </>
          :
          <div className="flex flex-col items-center justify-center h-[600px] animate-fade-up animate-duration-[1400ms] "> 
            <h2 className="text-coffee font-bold text-6xl py-6">You did not select any coffee.</h2>
            <Link to="/coffee-store" className="text-black text-center text-2xl font-bold p-6 border-2  transition-all rounded-xl border-transparent hover:border-coffee hover:bg-beige">Please go to store</Link>
          </div>}
      </article>
    </section>
  )
}

export default Favourites