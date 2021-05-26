import React from 'react';
import { Header } from 'react-native-elements';

export const AppHeader = () => {
    return (
        <Header
            centerComponent={{ text: 'TO DO APP', style: { color: '#fff', fontSize: 20 } }}
        />
    );
};
