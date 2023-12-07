import { cn } from '../../lib/utils'

interface CardButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {

}

const CardButton: React.FC<CardButtonProps> = ({ children, className,...props }) => {
  return (
    <button {...props}
      className={cn("bg-yellow p-4 w-full md:w-max rounded-2xl text-center text-black self-end transition-all hover:bg-beige hover:shadow-lg font-bold border-2 border-transparent hover:border-2 hover:border-coffee hover:font-bold", className)}>
      {children}
    </button>
  )
}

export default CardButton