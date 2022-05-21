import React, {useState} from 'react';
import Respuesta from './Respuesta';

function Form() {

    const [cash, setCash] = useState()
    const [card, setCard] = useState()
    const [cuotas, setCuotas] = useState()
    const [tasa, setTasa] = useState()
    const [value, setValue] = useState()
    const [error, setError] = useState()

    const calcular = () =>{
      
        let p = card/cuotas
        let n = cuotas;
        let i = (tasa/100)/12;

     
        let v = p/i *  (1-(1/(1+i)**n))

        setValue(v)
    }

    const inputs = [{label:'Precio en efectivo', onClick: (e)=>setCash(e.target.value)},
    {label:'Precio con tarjeta', onClick: (e)=>setCard(e.target.value)},
    {label:'Cuotas', onClick: (e)=>setCuotas(e.target.value)},
    {label:'Tasa Nominal Anual (TNA) alternativa', onClick: (e)=>setTasa(e.target.value)},]


    return (
      <main className=" min-h-screen flex flex-col justify-start items-start bg-primary">
        <section className="w-11/12 rounded-md  m-auto  bg-secondary py-4 flex flex-col gap-6">
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
                onChange={item.onClick}
              ></input>
            </div>
          ))}

          <button
            className="w-11/12 m-auto rounded-md p-2 h-16 bg-primary flex flex-col cursor-pointer hover:bg-pink-900 duration-300"
            onClick={() => calcular()}
          >
            <div className="uppercase m-auto  text-secondary text-2xl font-bold tracking-wider">
              Calcular
            </div>
          </button>
        </section>

        <div className="mt-12">
          {value ? (
            <Respuesta
              value={value}
              cash={cash}
              tasa={tasa}
              cuotas={cuotas}
              card={card}
            />
          ) : null}
        </div>
      </main>
    );
}

export default Form
