import "./list.scss";
import { listData } from "../../lib/dummydata"
// import Card  from "../card/card"
import Carte from "../carte/carte";


function List() {
  return (
    <div className="list">
        {listData.map((item) => (
            <Carte key={item.id} item={item} />
        ))}
    </div>
  )
}

export default List