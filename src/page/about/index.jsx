import Footer from '../../compontents/footer';
import './index.css';
import circle from '../../asset/about-circle.svg';
export default function About() {
    return (
      <div>
        <div className="bg">
          <img className="circle" src={circle} alt="" />
          <img className='about-ball-g' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fgreen-ball.png" alt=""/>
          <img className='about-ball-p' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Fpurple-ball.png" alt=""/>
        </div>
        <div className="about-content">
            <div className='info-card'>
              <div className="left-info-card">
                <div className='info-1'>
                  <p>HI，我是孙俞琳。</p>
                  <p>一名创意视觉设计师，也是一名野生艺术家。</p>
                </div>
                <div className='info-2'>
                  <p>这里是我们相识的地方，是交流的窗口。</p>
                  <p>我希望把创意和思考分享给你。</p>
                </div>
              </div>
              <img className='avatar' src="https://baozhucarrie-1305385933.cos.ap-shanghai.myqcloud.com/bzZone%2Fzone-pic%2Favatar.png" alt="" />
            </div>
            <div className="experience-container">
              <div className="left">
                <div className='exp-container'>
                  <h1>EDUCATION</h1>
                  <h2>伦敦艺术大学</h2>
                  <p className='exp-tag'>University of Art London</p>
                  <div className="exp-time">
                    <div>插画与视觉媒体 硕士 </div>
                    <div>2019.6-2021.3</div>
                  </div>
                  <div className="exp-content">
                    <p>1，TED x hangzhou*UAL 《象堡没有堡》发起者与参展者</p>
                    <p>2，野生青年首届参展艺术家</p>
                    <p>3，UAL与伦敦corsica studio联合插画展参展者</p>
                  </div>
                </div>
                <div className="exp-container">
                  <h2>鲁迅美术学院</h2>
                  <p className='exp-tag'>Luxun Academay of Fine Art</p>
                  <div className="exp-time">
                    <div>传媒动画学院 学士 </div>
                    <div> 2012-2016 </div>
                  </div>
                  <div className="exp-content">
                    <p>1，《TOUGE》优秀鲁迅美院动画获得者</p>
                    <p>2，连续三年奖学金获得者</p>
                  </div>
                </div>
              </div>
              <div className="right">
                <div className='exp-container'>
                  <h1>WORK</h1>
                  <h2>拼多多</h2>
                  <div className="exp-time">
                    <div>创意设计师 </div>
                    <div>2021.4-2022.7</div>
                  </div>
                  <div className="exp-content">
                    <p>C端创意设计</p>
                    <p>1，负责首页icon入口动画，组建动画资源库。</p>
                    <p>2，参与平台整合营销，节日大促设计LOGO，KV以及各资源位视觉以及动效，复盘总结各节日营销设计。</p>
                    <p>3，参与新年物料，表情包制作。</p>
                  </div>
                </div>
                <div className='exp-container'>
                  <h2>酷家乐</h2>
                  <div className="exp-time">
                    <div>创意设计师 </div>
                    <div>2020.6-2020.11</div>
                  </div>
                  <div className="exp-content">
                    <p>建立B端设计认知</p>
                    <p>1，参与绘制D端插画人物体系并且落地</p>
                    <p>2，维护中台日常运营视觉，WEB端界面视觉。</p>
                    <p>3，参与团队每期设计主题创作。</p>
                  </div>
                </div>
                <div className='exp-container'>
                  <h2>RAVENSKILL </h2>
                  <div className="exp-time">
                    <div>品牌设计师 </div>
                    <div>2017.9-2019.3</div>
                  </div>
                  <div className="exp-content">
                    <p>建立品牌视觉从0到1，线上线下品牌包装设计</p>
                    <p>1，品牌创始，VI设计，品牌调性的建立</p>
                    <p>2，建立耳机产品包装体系，包括产品包装。</p>
                    <p>3，配合品牌运营海报以及相关活动</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }