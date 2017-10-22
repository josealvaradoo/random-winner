import React, { Component } from 'react';
import Console from './components/Console';
import Result from './components/Result'
import Effect from './components/Effect'

export default class App extends Component
{
   constructor(...props) {
       super(...props)
       this.state={
           min: 0,
           max: 0,
           result: null,
           effect: false
       }

       this.handleCalculator = this.handleCalculator.bind(this)
       this.handleEffect = this.handleEffect.bind(this)
   }

    handleCalculator(e) {
        e.preventDefault()

        const min = parseInt(e.target.min.value)
        const max = parseInt(e.target.max.value)
        const result = Math.floor(Math.random() * (max - min + 1) + min)
        const resultText = document.getElementById('result')

        if(isNaN(min) || isNaN(max)) return false

        this.setState({ result })

        if(this.state.effect) {
            resultText.classList.add('flash')
            resultText.addEventListener('animationend', function() {
                resultText.classList.remove('flash')
            })
        }
    }

    handleEffect() {
        document.getElementById('toggle').classList.toggle('active')
        if(!this.state.effect) {
            this.setState({ effect: true })
        } else {
            this.setState({ effect: false })
        }
    }

   render() {
      return(
        <main className="main">
            <div className="container">
                <div className="full">
                    <h1>Random Winner</h1>
                </div>
                <Console calculator={ this.handleCalculator } min={ this.state.min } max={ this.state.max } />
                <Result result={ this.state.result } />
                <Effect effect={ this.handleEffect } />
            </div>
        </main>
      )
   }
}