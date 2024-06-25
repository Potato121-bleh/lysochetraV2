
interface ACHcardType {
    img_url: string,
    title: string,
    subtitle: string,
    text: string,

}

export default function Achievementcard({img_url, title, subtitle, text}:ACHcardType){
    return(<>
    <ul className="ACHcard-main-con">
        <li className="ACHcard-img-con" >
            <img className="ACHcard-img" src={img_url} />
            <div className="ACHcard-title-con" >
                <h3 className="ACHcard-title" >{title}</h3>
                <h5 className="nomargin" >{subtitle}</h5>
            </div>
            
            </li>
        <li className="ACHcard-text" >
            <h5>{text}</h5>
        </li>
    </ul>
    </>)
}