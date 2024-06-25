import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import './Globle.css'
import Achievementcard from './component/achievementcard'

let tracker = 0;
export default function Achievement(){
    let [Hmove, setHmove] = useState<string>()
    let [C1move, setC1move] = useState<string>()
    let [C2move, setC2move] = useState<string>()
    let [Ctrlleftbtn, setCtrlleftbtn] = useState<string>()
    let [Ctrlrightbtn, setCtrlrightbtn] = useState<string>()
    //@ts-ignore
    let [Trigger, setTrigger] = useState<string | number>()
    
    type handlemovementType = {
        Hmove: string,
        Ctrlleftbtn: string,
        Ctrlrightbtn: string,
        C1move: string,
        C2move: string,
    }

    const handlemovement = ({Hmove, Ctrlleftbtn, Ctrlrightbtn, C1move, C2move}: handlemovementType) => {
        setHmove(Hmove)
        setCtrlleftbtn(Ctrlleftbtn)
        setCtrlrightbtn(Ctrlrightbtn)
        setC1move(C1move)
        setC2move(C2move)
    }
    useEffect(() => {
        switch (tracker) {
            case 0:
                handlemovement({Hmove: "", Ctrlleftbtn: "hidden", Ctrlrightbtn: "", C1move: "", C2move: ""})
                break;
            case 1:
                handlemovement({Hmove: "ACH-Hmove1", Ctrlleftbtn: "display", Ctrlrightbtn: "", C1move: "ACH-Cmove1", C2move: "ACH-Cmove1"})
                break;
            case 2:
                handlemovement({Hmove: "", Ctrlleftbtn: "", Ctrlrightbtn: "display", C1move: "ACH-Cmove2", C2move: "ACH-Cmove2"})
                break;
            case 3:
                handlemovement({Hmove: "ACH-Hmove1", Ctrlleftbtn: "", Ctrlrightbtn: "hidden", C1move: "ACH-Cmove3", C2move: "ACH-Cmove3"})
                break;
            default:
                break;
        }
    }, [tracker])

    const handleleft:() => void = () => {
        tracker --;
        setTrigger(tracker)
    }

    const handleright: () => void = () => {
        tracker ++;;
        setTrigger(tracker)
    }

    return(<>
    <div className="ACH-main-con" >
        {/* ABS for decoration */}
        <div className='abs-deco-con'>
            <div className='abs-deco1' >
                <div className='abs-deco-sub' ></div>
            </div>
        </div>
        <div className='ACH-title-con' ><h1 className='ACH-title' >Achivement</h1></div>
        <br/>
        <br/>
        <div className='ACH-content-con'>

            <div className='ACH-leftarrow-icon' >      
                <FontAwesomeIcon className={`${Ctrlleftbtn}`} onClick={handleleft} id='ACH-leftarrow-icon' icon={faChevronLeft} ></FontAwesomeIcon>
            </div>

            <ul className='ACH-content-subcon'>
                <li className='ACH-content1' >
                    <div className={`ACH-content1-4scroll ${C1move}`} >
                        <div className='ACH-content1-child' ><img className='ACH-img' src='aiicert.jpg' alt='this is an img of achievement' /></div>
                        <div><Achievementcard img_url='/Aiilogonobg.png' title='Aii Language Center' subtitle='Public Speaking Champion' text="At Aii language center, I'm not only learning the language but I also training myself to be a speaker by improving confidence and Social interaction.  After all these year, I used to join a lot of competitions and as a result from hard work and dedication I manage to win the trophy of Public Speaking Championship 2022"/> </div>
                        <div className='ACH-content1-child' ><img className='ACH-img-extra' src='khmergrade12.jpg' alt='this is an img of achievement' /></div>
                        <div><Achievementcard img_url='/SoutheastALSlogonobg.png' title='Southeast Asia Language' subtitle='Basic computer' text="After I knew what my passion and the goal that I wanted, I started to begin my IT journey with Southeast Asia Language School with the basic computer program and I managed to finish faster than the school expected. I been using computer since I was 8 years old and use it for gaming but today, it changed."/> </div>
                    </div>
                    
                </li>
                <li className='ACH-content2' >
                    <div className={`ACH-content2-4scroll ${C2move}`}>
                        <div><Achievementcard img_url='/Aiilogonobg.png' title='Aii Language Center' subtitle='Graduated' text='I have been studying at Aii language center since 2018 and finished In 2023.  All these years, I have been through a lot of projects such as volunteering and charity.  After I finished my program, I could speak English and use It in my work field.'/> </div>
                        <div className='ACH-content1-child' ><img className='ACH-img' src='/publicspeakingcert.jpg' /></div>
                        <div><Achievementcard img_url='/Moeslogonobg.png' title='Chak Angre High School' subtitle='Grade 12 (bacll2024)' text="My High school life is a bit fun with a ton of friends around. After all these 12 years of studying and hard work, I passed the 2 most important exams of my high school life. It not affect much for my future job but at least I made my mom smile."/> </div>
                        <div className='ACH-content1-child' ><img className='ACH-img' src='basiccomputer.jpg' alt='this is an img of achievement' /></div>
                    </div>
                </li>
                
                <div className={`hoveron ${Hmove}`} ></div>
            </ul>

            <div className='ACH-leftarrow-icon' >      
                <FontAwesomeIcon className={`${Ctrlrightbtn}`} onClick={handleright} id='ACH-rightarrow-icon' icon={faChevronRight} ></FontAwesomeIcon>
            </div>
        </div>
        
    </div>
    </>)
}