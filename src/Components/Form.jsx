import React, {useState} from 'react';
import Respuesta from './Respuesta';

import { Link } from 'react-scroll';

function Form() {

    const [cash, setCash] = useState()
    const [card, setCard] = useState()
    const [cuotas, setCuotas] = useState()
    const [tasa, setTasa] = useState()
    const [value, setValue] = useState()
    const [error, setError] = useState()
    const [showResult, setShowResult] = useState(false)


    const calcular = () =>{
        let c = parseFloat(cash)
        let ca = parseFloat(card)
        let cu = parseFloat(cuotas)
        let p = ca/cu
        let n = parseFloat(cuotas);
        let i = (parseFloat(tasa)/100)/12;

        
        setError("")

        if (c <= 0 || !c  || ca <= 0 || !ca || cu <= 0 || !cu ||  n <= 0 || !n || i <= 0 || !i ) {
            setError("Los valores ingresados deben ser positivos");
        } else if (ca < c) {
            setError("El valor con tarjeta no debe ser menor al valor en efectivo");
           
        } else {
        let v = p/i *  (1-(1/(1+i)**n))
        setValue(v) 
        setShowResult(true)}
    }

    const inputs = [{label:'Precio en efectivo', name: 'cash'},
    {label:'Precio con tarjeta', name: 'card'},
    {label:'Cuotas', name: 'cuotas'},
    {label:'Tasa Nominal Anual (TNA) alternativa', name: 'tasa'}]

    const onCha = (e, name) =>{
        setShowResult(false);

        if (name === 'cash') {setCash(e.target.value)}
        else if (name === 'card') {setCard(e.target.value)}
        else if (name === 'cuotas') {setCuotas(e.target.value)}
        else {setTasa(e.target.value)}
        
    }


    return (
      <main className=" min-h-full flex flex-col justify-between bg-primary">
        <section className="w-11/12 rounded-md  m-auto mt-10  bg-secondary py-4 flex flex-col gap-6">
          {inputs.map((item) => (
            <div
              key={item.label}
              className="w-11/12 m-auto rounded-md p-2 border border-primary flex flex-col justify-between items-center"
            >
              <label htmlFor={item.label} className="w-full text-slate-800">
                {" "}
                {item.label}{" "}
              </label>
              <input
                id={item.label}
                className="w-full outline-none bg-secondary text-primary text-2xl font-bold"
                type="number"
                min="0"
                onChange={(e) => onCha(e, item.name)}
                
              ></input>
            </div>
          ))}
<Link activeClass="active" to="result" spy={true} smooth={true} duration={1000} >
          <button
            className="w-11/12 m-auto rounded-md p-2 h-16 bg-primary flex flex-col cursor-pointer hover:bg-pink-900 duration-300"
            onClick={() => calcular()}
          >
              
            <div className="uppercase m-auto  text-secondary text-2xl font-bold tracking-wider">
              Calcular
            </div>
          </button>
          </Link>
        </section>

{error && <div className="w-11/12 mt-0 m-auto text-center text-lg text-secondary">
               {error}
            </div>}
        

        <div id="result"  className="mt-6">
          {showResult && ( 
            
            <Respuesta
              value={value}
              cash={cash}
              tasa={tasa}
              cuotas={cuotas}
              card={card}
            />
            )}
        </div>
      </main>
    );
}

export default Form
