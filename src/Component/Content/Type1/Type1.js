
import style from './Type1.css'
import image1 from '../../../image/Content/Head Plush Doll 2-01 1.png'
import image2 from '../../../image/Content/Sticky Memo Pad-01 2.png'
import image3 from '../../../image/Content/Shoes-01 2.png'
import Title from '../Title/Title.js'


function Type1() {
    
    return (
        <div className = "wrapperType1"> 
            <Title/>
                        
            <div className = "containerImage">
                <div className = "divImage1">
                    <img src={image1} style={{height: '100%',width: '100%', objectFit: 'contain'}}/>
                </div>
                <div className = "divImage3">
                    <img src={image2} style={{width: '100%', objectFit: 'contain'}}/>
                </div>
                <div className = "divImage2">
                    <img src={image3} style={{width: '100%', objectFit: 'contain'}}/>
                </div>
            </div>
        </div>
    );
  }
  
  export default Type1;