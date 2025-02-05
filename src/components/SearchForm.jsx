import { useState } from 'react';
import SearchButton from './SearchButton';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [date, setDate] = useState(new Date());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ origin, destination, date });
  };

  return (
    <section className='flex flex-col mx-auto max-w-5xl'>
        <div>
            <div className='relative mb-2'>
                <h2 className='sr-only'>Flight Search</h2>
                <div className='custom-search-shadow border-0 rounded-lg 
                mx-4 px-4 pt-2 pb-12 relative'>
                    Search Form
                </div>
                <SearchButton />
            </div>
            <div>

            </div>
        </div>
    </section>
    // <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
    //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    //     <input
    //       type="text"
    //       placeholder="Origin airport"
    //       value={origin}
    //       onChange={(e) => setOrigin(e.target.value)}
    //       className="p-2 border rounded"
    //     />
    //     <input
    //       type="text"
    //       placeholder="Destination airport"
    //       value={destination}
    //       onChange={(e) => setDestination(e.target.value)}
    //       className="p-2 border rounded"
    //     />
    //     <DatePicker
    //       selected={date}
    //       onChange={(date) => setDate(date)}
    //       className="p-2 border rounded w-full"
    //     />
    //   </div>
    //   <button
    //     type="submit"
    //     className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
    //   >
    //     Search Flights
    //   </button>
    // </form>
  );
};

export default SearchForm;