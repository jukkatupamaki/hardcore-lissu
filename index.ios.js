/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} = React;

var AppData = require('./AppData.js');

var HardcoreLissu = React.createClass({
    getInitialState: function getInitialState() {
        return {
            busse: []
        };
    },
    componentDidMount: function componentDidMount() {
        setInterval(() => {
            AppData.busse().then(
                (responseData) => {
                    this.setState({
                        busse: responseData.vehicles
                    });
                }
            )
        }, 500);
    },
    render: function() {
        var busse = this.state.busse;
        busse = busse.map((item) => {
            return (
                <View style={styles.busContainer}>
                    <Text style={styles.busLine}>{item.line}</Text>
                    <View style={styles.details}>
                        <Text style={styles.smallTitle}>FROM</Text>
                        <Text style={styles.mediumTitle}>{item.origin.toUpperCase()}</Text>
                        <Text style={styles.smallTitle}>TO</Text>
                        <Text style={styles.mediumTitle}>{item.destination.toUpperCase()}</Text>

                        <Text style={styles.location}>
                            φ {item.latitude} λ {item.longitude}
                        </Text>
                    </View>
                </View>
            );
        })

        return (
            <View style={styles.main}>
                <Text style={styles.title}>HARDCORE LISSU</Text>
                <ScrollView>
                    <View style={styles.container}>
                        {busse}
                    </View>
                </ScrollView>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    main: {
        flex: 1
    },
    title: {
        margin: 40,
        fontSize: 30,
        fontWeight: "200",
        color: "white",
        textAlign: 'center'
    },
    container: {
        backgroundColor: 'rgb(255,255,255)'
    },
    busContainer: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(100,100,100,0.3)',
        paddingBottom: 10,
        paddingTop: 10
    },
    busLine: {
        fontWeight: "900",
        fontSize: 30,
        textAlign: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 2
    },
    details: {
        flex: 5,
        paddingTop: 20,
        paddingBottom: 15
    },
    smallTitle: {
        fontSize: 10,
        fontWeight: "200"
    },
    mediumTitle: {
        fontSize: 15,
        fontWeight: "400",
        paddingTop: 5,
        paddingBottom: 5
    },
    bold: {
        fontWeight: "bold"
    },
    location: {
        flexDirection: 'row',
        fontSize: 12,
        fontWeight: '200'
    }
});

AppRegistry.registerComponent('HardcoreLissu', () => HardcoreLissu);
