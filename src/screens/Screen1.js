import React from 'react';
import Styles from '../css/Styles';
import { Text, SafeAreaView, View } from 'react-native';

const Screen1 = (props) => {

    return (
        <SafeAreaView>
            <View style={Styles.mainView}>
                <Text>Screen1</Text>
            </View>
        </SafeAreaView>

    );
};

export default Screen1;
