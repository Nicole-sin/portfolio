import { BrowserRouter } from "react-router-dom";

import { About, Experience, Hero, Navbar, Works } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-[#2C2C3C]'>

          <Navbar />
          <Hero />

        <About />
        <Experience />
        <div id="project">
        <Works />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
