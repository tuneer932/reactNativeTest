import React from 'react';
import Styles from '../css/Styles';
import { connect } from 'react-redux';
import { SafeAreaView, Text, View, TextInput } from 'react-native';
import { setInputValue } from '../store/actions';

const Homepage = (props) => {

    const { setInputValue, enteredValue } = props;

    return (
        <SafeAreaView>
            <View style={Styles.homeMainView}>
                <Text>Home Page</Text>
                <TextInput style={Styles.homePageInput} onChangeText={(value) => setInputValue(value)}></TextInput>
                <View style={{ marginTop: 50 }}>
                    <Text>
                        Entered Value is : {enteredValue}
                    </Text>
                </View>
            </View>
        </SafeAreaView>

    );
};

const mapStateToProps = state => {
    return {
        enteredValue: state.inputField.enteredValue,
    };
};

const mapDispatchToProps = dispatch => ({
    setInputValue: value => dispatch(setInputValue(value)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Homepage);
