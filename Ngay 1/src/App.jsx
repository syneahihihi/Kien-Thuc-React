import Header from './Header'
import Footer from './Footer'
import React from 'react'
import Food from './Food'
import Card from './Card'
import Student from './Student'
import UserGreeting from './UserGreeting'

function App() {
  return (
    <div>
      <UserGreeting isLoggedIn={true} name="John" />
      <Header />
      <Card/>
      <Food/>
      <Student name="John Doe" age={20} isStudent={true} />
      <Student name="Jane Smith" age={25} isStudent={false} />
      <Footer/>
    </div>
  )
}

export default App
