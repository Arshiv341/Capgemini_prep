import React, { useState, useEffect } from 'react';
import {
  PageContainer,
  PrimaryButton,
  SecondaryButton,
  EmptyState
} from '../components/UI';
import { Flame, Play, Clock, Check, X, RefreshCw, Zap, Grid, Binary, Shuffle } from 'lucide-react';

type GameType = 'NONE' | 'GRID' | 'SEQUENCE' | 'SYMBOL' | 'REACTION';

const CognitiveGames: React.FC = () => {
  const [activeGame, setActiveGame] = useState<GameType>('NONE');
  const [gameState, setGameState] = useState<'IDLE' | 'PLAYING' | 'RESULT'>('IDLE');
  
  // Game Stats
  const [gameScore, setGameScore] = useState(0);
  const [gameAccuracy, setGameAccuracy] = useState(100);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);

  // 1. Grid Memory States
  const [gridSize, setGridSize] = useState(4); // 4x4
  const [gridCells, setGridCells] = useState<number[]>([]);
  const [highlightedCells, setHighlightedCells] = useState<Set<number>>(new Set());
  const [userSelectedCells, setUserSelectedCells] = useState<Set<number>>(new Set());
  const [showGridPattern, setShowGridPattern] = useState(false);

  // 2. Number Sequence States
  const [sequenceText, setSequenceText] = useState('');
  const [sequenceAnswer, setSequenceAnswer] = useState<number>(0);
  const [userSeqInput, setUserSeqInput] = useState('');
  const [seqCount, setSeqCount] = useState(0);

  // 3. Symbol Matching States
  const [symbolLeft, setSymbolLeft] = useState('');
  const [symbolRight, setSymbolRight] = useState('');
  const [symbolsTimer, setSymbolsTimer] = useState(30); // 30s round
  const [symbolsCount, setSymbolsCount] = useState(0);
  const [symbolsCorrect, setSymbolsCorrect] = useState(0);

  // 4. Reaction Time States
  const [reactionColor, setReactionColor] = useState<'red' | 'green' | 'blue'>('red');
  const [reactionStartTime, setReactionStartTime] = useState(0);
  const [reactionText, setReactionText] = useState('Click to Start');
  const [reactionTimeoutId, setReactionTimeoutId] = useState<any | null>(null);

  // Clean timeouts on exit
  useEffect(() => {
    return () => {
      if (reactionTimeoutId) clearTimeout(reactionTimeoutId);
    };
  }, [reactionTimeoutId]);

  // Sync results to LocalStorage
  const saveGameResult = (score: number, accuracy: number, name: string) => {
    try {
      const history = JSON.parse(localStorage.getItem('capgemini-prep:cognitive-history') || '[]');
      history.push({
        game: name,
        score,
        accuracy,
        date: new Date().toISOString()
      });
      localStorage.setItem('capgemini-prep:cognitive-history', JSON.stringify(history));
    } catch (e) {}
  };

  // --- GAME 1: GRID MEMORY LOGIC ---
  const startGridGame = () => {
    setGameState('PLAYING');
    setGameScore(0);
    loadNewGridLevel(4, 4); // start with 4x4 grid, 4 targets
  };

  const loadNewGridLevel = (size: number, targetsCount: number) => {
    setUserSelectedCells(new Set());
    
    // Generate cell list
    const totalCells = size * size;
    const cells = Array.from({ length: totalCells }, (_, idx) => idx);
    setGridCells(cells);

    // Pick random target cells
    const targets = new Set<number>();
    while (targets.size < targetsCount) {
      targets.add(Math.floor(Math.random() * totalCells));
    }
    setHighlightedCells(targets);
    setShowGridPattern(true);

    // Hide highlights after 2 seconds
    setTimeout(() => {
      setShowGridPattern(false);
    }, 2000);
  };

  const handleCellClick = (cellIdx: number) => {
    if (showGridPattern || gameState !== 'PLAYING') return;

    const selected = new Set(userSelectedCells);
    if (selected.has(cellIdx)) {
      selected.delete(cellIdx);
    } else {
      selected.add(cellIdx);
    }
    setUserSelectedCells(selected);

    // Verify if selections are complete
    if (selected.size === highlightedCells.size) {
      let correct = true;
      selected.forEach(c => {
        if (!highlightedCells.has(c)) correct = false;
      });

      if (correct) {
        setGameScore((prev) => prev + 10);
        // Load next harder level
        setTimeout(() => {
          loadNewGridLevel(gridSize, highlightedCells.size + 1);
        }, 1000);
      } else {
        // Finish game
        setGameState('RESULT');
        saveGameResult(gameScore, 80, 'Grid Memory');
      }
    }
  };

  // --- GAME 2: NUMBER SEQUENCE LOGIC ---
  const startSequenceGame = () => {
    setGameState('PLAYING');
    setGameScore(0);
    setSeqCount(1);
    setUserSeqInput('');
    loadNewSequence();
  };

  const loadNewSequence = () => {
    setUserSeqInput('');
    const sequences = [
      { text: "3, 6, 12, 24, ?", ans: 48 },
      { text: "2, 5, 10, 17, ?", ans: 26 }, // squares + 1
      { text: "1, 1, 2, 3, 5, 8, ?", ans: 13 }, // Fibonacci
      { text: "40, 35, 31, 28, ?", ans: 26 }, // subtract 5, 4, 3, 2
      { text: "2, 6, 18, 54, ?", ans: 162 } // multiply 3
    ];
    
    const picked = sequences[Math.floor(Math.random() * sequences.length)];
    setSequenceText(picked.text);
    setSequenceAnswer(picked.ans);
  };

  const handleSequenceSubmit = () => {
    const inputVal = parseInt(userSeqInput);
    if (inputVal === sequenceAnswer) {
      setGameScore((prev) => prev + 15);
      if (seqCount < 5) {
        setSeqCount((prev) => prev + 1);
        loadNewSequence();
      } else {
        setGameState('RESULT');
        saveGameResult(gameScore + 15, 100, 'Number Sequence');
      }
    } else {
      setGameState('RESULT');
      saveGameResult(gameScore, 60, 'Number Sequence');
    }
  };

  // --- GAME 3: SYMBOL MATCHING LOGIC ---
  const startSymbolGame = () => {
    setGameState('PLAYING');
    setGameScore(0);
    setSymbolsCount(0);
    setSymbolsCorrect(0);
    setSymbolsTimer(20); // 20 seconds round
    loadNewSymbols();
  };

  // Timer countdown
  useEffect(() => {
    let interval: any;
    if (activeGame === 'SYMBOL' && gameState === 'PLAYING' && symbolsTimer > 0) {
      interval = setInterval(() => {
        setSymbolsTimer((prev) => prev - 1);
      }, 1000);
    } else if (activeGame === 'SYMBOL' && gameState === 'PLAYING' && symbolsTimer === 0) {
      setGameState('RESULT');
      const finalAccuracy = symbolsCount > 0 ? Math.round((symbolsCorrect / symbolsCount) * 100) : 0;
      saveGameResult(gameScore, finalAccuracy, 'Symbol Match');
    }
    return () => clearInterval(interval);
  }, [activeGame, gameState, symbolsTimer]);

  const loadNewSymbols = () => {
    const symbolsList = ['★', '▲', '●', '■', '◆', '♥', '♣', '♠'];
    const left = symbolsList[Math.floor(Math.random() * symbolsList.length)];
    // 50% chance of matching
    const shouldMatch = Math.random() > 0.5;
    const right = shouldMatch ? left : symbolsList[Math.floor(Math.random() * symbolsList.length)];
    
    setSymbolLeft(left);
    setSymbolRight(right);
  };

  const handleSymbolMatchClick = (userSaysMatch: boolean) => {
    const realMatch = symbolLeft === symbolRight;
    const correct = userSaysMatch === realMatch;

    setSymbolsCount((prev) => prev + 1);
    if (correct) {
      setSymbolsCorrect((prev) => prev + 1);
      setGameScore((prev) => prev + 5);
    }

    loadNewSymbols();
  };

  // --- GAME 4: REACTION TEST LOGIC ---
  const startReactionGame = () => {
    setGameState('PLAYING');
    setReactionColor('red');
    setReactionText('Wait for Green...');
    setReactionTimes([]);
    
    const randomDelay = 2000 + Math.random() * 3000; // 2-5 seconds
    const timeout = setTimeout(() => {
      setReactionColor('green');
      setReactionText('CLICK NOW!');
      setReactionStartTime(Date.now());
    }, randomDelay);
    
    setReactionTimeoutId(timeout);
  };

  const handleReactionClick = () => {
    if (reactionColor === 'red') {
      // Clicked too early!
      if (reactionTimeoutId) clearTimeout(reactionTimeoutId);
      setReactionColor('blue');
      setReactionText('Too early! Click reset to try again.');
    } else if (reactionColor === 'green') {
      const clickTime = Date.now() - reactionStartTime;
      setReactionTimes([clickTime]);
      setReactionColor('blue');
      setReactionText(`Reaction: ${clickTime} ms`);
      setGameState('RESULT');
      
      const calculatedScore = Math.max(10, Math.round(1000 - clickTime));
      saveGameResult(calculatedScore, 100, 'Reaction Test');
    }
  };

  return (
    <PageContainer>
      {/* Header */}
      <div className="border-b border-slate-800 pb-5 space-y-1">
        <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
          <Zap className="text-blue-400" />
          Cognitive Game Arena
        </h2>
        <p className="text-xs text-slate-400">
          Prepare for cognitive assessments testing spatial layout patterns, sequences, and reaction triggers.
        </p>
      </div>

      {activeGame === 'NONE' ? (
        // Game browser dashboard
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Game 1: Grid Memory */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-3 bg-blue-500/10 text-blue-400 w-fit rounded-xl">
                <Grid size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Grid Pattern Recall</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Test spatial orientation and attention capacity. Highlighted cells flash briefly. Recall and reproduce the pattern without missing targets.
              </p>
            </div>
            <PrimaryButton onClick={() => { setActiveGame('GRID'); startGridGame(); }} className="text-xs font-bold w-fit uppercase">
              Launch Game
            </PrimaryButton>
          </div>

          {/* Game 2: Number Sequence */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-3 bg-amber-500/10 text-amber-400 w-fit rounded-xl">
                <Binary size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Number Sequence Guess</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Drill logical deduction and patterns. Predict subsequent digits in arithmetic, geometric, or square offset series under speed.
              </p>
            </div>
            <PrimaryButton onClick={() => { setActiveGame('SEQUENCE'); startSequenceGame(); }} className="text-xs font-bold w-fit uppercase">
              Launch Game
            </PrimaryButton>
          </div>

          {/* Game 3: Symbol Matching */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-3 bg-rose-500/10 text-rose-400 w-fit rounded-xl">
                <Shuffle size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Symbol Matcher</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Evaluate details comparison speeds. Quickly determine if left and right symbols match under a fast-decaying round timer.
              </p>
            </div>
            <PrimaryButton onClick={() => { setActiveGame('SYMBOL'); startSymbolGame(); }} className="text-xs font-bold w-fit uppercase">
              Launch Game
            </PrimaryButton>
          </div>

          {/* Game 4: Reaction Time */}
          <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 shadow-lg flex flex-col justify-between">
            <div className="space-y-2">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 w-fit rounded-xl">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-200">Reaction Speed Trigger</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Measure physical reaction and concentration latency. Wait for colors to switch to green, and trigger clicks down to milliseconds.
              </p>
            </div>
            <PrimaryButton onClick={() => { setActiveGame('REACTION'); startReactionGame(); }} className="text-xs font-bold w-fit uppercase">
              Launch Game
            </PrimaryButton>
          </div>

        </div>
      ) : (
        // Active Game Arena view
        <div className="max-w-xl mx-auto space-y-5">
          <SecondaryButton onClick={() => setActiveGame('NONE')} className="text-xs py-1.5 px-3">
            &larr; Exit to Browser
          </SecondaryButton>

          {/* GAME 1 UI: GRID MEMORY */}
          {activeGame === 'GRID' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl text-center">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-200">Grid Pattern Recall</h3>
                <p className="text-[11px] text-slate-500">Memorize highlighted tiles, then replicate them.</p>
              </div>

              {gameState === 'PLAYING' && (
                <div className="flex flex-col items-center space-y-4">
                  <div className="grid grid-cols-4 gap-2 w-64 h-64">
                    {gridCells.map((idx) => {
                      const isHighlighted = highlightedCells.has(idx);
                      const isUserSelected = userSelectedCells.has(idx);
                      
                      let bg = 'bg-slate-800 hover:bg-slate-750';
                      if (showGridPattern && isHighlighted) bg = 'bg-blue-500';
                      else if (!showGridPattern && isUserSelected) bg = 'bg-blue-600';

                      return (
                        <button
                          key={idx}
                          disabled={showGridPattern}
                          onClick={() => handleCellClick(idx)}
                          className={`w-full h-full rounded-lg border border-slate-750 transition duration-150 cursor-pointer ${bg}`}
                        />
                      );
                    })}
                  </div>
                  <p className="text-xs text-slate-400">
                    {showGridPattern ? 'Memorizing...' : 'Recreate the pattern!'}
                  </p>
                </div>
              )}

              {gameState === 'RESULT' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-red-400">Incorrect Selection!</h4>
                  <p className="text-xs text-slate-400">Final score: <strong>{gameScore} points</strong></p>
                  <PrimaryButton onClick={startGridGame} className="text-xs py-2 px-5 font-bold uppercase">
                    Play Again
                  </PrimaryButton>
                </div>
              )}
            </div>
          )}

          {/* GAME 2 UI: NUMBER SEQUENCE */}
          {activeGame === 'SEQUENCE' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl text-center">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-200">Number Sequence Guess</h3>
                <p className="text-[11px] text-slate-500">Calculate the next number in the pattern.</p>
              </div>

              {gameState === 'PLAYING' && (
                <div className="space-y-4 max-w-sm mx-auto">
                  <h2 className="text-3xl font-extrabold text-amber-500 tracking-tight py-4 bg-slate-950 rounded-xl border border-slate-850">
                    {sequenceText}
                  </h2>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={userSeqInput}
                      onChange={(e) => setUserSeqInput(e.target.value)}
                      placeholder="Next number..."
                      className="flex-1 bg-slate-950 border border-slate-850 p-3 rounded-lg text-slate-200 text-xs focus:ring-1 focus:ring-blue-500 focus:outline-none"
                    />
                    <PrimaryButton onClick={handleSequenceSubmit} className="text-xs">
                      Submit
                    </PrimaryButton>
                  </div>
                  <p className="text-[10px] text-slate-500">Sequence {seqCount} of 5</p>
                </div>
              )}

              {gameState === 'RESULT' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-200">Round Completed!</h4>
                  <p className="text-xs text-slate-400">Final score: <strong>{gameScore} points</strong></p>
                  <PrimaryButton onClick={startSequenceGame} className="text-xs py-2 px-5 font-bold uppercase">
                    Try Again
                  </PrimaryButton>
                </div>
              )}
            </div>
          )}

          {/* GAME 3 UI: SYMBOL MATCH */}
          {activeGame === 'SYMBOL' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl text-center">
              <div className="flex justify-between items-center border-b border-slate-850 pb-2">
                <h3 className="text-sm font-bold text-slate-200">Symbol Matcher</h3>
                <span className="text-xs text-rose-400 font-mono font-bold flex items-center gap-1">
                  <Clock size={14} />
                  {symbolsTimer}s
                </span>
              </div>

              {gameState === 'PLAYING' && (
                <div className="space-y-6 max-w-sm mx-auto">
                  <div className="flex justify-around items-center py-6 bg-slate-950 border border-slate-850 rounded-xl">
                    <span className="text-5xl select-none">{symbolLeft}</span>
                    <span className="text-slate-650 text-xl font-mono">VS</span>
                    <span className="text-5xl select-none">{symbolRight}</span>
                  </div>

                  <div className="flex gap-4">
                    <SecondaryButton onClick={() => handleSymbolMatchClick(false)} className="flex-1 py-3 bg-rose-500/10 border-rose-500/20 text-rose-400 text-xs font-bold uppercase">
                      No Match
                    </SecondaryButton>
                    <PrimaryButton onClick={() => handleSymbolMatchClick(true)} className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-500 text-xs font-bold uppercase">
                      Match
                    </PrimaryButton>
                  </div>
                  <p className="text-[10px] text-slate-500">Correct answers: {symbolsCorrect} / {symbolsCount}</p>
                </div>
              )}

              {gameState === 'RESULT' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-slate-200">Time Out!</h4>
                  <p className="text-xs text-slate-400">Total matched: <strong>{symbolsCorrect}</strong></p>
                  <p className="text-xs text-slate-400">Final score: <strong>{gameScore} points</strong></p>
                  <PrimaryButton onClick={startSymbolGame} className="text-xs py-2 px-5 font-bold uppercase">
                    Play Again
                  </PrimaryButton>
                </div>
              )}
            </div>
          )}

          {/* GAME 4 UI: REACTION TEST */}
          {activeGame === 'REACTION' && (
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-6 shadow-xl text-center">
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-200">Reaction Speed Trigger</h3>
                <p className="text-[11px] text-slate-500">Click when colors shift to green.</p>
              </div>

              <div className="py-2">
                <div 
                  onClick={handleReactionClick}
                  className={`w-full h-48 rounded-xl flex items-center justify-center text-lg font-extrabold select-none transition border cursor-pointer ${
                    reactionColor === 'red' 
                      ? 'bg-rose-500/20 border-rose-500/30 text-rose-400 animate-pulse'
                      : reactionColor === 'green'
                      ? 'bg-emerald-500 border-emerald-400 text-slate-950 text-2xl shadow-lg'
                      : 'bg-slate-950 border-slate-850 text-slate-400'
                  }`}
                >
                  {reactionText}
                </div>
              </div>

              {gameState === 'RESULT' && (
                <div className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Reaction Latency: <strong>{reactionTimes[0]} ms</strong>
                  </p>
                  <PrimaryButton onClick={startReactionGame} className="text-xs py-2 px-5 font-bold uppercase">
                    Reset & Retry
                  </PrimaryButton>
                </div>
              )}
            </div>
          )}

        </div>
      )}
    </PageContainer>
  );
};

export default CognitiveGames;
