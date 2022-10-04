import React from 'react'
import '../styles/Team.css'
import employ from '../images/employ.jpg'
import employi from '../images/employ1.jpg'
import employ2 from '../images/employ2.jpg'

const Team = () => {

  const Employees = [
    {
      userName: 'amina',
      img: <img src={employ} alt='employee' />,
      xp: '4 years xp in python'
    },
    {
      userName: 'jackson',
      img: <img src={employi} alt='employee' />,
      xp: '4 years xp in python'
    },
    {
      userName: 'john',
      img: <img src={employ2} alt='employee' />,
      xp: '4 years xp in python'
    }
  ]


  return (
    <div className='boss'>
      {Employees.map((item) => {
        return (
          <div className='contact'>
            <div className='contacti'>
              <div className='userName'>
                <h1>{item.userName}</h1>
              </div>
              <div className='pici'>
                <p>{item.img}</p>
              </div>
              <div className='define'>
                <h4>{item.xp}</h4>
              </div>
            </div>
          </div>
        )
      })}
    </div >
  )
}

export default Team;