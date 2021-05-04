import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {/* TODO */}
        </button>
      );
    }
  }

class SquareVert extends React.Component {
    render() {
      return (
        <button className="squareVert">
          {/* TODO */}
        </button>
      );
    }
  }

  class SquareHori extends React.Component {
    render() {
      return (
        <button className="squareHori">
          {/* TODO */}
        </button>
      );
    }
  }

  class SquareVertHori extends React.Component {
    render() {
      return (
        <button className="squareVertHori">
          {/* TODO */}
        </button>
      );
    }
  }

class Board extends React.Component {
    renderSquare(i) {
        return <Square />;
    }

    renderSquareVert(i) {
        return <SquareVert />;
    }

    renderSquareHori(i) {
        return <SquareHori />;
    }

    renderSquareVertHori(i) {
        return <SquareVertHori />;
    }

    render() {
        const status = 'Next player: X';
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row first">
                    {this.renderSquare(0)}
                    {this.renderSquareVert(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquareHori(3)}
                    {this.renderSquareVertHori(4)}
                    {this.renderSquareHori(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquareVert(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
      );
    }
  }

  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  // ========================================

  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
