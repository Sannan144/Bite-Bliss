import './App.css'
import Counter from './Counter/Counter'
import Home from './Home/Home'
import Nav from './Nav/Nav'
import SecondPage from './SecondPage/SecondPage'
import ThirdPage from './ThirdPage/ThirdPage'
import Reviews from './Reviews/Reviews'
import Footer from './Footer/Footer'

const App = () => {
  return (
    <div className='max-w-[1600px] w-full mx-auto px-3 select-none'>
      <Nav/>
      <Home/>
      <SecondPage/>
      <ThirdPage/>
      <Counter/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default App