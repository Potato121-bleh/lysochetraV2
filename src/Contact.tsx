import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
const {BASE_URL} = import.meta.env

export default function Contact(){
    let [Telegram, setTelegram] = useState<string>()
    let [Phone, setPhone] = useState<string>()
    let [Mail, setMail] = useState<string>()
    let [Maintext, setMaintext] = useState<string>()
    let [Ctrlbtnleft, setCtrlbtnleft] = useState<string>("hidden")

    const handletelegram = () => {
        setMail('hidden')
        setPhone('hidden')
        setTelegram("CON-movecardback")
        setMaintext("hidden")
        setCtrlbtnleft('display')
    }
    const handlephone = () => {
        setMail('hidden')
        setPhone('CON-movecardback')
        setTelegram("hidden")
        setMaintext("hidden")
        setCtrlbtnleft('display')
    }
    const handlemail = () => {
        setMail('CON-movecardback')
        setPhone('hidden')
        setTelegram("hidden")
        setMaintext("hidden")
        setCtrlbtnleft('display')
    }
    const handlebackward = () => {
        setMail('')
        setPhone('')
        setTelegram("")
        setMaintext("")
        setCtrlbtnleft('hidden')
    }
    return(<>
    <div className="CON-main-con" >
        {/*<div className="CON-deco1" ></div>
        <div className="CON-deco2-con" >
            <div className="CON-deco-child1" />
        </div> */}
        <div className="CON-header" >
            <div className="CON-title-con" >
                <h1 id="CON-title" >Contact Me</h1>
                <div className="CON-deco-child2" />
            </div>
            <div className="CON-deco-child1" />
        </div>
        <ul className="CON-content-con" >
            <li className="CON-content1-con" >
                <div className="CON-img-con" ><img onClick={handletelegram} id="CON-img" src={`${BASE_URL}Telegramlogonobg.png`} /></div>
                <div className="CON-img-con" ><img onClick={handlemail} id="CON-img" src={`${BASE_URL}maillogonobg.png`} /></div>
                <div className="CON-img-con" ><img onClick={handlephone} id="CON-img" src={`${BASE_URL}phonelogonobg.png`} /></div>
            </li>
                <div className='CON-leftarrow-icon' >      
                    <FontAwesomeIcon className={`${Ctrlbtnleft}`} onClick={handlebackward} id='journey-rightarrow-icon' icon={faChevronLeft} ></FontAwesomeIcon>
                </div>
            <li className="CON-content2-con" >
                <div className="CON-content2-4scroll" >
                    <div className="CON-content2-text1" >
                        <h4 className={`${Maintext}`} >I'm sure you having a great time checking my website. I been coding as front end developer since November 2023 and there is a lot of new project coming up to test my ability and skill. I'm also looking for an internship and you can contact me anytime you want! Thank you for visiting my profile.</h4>
                        <div className={`CON-abs-telegram-con ${Telegram}`} >
                            <h3>Username: @Potato470</h3>
                            <h3>Name: លី សុចិត្រា_7689</h3>
                            <h3>Phone Number: 093602025</h3>
                        </div>
                        <div className={`CON-abs-telegram-con ${Phone}`} >
                            <h3>Phone number: </h3>
                            <h3>+855-93 602 025</h3>
                        </div>
                        <div className={`CON-abs-telegram-con ${Mail}`} >
                            <h3>Email: </h3>
                            <h3>lysochetra95@gmail.com</h3>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    </>)
}


//<h4>I'm sure you having a great time checking my website. I been coding as front end developer since November 2023 and there is a lot of new project coming up to test my ability and skill. I'm also looking for an internship and you can contact me anytime you want! Thank you for visiting my profile.</h4>
