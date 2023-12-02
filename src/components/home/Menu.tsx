import { useCoffeeContext } from "../../context/useCoffeeContext";
import coffeeBlast from '/assets/coffee_blast.png';
import Card from '../coffeestore/Card';

const Menu = () => {
  const { hotCoffees } = useCoffeeContext();
  return (
    <section className="relative flex flex-col justify-center items-center gap-8 py-10 min-h-[1400px] max-h-full">
      <h2 className="text-coffee font-bold text-6xl text-center animate-fade-up animate-duration-[1400ms] animate-delay-3000">Enjoy a new blend of coffee style</h2>
      <p className="text-gray text-center text-xl  animate-fade-up animate-duration-[1400ms] animate-delay-3300">Explore all flavours of coffee with us. There is always a new cup worth experiencing</p>

      <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-3 md:p-10 z-10" >
        {hotCoffees.slice(0,4).map((coffee) => (
          <Card coffee={coffee} key={coffee.id} isHot={true}/>
        ))}
      </article>

      <img src={coffeeBlast} alt="coffee blast" className="absolute bottom-0 right-0 z-0 scale-x-[-1]" />
    </section>
  )
}

export default Menu