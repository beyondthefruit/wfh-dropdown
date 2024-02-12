import { useState } from 'react';
import NavMenu from './Components/nav';
import Main from './Components/main';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='app'>
      <div className='container'>
        {mobileMenuOpen && <div className='background-mobile-menu-open'></div>}
        {/* <div className='grey md:hidden'></div> */}
        <NavMenu
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
        />
        <Main mobileMenuOpen={mobileMenuOpen} />
      </div>
    </div>
  );
}

export default App;
