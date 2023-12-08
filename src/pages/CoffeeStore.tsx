import { useEffect, useState } from "react";
import LinkButton from "../components/LinkButton"
import Loader from "../components/Loader";
import Card from "../components/coffeestore/Card"
import SearchBox from "../components/searchBox/SearchBox";
import { useCoffeeContext } from "../context/useCoffeeContext"
import OrdererFitler from "../components/filter/OrdererFitler";

const CoffeeStore = () => {
  const { hotCoffees, icedCoffees, loading } = useCoffeeContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCoffees, setFilteredCoffees] = useState([...hotCoffees, ...icedCoffees]);


  const sortBy = (order: 'asc' | 'desc') => {
    const sortedCoffees = [...hotCoffees, ...icedCoffees].sort((a, b) => {
      if (order === 'asc') {
        return a.title > b.title ? 1 : -1;
      } else {
        return a.title < b.title ? 1 : -1;
      }
    })
    setFilteredCoffees(sortedCoffees)
  }
  const filteredHotCoffees = hotCoffees.filter((coffee) => {
    return coffee.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  const filteredIcedCoffees = icedCoffees.filter((coffee) => {
    return coffee.title.toLowerCase().includes(searchQuery.toLowerCase())
  })

  useEffect(() => {
    const mergedCoffees = [...filteredHotCoffees, ...filteredIcedCoffees];
    setFilteredCoffees(mergedCoffees)
  }, [searchQuery])
  return (

    <section>
      <article className=" background-hero min-h-screen max-h-full flex flex-col justify-center items-center ">
        <h1 className="animate-fade-up animate-duration-[1400ms] animate-delay-1000 font-bold text-7xl md:text-[8rem] text-white text-center">Coffee Store</h1>
        <p className="animate-fade-up animate-duration-[1400ms] animate-delay-1000 text-white text-xl md:text-2xl py-6">Discover the best flavours</p>
        <LinkButton link="#" title="Get Started" className="animate-fade-up animate-duration-[1400ms] animate-delay-1000" />
      </article>
      {loading
        ?
        <Loader />
        :
        <>
          <article className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 w-full">
            <SearchBox onSearch={(query: string) => setSearchQuery(query)} />
            <OrdererFitler sortBy={sortBy} />
          </article>
          <article className="py-16">
            <h2 className="text-coffee font-bold text-6xl text-center animate-fade-up animate-duration-[1400ms] animate-delay-1000">Hot Coffees</h2>
            <p className="text-gray text-xl text-center py-4 animate-fade-up animate-duration-[1400ms] animate-delay-1000">Have you tried these flavours?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 md:p-6 animate-fade-up animate-duration-[1400ms] animate-delay-1000">
              {(filteredCoffees.length > 0 ? filteredCoffees : hotCoffees)
                .filter((coffee) => coffee.isHot)
                .map((coffee) => (
                  <Card coffee={coffee} key={coffee.id} />
                ))}
            </div>
          </article>

          <article className="py-16">
            <h2 className="text-coffee font-bold text-6xl text-center">Iced Coffees</h2>
            <p className="text-gray text-xl text-center py-4">Have you tried these flavours?</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-2 md:p-6">
              {(filteredCoffees.length > 0 ? filteredCoffees : icedCoffees)
                .filter((coffee) => !coffee.isHot)
                .map((coffee) => (
                  <Card coffee={coffee} key={coffee.id} />
                ))}
            </div>
          </article>
        </>}

    </section>
  )
}

export default CoffeeStore