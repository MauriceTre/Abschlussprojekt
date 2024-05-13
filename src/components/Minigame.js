import React, { useState, useEffect } from 'react';
import '../styles/PlaneGame.css';

const PlaneGame = () => {
    const [planePosition, setPlanePosition] = useState({ x: 50, y: 50 });
    const [obstacles, setObstacles] = useState([]);
    const [score, setScore] = useState(0);
    const [gameOver, setGameOver] = useState(false);
    const obstacleSpeed = 5; // Geschwindigkeit der Hindernisse
    const obstacleSizeRange = [20, 50]; // Größenbereich der Hindernisse
    const obstacleSpawnInterval = 1500; // Intervall für das Erscheinen von Hindernissen in Millisekunden
  
    // Funktion zur Behandlung von Tastenanschlägen zur Steuerung des Flugzeugs
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowUp') {
        setPlanePosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y - 10,
        }));
      } else if (event.key === 'ArrowDown') {
        setPlanePosition((prevPosition) => ({
          ...prevPosition,
          y: prevPosition.y + 10,
        }));
      }
    };
  
    // Funktion zur Überprüfung von Kollisionen zwischen Flugzeug und Hindernissen
    const checkCollision = () => {
      for (const obstacle of obstacles) {
        if (
          planePosition.y < obstacle.y + obstacle.size &&
          planePosition.y + 20 > obstacle.y &&
          planePosition.x < obstacle.x + obstacle.size &&
          planePosition.x + 20 > obstacle.x
        ) {
          setGameOver(true);
          return;
        }
      }
    };
  
    // Funktion zur Aktualisierung der Spielpositionen und -punkte
    const updateGame = () => {
      if (!gameOver) {
        // Hindernispositionen aktualisieren
        const updatedObstacles = obstacles.map((obstacle) => ({
          ...obstacle,
          x: obstacle.x - obstacleSpeed,
        }));
  
        // Neue Hindernisse hinzufügen
        if (Date.now() % obstacleSpawnInterval === 0) {
          const newObstacleSize =
            Math.floor(Math.random() * (obstacleSizeRange[1] - obstacleSizeRange[0] + 1)) + obstacleSizeRange[0];
          updatedObstacles.push({
            x: 500,
            y: Math.floor(Math.random() * (300 - newObstacleSize)),
            size: newObstacleSize,
          });
        }
  
        setObstacles(updatedObstacles);
  
        // Punktzahl aktualisieren
        setScore((prevScore) => prevScore + 1);
      }
    };
  
    // Überprüfen von Kollisionen und Aktualisierung des Spiels bei jedem Rendern
    useEffect(() => {
      checkCollision();
      updateGame();
    }, [planePosition]);
  
    // Starten der Spiel-Schleife
    useEffect(() => {
      const gameLoop = setInterval(() => {
        checkCollision();
        updateGame();
      }, 50);
  
      return () => clearInterval(gameLoop);
    }, []);
  
    // Spiel zurücksetzen
    const restartGame = () => {
      setPlanePosition({ x: 50, y: 50 });
      setObstacles([]);
      setScore(0);
      setGameOver(false);
    };
  
    return (
      <div
        className="game-container"
        tabIndex="0"
        onKeyDown={handleKeyPress}
      >
        <div
          className="plane"
          style={{ left: `${planePosition.x}px`, top: `${planePosition.y}px` }}
        />
        {obstacles.map((obstacle, index) => (
          <div
            key={index}
            className="obstacle"
            style={{
              left: `${obstacle.x}px`,
              top: `${obstacle.y}px`,
              width: `${obstacle.size}px`,
              height: `${obstacle.size}px`,
            }}
          />
        ))}
        <div className="score">Score: {score}</div>
        {gameOver && (
          <div className="game-over">
            <h1>Game Over!</h1>
            <button className="restart-btn" onClick={restartGame}>
              Restart
            </button>
          </div>
        )}
      </div>
    );
  };
  
  export default PlaneGame;