import { counterDec, counterInc } from "../store/action-types";
import { useStore } from "../store/StoreProvider"

export default function StoreCounter(props) {
    const [store, dispatch] = useStore();

    const handleIncrement = () => {
        const action = {
            type: counterInc
        }
        dispatch(action);
    }
    const handleDecrement = () => {
        dispatch({type: counterDec})
    }

    return (
        <div>
            <button onClick={() => handleIncrement()}>Increment</button>
            <button onClick={() => handleDecrement()}>Decrement</button>
            {store.counterValue}
        </div>
    )
}