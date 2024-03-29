import React, { PureComponent } from 'react'
import Square from './Square';

class Board extends PureComponent {
    // constructor(props) {
    //     super(props)

    //     this.state = {
            
    //     }
    // }

    renderSquare(i) {
        return <Square
                value={this.props.squares[i]}
                onClick={this.props.onClick}
                index={i}
            />
    }

    render() {
        return (
            <div>
                <div className="border-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="border-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="border-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        )
    }
}

export default Board