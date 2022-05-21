import React, {useState} from 'react';
import Respuesta from './Respuesta';

function Form() {

    const [cash, setCash] = useState()
    const [card, setCard] = useState()
    const [cuotas, setCuotas] = useState()
    const [tasa, setTasa] = useState()
    const [value, setValue] = useState()

    const calcular = () =>{
        let p = card/cuotas
        let n = cuotas;
        let i = (tasa/100)/12;
     
        let v = p/i *  (1-(1/(1+i)**n))

        setValue(v)
    }

    return (
      <main className=" min-h-screen flex flex-col bg-primary ">
        <section className="w-11/12 rounded-md  m-auto  bg-secondary py-4 flex flex-col gap-6">
          
          
          
            <div className="w-11/12 m-auto rounded-md p-2 border border-primary flex flex-col justify-between items-center"> 
            <label htmlFor="cash" className="w-full text-slate-800"> Precio en efectivo </label>
            <input id="cash" className="w-full outline-none bg-secondary text-primary text-2xl font-bold" type="number" onChange={(e)=>setCash(e.target.value)}></input>
            </div>

            <div className="w-11/12 m-auto rounded-md p-2 border border-primary flex flex-col justify-between items-center"> 
            <label htmlFor="card" className="w-full text-slate-800"> Precio con tarjeta </label>
            <input id="card" className="w-full outline-none bg-secondary text-primary text-2xl font-bold" type="number" onChange={(e)=>setCard(e.target.value)}></input>
            </div>

            <div className="w-11/12 m-auto rounded-md p-2  border border-primary flex flex-col justify-between items-center"> 
            <label htmlFor="card" className="w-full text-slate-800"> Cuotas </label>
            <input id="card" className="w-full outline-none decoration-indigo-700 bg-secondary text-primary text-2xl font-bold" type="number" onChange={(e)=>setCuotas(e.target.value)} ></input>
            </div>

            <div className="w-11/12 m-auto rounded-md p-2  border border-primary flex flex-col justify-between items-center"> 
            <label htmlFor="card" className="w-full text-slate-800"> Tasa Nominal Anual (TNA) </label>
            <input id="card" className="w-full outline-none decoration-indigo-700 bg-secondary text-primary text-2xl font-bold" type="number" onChange={(e)=>setTasa(e.target.value)}></input>
            </div>

            <button className="w-11/12 m-auto rounded-md p-2 h-16 bg-primary flex flex-col cursor-pointer hover:bg-pink-900 duration-300" onClick={()=>calcular()}>
                <div className="uppercase m-auto  text-secondary text-2xl font-bold tracking-wider">Calcular</div>
            </button>


          
          
          
        </section>

        <div className="mt-12">
            {value ? <Respuesta 
                        value={value} 
                        cash={cash}
                        tasa={tasa}
                        cuotas={cuotas}
                        card={card}/> : null}
        </div>
      </main>
    );
}

export default Form
