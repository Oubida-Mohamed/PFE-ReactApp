import SubCategorie from "./SubCategorie";
import { Fragment} from 'react';
import Carousel from 'react-elastic-carousel';

function App() {
  const breakPoints = [
    { width: 300, itemsToShow: 1 },
    { width: 450, itemsToShow: 3 },
    // { width: 600, itemsToShow: 3 },
    // { width: 800, itemsToShow: 4 },
    // { width: 1500, itemsToShow: 5 },
  ];

  return <div className="carousel-container my-20">
    <Fragment>
      <Carousel breakPoints={breakPoints} className=''>
      <SubCategorie/>
      <SubCategorie/>
      <SubCategorie/>
      <SubCategorie/>
      <SubCategorie/>
      <SubCategorie/>
      <SubCategorie/>
      <SubCategorie/>
      </Carousel>
  </Fragment>
    
  </div>
}

export default App;
