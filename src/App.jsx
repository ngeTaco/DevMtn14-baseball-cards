import playerData from './playerData.js';

function BaseballCard(props) {
  return (
    <div className="card">
      <h2>Player Name goes here</h2>
    </div>
  );
}

function App() {
  const cards = playerData.map(player => {
    return <BaseballCard />
  })
  return <>{cards}</>;
}

export default App;
