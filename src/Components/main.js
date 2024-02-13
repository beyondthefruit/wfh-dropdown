import React from 'react';
import databiz from '../assets/client-databiz.svg';
import audiophile from '../assets/client-audiophile.svg';
import maker from '../assets/client-maker.svg';
import meet from '../assets/client-meet.svg';

const Main = ({ mobileMenuOpen }) => {
  return (
    <section className='w-screen max-h-full'>
      <article className='container mx-auto flex flex-col-reverse items-center sm:mt-16 sm:content-center md:flex-row md:gap-x-8 md:mt-4 px-6 items-center space-y-0 border-black'>
        {/* left item / text */}
        <div className='flex flex-col mt-8 mb-2 mx-auto  md:w-1/2 md:mt-12 md:content-center md:h-full'>
          <h1 className='max-w-md my-3 text-4xl font-bold text-center md:hidden'>
            Make remote work
          </h1>
          <h1 className='hidden md:block max-w-md tracking-wide font-bold md:text-left md:text-6xl md:my-6'>
            Make <br></br> remote work
          </h1>
          <p className='max-w-sm my-3 text-center text-darkGreyish md:text-left md:my-6 md:max-w-md'>
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <button className='w-1/4 my-3 mx-auto w-2/5 py-2 text-white bg-black rounded-xl border border-black md:mx-0 md:my-6'>
            Learn more
          </button>
          {/* client section */}
          <div className='flex justify-start space-x-4 pt-8 md:pt-12'>
            {/* links */}
            <a href=''>
              <img src={databiz} class="'h-8" alt='' />
            </a>
            <a href=''>
              <img src={audiophile} class="'h-8" alt='' />
            </a>
            <a href=''>
              <img src={meet} class="'h-8" alt='' />
            </a>
            <a href=''>
              <img src={maker} class="'h-8" alt='' />
            </a>
          </div>
        </div>
        {/* img */}
        <div className='w-full max-h-full mx-auto md:w-1/3 md:mt-12'>
          <img
            src={require('../assets/image-hero-mobile.png')}
            className='md:hidden'
            alt='laptop'
          />
          <img
            src={require('../assets/image-hero-desktop.png')}
            className='hidden md:block md:max-h-full md:'
            alt='laptop'
          />
        </div>
      </article>
    </section>
  );
};

export default Main;
