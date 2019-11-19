import React, { Component } from "react";


class PlayerBtn1 extends Component {
    constructor(props) {
        super(props)
    }

    state = {

        score1: 0,
        score2: 0,
        count: true,
        winner: null
    }



    handleInc = () => {

        if (this.state.score1 == 5) {
            this.setState({
                winner: "Player 1 is winner"

            })
        }

        if (this.state.score2 == 5) {
            this.setState({
                winner: "Player 2 is winner"

            })
        }



        if (this.state.score2 < 5 && this.state.score1 < 5) {
            this.setState({
                score1: this.state.score1 + 1
            })

        } else {

            this.setState({
                count: false

            })

        }

      



    }

    handleInc2 = () => {

        if (this.state.score2 == 5) {
            this.setState({
                winner: "Player 2 is winner"

            })
        }

        if (this.state.score1 == 5) {
            this.setState({
                winner: "Player 1 is winner"

            })
        }

        if (this.state.score2 < 5 && this.state.score1 < 5) {
            this.setState({
                score2: this.state.score2 + 1
            })

        } else {

            this.setState({
                count: false

            })

        }

        

    }

    render() {



        return (
            <div className="center">
                <h1 >Player VS Player</h1>
                <h6 >Winning Score: 05</h6>

                <span className="btn btn-secondary wd ml-5 mt-5">{this.state.score1}</span>
                <span className="btn btn-secondary ml-5 wd mt-5">{this.state.score2}</span>
                <br />

                <button disabled={!this.state.count} className="btn btn-primary wd ml-5 mt-2" onClick={this.handleInc}> Player 01 </button>
                <button disabled={!this.state.count} className="btn btn-primary ml-5 wd mt-2" onClick={this.handleInc2}> Player 02 </button>

                <h3 className="ml-5 mt-3 ">{this.state.winner}</h3>



            </div>
        )


    }




}

export default PlayerBtn1;