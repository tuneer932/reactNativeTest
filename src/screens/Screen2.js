import React from 'react';
import Styles from '../css/Styles';
import { Text, SafeAreaView, View } from 'react-native';

const Screen2 = (props) => {

    return (
        <SafeAreaView>
            <View style={Styles.mainView}>
                <Text>Screen2</Text>
            </View>
        </SafeAreaView>

    );
};

export default Screen2;
