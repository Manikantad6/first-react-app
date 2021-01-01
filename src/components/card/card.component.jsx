import './card.styles.css'

export const Card = props =>{
  return ( <div className="card-container">
      <img alt="image" src={`https://robohash.org/${props.monster.id}f?set=set2&size=160x160`}></img>
        <h1>{props.monster.name}</h1>
        <h3>{props.monster.email}</h3>
    </div>)
}