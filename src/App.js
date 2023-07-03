import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import { render } from '@testing-library/react';

const customers = [
 {
  'id' : 1,
  'image' : 'https://img.khan.co.kr/news/2023/07/03/rcv.PHOTOPOOL.20230703.kpa16883582480957_P1.webp',
  'name' : '박태권',
  'birthday' : '731215',
  'gender' :'남',
  'job' :'보험사직원'
},
{
  'id' : 2,
  'image' : 'https://img.khan.co.kr/news/2023/07/03/rcv.PHOTOPOOL.20230703.kpa16883582480957_P1.webp',
  'name' : '윤석열',
  'birthday' : '881111',
  'gender' :'여',
  'job' :'증권사직원'
},
{
  'id' : 3,
  'image' : 'https://img.khan.co.kr/news/2023/07/03/rcv.PHOTOPOOL.20230703.kpa16883582480957_P1.webp',
  'name' : '김개동',
  'birthday' : '001111',
  'gender' :'게이',
  'job' :'저축은행직원'
}
]


class App extends Component {
  render() {
      return (
        <div>
          {
            customers.map(c => {
              return(
                <Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />
              )
            })
          }
        

        </div>
    )
  }
}

export default App;
