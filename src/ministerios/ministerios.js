import React from 'react'
import './ministerios.css'

export default class Ministerios extends React.Component{
    intervalId = null
    counter=0
    state={
        
        ministerioDiv:null
    }
    
    ministerioArr = [
        {
            title:"MINISTERIO DE VARONES",
            subtitle:"El primer martes de cada mes",
            // text:"Ven y unete a este grupo de hombre valientes empeñados a servirle a Dios",
            imgClass: "bg-mens",
            longText: `Los hombres del Ministerio Jesús Es La Roca te invitas a acompañarnos cada primer Martes del Mes a las 7:00 pm
            Cada una de nuestras reuniones será para hablar, debatir y planificar el futuro, siendo llamados los liberes de nuestro hogar. Cada reunión se abre con nuevos temas necesarios en la vida de un varón de Dios. Hablamos de todos los temas de interés y mensajes fresco por el equipo de ministros y el Pastor.
            Si eres un varón que quiere ser usado de gran manera por Dios tienes que dejar que sea El hablando atreves de Su palabra. La edad que tengas no importa, seas joven o de buena edad tú tienes un llamado de parte de Dios y sabemos que es de vital importancia bendecir a quienes son y serán las cabezas de los hogares.`
        },
    {
        title:"MINISTERIO DE MUJERES",
            subtitle:"Mujeres de vida abundante",
            text:"",
            imgClass: "bg-womens",
            longText: `Bienvenida a nuestra pagina, el objetivo de este ministerio es invitarle de manera directa a honrar y exaltar a Dios con todo el corazón. Este ministerio se ha dado a la tarea de tocar los corazones de aquellas mujeres que desean un consejo de la palabra de parte de nuestro Dios. No importa en que situación te encuentres en tu vida, Dios puede transformar tu vida para que vivas una vida con propósito para El.
            Nuestro deseo es motivar a las mujeres para el crecimiento espiritual y tener una relación personal con Cristo Jesús. Cada primer sábado del mes a las 9am realizamos un servicio dirigido a la mujer en el cual alabamos, recibimos palabra viva de Dios. También, ofrecemos oración, motivación, y compañerismos para el desarrollo vida espiritual. Y el deseo de nuestros corazones es amarle en el Señor. Deseamos que considere visitarnos.
            Así como dice en la escritura.
            “El ha venido para que tengan vida, y para que la tengan en abundancia.” San Juan 10:10`
    },
{
    title:"MINISTERIO DE JOVENES SYM",
    subtitle: "SURRENDER YOUTH MINISTRY",
    // text: "Bienvenidos a nuestra pagina. SYM (Surrender Youth Ministry) es un ministerio juvenil con el proposito de alcanzar a las almas perdidas. Si te sientes solo, triste, decepcionado, deprimido, atrapado en drogas, en pornografia y sin ganas de vivir? Dejame decirte joven que Dios te ama y El tiene un plan perfecto para tu vida",
    imgClass: "bg-jovenes",
    longText:`Bienvenidos a nuestra pagina. SYM (Surrender Youth Ministry) es un ministerio juvenil con el proposito de alcanzar a las almas perdidas. Si te sientes solo, triste, decepcionado, deprimido, atrapado en drogas, en ponografia y sin ganas de vivir. Dejame decirte Joven que Dios te ama y El tiene un plan perfecto para tu vida (Juan 3,16). O tal ves tu solo estas buscando un lugar donde se alaba y se adora el nombre de Dios; ven a visitarnos y danos la opurtunidad de amarte en Cristo!! Porque no estas solo en este camino.
    Te invitamos que nos vengas a visitar o mandanos una carta no gustaria escuchar de ti.
    (2 Corintios 4:8-9) Estando atribulados en todo, mas no angustiado; en apuros, mas no desesperamos; perseguidos, mas no desamparados; abatidos, mas no perecemos.`
},
{
    title:"MINISTERIO DE NIÑOS",
    subtitle: "Ven y crece con nosotros los Viernes a las 7:00 p.m. y los Domingos a las 11:00 a.m.",
    imgClass:"bg-ninos",
    longText:`Bienvenidos a Ministerio de Niños Creciendo en Gracia, donde nuestra visión es ayudar a los niños(as) a crecer en gracia y en el conocimiento de nuestro Señor y Salvador Jesucristo. El ministerio de niños(as) comenzó en Septiembre del 2000, y ha florecido al ministerio que es hoy. Nuestro equipo con experiencia y entrenamiento profesional, trabaja con diligencia para equipar a nuestros niños(as) como futuros líderes y servidores para nuestro Señor Jesucristo.
    Nos esforzamos para proveer un ambiente divertido, seguro y atractivo donde nuestros hijos(as) puedan aprender, crecer y comprender la voluntad de Dios para sus vidas. Nuestra oración es que nuestros hijos(as) desarrollen un(a) espíritu apacible, una refección de Cristo, un corazón de un servidor, confianza en La Palabra de Dios y el abrazo de Dios íntimamente.
    Esperamos que seas bendecido y motivado por nuestros programas y los muchos eventos que ofrecemos.`
}]

    ministerioToShow=(counter)=>{
        let div = (
        <React.Fragment>
            <div key={this.counter} className={`ministerio animated slow fadeIn ${this.ministerioArr[counter].imgClass}`}>
        <h2>{this.ministerioArr[counter].title}</h2>
        <h3>{this.ministerioArr[counter].subtitle}</h3>
        
        <p>{this.ministerioArr[counter].text}</p>
        <div style={{display:'flex', flexDirection:"column"}}></div>
         </div>
         <div className="long-text ">
         <div className="btn-array">
            <button className="btn" onClick={()=>{
                clearInterval(this.intervalId)
                this.ministerioToShow(0)
            }}>VARONES</button>
            <button className="btn" onClick={()=>{
                clearInterval(this.intervalId)
                this.ministerioToShow(1)
            }}>MUJERES</button>
            <button className="btn" onClick={()=>{
                clearInterval(this.intervalId)
                this.ministerioToShow(2)
            }}>JOVENES</button>
            <button className="btn" onClick={()=>{
                clearInterval(this.intervalId)
                this.ministerioToShow(3)
            }}>NIÑOS</button>
            </div>
            <p className="pad">{this.ministerioArr[counter].longText}</p>
         </div>

        </React.Fragment>
        )
    this.setState({
        ministerioDiv: div
    })
    }

    componentDidMount(){
        this.ministerioToShow(0)
        this.counter++
        this.intervalId = setInterval(e=>{
            if(this.counter===this.ministerioArr.length){
                this.ministerioToShow(0)
                this.counter=1
                
            }else{
                this.ministerioToShow(this.counter)
                this.counter++
            }
            
        }, 10000)
    }
    componentWillUnmount(){
        console.log("unmounted")
        clearInterval(this.intervalId)
    }
    
    render(){
    return(
        <div className="ministerios">
            {/* <h1>MINISTERIOS</h1> */}
            {this.state.ministerioDiv}
            


        </div>
    )
}
}

