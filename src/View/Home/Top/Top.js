
import style from './Top.css'
import HacioLogo from '../../../image/Logo Hacio Friends-01-HiRes.png'
import Instagram from '../../../image/Instagram 1.png'
import Youtube from '../../../image/Youtube.png'
import {Slideshow} from '../../../Component/SlideShow/Slideshow'

function Top() {
    return (
        <div>
            <div style={{paddingLeft : 40, paddingTop : 20}}>
                <img
                    src={Youtube}
                    style={{padding : 5}}
                />
                <img
                    src={Instagram}
                    style={{padding : 5}}
                />
            </div>
            <div>
                <div>
                    <img
                        className="center"
                        src={HacioLogo}
                        style={{width : 315,height : 50}}
                    />
                </div>
            </div>
            <div>
                    <div >
                        <div className ="center topMenu">
                            <span style ={{fontFamily : 'VisbyRoundCF-Bold' ,fontSize : 18}}>Home </span> 
                            <span style ={{fontFamily : 'VisbyRoundCF-Bold' ,fontSize : 18}}>Collections</span>
                            <span style ={{fontFamily : 'VisbyRoundCF-Bold' ,fontSize : 18}}>Characters</span>
                            <span style ={{fontFamily : 'VisbyRoundCF-Bold' ,fontSize : 18}}>Asticles</span>
                        </div>
                    </div>
            </div>
            <div>
                <Slideshow/>
            </div>
        </div>
    )
}
export default Top;