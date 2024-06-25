const {BASE_URL} = import.meta.env


interface Journeycard2Type {
    img_url: string,
    title: string,
    subtitle: string,
    info: string,
}


export default function Journeycard2({img_url, title, subtitle, info}:Journeycard2Type){


    return(<>
    <li className='journeybody-leftcon' >
                <ul className='journeybody-left-contentcon' >
                    <li>
                        <img id='htmlbody' src={`${BASE_URL}${img_url}`} alt='This is an html img' />
                    </li>
                    <li className="journeybody-left-text" >
                        <h1>{title}</h1>
                        <h5>{subtitle}</h5>
                    </li>
                </ul>
                <div className='journey-left-content' >
                <h5 id="journeybody-info" >{info}</h5>
                </div>
            </li>
    </>)
}