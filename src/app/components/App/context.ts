import * as React from 'react';

export const TestContext = React.createContext<string>('light');
export const TestContextProvider = TestContext.Provider;
export const TestContextConsumer = TestContext.Consumer;