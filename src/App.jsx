import './App.css';
import { Fragment } from 'react';
import Footer from './compontents/footer';
function App() {
  return (
    <Fragment>
      <div className='project-list'>
        <div className='list-title'>
          <img className='title-pic' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fwork-project.png" alt=""/>
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
          <img className='footer-pic' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Ffooter.png" alt=""/>
        </div>
      </div>
      <div style={{marginTop: '40vw'}}>
        <Footer/>
      </div>
    </Fragment>
    
  );
}

export default App;
