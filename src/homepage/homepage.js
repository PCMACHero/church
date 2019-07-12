import React from 'react'
import { Parallax, Background } from 'react-parallax';
import { InView } from 'react-intersection-observer'
import pastorPic from '../assets/images/pastor-cesar-preciado.jpeg'
import carlosPic from '../assets/images/member-carlos.jpeg'
import './homepage.css'
import Testimonios from '../testimonios/testimonios';


export default class Homepage extends React.Component{
    idInt=null
    state={
        parralax: {transform: `translate(0px, 0px)`}
    }
    
    componentDidMount(){
        // this.idInt = setInterval(() => {
        //     if(document.getElementById('hpsection1')){
        //         let bgHeigth = document.getElementById('hpsection1').clientHeight;
        //     let amountScrolled = window.scrollY
            
        //     if(amountScrolled < bgHeigth){
        //         this.setState({
        //             parralax:{transform: `translate(0px, ${Math.round(amountScrolled/2)}px)`}
        //         })
        //         console.log(this.state.parralax)
        //     }
        //     }
            

            
        // }, 10);
        // window.addEventListener("scroll",(e)=>{
        //     if(document.getElementById('hpsection1')){
        //         let bgHeigth = document.getElementById('hpsection1').clientHeight;
        //     let amountScrolled = window.scrollY
            
        //     if(amountScrolled < bgHeigth){
        //         this.setState({
        //             parralax:{transform: `translate(0px, ${Math.round(amountScrolled/2)}px)`}
        //         })
        //         console.log(this.state.parralax)
        //     }
        //     }
            

            
            
        // })
    }

    componentWillUnmount(){
        console.log("unmounted")
        clearInterval(this.idInt)
    }

    render(){
        return (
            <React.Fragment>
                {/* <div id="hpsection1" style={this.state.parralax}></div>
                <div className="section1-title">
                <h1 className="hp-title">IGLESIA JESUS ES LA ROCA</h1>
                </div> */}
                <Parallax
            // blur={3}
            bgImage="http://www.jesuseslaroca.org/wp-content/uploads/2018/09/image6-1.jpeg"
            bgImageAlt="Iglesia Jesus es la Roca"
            strength={400}
        >
            <div className="section1-title">
                <h1 className="hp-title">IGLESIA JESUS ES LA ROCA</h1>
                </div> 
            <div style={{ height: '600px' }} />
        </Parallax>
        <InView threshold={0.9}>
    {({ inView, ref }) => (
      <div  ref={ref} className="section1">
      <h1  className={`z2 ${inView?"animated fadeIn slow":"animated fadeOut"}`} 
    //   style={{display:inView?"":"none"}}
      >Bienvenidos</h1> 
      

  </div>
    )}
  </InView>
  <div className="divider"></div>
  <InView threshold={0.9}>
  {( {inView, ref} ) => (
          <div ref={ref} className={`pastor`}>
          <div className={`pastor-left ${inView?"animated fadeInLeft slow":"animated fadeOut"}`}>
              <div className="pastor-pic"/>
              <h5 className="pastor-name">PASTOR CESAR PRECIADO</h5>
          </div>
          
          <div className={`pastor-content ${inView?"animated fadeInRight slow delay-1s":"animated fadeOut"}`}>
              <h3 className="pastor-title">“Los retos se convierten posibles cuando los enfrentas.”</h3>
              <p className="pastor-text">Gracias por la visita a la pagina web de 
              Jesus es la Roca. En nombre de toda la congregación le deseamos que 
              el Señor Jesus les bendiga abundantemete y que guie, proteja y prospere
               tus vida.</p>
          </div>
      </div>
      )}
  </InView>
  <div className="divider"></div>
  <InView threshold={0.7}>
      {({inView,ref}) => (
          <div ref={ref} className={`${inView?"animated fadeIn slow":"animated fadeOut"}`}> 
            <Testimonios 
                name="Carlos Manera" 
                title="FIRME POR SU GRACIA Y MISERICORDIA"
                pic={carlosPic}
                text='Me siento muy dichoso de formar parte de esta familia en Cristo donde nací, crecí, y sigo firme por la gracia y misericordia del Señor.'
            />
          </div>
          
      )}
  </InView>
                
                
                

            </React.Fragment>
        )
    }
}