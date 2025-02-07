import { useState } from 'react';
import SearchButton from './SearchButton';

const SearchForm = ({ onSearch }) => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
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
                    <div>
                        <div className='inline-flex mb-2 w-full mt-0'></div>
                        <div className='flex-wrap md:flex-nowrap flex'>
                            <div className='flex-[1_1_388px] flex relative'>
                                
                                {/* From Field */}
                                <div className='flex-[1_1_100px] overflow-hidden relative'>
                                    <div className='h-14 rounded-sm relative z-0 group'>
                                        <input type="text" value={from} onChange={(e) => setFrom(e.target.value)} className="pr-6 pl-[52px] py-2 overflow-ellipsis whitespace-nowrap bg-transparent
                                        border border-[#dadce0] rounded-sm box-border w-full h-full group-hover:border-gray-400 outline-none
                                        group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500"  autoComplete="off" 
                                        role="combobox" aria-autocomplete="inline" aria-haspopup="true" aria-expanded="false" aria-label="Where from?"/>
                                        <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" 
                                        className="m-1 text-[#5f6368] absolute top-4 left-4 shrink-0" fill='currentColor'>
                                            <path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"></path>
                                        </svg>
                                        <div className="right-[-22px] border-1 bg-white border-[#dadce0] group-hover:border-gray-400
                                         group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500 
                                         rounded-full box-border h-9 w-9 top-2.5 absolute"></div>
                                        <span></span>
                                    </div>
                                </div>

                                {/* Swap Button */}
                                <div>
                                    <button className="rounded-full hover:bg-gray-100 text-[#3c4043] h-[34px] w-[34px] my-[11px] mx-[-13px] p-[5px] z-1
                                    transform inline-block relative box-border border-0 outline-0 cursor-pointer overflow-visible decoration-none" 
                                    aria-label="Swap origin and destination.">
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
                                        <input type="text" value={to} onChange={(e) => setTo(e.target.value)} className="pr-4 pl-15 py-2 overflow-ellipsis whitespace-nowrap bg-transparent
                                        border-1 border-[#dadce0] box-border w-full h-full outline-none group-hover:border-gray-400
                                        group-focus-within:border-blue-500 group-focus-within:border-2 group-hover:group-focus-within:border-blue-500 rounded-sm"  autoComplete="off" 
                                        role="combobox" aria-autocomplete="inline" aria-haspopup="true" aria-expanded="false" aria-label="Where to?"/>
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
                                
                            </div>
                            <div className='flex-[0_1_372px] ml-4'> 

                            </div>
                        </div>
                    </div>
                </div>
                <SearchButton />
            </div>
            <div>

            </div>
        </div>
    </section>
  );
};

export default SearchForm;