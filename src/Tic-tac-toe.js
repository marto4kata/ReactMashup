import React from 'react'

function Square(props) {
  const style = {color: props.winningSquare ? 'green' : 'black'};

  return (
    <button className="square" style={style} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        winningSquare={this.props.winningSquares && this.props.winningSquares.includes(i)}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    const scheme = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    return (
      <div>
        {scheme.map(row => <div className="board-row">{row.map(square => this.renderSquare(square))}</div>)}
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  handleStartClick() {
    this.setState({
      history:[{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true,
    })
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateResult(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';

    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const result = calculateResult(current.squares);
    const moves = [];
    let rows = 0;
    let previousButton = '';

    history.forEach((step, move) => {
      const desc = move ? '#' + move : 'Start';
      const button = <td key={move + 1}>
        <button onClick={() => this.jumpTo(move)}>{desc}</button>
      </td>;

      const row = move > 7 ? move - 5 : move > 5 ? move - 4 : move > 2 ? move - 3 : move - 2;

      if (move % 2) {
        rows++;
        previousButton = button;
        moves.push(<tr key={rows}>{button}</tr>);
      } else if (move) {
        moves[row] = <tr key={rows}>
          {previousButton}
          {button}
        </tr>;
        previousButton = '';
      }
    });

    let status;
    if (result === 'Draw') {
      status = 'Draw';
    } else if (result) {
      status = `Winner ${result[0]}`
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    const startButton = <button onClick={() => this.handleStartClick()}>Play again</button>;


    return (
      <div className="game">
        <div className="game-board">
          <Board
            winningSquares={result && result !== 'Draw' ? result[1] : false}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <br/>
          <div>{startButton}</div>
          <br/>
          <table style={{width: 200}}>
            <thead>
            <tr>
              <th>X</th>
              <th>O</th>
            </tr>
            </thead>
            <tbody>{moves}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

function calculateResult(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }

  if (!squares.includes(null)) {
    return 'Draw'
  }
  return null;
}

export default Game
