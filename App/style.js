'use-strict';
var React = require('react-native');
var {StyleSheet} = React;
module.exports = StyleSheet.create({
    heading: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        padding: 5,
        marginBottom: 5
    },
    sectionText: {
        padding: 15,
        lineHeight: 25,
        textAlign: 'center',
        color: 'red',
    },
    image: {
        width: 153,
        height: 130,
    },
    imageWrap: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        height: 500,
    },
    toolbar: {
        height: 58,
        backgroundColor: "#e9eaed",
    },
});