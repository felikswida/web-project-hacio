import style from './Title.css'

function Title() {
    var title = "New Collections"
    var subTitle = "Cuteness Overload"
    return (
        <div>
            <div className ="lineTitleContent">
                <span className = "textContent">{title}</span> <br/>
            </div>
            
            <div>
                <span className = "textContentChild">{subTitle}</span>
            </div>
        </div>
    )
}

export default Title;