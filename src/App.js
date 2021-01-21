import { useState } from 'react'
import logo from './logo.svg';
import './App.css';


// map, forEach, reduce -> collection에 대해 1씩 돌면서 작업을 한다.
// map vs forEach
// map은 새로운 객체를 만든다.
// forEach는 해당 객체에 작업.

// const a = [1,2,3]
// const b = [1,2,3]

//
// a.map(i => i + 1) --> [2,3,4] //  a = [1,2,3]
// b.forEach(i => i+1) --> [2,3,4] // b = [2,3,4]
// 보통 map만 쓴다.
// side Effect를 방지하기 위해
//
// let - 변경 가능한 변수 ( 쓰지 말 것), const - 변경 불가능한 변수

// JavaScript를 먼저 공부하자
// Html + Css 할 수 있다
// React 준비 끝
//

const add = (a, b) => a + b

const add2 = (a) => add(a, 2)

const addWithFunction = (f) => a => f(a)

const f = (a) => a + 1

const addWithf = addWithFunction(f) // a => f(a)

addWithFunction(f)(1) == 2
addWithf(1) == 2

const isEven = i => i % 2 == 0

const isDivide = d => i => i % d == 0

function App() {
  const [list, setList] = useState([]) // useState => 상태관리 함수. [getter, setter], (initialValue)


  const addList = () => {
    const listLength = list.length + 1
    const newList = list
    setList(newList.concat([listLength]))
    // [] -> [1]
    // [1] -> [1, 2] <- [2]
    // [1,2] -> [1,2,3]
  }

  return (
    <div className="App">
      Hello World!
      <ul>
        {
          list.filter(i => i % 2 == 0)
              .map(i => <li>{i}</li>) 
        }
        {
          list.filter(i => isEven(i))
              .map(i => <li>{i}</li>) 
        }
        {
          list.filter(isEven)
              .map(i => <li>{i}</li>) 
        }
        {
          list.filter(isDivide(2))
              .map(i => <li>{i}</li>) 
        }
        {
          list.filter(isDivide(3))
              .map(i => <li>{i}</li>) 
        }
        {
          list.filter(isDivide(4))
              .filter(isDivide(5))
              .map(i => <li>{i}</li>) 
        }
      </ul>
      <button onClick={addList}>ADD</button>
    </div>
  );
}

export default App;
