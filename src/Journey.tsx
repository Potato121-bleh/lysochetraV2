import './Globle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Journeycard2 from './component/journeycard2.tsx'
import { useEffect, useState } from 'react';

let tracker: number = 0;

export default function Journey(){
    let [Moveplane, setMoveplane] = useState<string>();
    let [Ctrlbtnleft, setCtrlbtnleft] = useState<string>()
    let [Ctrlbtnright, setCtrlbtnright] = useState<string>()
    let [CtrltoolNP, setCtrltoolNP] = useState<string>()
    let [Ctrlleftcon, setCtrlleftcon] = useState<string>()
    let [Planegas1, setPlanegas1] = useState<string>('')
    let [Planegas2, setPlanegas2] = useState<string>('')
    let [Rotateplane, setRotateplane] = useState<string>()
    let [Planeani, setPlaneani] = useState<string>('planeanimation')
    //@ts-ignore
    let [Trigger, setTrigger] = useState<string | number>()

    useEffect(() => {
        console.log("it triggered")
        switch (tracker) {
            case 0:
                setCtrlbtnleft("hidden")
                setMoveplane("Pmovehtml")
                setCtrltoolNP("Tmovehtml")
                setTimeout(() => {
                    setCtrlleftcon("TCmovehtml")
                    setRotateplane("")
                    setPlaneani('planeanimation')
                }, 1700);
                break;  
            case 1:
                setCtrlbtnleft('display')
                setCtrlbtnright('display')
                setPlanegas1('gas display1')
                setTimeout(() => {
                    setPlanegas2('gas display1')
                }, 250);
                setMoveplane("Pmovecss")
                setCtrltoolNP("Tmovecss")
                setTimeout(() => {
                    setPlanegas1('')
                    setPlanegas2('')
                    setCtrlleftcon("TCmovecss")
                    setRotateplane("")
                    setPlaneani('planeanimation')
                }, 1700);
                break;
            case 2:
                setPlanegas1('gas display1')
                setTimeout(() => {
                    setPlanegas2('gas display1')
                }, 250);
                setMoveplane("Pmovejs")
                setCtrltoolNP("Tmovejs")
                setTimeout(() => {
                    setPlanegas1('')
                    setPlanegas2('')
                    setCtrlleftcon("TCmovejs")
                    setRotateplane("")
                    setPlaneani('planeanimation')
                }, 1700);
                break;
            case 3:
                setPlanegas1('gas display1')
                setTimeout(() => {
                    setPlanegas2('gas display1')
                }, 250);
                setMoveplane("Pmovereact")
                setCtrltoolNP("Tmovereact")
                setTimeout(() => {
                    setPlanegas1('')
                    setPlanegas2('')
                    setCtrlleftcon("TCmovereact")
                    setRotateplane("")
                    setPlaneani('planeanimation')
                }, 1700);
                break; 
            case 4:
                setPlanegas1('gas display1')
                setTimeout(() => {
                    setPlanegas2('gas display1')
                }, 250);
                setCtrlbtnleft('display')
                setCtrlbtnright('display')
                setMoveplane("Pmovenextjs")
                setCtrltoolNP("Tmovenextjs")
                setTimeout(() => {
                    setPlanegas1('')
                    setPlanegas2('')
                    setCtrlleftcon("TCmovenextjs")
                    setRotateplane("")
                    setPlaneani('planeanimation')
                }, 1700);
                break;   
            case 5:
                setPlanegas1('gas display1')
                setTimeout(() => {
                    setPlanegas2('gas display1')
                }, 250);
                setCtrlbtnright('hidden')
                setMoveplane("Pmovets")
                setCtrltoolNP("Tmovets")
                setTimeout(() => {
                    setPlanegas1('')
                    setPlanegas2('')
                    setCtrlleftcon("TCmovets")
                    setRotateplane("")
                    setPlaneani('planeanimation')
                }, 1700);
                break;      
            default:
                break;
        }
    }, [tracker])

    const handleforward:() => void = () => {
        tracker ++;
        setTrigger(tracker)
        console.log(tracker)
    }
    const handlebackward:() => void = () => {
        tracker --;
        setPlaneani('')
        setRotateplane("rotateplane")
        setTrigger(tracker)
        console.log(tracker)
    }


    return(<>
    <div className="journey-main-con">
        <ul className='journey-header-con' >
            <li className='journey-header-leftcon' >
                <h1>My coding journey</h1>
            </li>
            <li className='journey-header-rightcon'>
                <img src='/planenobg.png' className={`plane ${Moveplane}`} ></img>
                <div className='JH-rightcon-middle'>
                    <div className='journey-header-line' >
                        <div className='abs2023' ><h4 className='nomarginNblock' >2023</h4></div>
                        <div className='abs2024' ><h4 className='nomarginNblock' >2024</h4></div>
                    </div>
                </div>





                <ul className='journey-header-rightcon-icon'>
                    <div className='JH-icon-con-personal'><img className='journey-header-icon-child' src='/htmlnobg.png' id='html'/></div>
                    <li><img className='journey-header-icon-child' src='/cssnobg.png' id='css' /></li>
                    <li><img className='journey-header-icon-child' src='/javascript-no-bg.png' id='js' /></li>
                    <li><img className='journey-header-icon-child' src='/reactnobg.png' id='react' /></li>
                    <li><img className='journey-header-icon-child' src='/nextjs-no-bg.png' id='nextjs' /></li>
                    <li><img className='journey-header-icon-child' src='typescriptnobg.png' id='ts' /></li>
                </ul>
            </li>

        </ul>
        <ul className='journey-body-con' >
            <div className='journey-leftbody-con' >
                <ul className={`journey-leftbody-content-con ${Ctrlleftcon}`} >
                    <li className={`html-con spaceevely2`} >
                        <Journeycard2 img_url='/htmlnobg.png' title='HTML' subtitle='Since November 2023' info="I have been dreaming about coding since I was in grade 10
                        but I don't have enough time to make it happen. but my journey started after I finished Bacll and I started putting my hand on my keyboard and doing what I love. The first tool that I learned is HTML, which comes in handy for front-end developers."/>
                    </li>
                    {/*   */}
                    <li className={`css-con spaceevenly`} >
                        <Journeycard2 img_url='/cssnobg.png' title='CSS' subtitle='Since November 2023' info="After HTML we also can't forget about CSS which is our most 
                        important tool in Front-End field. It took me about a month to finish CSS and I did a lot of CSS projects after I finished learning it. In CSS I love to play with animation to make my website more attractive and improve user experience."/>
                    </li>
                    <li className={`js-con spaceevenly `} >
                        <Journeycard2 img_url='/javascript-no-bg.png' title='Javascript' subtitle='Since December 2023' info="After HTML and CSS, Javascript is my next target.
                        Learning Javascript is not a challenge for me because I used to learn Python before which makes Javascript easier to understand. The purpose of learning Javascript is for the used to create functionality or systems to make my web page attractive and perform the given job. which lead me to study all feature."/>
                    </li>
                    <li className={`react-con spaceevenly`} >
                        <Journeycard2 img_url='/reactnobg.png' title='ReactJs' subtitle='Since February 2024' info="After a while, HTML, CSS, and Javascript aren't enough to make
                        my website look good, which makes the React app my next target. React doesn't just give me tools to use but it also allows me to learn about how git works and especially publish my first website without domain. I also can create any animation that I want with React app and also make routing more easier"/>
                    </li>
                    <li className={`nextjs-con spaceevenly`} >
                        <Journeycard2 img_url='/nextjs-no-bg.png' title='NextJs' subtitle='Since April 2024' info="After a lot of wonderful projects had been created but after a while, 
                        I felt like I didn't have enough tools for my website. which made Next js was my next target. After learning Next js for a while I found out that Next js has everything I have been looking for such as loading.js, error.js, dynamic routes and especially parallel routes, intercepting route which make my website professional."/>
                    </li>
                    <li className={`ts-con spaceevenly`} >
                        <Journeycard2 img_url='/typescriptnobg.png' title='Typescript' subtitle='Since June 2024' info="After taking a hugh step into technology field I realized that 
                        Typescript also one of the most important tool for javascript developer to avoid any unexpected error. In typescript, I also discovered a lot of new tip and idea for solving any incoming problems. Now, I can't write javascript without typescript."/>
                    </li>
                    
                    </ul>
                </div>
            
            <li className='journey-rightbody-content-con' >
                <div className='abs-TnearPlane-con'>
                        <div className={`abs-TnearPlane-subcon ${CtrltoolNP}`} >
                            <div className='TnearPlane-child-extraleft' ><img id='logo-Nearplane' src='/htmlnobg.png' /></div>
                            <div className='TnearPlane-child' ><img  id='logo-Nearplane' src='/cssnobg.png' /></div>
                            <div className='TnearPlane-child'><img  id='logo-Nearplane' src='/javascript-no-bg.png' /></div>
                            <div className='TnearPlane-child' ><img  id='logo-Nearplane' src='/reactnobg.png' /></div>
                            <div className='TnearPlane-child' ><img  id='logo-Nearplane' src='/nextjs-no-bg.png' /></div>
                            <div className='TnearPlane-child-extraright' ><img id='logo-Nearplane' src='/typescriptnobg.png' /></div>                            
                        </div>
                    </div>
                <div className='journey-rightbody-plane-con' >
                    <img className={`${Planeani} ${Rotateplane}`} id='planeimg' src='/planenobg.png' />
                    <img className={`abs-circleofplane ${Planegas1} `} src='/circlenobg.png' />
                    <img className={`abs-circleofplane ${Planegas2} `} src='/circlenobg.png' />
                </div>
            </li>
        </ul>
        <br/>
        <div className='journey-arrow-con' >
                <div className='Journey-leftarrow-icon' >      
                    <FontAwesomeIcon className={`${Ctrlbtnleft}`} onClick={handlebackward} id='journey-rightarrow-icon' icon={faChevronLeft} ></FontAwesomeIcon>
                </div>
                <div className='Journey-rightarrow-icon' >      
                    <FontAwesomeIcon className={`${Ctrlbtnright}`} onClick={handleforward} id='journey-rightarrow-icon' icon={faChevronRight} ></FontAwesomeIcon>
                </div>
            </div>
    </div>
    </>)
}