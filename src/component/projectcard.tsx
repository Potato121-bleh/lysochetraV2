import './../Globle.css'
const {BASE_URL} = import.meta.env

interface projectcardType {
    imgurl: string,
    title: string,
    subtitle: string,
    btn_url: string,
    colorbg: string,
    btn_color: string,
}

function Projectcard({imgurl, title, subtitle, btn_url, colorbg, btn_color}: projectcardType){
    const handlecheck: () => void = () => {
        if(title === 'ACLEDAclone'){window.alert("Sorry for inconvenience, Due to ACLEDA policy, I can't publish the ACLEDA Clone for you, But you can contact me via the contact section and I would apprecited to show you what I got.")}
    }

    return(<>
    <div className={`projectcard-main-con ${colorbg} `} >
            <img id="project-img" width={40} height={40} src={`${BASE_URL}${imgurl}`} alt="This is an icon img of card"></img>
        <div className="projectcard-text-con" >
            <h2>{title}</h2>
            <h5>{subtitle}</h5><br/>
            <a onClick={handlecheck} className={`card-btn ${btn_color}`} href={btn_url}>
                Read More
            </a>
        </div>
    </div>
    </>)
}

export default Projectcard