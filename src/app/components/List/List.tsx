import * as React from 'react';

import ListItem from '../ListItem/ListItem'

export class List extends React.Component {
    getList(){
        let a = [];

        for(let i = 0; i < 10; i++){
            a.push((
                <li key={i}>
                     <ListItem/>   
                </li>
                
            ));
        }
        return a;
    }
    render(){
        return (
            <div>
                <ul>{this.getList()}
                    
                </ul>
            </div>
        )
    }
}