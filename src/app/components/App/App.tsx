import * as React from "react";

import { Header } from "./../Header/Header";
import { Footer } from "./../Footer/Footer";
import { List } from "./../List/List";

import { AppWrapper, ToDoWindow } from "./AppStyles";
import GlobalStyles from "./GlobalStyles";

export class App extends React.Component {
  private name: string = "asdf";
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <AppWrapper>
        <ToDoWindow>
          <Header />
          <List />
          <Footer />
        </ToDoWindow>

        <GlobalStyles />
      </AppWrapper>
    );
  }
}
