import { useState } from "react";

interface ListGroup{
    items: string[];
    heading: string;

}
function ListGroup({items, heading}: ListGroup) {

    
    //Hook
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [name, setName] = useState('');
  return (
    <>
        <h1> {heading} </h1>
        <ul className="list-group list-group-flush">
        { items.map((item, index )=> 
        <li 
        className= { selectedIndex === index ? "list-group-item active" : "list-group-item"}
        key={index}
        onClick={() => {setSelectedIndex(index)}}> {item}</li>) }
        </ul>
    </>
  );
}
export default ListGroup;
