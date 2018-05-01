import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection } from './common';
import { CheckBox } from 'react-native-elements';
import { coinChanged, assetChanged } from '../actions';
import { connect } from 'react-redux';
import AddAssetsScreen from './AddAssetsScreen';

const AddAssetsDetail = ({ coinProp }) => {
    //Destructure references for nicer code
    const { id, name, symbol, checked } = coinProp; //receive objects from api
    const { headerContentLeftStyle,
        headerContentRightStyle,
        headerTextStyle } = styles;

    return (
        <CardSection>
            <View style={headerContentLeftStyle}>
                {/* <Text style={styles.textStyle}>{rank}</Text> */}
                <Text style={headerTextStyle}>{name}      </Text>
                <Text style={styles.textSymbolStyle}>{symbol}</Text>
            </View>
            <View style={headerContentRightStyle}>
                <CheckBox
                    containerStyle={{ backgroundColor: '#23213F', borderColor: '#23213F' }}
                    checked={checked}
                    // action to add to reducer for firebase pushing
                    onPress={() => {checked: !checked}}
                />
            </View>
        </CardSection>
    );
};

const styles = {
    headerContentLeftStyle: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flex: 1,
        marginLeft: 15
    },
    headerContentRightStyle: {
        // marginTop: 18,
        justifyContent: 'center',
        alignItems: 'flex-end',
        // justifyContent:'center',
        flex: 1
    },
    headerTextStyle: {
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 20,
        color: 'white'
    },
    textPercentStyle: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        color: 'white',
        fontSize: 15,
        marginRight: 20,
        fontWeight: '700'
    },
    textSymbolStyle: {
        color: '#555974',
    },
    redText: {
        color: 'red'
    },
    greenText: {
        color: '#18A76D'
    }
};

export default AddAssetsDetail;