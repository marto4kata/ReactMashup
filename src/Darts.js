import React from 'react';

const checkout1Arrow = {
  50: "Bull",
  40: "D20",
  38: "D19",
  36: "D18",
  34: "D17",
  32: "D16",
  30: "D15",
  28: "D14",
  26: "D13",
  24: "D12",
  22: "D11",
  20: "D10",
  18: "D9",
  16: "D8",
  14: "D7",
  12: "D6",
  10: "D5",
  8: "D4",
  6: "D3",
  4: "D2",
  2: "D1",
}
const checkout2Arrows = {
  3: "1 D1",
  5: "1 D2",
  7: "3 D2",
  9: "1 D4",
  11: "3 D4",
  13: "5 D4",
  15: "7 D4",
  17: "1 D8",
  19: "3 D8",
  21: "5 D8",
  23: "7 D8",
  25: "9 D8",
  27: "11 D8",
  29: "13 D8",
  31: "15 D8",
  33: "1 D16",
  35: "3 D16",
  37: "5 D16",
  39: "7 D16",
  41: "9 D16",
  42: "10 D16",
  43: "11 D16",
  44: "12 D16",
  45: "13 D16",
  46: "6 D20",
  47: "15 D16",
  48: "8 D20",
  49: "9 D20",
  50: "10 D20",
  51: "11 D20",
  52: "12 D20",
  53: "13 D20",
  54: "14 D20",
  55: "15 D20",
  56: "16 D20",
  57: "17 D20",
  58: "18 D20",
  59: "19 D20",
  60: "20 D20",
  61: "Т11 D14",
  62: "T12 D18",
  63: "T13 D12",
  64: "T14 D11",
  65: "Т15 D10",
  66: "T16 D9",
  67: "T17 D8",
  68: "T18 D7",
  69: "T19 D6",
  70: "T20 D5",
  71: "T13 D16",
  72: "T20 D6",
  73: "T19 D8",
  74: "T14 D16",
  75: "T15 D15",
  76: "T20 D8",
  77: "T15 D16",
  78: "T14 D18",
  79: "T13 D20",
  80: "T20 D10",
  81: "T19 D12",
  82: "Bull D16",
  83: "T17 D16",
  84: "T20 D12",
  85: "T15 D20",
  86: "T18 D16",
  87: "T17 D18",
  88: "T16 D20",
  89: "T19 D16",
  90: "T18 D18",
  91: "T17 D20",
  92: "T20 D16",
  93: "T19 D18",
  94: "T18 D20",
  95: "T15 Bull",
  96: "T20 D18",
  97: "T19 D20",
  98: "T20 D19",
  100: "T20 D20",
  101: "T17 Bull",
  104: "T18 Bull",
  107: "T19 Bull",
  110: "T20 Bull",
}
const checkout3Arrows = {
  95: "T15 18 D16",
  99: "T19 10 D16",
  101: "T17 10 D20",
  102: "T20 10 D16",
  103: "T20 11 D16",
  104: "T18 18 D16",
  105: "T20 13 D16",
  106: "T20 14 D16",
  107: "T19 18 D16",
  108: "T20 16 D16",
  109: "T20 17 D16",
  110: "T20 18 D16",
  111: "T20 19 D16",
  112: "T20 20 D16",
  113: "T20 13 D20",
  114: "T20 14 D20",
  115: "T20 15 D20",
  116: "T20 16 D20",
  117: "T20 17 D20",
  118: "T20 18 D20",
  119: "T19 Т12 D13",
  120: "T20 20 D20",
  121: "T20 Т11 D14",
  122: "T18 Т18 D7",
  123: "T19 Т16 D9",
  124: "T20 Т14 D11",
  125: "25 Т20 D20",
  126: "T19 Т19 D6",
  127: "T20 Т17 D8",
  128: "T18 Т14 D16",
  129: "T19 Т16 D12",
  130: "T20 Т20 D5",
  131: "T20 Т13 D16",
  132: "Bull Bull D16",
  133: "T20 T19 D8",
  134: "T20 T14 D16",
  135: "T20 T17 D12",
  136: "T20 T20 D8",
  137: "T19 T16 D16",
  138: "T20 T18 D12",
  139: "T19 T14 D20",
  140: "T20 T16 D16",
  141: "T20 T19 D12",
  142: "T20 T14 D20",
  143: "T20 T17 D16",
  144: "T20 T20 D12",
  145: "T20 T15 D20",
  146: "T20 T18 D16",
  147: "T20 T17 D18",
  148: "T20 T16 D20",
  149: "T20 T19 D16",
  150: "T20 T18 D18",
  151: "T20 T17 D20",
  152: "T20 T20 D16",
  153: "T20 T19 D18",
  154: "T20 T18 D20",
  155: "T20 T19 D19",
  156: "T20 T20 D18",
  157: "T20 T19 D20",
  158: "T20 T20 D19",
  160: "T20 T20 D20",
  161: "T20 T17 Bull",
  164: "T20 T18 Bull",
  167: "T20 T19 Bull",
  170: "T20 T20 Bull",
}

function calculateCheckout(points, arrowsLeft) {
  let checkout = '';

  if (arrowsLeft === 3) {
    checkout = checkout3Arrows[points] || checkout2Arrows[points] || checkout1Arrow[points];
  } else if (arrowsLeft === 2) {
    checkout = checkout2Arrows[points] || checkout1Arrow[points];
  } else if (arrowsLeft === 1) {
    checkout = checkout1Arrow[points];
  }

  return checkout
}

function calculatePoints(sector, value) {
  const sectors = {
    single: value,
    double: value * 2,
    triple: value * 3,
    outerBullseye: 25,
    bullseye: 50,
  }

  return sectors[sector] || 0;
}

function calculateAverage(array) {
  return ((array.reduce((a, b) => a + b, 0) / array.length) * 3).toFixed(2)
}

class Darts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: undefined,
      player2: undefined,
      legs: null,
      points: null,
      submitted: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePointsChange = this.handlePointsChange.bind(this);
    this.handleLegsChange = this.handleLegsChange.bind(this);
    this.handlePlayer1Change = this.handlePlayer1Change.bind(this);
    this.handlePlayer2Change = this.handlePlayer2Change.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      submitted: true
    })
  }

  handleLegsChange(e) {
    this.setState({
      legs: parseInt(e.target.value)
    })
  }

  handlePointsChange(e) {
    this.setState({
      points: parseInt(e.target.value)
    })
  }

  handlePlayer1Change(e) {
    this.setState({
      player1: e.target.value
    })
  }

  handlePlayer2Change(e) {
    this.setState({
      player2: e.target.value
    })
  }

  render() {
    const { player1, player2, legs, points, submitted } = this.state;

    return (
      <>
        <form id="matchFormatForm" style={{ display: this.state.submitted ? "none" : "flex" }}
              onSubmit={this.handleSubmit} className="justify-content-space-around">
          <div>
            <label htmlFor="Player1">Player 1:</label>
            <input type="text" name="Player1" onChange={this.handlePlayer1Change} required/>
            <label htmlFor="Player2">Player 2:</label>
            <input type="text" name="Player2" onChange={this.handlePlayer2Change} required/>
          </div>
          <div>
            <label htmlFor="legs">Legs:</label>
            <input type="number" id="legs" name="legs" min="1" max="35" step="2" onChange={this.handleLegsChange}
                   required/>
            <label htmlFor="points">Points:</label>
            <input type="number" id="points" name="points" min="101" max="501" step="100"
                   onChange={this.handlePointsChange} required/>
          </div>
          <input type="submit" value="Start"/>
        </form>
        {submitted && <DartsCalculator player1={player1} player2={player2} legs={legs} points={points}/>}
      </>
    )
  }
}

class DartsCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sector: "single",
      isPlayer1Next: true,
      average: {
        average1: [],
        average2: [],
      },
      currLeg: {
        points1: this.props.points,
        points2: this.props.points
      },
      legsWon1: 0,
      legsWon2: 0,
      arrowsLeft: 3,
      normalSector: true,
      sectorValue: 0,
      currThrow: 0,
      currLeftPoints: this.props.points,
      isBust: false,
      isMatchOver: false,
      isLegOver: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlePointsChange = this.handlePointsChange.bind(this);
  }

  handlePointsChange(e) {
    this.setState({
      sectorValue: e.target.value
    })
  }

  handleChange(e) {
    const value = e.target.value;

    if (!parseInt(value)) {
      const specialSector = value === "outerBullseye" || value === "bullseye" || value === "none";

      this.setState({
        sector: value,
        normalSector: !specialSector
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const sector = this.state.sector;
    const points = calculatePoints(sector, parseInt(this.state.sectorValue));
    const currThrow = this.state.currThrow + points;
    const legsPlayed = this.state.legsWon1 + this.state.legsWon2;

    const player1Move = this.state.isPlayer1Next;
    const currLeg = this.state.currLeg;
    const currPlayer = player1Move ? "points1" : "points2";
    const currPlayerPoints = currLeg[currPlayer];
    const currLeftPoints = currPlayerPoints - currThrow;
    const currAverage = player1Move ? "average1" : "average2"

    const arrows = this.state.arrowsLeft - 1;
    const nextPlayer = !player1Move;
    const nextPlayerLeftPoints = nextPlayer ? "points1" : "points2";

    let bust = false;
    let legOver = false

    this.setState({
      isBust: bust,
      currThrow: currThrow,
      arrowsLeft: arrows,
      isLegOver: legOver,
      currLeftPoints: currLeftPoints,
    })

    if (currLeftPoints === 0 && (sector === "double" || sector === "bullseye")) {
      const legWonBy = player1Move ? "legsWon1" : "legsWon2";
      const currPlayerLegs = this.state[legWonBy] + 1;
      const nextLegPlayer1Next = !(legsPlayed % 2 === 0);

      legOver = true

      this.setState({
        currLeg: {
          points1: this.props.points,
          points2: this.props.points
        },
        isPlayer1Next: nextLegPlayer1Next,
        [legWonBy]: currPlayerLegs,
        arrowsLeft: 3,
        currLeftPoints: this.props.points,
        currThrow: 0,
        isLegOver: legOver,
      })

      const winningLegs = Math.ceil(this.props.legs / 2)

      if (currPlayerLegs === winningLegs) {
        this.setState({
          isMatchOver: true
        })
        window.location.reload()
      }
    } else if (currLeftPoints === 1 || currLeftPoints < 0) {
      bust = true;

      this.setState({
        isBust: bust,
        isPlayer1Next: nextPlayer,
        arrowsLeft: 3,
        currLeg: {
          ...this.state.currLeg,
          [currPlayer]: currPlayerPoints
        },
        currThrow: 0,
        currLeftPoints: currLeg[nextPlayerLeftPoints],
      })
    } else {
      if (arrows === 0) {
        this.setState({
          currLeg: {
            ...this.state.currLeg,
            [currPlayer]: currLeftPoints
          },
          isPlayer1Next: nextPlayer,
          arrowsLeft: 3,
          currThrow: 0,
          currLeftPoints: currLeg[nextPlayerLeftPoints]
        })
      }
    }

    const currScore = bust ? 0 : points;

    this.setState({
      average: {
        ...this.state.average,
        [currAverage]: [...this.state.average[currAverage], currScore]
      }
    })
    console.log(this.state)
  }

  render() {
    const totalPoints = this.props.points;
    const totalLegs = this.props.legs;

    const { average1, average2 } = this.state.average;
    const legsPlayed = this.state.legsWon1 + this.state.legsWon2;
    const submitted = this.state.submitted;
    const currThrow = this.state.currThrow
    const currLeg = this.state.currLeg;
    const player1Move = this.state.isPlayer1Next;
    const currLeftPoints = this.state.currLeftPoints;
    const arrowsLeft = this.state.arrowsLeft;
    const possibleCheckout = calculateCheckout(currLeftPoints, arrowsLeft);

    const checkout1 = player1Move && possibleCheckout;
    const checkout2 = !player1Move && possibleCheckout;

    const currThrow1 = player1Move && currThrow;
    const currThrow2 = !player1Move && currThrow;

    return (
      <>
        <div id="format" key="format" className="d-flex justify-content-center">
          <fieldset className="d-flex justify-content-space-around">
            <legend>
              <h3 className="no-margin">Match format</h3>
            </legend>
            <div id="matchFormat">
              <p className="no-margin">Legs: <b>{totalLegs}</b></p>
              <p className="no-margin">Points: <b>{totalPoints}</b></p>
            </div>
          </fieldset>
        </div>
        <p id="legsPlayed" className="d-flex justify-content-center"><b>Leg {legsPlayed + 1}/{totalLegs}</b>
        </p>
        <hr/>
        <div id="matchSituation" key="matchSituation" className="d-flex justify-content-space-around">
          <Player name={this.props.player1} points={currLeg.points1} legs={this.state.legsWon1} player={1}
                  key="player1" checkout={checkout1} pointsLeft={currLeftPoints} submitted={submitted}
                  turn={player1Move} bust={this.state.isBust} currThrow={currThrow1} average={average1}/>
          <div className="vl">{""}</div>
          <Player name={this.props.player2} points={currLeg.points2} legs={this.state.legsWon2} player={2}
                  key="player2" checkout={checkout2} pointsLeft={currLeftPoints} submitted={submitted}
                  turn={!player1Move} bust={this.state.isBust} currThrow={currThrow2} average={average2}/>
        </div>
        <hr/>
        <Score onClick={this.handleSubmit} onChange={this.handleChange} sector={this.state.sector}
               submitted={this.state.submitted} normalSector={this.state.normalSector}
               pointsChange={this.handlePointsChange} bust={this.state.isBust} leftPoints={currLeftPoints}
               arrows={arrowsLeft}/>
      </>
    )
  }
}

class Average extends React.Component {
  render() {
    const average = this.props.average;

    return (
      <div key="average" id="average">
        {average.length > 0 && `Average: ${calculateAverage(average)}`}
      </div>
    )
  }
}

class Player extends React.Component {
  render() {
    const key = this.props.player;
    const name = this.props.name;
    const checkout = this.props.checkout;

    const bust = this.props.bust;
    const currPoints = this.props.points;
    const currThrow = this.props.currThrow

    let additionalInfo = '';

    if (checkout) {
      additionalInfo = <span id="checkout" className="align-self-flex-end">
        Checkout: <b>{checkout}</b>
      </span>
    } else if (bust) {
      additionalInfo = <span id="bust" className="align-self-flex-end">Bust!</span>
    } else if (currThrow) {
      additionalInfo = <span id="currLeftPoints" className="align-self-flex-end">{currThrow}</span>
    }

    return (
      <div key="player" id="player">
        <h2 key={name} className="no-margin">
          <em id="name">{name}</em>
          {this.props.turn && <span id="arrow" style={{ color: "green" }}>&#8592;</span>}
        </h2>
        <p key={key} className="no-margin">Legs won <b>{this.props.legs}</b></p>
        <p><b id="leftPoints">{currPoints}</b> {additionalInfo}</p>
        <Average average={this.props.average}/>
      </div>
    )
  }
}

class Score extends React.Component {
  render() {
    return (
      <div key="score" id="score" className="d-flex justify-content-center">
        <Sectors key="firstThrow" throw="First" cLick={this.props.onClick} change={this.props.onChange}
                 normalSector={this.props.normalSector} sector={this.props.sector}
                 points={this.props.pointsChange} arrows={this.props.arrows}/>
      </div>
    )
  }
}

class Sectors extends React.Component {
  render() {
    const arrows = this.props.arrows;
    const normalSector = this.props.normalSector;
    const points = <div key="points">
      <br/>
      <label htmlFor="points">Sector value</label>
      <input type="number" min="1" max="20" name="points" id="points"
             onChange={this.props.points} required/>
      <br/>
    </div>

    return (
      <form onChange={this.props.change}
            onSubmit={this.props.cLick} key={this.props.throw}>
        <p><b>{arrows} arrows left</b></p>
        <p>Targeted sector</p>
        <input type="radio" id="single" name="sector" value="single" defaultChecked/>
        <label htmlFor="single">Single</label>
        <br/>
        <input type="radio" id="double" name="sector" value="double"/>
        <label htmlFor="double">Double</label>
        <br/>
        <input type="radio" id="triple" name="sector" value="triple"/>
        <label htmlFor="triple">Triple</label>
        <br/>
        <input type="radio" id="outerBullseye" name="sector" value="outerBullseye"/>
        <label htmlFor="outerBullseye">Outer Bullseye</label>
        <br/>
        <input type="radio" id="Bullseye" name="sector" value="bullseye"/>
        <label htmlFor="Bullseye">Bullseye</label>
        <br/>
        <input type="radio" id="none" name="sector" value="none"/>
        <label htmlFor="none">None (0 points)</label>
        <br/>
        {normalSector && points}
        <br/>
        <input type="submit" value="Submit Score"/>
      </form>
    )
  }
}

export default Darts
