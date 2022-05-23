import React, {useState} from 'react';
import {BsQuestionCircle} from 'react-icons/bs'

function Header() {

    const [showExplanation, setShowExplanation] = useState(false)




    return (
        <main className="max-w-[1440px] flex flex-col pb-3 sm:pb-10 pt-4 tracking-wider">
           <div className="m-auto text-secondary font-bold text-4xl sm:text-5xl">Cuotificar o no,</div>
           <div className="m-auto text-secondary font-bold text-2xl sm:text-4xl  flex">he ahí el dilema <span className="text-sm flex ml-1 cursor-pointer"><BsQuestionCircle className=" m-auto" onClick={()=>setShowExplanation(true)}/></span> </div>
           
            {showExplanation &&
            
            <section className="fixed top-0 bottom-0 left-0 right-0 bg-primary flex ">

                <div className="m-auto max-h-[500px] w-11/12 max-h-3/4 max-w-[800px] bg-secondary text-primary text-left rounded-md p-3 overflow-auto flex flex-col relative">
                    <h1 className="text-2xl text-center font-bold">Como usar esta calculadora</h1>

<p className="italic text-xl my-2 text-center"> "En efectivo $1.000, con tarjeta $1.200 en 6 cuotas sin interés" </p>

<p className="text-lg my-2"> Cada vez más nos cruzamos con esa frase al momento de pagar algún consumo, pero ¿cuál conviene más? </p>

<p className="text-lg my-2"> Con el ejemplo anterior las opciones son: "si cuotifico tengo que pagar 6 cuotas de $200. <span className="font-bold"> ¿Cuánta plata tengo que poner en una opción alternativa para conseguir esos $200 mensuales durante 6 periodos?"</span></p>

<p className="text-lg my-2"> Si el número que obtengo es menor al precio de efectivo, entonces lo más barato es cuotificar. Si es mayor, conviene pagar en efectivo.</p>

<p className="text-lg my-2 pb-4"> Para hacer todo el cálculo tenés que saber la tasa de interés nominal de la opcion alternativa de inversión. Sólo eso! </p>

<button className="rounded-md m-auto px-6 py-4 uppercase  bg-primary text-secondary font-bold" onClick={()=>setShowExplanation(false)} >Quiero calcular</button>




                </div>

               

            </section>
            
            }



        </main>
    )
}

export default Header
