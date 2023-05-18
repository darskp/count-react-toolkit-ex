import { useDispatch, useSelector } from "react-redux";
import { increment,decrement, reset } from "../actions/actions";

const Comp1 = () => {
    let count = useSelector((store) => store.count);
    let actionIncre = useDispatch();

    return (
        <>
            <h1>Count Operation</h1>
            <h2>Count value={count}</h2>
            <button onClick={() => actionIncre(increment(count))}>INCRE</button>
            <button onClick={() => actionIncre(decrement(count))}>DECRE</button>
            <button onClick={() => actionIncre(reset(count))}>RESET</button>
        </>
    );
};

export default Comp1;
