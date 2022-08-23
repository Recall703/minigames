import React from 'react';
import "../styles/tailwind_full.css";
import "../styles/number_guessing.css";

class NumberGuessing extends React.Component {
    constructor(props) {
        super(props);
        // this.props = {
        // };
        this.state = {
            answer:  Math.floor(Math.random() * 100),
            playerAnswer: "",
            lowest: 0,
            highest: 100
        }
    }

    submitAnswer(){
        let gameAnswer = this.state.answer;
        let playerAnswer = this.state.playerAnswer;
        if(gameAnswer > playerAnswer){
            this.setState({
                lowest: playerAnswer
            });
        }else if(gameAnswer < playerAnswer){
            this.setState({
                highest: playerAnswer
            })
        }else{
            // Player lose the game
            alert("You hit the number! You lose!");
        }
        this.setState({
            playerAnswer: "",
        })
    }


    inputAnswer(answer){
        if(this.state.playerAnswer.length < 2){
            const new_answer = this.state.playerAnswer + answer;
            this.setState(
                {
                    playerAnswer: new_answer,
                }
            );
        }else{
            alert("You cannot submit number more than 99");
        }
    }


    render() {
        return (
            <div className="tw-mx-auto gameboard" >
                <h1>Number Guessing Game</h1>
                <div>
                    {/* Score information*/ }
                    {/* The Numbers */}
                    <RangeNumber lowest={this.state.lowest} highest={this.state.highest} playerAnswer={this.state.playerAnswer}/>

                    <PlayerInput playerAnswer={this.state.playerAnswer}/>
                    {/* The Number Input Board*/}

                    <NumberInputBoard
                        numberButton={(i) => this.inputAnswer(i)}
                        submitButton={() => this.submitAnswer()}
                    />
                </div>
            </div>
        )

    }
}

class NumberInputBoard extends React.Component{

    render(){
        return (
            <div className="tw-grid tw-grid-cols-4 tw-gap-4">
                <NumberButton buttonText={1} onClick={(i) => this.props.numberButton(1)}/>
                <NumberButton buttonText={2} onClick={(i) => this.props.numberButton(2)}/>
                <NumberButton buttonText={3} onClick={(i) => this.props.numberButton(3)}/>
                <NumberButton extraClass="tw-row-span-4" buttonText="Submit" onClick={() => this.props.submitButton()}></NumberButton>
                <NumberButton buttonText={4} onClick={(i) => this.props.numberButton(4)}/>
                <NumberButton buttonText={5} onClick={(i) => this.props.numberButton(5)}/>
                <NumberButton buttonText={6} onClick={(i) => this.props.numberButton(6)}/>
                <NumberButton buttonText={7} onClick={(i) => this.props.numberButton(7)}/>
                <NumberButton buttonText={8} onClick={(i) => this.props.numberButton(8)}/>
                <NumberButton buttonText={9} onClick={(i) => this.props.numberButton(9)}/>
                <NumberButton extraClass="tw-col-span-3" buttonText={0} onClick={(i) => this.props.numberButton(0)}/>

            </div>
        );
    }

}

class NumberButton extends React.Component{

    render(){
        return (
            <button className={ "btn btn-blue " + this.props.extraClass} onClick={(i) => this.props.onClick(i)}>
                {this.props.buttonText}
            </button>
        )
    }
}


class RangeNumber extends React.Component{
    render(){
        return (
            <div className="tw-flex tw-justify-around tw-mb-4">
                <div className="tw-text-center tw-font-bold tw-text-3xl">{this.props.lowest}</div>
                <div className="tw-text-center tw-font-bold tw-text-3xl"> &lt; </div>
                <div className="tw-text-center tw-font-bold tw-text-3xl">X</div>
                <div className="tw-text-center tw-font-bold tw-text-3xl"> &lt; </div>
                <div className="tw-text-center tw-font-bold tw-text-3xl">{this.props.highest}</div>
            </div>
        )

    }
}

class PlayerInput extends React.Component{
    render(){
        return (
            <div className="tw-text-center tw-my-4 ">
                <h5 className="tw-text-3xl">Your Answer</h5>
                <h4 className="tw-text-4xl tw-text-green-400">{this.props.playerAnswer}</h4>
            </div>
        )
    }
}



export default NumberGuessing;