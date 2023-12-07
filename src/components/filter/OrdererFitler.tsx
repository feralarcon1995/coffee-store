
interface OrdererFitlerProps {
  sortBy:(order: 'asc' | 'desc' ) => void; 
}
const OrdererFitler: React.FC<OrdererFitlerProps> = ({sortBy}) => {
  return (
    <section className="flex items-center gap-3 w-full md:w-max relative right-0 animate-fade-right animate-duration-[1400ms] animate-delay-1000">
      <button className="title  font-bold  outline-none ">
        Order By:
      </button>
      <article className="flex items-center justify-center border-2  border-coffee w-40">
        <p 
        className="text-center p-4 title text-coffee bg-white hover:bg-beige font-bold cursor-pointer w-full md:w-6/12"
        onClick={() => sortBy('asc')}>
          A - Z
        </p>
        <p 
        className="text-center p-4 title text-coffee bg-white hover:bg-beige font-bold cursor-pointer w-full md:w-6/12"
        onClick={() => sortBy('desc')}>
          Z - A
        </p>
      </article>
    </section>
  )
}

export default OrdererFitler