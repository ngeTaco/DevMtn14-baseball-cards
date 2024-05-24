import playerData from './playerData.js';

function BaseballCard(props) {
  // return (
  //   <div className="card">
  //     <h2>{props.name}</h2>
  //     <img src={props.imgUrl} alt={props.name}/>
  //   </div>
  // );
  const statsDisplay = [];
  for stat 
  return (
    <div className='card'>
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </div>
  )
}

function App() {
  const cards = playerData.map(player => {
    return <BaseballCard 
    name={player.name}
    team={player.team}
    position={player.position}
    stats={player.stats}
    imgUrl={player.imgUrl}
    key={player.cardId}
    />
  })
  return <>{cards}</>;
}

export default App;
