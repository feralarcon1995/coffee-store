import Button from "../components/Button"
import Loader from "../components/Loader";
import Card from "../components/coffeestore/Card"
import { useCoffeeContext } from "../context/useCoffeeContext"
const CoffeeStore = () => {
  const { hotCoffees, icedCoffees, loading } = useCoffeeContext();
  return (

    <section>
      <article className=" background-hero min-h-screen max-h-full flex flex-col justify-center items-center ">
        <h1 className="animate-fade-up animate-duration-[1400ms] animate-delay-1000 font-bold text-7xl md:text-[8rem] text-white text-center">Coffee Store</h1>
        <p className="animate-fade-up animate-duration-[1400ms] animate-delay-1000 text-white text-xl md:text-2xl py-6">Discover the best flavours</p>
        <Button link="#" title="Get Started" className="animate-fade-up animate-duration-[1400ms] animate-delay-1000" />
      </article>
      {loading
        ?
        <Loader />
        :
        <>
          <article className="py-16">
            <h2 className="text-coffee font-bold text-6xl text-center animate-fade-up animate-duration-[1400ms] animate-delay-1000">Hot Coffees</h2>
            <p className="text-gray text-xl text-center py-4 animate-fade-up animate-duration-[1400ms] animate-delay-1000">Have you tried these flavours?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 md:p-6 animate-fade-up animate-duration-[1400ms] animate-delay-1000">
              {hotCoffees.map((coffee) => (
                <Card coffee={coffee} key={coffee.id} isHot={true} />
              ))}
            </div>
          </article>
          <article className="py-16">
            <h2 className="text-coffee font-bold text-6xl text-center">Iced Coffees</h2>
            <p className="text-gray text-xl text-center py-4">Have you tried these flavours?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 md:p-6">
              {icedCoffees.map((coffee) => (
                <Card coffee={coffee} key={coffee.id} isHot={false} />
              ))}
            </div>
          </article>
        </>}

    </section>
  )
}

export default CoffeeStore