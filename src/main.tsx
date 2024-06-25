import ReactDOM from 'react-dom/client'
import Home from './App.tsx'
import './index.css'
import './Globle.css'
import Journey from './Journey.tsx'
import Achievement from './Achievement2.tsx'
import Contact from './Contact.tsx'

ReactDOM.createRoot(document.getElementById('page1')!).render(
    <Home />
)
ReactDOM.createRoot(document.getElementById("journey")!).render(
    <Journey />
)
ReactDOM.createRoot(document.getElementById("achievement")!).render(
    <Achievement />
)
ReactDOM.createRoot(document.getElementById("Contact")!).render(
    <Contact />
)