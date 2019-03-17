import * as React from 'react';

import { Header } from './../Header/Header';
import { Footer } from './../Footer/Footer';
import { ListItem } from './../ListItem/ListItem';
import { List } from './../List/List';

export class App extends React.Component {
    private name: string = 'asdf';
    constructor(props: any) {
        super(props);
    }

    render(){
        return (
            <>
                <Header />
                <ListItem />
                <List />
                <Footer />
            </>
        )
    }
}
