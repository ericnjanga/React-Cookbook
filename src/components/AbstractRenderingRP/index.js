/**
 * Using the Render Props pattern for abstract rendering
 */
 
import { useEffect, useState } from 'react';
import { Card, CardBody, CardHeader, HStack } from '@chakra-ui/react';

// Render style 1
const renderDessertCount = (data) => {
    const img = 'https://m.media-amazon.com/images/I/71FJc7Mv4JS.__AC_SY300_SX300_QL70_ML2_.jpg';

    return (
        <div>
            <p>{data.length} deserts</p>
            <img src={img} style={{ width: '150px' }} alt="" />
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
    }, [url]);

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

function AbstractRenderingRP() {
    return (
        <Card shadow='md' borderWidth='1px' borderColor='gray.300'>
            <CardHeader>
                <p>We have two comcponents that use the same fetching functionality to fetch two different types of data, 
                and renders them in two different ways.</p>
            </CardHeader>

            <CardBody>
                <HStack>
                    <DessertsCount />
                    <DrinkCount />
                </HStack>
            </CardBody>
        </Card>
    );
}

export default AbstractRenderingRP;