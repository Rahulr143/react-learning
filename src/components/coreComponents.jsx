export default function CoreConcepts(props){
    return (
      <li>
        <img src={props.image}alt={props.image}/>
        <h2>
  {props.title}
        </h2>
        <p>{props.description}</p>
      </li>
    );
  }