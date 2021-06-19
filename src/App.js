import React,{useState} from 'react'
import './App.css';

export default function App() {
  const [radius, setRadius] = useState(10)
  const [hori, setHori] = useState(10)
  const [verticle, setVerticle] = useState(10)
  const [blur, setBlur] = useState(10)
  const [inner, setInner] = useState(false)
  const [color, setColor] = useState("grey")
  const [shapeColor, setShapeColor] = useState("#ebe5e5")
  
  return (
    <div className="app">
    <h2>Shadow-Effect</h2>

    <div className="main">
      <div className="ranges">
        <div className="inputs">
        <label>Box Radius</label>
            <input type="range" id="test5" onChange={(e)=>setRadius(e.target.value)} min="0" max="100" value={radius}  />
          <label>Horizantal Length</label>
            <input type="range" id="test5" onChange={(e)=>setHori(e.target.value)} min="-100" max="100" value={hori}  />
            <label>Verticle Length</label>
            <input type="range" id="test5" min="-100" max="100"value={verticle}  onChange={(e)=>setVerticle(e.target.value)} />
            <label>Blur</label>
            <input type="range" id="test5" min="0" max="100"value={blur}  onChange={(e)=>setBlur(e.target.value)} />
            <div className="switch">
                <label>
                   Outside
                  <input type="checkbox" checked={inner} onChange={()=>setInner(!inner)}/>
                  <span className="lever"></span>
                  Inside
                </label>
              </div><br/>
            <section style={{display:"flex"}}>
             
              <label>Shadow Color</label><br/>
               <input type="color" id="test5" value={color}  onChange={(e)=>setColor(e.target.value)}  /><br/>
            <label style={{marginLeft:"50px"}}>Shape Color</label><br/>
            <input type="color" id="test5" value={shapeColor}  onChange={(e)=>setShapeColor(e.target.value)}  />
            </section>
        </div>
      </div>
      <div className="output">
        <div className="box" style={{boxShadow: `${inner?"inset":""} ${hori}px ${verticle}px ${blur}px ${color} `, borderRadius:`${radius}%`,background:`${shapeColor}`}}>
            <p> box-shadow:{hori}px {verticle}px {blur}px {color} ;<br/> border-radius:{radius}%; <br/> Background:{shapeColor};</p>
        </div>
      </div>
    </div>
    <footer>
      &copy;2021 | vrusshhh
    </footer>
    </div>
  )
}
