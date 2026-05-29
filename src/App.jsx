import React from 'react'
import Section1 from './components/Section1/Section1'


const App = () => {
  const users = [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Digitally active professionals who already use online banking regularly and value convenience, speed, and seamless financial management across devices.',
      color: 'royalblue',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1657727534676-cac1bb160d64?q=80&w=704&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Customers with limited access to tailored financial products who are seeking affordable banking solutions, transparent pricing, and better support.',
      color: 'lightseagreen',
      tag: 'Underserved'
    }, {
      img: 'https://plus.unsplash.com/premium_photo-1661369539084-27dc45c82f15?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Individuals who rely on basic banking services but lack access to credit, investments, or advanced financial tools that support growth and stability.',
      color: 'orange',
      tag: 'Unerbanked'
    }, {
      img: 'https://images.unsplash.com/photo-1713946598432-9bb1f09acf9b?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Established customers with significant financial assets who expect premium services, personalized advice, and exclusive banking benefits.',
      color: 'pink',
      tag: 'High-Value'
    }, {
      img: 'https://images.unsplash.com/photo-1743705340960-c4b255919bc2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'Young, mobile-first users who prefer digital experiences, innovative financial products, and banking solutions that fit their fast-paced lifestyles.',
      color: 'black',
      tag: 'Next-Gen'
    }
  ]


  return (
    <div>
      <Section1 users={users}/>
    
    </div>
  )
}

export default App
