
import Form from './Components/Form';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {
 
  return (
    <main className="min-h-screen bg-primary flex flex-col justify-between">
      <section className="flex flex-col">
      <Header/>
    <Form/>
    
      </section>
    <section className="bottom-0"> <Footer/> </section>
    
    </main>
  )
}

export default App
