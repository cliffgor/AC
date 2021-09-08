import { Button, Text, View, } from "react-native";

import React from "react";
import { WebView } from 'react-native-webview';

export default Home = () => {
    return(
        <WebView source={{ uri: 'community.andela.com' }} />
    )
       
};

