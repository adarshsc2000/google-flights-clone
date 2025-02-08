import { useEffect, useState } from 'react';
import SearchButton from './SearchButton';
import { getNearbyAirports, searchAirport, searchFlights } from '../utils';

const SearchForm = () => {
  const [fromDetails, setFromDetails] = useState(null);
  const [from, setFrom] = useState('');
  const [toDetails, setToDetails] = useState(null);
  const [to, setTo] = useState('');
  const [isToOpen, setIsToOpen] = useState(false);

  useEffect(() => {
    const getFromAirport = async () => {
        // const nearbyAirports = await getNearbyAirports();
        // setFromDetails({
        //     "entityId": nearbyAirports.data.current.naviagation,
        //     "skyId": nearbyAirports.data.current.naviagation,
        // });
        // setFrom(nearbyAirports.data.current.presentation.title);
    };

    getFromAirport();
  }, []);

  const handleSearch = async () => {
    // let airportResults = await searchAirport();
    // console.log(airportResults);
    // let flights = await searchFlights();
    // console.log(flights);
    
    // if (!from || !to) {
    //     alert('Please enter both From and To locations');
    //     return;
    // }

    console.log(from, to);
  };

  return (
    <section className='flex flex-col mx-auto max-w-5xl'>
        <div>
            <div className='relative mb-2'>
                <h2 className='sr-only'>Flight Search</h2>
                <div className='custom-search-shadow border-0 rounded-lg 
                mx-4 px-4 pt-2 pb-12 relative'>
                    <div>
                        <div className='inline-flex mb-2 w-full mt-0'></div>
                        <div className='flex-wrap md:flex-nowrap flex'>
                            <div className='flex-[1_1_388px] flex relative'>
                                
                                {/* From Field */}
                                <div className='flex-[1_1_100px] overflow-hidden relative'>
                                    <div className='h-14 rounded-sm relative z-0 group'>
                                        <input 
                                            type="text" 
                                            value={from} 
                                            onChange={(e) => setFrom(e.target.value)} 
                                            className="pr-6 pl-[52px] py-2 overflow-ellipsis whitespace-nowrap bg-transparent
                                                border border-[#dadce0] rounded-sm box-border w-full h-full group-hover:border-gray-400 outline-none
                                                group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500"  
                                            autoComplete="off" 
                                            role="combobox" 
                                            aria-autocomplete="inline" 
                                            aria-haspopup="true" 
                                            aria-expanded="false" 
                                            aria-label="Where from?" 
                                            placeholder="Where from?"
                                        />
                                        <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" 
                                            className="m-1 text-[#5f6368] absolute top-4 left-4 shrink-0" fill='currentColor'>
                                            <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
                                        </svg>
                                        <div className="right-[-22px] border-1 bg-white border-[#dadce0] group-hover:border-gray-400
                                            group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500 
                                            rounded-full box-border h-9 w-9 top-2.5 absolute">
                                        </div>
                                    </div>
                                </div>

                                {/* Swap Button */}
                                <div>
                                    <button 
                                        className="rounded-full hover:bg-gray-100 text-[#3c4043] h-[34px] w-[34px] my-[11px] mx-[-13px] p-[5px] z-1
                                            transform inline-block relative box-border border-0 outline-0 cursor-pointer overflow-visible decoration-none" 
                                        aria-label="Swap origin and destination."
                                        onClick={() => {
                                            setFrom(to);
                                            setTo(from);
                                        }}
                                    >
                                        <div jsname="s3Eaab" className="VfPpkd-Bz112c-Jh9lGc"></div>
                                        <div className="VfPpkd-Bz112c-J1Ukfc-LhBDec"></div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" className="w-6 h-6 shrink-0 text-[#3c4043]" fill="currentColor">
                                            <path d="M17 4l-1.41 1.41L18.17 8H11v2h7.17l-2.58 2.59L17 14l5-5-5-5zM7 20l1.41-1.41L5.83 16H13v-2H5.83l2.58-2.59L7 10l-5 5 5 5z"></path>
                                        </svg>
                                    </button>
                                </div>

                                {/* To Field */}
                                <div className="flex-[1_1_100px] overflow-hidden relative">
                                    <div className='h-14 rounded-sm relative z-0 group'>
                                        <input 
                                            type="text" 
                                            value={to} 
                                            onChange={(e) => setTo(e.target.value)}
                                            onFocus={() => setIsToOpen(true)} 
                                            onBlur={() => setIsToOpen(false)}
                                            className="pr-4 pl-15 py-2 overflow-ellipsis whitespace-nowrap bg-transparent
                                                border-1 border-[#dadce0] box-border w-full h-full outline-none group-hover:border-gray-400
                                                group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500 rounded-sm"  
                                            autoComplete="off" 
                                            role="combobox" 
                                            aria-autocomplete="inline"
                                            aria-haspopup="true" 
                                            aria-expanded="false" 
                                            aria-label="Where to?" 
                                            placeholder="Where to?" 
                                        />
                                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" 
                                            className="text-[#5f6368] absolute top-4 left-6 shrink-0" fill='currentColor'>
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"></path>
                                            <circle cx="12" cy="9" r="2.5"></circle>
                                        </svg>
                                        <div className="left-[-22px] border-1 bg-white border-[#dadce0] group-hover:border-gray-400 
                                        group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500 
                                        rounded-full box-border h-9 w-9 top-2.5 absolute"></div>
                                    </div>
                                </div>
                                {isToOpen && (
                                        <div className='dropdown-to-shadow absolute top-14 dropdown-to-position flex flex-col border-1 border-transparent bg-white rounded-sm overflow-auto z-50 outline-none'>
                                            <div className="overflow-auto">
                                                <ul role="listbox" className="pt-1.5 pb-2 list-none">
                                                    <li role="option" aria-label="Anywhere" aria-selected="false" 
                                                        className="flex items-center h-12 pl-4 pr-1 text-[#3c4043] list-none">
                                                        <div className="pl-2">
                                                            <svg enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" className="shrink-0">
                                                                <rect fill="none" height="24" width="24"></rect>
                                                                <path d="M19.3,16.9c0.4-0.7,0.7-1.5,0.7-2.4c0-2.5-2-4.5-4.5-4.5S11,12,11,14.5s2,4.5,4.5,4.5c0.9,0,1.7-0.3,2.4-0.7l3.2,3.2 l1.4-1.4L19.3,16.9z M15.5,17c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S16.9,17,15.5,17z M12,20v2 C6.48,22,2,17.52,2,12C2,6.48,6.48,2,12,2c4.84,0,8.87,3.44,9.8,8h-2.07c-0.64-2.46-2.4-4.47-4.73-5.41V5c0,1.1-0.9,2-2,2h-2v2 c0,0.55-0.45,1-1,1H8v2h2v3H9l-4.79-4.79C4.08,10.79,4,11.38,4,12C4,16.41,7.59,20,12,20z"></path>
                                                            </svg>
                                                        </div>
                                                        <div className="pl-3 flex-[1_1_auto] overflow-hidden">
                                                            <div>
                                                                <div className="inline break-words text-[#202124]" jsname="V1ur5d">Anywhere</div>
                                                            </div>
                                                            <div className="text-[#70757a] text-xs">
                                                                Search for trips to anywhere in the world
                                                                <span className="YJ6emc" aria-hidden="false">.</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    )}
                            </div>
                            <div className='flex-[0_1_372px] ml-4'> 

                            </div>
                        </div>
                    </div>
                </div>
                <SearchButton onClick={handleSearch} />
            </div>
            <div>

            </div>
        </div>
    </section>
  );
};

export default SearchForm;