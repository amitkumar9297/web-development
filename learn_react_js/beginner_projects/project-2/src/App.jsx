import './App.css'
import ContactForm from './components/ContactForm/ContactForm.jsx'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation.jsx'

function App() {

  return (
    <div>
        <Navigation />
        <main className='main_container'>
        <ContactHeader />
        <ContactForm />
        </main>
        
    </div>
  )
}

export default App
