import React from 'react';
import LiveOrder from './LiveOrders';
import FeedbackRadioGroup from './FeedbackRadioBtn';
import { Link, Card, CardBody, Alert, AlertIcon, Heading, VStack, Badge } from '@chakra-ui/react';


const PageDynamicJsx = () => {

    const spacinfStyle = {
        // using string interpolation to set the margin
        marginBottom: `3.5rem`,
    };

    return (
        <>
            <div className="row">
                <h1>Manipulating children <Badge fontSize='xxl'>dynamically</Badge> in JSX</h1>
            </div>
            <div className="row">
                <h3>The problem</h3>
                <p>We need to apply custom styles to the children elements of a "Row" component 
                <Badge colorScheme='purple'>without having to modify the original JSX markup</Badge>. 
                    To solve this problem, we will use <Badge colorScheme='purple'><Link href="https://react.dev/reference/react/Children" isExternal>React.Children()</Link></Badge> API map function to loop through 
                    every child of component, and <Badge colorScheme='purple'><Link href="https://react.dev/reference/react/cloneElement" isExternal>React.cloneElement</Link></Badge> API to return a new copy of the 
                    element to which we will apply the new styles.</p>
            </div>

            <div style={spacinfStyle}></div>
            
            <div className="row">
                <div className='col'>
                    <h3>Code output 1</h3>
                    <p className="mb-3">We have dynamically added left margins to all child elements of the "Row" component by first cloning each element, and then applying styles to the copies of these elements.</p>
                    <Card shadow='md' borderWidth='1px' borderColor='gray.300'>
                        <CardBody>
                            <LiveOrder />
                        </CardBody>
                    </Card>
                </div>
            </div>

            <div style={spacinfStyle}></div>

            <div className="row">
                <div className="col">
                    <h3>Code output 2</h3>
                    <p className="mb-3">We generate the radio group below by encapsulating the core functionalities 
                        into 2 components: <Badge>RadioGroup</Badge> and 
                        <Badge>RadioOption</Badge>. Next, we use <Badge>RadioGroup</Badge> 
                        to dynamically modify its children properties, which makes for a much clearner and flexible code implementation.</p>
                </div>
            </div>
            <Card shadow='md' borderWidth='1px' borderColor='gray.300'>
                        <CardBody>
                        <FeedbackRadioGroup />
                        </CardBody>
                    </Card>


            <div style={spacinfStyle}></div>



            <Alert status='info'>
                <AlertIcon />
                <VStack spacing='1'>
                    <Heading as='h5'>Code sample</Heading>
                    <p><Link href="https://github.com/ericnjanga/React-Cookbook/blob/main/src/LiveOrders.js" isExternal>See the code on GitHUb</Link></p>
                </VStack>
            </Alert>
        </>
    );
};

export default PageDynamicJsx;



