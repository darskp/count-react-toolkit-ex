import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,reset } from "./reduce";
const Comp1 = () => {
    let count = useSelector((store) => store.count);
    let dispatch= useDispatch();
    console.log(count);
    return (
        <>
            <h1>Count Operation</h1>
            <h2>Count value={count}</h2>
            <button onClick={() => dispatch(increment())} style={{marginRight:"10px",border:"1px solid red"}}>INCRE</button>
            <button onClick={() => dispatch(decrement())} style={{marginRight:"10px",border:"1px solid red"}}>DECRE</button>
            <button onClick={() => dispatch(reset())} style={{marginRight:"10px",border:"1px solid red"}}>RESET</button>
        </>
    );
};

export default Comp1;
