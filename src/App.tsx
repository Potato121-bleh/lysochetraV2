import './Globle.css'
import Projectcard from "./component/projectcard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from 'react';
const {BASE_URL} = import.meta.env

let translateCounter: number = 0;
let translatevalue: number = 0;
function Home(){
  let [Project_con, setProject_con] = useState<string>()
  let [Right_icon, setRight_icon] = useState<string>()
  let [Left_icon, setLeft_icon] = useState<string>()
  let [Header_list, setHeader_list] = useState<string>()
  let [Project_title, setProject_title] = useState<string>()
  let [Menu, setMenu] = useState<string>()
  let [Card_con, setCard_con] = useState<string>()

  useEffect(() => {
    if(translateCounter <= 1){
      setRight_icon('display')
    }
    else{setRight_icon("hidden")}
    if(translateCounter <= 0){
      setLeft_icon("hidden")
    }
    else{setLeft_icon("display")}
  }, [translateCounter])

  const handleright = () => {
    translateCounter ++;
    if(translateCounter <= 2){
      translatevalue = 210 * translateCounter
      setProject_con(`t-${translatevalue}`)
      if(translateCounter === 2){
        setRight_icon("hidden")
      }
    }
  }
  const handleleft = () => {
    if(translateCounter <= 0){}
    else{
      translateCounter --;
      translatevalue = 210 * translateCounter;
      setProject_con(`t-${translatevalue}`)
    }
  }
  const handlemenu = () => {
    setHeader_list("moveheaderlist")
    setProject_title("moveproject")
    setMenu("movemenu")
    setCard_con("moveproject_card")
  }
  const handlemenuback = () => {
    setHeader_list("")
    setProject_title("")
    setMenu("")
    setCard_con("")
  }

  return(<><div className='page1' >
    <header className='header-con'>
    <div className='header-icon-con' >
      <FontAwesomeIcon onClick={handlemenu} width={20} id='menu-icon' icon={faBars} />
      <div className={`abs-menu ${Menu}`} >
        <div className='menu-top' >
          <h1 onClick={handlemenuback} id='X'>X</h1>
          <div><img id='traprofile' src={`${BASE_URL}traprofile_icon.png`} ></img></div>
        </div>
        <div className='menu-text' >
          <h4>Hi! My name is</h4>
          <h1>Ly Sochetra</h1>
          <h4>I'm a Front-End Developer. Welcome to my website,
            I hope this website helps you to know more about me and 
            I'm so excited to allow you to explore all of my project and achievement
          </h4>
        </div>
        <div id='Verson'><h5>Verson 2.0</h5></div>
      </div>
    </div>
  <div className={`header-list ${Header_list}`} >
    <h3>Project</h3>
    <h3>Journey</h3>
    <h3>Achievement</h3>
    <h3>Contact</h3>
  </div>
  </header>
  <h1 className={`project ${Project_title}`} >Project</h1>
  <section className='project-section-con'>
    <div className={`project-section-sec-con ${Card_con}`} >
      <div className='left-arrow-icon-con' >      
        <FontAwesomeIcon className={Left_icon} onClick={handleleft} id='leftarrow-icon' width={30} height={30} icon={faChevronLeft} ></FontAwesomeIcon>
      </div>




      <div className='project-section-subcon' >
      <div className={`project-section-4srcoll ${Project_con}`} id='id4scroll' >
        {/* DICE GAME */}
      <div className='project-personal-con' >
        <Projectcard
    imgurl='Diceicon.png'
    title='Dice Game'
    subtitle="After a long day of work why don't you have some fun?"
    btn_url='https://potato121-bleh.github.io/Piggame/Pig.html'
    btn_color='whiteNpink'
    colorbg='pinkNpink'
    >
    </Projectcard>
    </div>
    {/* ACLEDA CLONE */}
      <div className='project-personal-con' >
      <Projectcard
    imgurl='acleda_logonew-removebg-preview.png'
    title='ACLEDAclone'
    subtitle="ACLEDA website is a complex website But how much it cost to clone one?"
    btn_url=''
    btn_color='whiteNpink'
    colorbg='pinkNpurple'
    >
    </Projectcard>
      </div>
      {/* CALCULATOR */}
      <div className='project-personal-con'>
      <Projectcard
    imgurl='Calculatoricon.png'
    title='Calculator'
    subtitle="Calculate normal number seem boring... let try Binary!!"
    btn_url='https://potato121-bleh.github.io/Conversion/'
    btn_color='whiteNpink'
    colorbg='darkblueNlightB'
    >
    </Projectcard>
      </div>
      {/* DRINK MENU */}
      <div className='project-personal-con'>
      <Projectcard
    imgurl='drinkicon.png'
    title='Drink Menu'
    subtitle="Why we still using paper menu? cutting down tree is kinda sad:("
    btn_url='https://maritacafe.vercel.app/'
    btn_color='whiteNpink'
    colorbg='greenNblue'
    >
    </Projectcard>
      </div>
      {/* TO DO LIST */}
      <div className='project-personal-con'>
      <Projectcard
    imgurl='To-do-listicon.png'
    title='To Do List'
    subtitle="Wake up and don't even know what to do? Create your own To-do-list"
    btn_url='https://todo-list-three-hazel.vercel.app/'
    btn_color='whiteNpink'
    colorbg='RedNyellow'
    >
    </Projectcard>
      </div>
      </div>
      
    
    </div>
    <div className='left-arrow-icon-con' >      
        <FontAwesomeIcon onClick={handleright} className={Right_icon} id='rightarrow-icon' width={30} height={30} icon={faChevronRight} ></FontAwesomeIcon>
      </div>
    </div>
    <ul className='project-block-con'>
        <li className='project-block1'>
        <li className='project-block2'></li>
        </li>
    </ul>
  </section>
  </div>
  </>)
}

export default Home;