import './App.css';
import Routes from './components/Routes/routes'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <div className='container_routes'>
        <Routes />
      </div>
      <Footer />
    </>
  )
}

export default App;
