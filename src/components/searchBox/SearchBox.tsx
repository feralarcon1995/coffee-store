import {useState} from 'react'

interface SearchBoxProps {
  onSearch: (query: string) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({onSearch}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const result = onSearch(searchQuery);
    return result
  }

  return (
    <form className='flex w-full md:w-6/12 items-center animate-fade-left animate-duration-[1400ms] animate-delay-1000' onSubmit={handleSubmit}>
      <input 
      type="text" 
      name='search'
      className='p-3 border-2 border-yellow outline-none title w-full'
      placeholder="Search Coffee..."
      value={searchQuery}
      onChange={handleInputChange} />
      <button 
      className='w-full md:w-40 border-2 border-yellow p-3 text-coffee title font-bold transition-all hover:bg-yellow  '
      type='submit'>
        Search Coffee
      </button>
    </form>
  )
}

export default SearchBox