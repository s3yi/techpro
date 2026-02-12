import React from 'react';

import { List, Card, Button} from 'antd';

const data = [
    {
        title: 'Basic',
        content: [
            {
            price: '#2900.0',
            space: '1GB of space',
            user: '1 user',
            support: '24/7 support',
            backup: 'Safe, reliable backup',
            access: 'Access from anywhere'
            }
        ]
    },
     {
        title: 'Premium',
        content: [
            {
            price: '#5900.0',
            space: '8GB of space',
            user: '2 user',
            support: '24/7 support',
            backup: 'Safe, reliable backup',
            access: 'Access from anywhere'
            }
        ]
    },
     {
        title: 'Enterprise',
        content: [
            {
            price: '#9900.0',
            space: '5GB of space',
            user: '10 user',
            support: '24/7 support',
            backup: 'Safe, reliable backup',
            access: 'Access from anywhere'
            }
        ]
    },
     
];

function AppPricing(){
    return(
       <div id='pricing' className='block pricingBlock bgGray'>
        <div className='container-fluid'>
            <div className='titleHolder'>
                <h2>Choose a plan to fit your needs</h2>
               
            </div>
            <List grid={{
        gutter: 16,
        xs: 1,
        sm: 1,
        md: 3,
        lg: 3,
        xl: 3,
        xxl: 3,
       }}
       dataSource={data}
       renderItem={Item => (
        <List.Item>
            <Card title={Item.title}> 
            <p className='large'>{Item.content[0].price}</p>
            <p>{Item.content[0].space}</p>
            <p>{Item.content[0].user}</p>
            <p>{Item.content[0].support}</p>
            <p>{Item.content[0].backup}</p>
            <p>{Item.content[0].access}</p>
            <Button type="primary" size="large"><i className="fab fa-telegram-plane"></i>Get Started</Button>
            
            </Card>
        </List.Item>
       )}
       />
        </div>
       </div>
    );
}

export default AppPricing;