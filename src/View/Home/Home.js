import style from './Home.css'
import Top from './Top/Top.js'
import ContentType1  from '../../Component/Content/Type1/Type1.js'
import ContentType2  from '../../Component/Content/Type2/Type2.js'
import ContentType3  from '../../Component/Content/Type3/Type3.js'
import Bottom from './Bottom/Bottom.js'
function Home() {
    return (
        <div>
            <Top/>
                <div style ={{padding : '55px'}} className = "center">
                    <ContentType1/>
                </div>
                <div style ={{padding : '55px'}} className = "center">
                    <ContentType2/>
                </div>
                <div style ={{padding : '55px'}} className = "center">
                    <ContentType3/>
                </div>
            
            
            
            <Bottom/>
        </div>
    )
}
export default Home;