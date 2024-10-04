import { useReducer } from "react";

const reducer = (state, action) => {
    if (action.type === 'buy_ingredients') return { money: state.money - 10 };
    if (action.type === 'sell_a_meal') return { money: state.money + 10 };
    if (action.type === 'celebrity_visit') return { money: state.money + 5000 };
    return state;
};

function ExpenseTracker() {
    const initialState = { money: 100 };
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="ExpenseTracker">
            <h1>Wallet: {state.money}</h1>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button onClick={() => dispatch({ type: 'buy_ingredients' })} type="button" className="btn btn-secondary">Shopping for veggies</button>
                <button onClick={() => dispatch({ type: 'sell_a_meal' })} type="button" className="btn btn-secondary">Serve a meal to the customer</button>
                <button onClick={() => dispatch({ type: 'celebrity_visit' })} type="button" className="btn btn-secondary">Celebrity Visit</button>
            </div>
        </div>
    );
}

export default ExpenseTracker;