import style from './Bottom.css'
import HacioFriends from '../../../image/Logo Hacio Friends-01 1.png'
import Youtube from '../../../image/YoutubePutih.png'
import Instagram from '../../../image/Instagram White 1.png'

function Bottom(){
    return (
        <div className = " bottomWrapper">
            <div className = "bottomContentWrapper bottomGrid">
            
                <div className= "hacioFriends">
                    <img className = "hacioFriendsContent1"src = {HacioFriends}/>                      
                    <img className = "hacioFriendsContent2 youtubeFooter" src = {Youtube}/>
                    <img className = "hacioFriendsContent3 instagramFooter" src = {Instagram}/>
                </div>
                <div/>
                <div>
                    <span className = "bottomTitle">About</span><br/><br/>
                    <span className = "bottomContent">About Us</span><br/>
                    <span className = "bottomContent">About HACIO FRIENDS</span><br/>
                </div>
                <div>
                    <span className = "bottomTitle">Resources</span><br/><br/>
                    <span className = "bottomContent">FAQ</span><br/>
                    <span className = "bottomContent">Returns</span><br/>
                    <span className = "bottomContent">Privacy Policy</span><br/>
                    <span className = "bottomContent">Terms & Conditions</span><br/>
                    <span className = "bottomContent">Shipping</span><br/>
                    <span className = "bottomContent">How to Measure</span>
                </div>
                <div>
                <span className = "bottomTitle">OFFICIAL MERCHANDISE</span> <br/><br/>
                    <span className = "bottomContent">This is the official merchandise store for HACIO FRIENDS, IDN.</span>
                </div>

                

            </div>
            <br/><br/><br/>
            <div className = "hacioTradeMark">
                    <hr/>
                    <span className = "hacioTrademarkText">© 2021 HACIO FRIENDS.</span>
                    <span className = "hacioTrademarkText">Designed by HACIO FRIENDS.</span>
                </div>
        </div>
    );
}

export default Bottom;