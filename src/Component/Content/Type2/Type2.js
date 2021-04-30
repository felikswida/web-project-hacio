import style from './Type2.css'
import Title from '../Title/Title.js'
import image1 from '../../../image/Content/Head Plush Doll-01 1.png'
import image2 from '../../../image/Content/Shoes-01 1.png'
import image3 from '../../../image/Content/Plush Doll 30cm - Hacio-01 1.png'
import image4 from '../../../image/Content/Sticky Memo Pad-02 1.png'

function Type2() {
    
    return (
        <div className = "wrapperType2"> 
            <Title/>
                        
            <div className = "containerImageType2">
                <div>
                    <div className = "productImageType2">                        
                        <img src={image1} style={{height: '100%',width: '100%', objectFit: 'contain'}} />
                    </div>
                    <br/>
                    <div className = "productNameType2">
                        <span > Skylynn - Keychain Head Plush Doll </span>
                    </div>
                    
                    <br/>
                    <div className = "productPricType2">
                        <span >IDR 59.000</span>
                    </div>
                    
                </div>
                <div>
                    <div className = "productImageType2">                        
                        <img src={image2} style={{height: '100%',width: '100%', objectFit: 'contain'}}/>
                    </div>
                    <br/>
                    <div className = "productNameType2">
                        <span>Chon-chon - Sticky Memo Pad</span>
                    </div>                    
                    <br/>
                    <div className = "productNameType2">
                        <span>IDR 39.000</span>
                    </div>
                    
                </div>
                <div>
                    <div className = "productImageType2">                        
                        <img src={image3} style={{height: '100%',width: '100%', objectFit: 'contain'}}/>
                    </div>
                    <br/>
                    <div className = "productNameType2">
                        <span>Hacio - Plush Doll 30cm</span>
                    </div>
                    <br/>
                    <div className = "productNameType2">
                        <span>IDR 149.000</span>
                    </div>
                </div>
                <div>
                    <div className = "productImageType2"> 
                        <img src={image4} style={{height: '100%',width: '100%', objectFit: 'contain'}}/>
                    </div>
                    <br/>
                    <div className = "productNameType2">
                        <span>Shoes - Hacio Friends Series</span>
                    </div>
                    
                    <br/>
                    <div className = "productNameType2">
                        <span>IDR 299.000</span>
                    </div>
                </div>
                
                
                
            </div>
        </div>
    );
  }
  
  export default Type2;