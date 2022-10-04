import './App.css';
import WorkTitle from './asset/work-project.png'
import FooterInfo from './asset/footer.png'
import {Fragment} from 'react';
import Footer from './compontents/footer';
function App() {
  return (
    <Fragment>
      <div className='project-list'>
        <div className='list-title'>
          <img className='title-pic' src={WorkTitle} alt=""/>
        </div>
        <div className='list-content'>
          <div className='list-item'></div>
          <div className='list-item'></div>
          <div className='list-item'></div>
          <div className='list-item'></div>
          <div className='list-item'></div>
          <div className='list-item'></div>
          <div className='list-item'></div>
          <div className='list-item'></div>
        </div>
        <div className='more'>
          MORE
        </div>
        <div className='contact'>
          <img className='footer-pic' src={FooterInfo} alt=""/>
        </div>
      </div>
      <Footer/>
    </Fragment>
    
  );
}

export default App;
