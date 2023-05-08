import ItemList from "./ItemList";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";

const Transaction = (props) => {
  const [show, setShow] = useState(true);
  const { inputData, delItem } = props;
  return (
    <div>
      <div
        className="head"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div>History</div>
        <button onClick={() => setShow(!show)}>{show ? "ซ่อน" : "แสดง"}</button>
      </div>
      <hr style={{ marginBottom: 20 }} />
      <ul style={{ margin: 0, padding: 0 }}>
        {show &&
          inputData.map((e) => {
            //return <ItemList catagory = {e.catagory} amount = {e.amount} key = {uuidv4()}/>
            return <ItemList {...e} key={e.id} delItem={delItem} />;
          })}
      </ul>
    </div>
  );
};
export default Transaction;
