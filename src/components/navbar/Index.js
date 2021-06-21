import React,{useState} from 'react';
import "./Main.scss";
import home from "./home.png";
import search from "./search.png";
import contact from "./contact.png";
import tutorial from "./tutorial.png";

function Nav() {

const [on ,onto] = useState(false)

  return (
    <div>
    <div  class="container">


    <div  class="icon"><h2>TypooFast</h2></div>


    <div  class="home">
  <img src={home} alt="error" />
    </div>


<input className={on ? "search0 search":"search0"} type="text" placeholder="search"/>
<div  >
<img onClick={() => onto(!on)} class={on ? "img  rotate": " img"} src={search} alt="error" />
</div>
<div class={on ? "backw" : "back"}></div>

<div  class="contact">
<img src={contact} alt="error" />
</div>

<div  class="tutorial">
  <h5>Tutorial</h5>
  <img src={tutorial} alt="error" />
</div>

    </div>
    </div>
  )
}

export default Nav
