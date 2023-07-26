import React from 'react';
import * as Algo from '../Algo/Algo.js'; //Most biggest problem i have ever faced need to use two .. here
import './SortingVisualizer.css';
import 'bootstrap/dist/css/bootstrap.css';
import * as bubble from '../Algo/bubble.js';
const ANIMATION_SPEED_MS = 0.5;


const NUMBER_OF_ARRAY_BARS = 270;

const PRIMARY_COLOR = 'turquoise';

const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array});
  }

  mergeSort() {
    const animations = Algo.mergeSort(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  }

  quickSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  heapSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  }

  bubbleSort() {
    // We leave it as an exercise to the viewer of this code to implement this method.
  const animations = bubble.bubbleSort(this.state.array);
  for (let i = 0; i < animations.length; i++) {
  const arrayBars = document.getElementsByClassName('array-bar');
  const isColorChange = i % 3 !== 2;
  if (isColorChange) {
    const [barOneIdx, barTwoIdx] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
    setTimeout(() => {
      barOneStyle.backgroundColor = color;
      barTwoStyle.backgroundColor = color;
    }, i * ANIMATION_SPEED_MS);
  } else {
    setTimeout(() => {
      const [barIdx, newHeight] = animations[i];
      const barStyle = arrayBars[barIdx].style;
      barStyle.height = `${newHeight}px`;
    }, i * ANIMATION_SPEED_MS);
  }
}

  }

  // NOTE: This method will only work if your sorting algorithms actually return
  // the sorted arrays; if they return the animations (as they currently do), then
  // this method will be broken.
  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = this.mergeSort(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const {array} = this.state;

    return (
      <div className="array-container">
        <div className='row p-3 m-2'>
            <div className='col-2 m-1'>  <button className="button-56" onClick={() => this.mergeSort()}>mergeSort</button></div>
            {/* <div className='col-2 m-1'>  <button className="button-56" onClick={() => this.quickSort()}>Quick Sort</button></div> */}
            <div className='col-3 m-1'>  <button className="button-56" onClick={() => this.resetArray()}>New Array</button></div>
            {/* <div className='col-2 m-1'>  <button className="button-56" onClick={() => this.bubbleSort()}>Bubble Sort</button></div>
            <div className='col-2 m-1'> <button className="button-56" onClick={() => this.heapSort()}>Heap Sort</button></div>  */}
        </div>
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              backgroundColor: PRIMARY_COLOR,
              height: `${value/1.6}px`,
            }}></div>
        ))}
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}