import './styles.css';
import { useEffect, useState } from 'react';

// Render style 1
const renderDessertCount = (data) => {
    const img = 'https://m.media-amazon.com/images/I/71FJc7Mv4JS.__AC_SY300_SX300_QL70_ML2_.jpg';

    return (
        <div>
            <p>{data.length} deserts</p>
            <img src={img} style={{ width: '150px' }} />
        </div>
    );
};

// Render style 2
const renderDrinkCount = (data) => {
    return (
        <div style={{ padding: '2rem', backgroundColor: 'turquoise'}}>
            <h4>{data.length} drinks</h4>
        </div>
    )
};

// Update the state with a array of data depending on what the url provided contains
// and renders this data with a function in props
const DataFetcher = ({ render, url }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (url.includes('desserts')) {
            setData(['cake', 'ice cream', 'pie', 'brownie']);
        } else {
            setData(['water', 'soda', 'juice']);
        }
    }, []);

    return render(data);
};

// Expects "dessets" data and gets a render style 1 function
const DessertsCount = () => {
    return (
        <DataFetcher
            url='.........desserts'
            render={renderDessertCount}
        />
    );
};

// Expects "drinks" data and gets a render style 2 function
const DrinkCount = () => {
    return (
        <DataFetcher
            url='xxxxxxx  ---- drinks'
            render={renderDrinkCount}
        />
    );
};

function AbstractRendering() {
    return (
        <div className="AppDemoFrame">
            <header className="AppDemoFrame__header">
                <h5>Using the <span className='utils-highlight'>Render Props</span> pattern to render two different components with the same business logic</h5>
            </header>

            <div className="AppDemoFrame__wrapper">
                <DessertsCount />
                <DrinkCount />
            </div>
        </div>
    );
}

export default AbstractRendering;