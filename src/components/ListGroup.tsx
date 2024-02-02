import { Fragment, useState } from "react";

//items = []
// const message = items.length === 0 ? <h1>No Item Go Back :|</h1> : null
// const getMessage = () => {
//     return items.length === 0 ? <h1>No Item Go Back :|</h1> : null
// }
//Hook: () {} function that allows us to tap into build in functions on react. This is a state hook, there are as well other types of hooks
//const [name, setName] = useState('');
//variable(selected index)
//updater function
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string ) => void;
}
function ListGroup({items, heading, onSelectItem}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // if (items.length === 0 ) {
  //     return <h4>
  //         There is no item in the container
  //     </h4>
  // }
  return (
    //Fragment is the same as using an empty <></>
    <Fragment>
      <h1>{heading}</h1>
      {/* {message} */}
      {/* {getMessage()} */}
      {items.length === 0 && <h1>No Item Go Back :|</h1>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
            key={item}
            onClick={() => {
              //selectedIndex = index;
              setSelectedIndex(index);
              console.log(
                `item ${item} has been clicked with an Index placement`,
                index + 1
              )
              onSelectItem(item);
            }
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
