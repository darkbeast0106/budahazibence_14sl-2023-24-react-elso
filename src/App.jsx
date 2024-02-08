import './App.css'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
      <Content count={20}/>
      <Footer name='Budaházi Bence' link='https://github.com/darkbeast0106/budahazibence_14sl-2023-24-react-elso'/>
    </>
  )
}

export default App
