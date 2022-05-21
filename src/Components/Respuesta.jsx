import React from 'react'

function Respuesta({value, cash, card, cuotas, tasa}) {

    const dif = Math.abs( Math.round((value/cash-1)*100))

    return (
      <main className="w-11/12 m-auto py-4 flex flex-col mb-8">

          {  value < cash ?
          
          <section className="flex flex-col justify-center items-center">
              <div className="animate-pulse  uppercase text-yellow-600 text-4xl font-bold tracking-wider"> Cuotifica    </div>

            <div className="text-center leading-8 mt-4 text-lg text-yellow-600">
                Si colocás {new Intl.NumberFormat("de-DE", {
                          style: "currency",
                          currency: "ARS",
                        }).format(value)} al {tasa}% anual vas a poder tener los {new Intl.NumberFormat("de-DE", {
                            style: "currency",
                            currency: "ARS",
                          }).format(card/cuotas)} mensuales para pagar las {cuotas} cuotas.
            </div>

            <div className="text-center leading-8 text-lg text-yellow-600">
                Es decir obtenés un descuento implícito de 
                <span className="text-2xl block font-bold">{Math.abs( Math.round((value/cash-1)*1000)/10)}%</span>
            </div>


          </section>
          
          :

          <section className="flex flex-col justify-center items-center">
          <div className="animate-pulse  uppercase text-yellow-600 text-4xl font-bold tracking-wider"> Paga Cash    </div>

        <div className="text-center leading-8 mt-4 text-lg text-yellow-600">

            Para obtener {cuotas} pagos de {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "ARS",
                      }).format(card/cuotas)} al {tasa}% anual, necesitás colocar {new Intl.NumberFormat("de-DE", {
                        style: "currency",
                        currency: "ARS",
                      }).format(value)}              

        </div>

        <div className="text-center leading-8 text-lg text-yellow-600">
            Es decir, la opción de cuotificar es 
            <span className="text-2xl block font-bold">{Math.abs( Math.round((value/cash-1)*1000)/10)}%</span> mas cara
        </div>


      </section>
          
          }
        

      </main>
    );
}

export default Respuesta
