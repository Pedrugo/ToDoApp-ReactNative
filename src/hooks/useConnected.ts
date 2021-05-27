import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';


export const useConnected = () => {

    const [connected, setIsConnected] = useState(true);

    useEffect(() => {
        NetInfo.addEventListener(networkState => handleConnectivityChange(networkState));
    }, []);

    const handleConnectivityChange = (networkState: any) => {
        setIsConnected(networkState.isConnected)
    };

    return {
        connected
    };

};