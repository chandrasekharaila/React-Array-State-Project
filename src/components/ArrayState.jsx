import { useState } from "react";

export const ArrayState = () => {
  const [arr, setArr] = useState(["A", "B", "C"]);
  const [inputIndx, setInputIndx] = useState();

  const [editItem, setEditItem] = useState("");
  const [editIndex, setEditIndex] = useState();

  const [startItem, setStartItem] = useState();
  const [endItem, setEndItem] = useState();

  const [searchItem, setSearchItem] = useState();
  const [newItem, setNewItem] = useState();

  //Remove first element
  const removeFirstElement = () => {
    setArr(arr.slice(1));
  };

  //Reset Buttn
  const resetArray = () => {
    setArr(["A", "B", "C"]);
  };

  //remove index
  const removeIndex = (index) => {
    const indx = parseInt(index);
    setArr((prevArr) => {
      return prevArr.filter((item, i) => i !== indx);
    });
  };

  //Update values of specific index
  const updateIndex = (item, index) => {
    let idx = parseInt(index);
    let temp = arr.slice();
    temp[idx] = item;
    setArr([...temp]);
  };

  //Add item at start
  const addAtStart = (item) => {
    setArr([item, ...arr]);
  };

  const addAtEnd = (item) => {
    setArr([...arr, item]);
  };

  //replace Item
  const replaceItem = (item1, item2) => {
    setArr((prev) => {
      return prev.map((item) => {
        if (item === item1) {
          return item2;
        } else {
          return item;
        }
      });
    });
  };
  return (
    <>
      <h1>Contents in Array</h1>
      <ul>
        {arr.map((item, index) => (
          <li
            key={index}
            style={{
              textAlign: "left",
              display: "inline-block",
              margin: "10px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <button onClick={removeFirstElement}>Remove first Element</button>
      <br />
      <br />
      <button onClick={resetArray}>Reset Array</button>
      <br />
      <br />
      <input
        type="number"
        value={inputIndx}
        placeholder="enter index"
        onChange={(e) => setInputIndx(e.target.value)}
        style={{ margin: "10px" }}
      />
      <button onClick={() => removeIndex(inputIndx)}>Remove</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Enter Item to be added"
        value={editItem}
        onChange={(e) => setEditItem(e.target.value)}
      />
      <span> </span>
      <input
        type="text"
        placeholder="Index at which item to be placed"
        value={editIndex}
        onChange={(e) => setEditIndex(e.target.value)}
      />
      <span> </span>
      <button onClick={() => updateIndex(editItem, editIndex)}>
        Modify item at {editIndex}
      </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Item to add at start"
        value={startItem}
        onChange={(e) => setStartItem(e.target.value)}
      />
      <span> </span>
      <button onClick={() => addAtStart(startItem)}>Add at start</button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Item to add at end"
        value={endItem}
        onChange={(e) => setEndItem(e.target.value)}
      />
      <span> </span>
      <button onClick={() => addAtEnd(endItem)}>Add at End </button>
      <br />
      <br />
      <input
        type="text"
        placeholder="Item to be replaced"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <span> </span>
      <input
        type="text"
        placeholder="Item to be added"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <span> </span>
      <button onClick={() => replaceItem(searchItem, newItem)}>
        Replace Item
      </button>
    </>
  );
};
