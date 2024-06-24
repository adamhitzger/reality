import React from 'react';

export default function sContact(){
  return (
    <>
        <div>
              <h1 >Kontaktujte nás</h1>
          </div>
      <section className="min-h-screen flex items-center p-4">
              <div className="flex flex-col md:flex-row w-full h-full">
                  <div className="md:w-1/2 flex justify-center items-center p-4">
                      <div>
                          <div>
                              <h2 className='font-bold mb-14'>Kontaktní formulář</h2>
                          </div>
                          <form action="">
                              <div className="mb-4">
                                  <label htmlFor="name">Jméno</label> <br />
                                  <input type="text" id="name" name="name" required className='border-solid border-gray-200 border-2 w-full md:w-60' />
                              </div>
                              <div className="mb-4">
                                  <label htmlFor="lName">Příjmení</label> <br />
                                  <input type="text" id="lName" name="lName" required className='border-solid border-gray-200 border-2 w-full md:w-60' />
                              </div>
                              <div className="mb-4">
                                  <label htmlFor="email">Email</label> <br />
                                  <input type="email" id="email" name="email" required className='border-solid border-gray-200 border-2 w-full md:w-60' />
                              </div>
                              <div className="mb-4">
                                  <label htmlFor="message">Zpráva</label><br />
                                  <textarea id="message" name="message" required className='border-solid border-gray-200 border-2 w-full md:w-60'></textarea>
                              </div>
                              <input type="submit" value="Odeslat" className='w-full md:w-60 h-10 bg-[#BEAC7D] text-white' />
                          </form>
                      </div>
                  </div>
                  <div className="md:w-1/2 flex justify-center items-center p-4">
                      <div className='w-full md:w-2/3'>
                          <img src="hero-image.jpg" alt="Hero" className="w-full h-full object-cover" />
                      </div>
                  </div>
              </div>
          </section></>
  );
};