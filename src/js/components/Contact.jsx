'use strict';
const React = require('react');
const DocumentMeta = require('react-document-meta');
const config = require('../config.js');
const styles2 = {
    marginTop: '40px'
};
const styles = {
    marginTop: '-40px',
    marginLeft: '10px'
};
const containerStyle = {
    color: 'rgb(255, 255, 255)',
    background: 'rgb(0, 0, 0)'
}
export default class Contact extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'Contact Us', description: "Great Alliance contact info"});
        return (
            <nav className="navbar-default">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#660066">
        <tbody>
        <tr style={containerStyle}>
        <td>
        <h1> CONTACT US </h1>
        </td>
        </tr>
        </tbody>
        </table>
            <div className="container">
                <DocumentMeta {...metaData} />
    <div className="container-fluid">
        </div>
            <div>
        <table border="0" cellpadding="0" cellspacing="0" valign="top">
        <tbody>
            <tr>
                <td width="500" align="center">
                <p style={styles}>
                    <strong>Office & Yard location:</strong>
                    <br/>
                    DD 124 LOT No. 481-484RP,
                    <br/>
                    Yuen Long, N.T.,
                    <br/>
                    Hong Kong.
                    <br/>
                    E-mail: gailhkco@gmail.com
                </p>
                </td>
                <td width="500" align="center">
                <p style={styles2}>
                    <strong>Contact Persons:</strong>
                    <br/>
                    Name: Mr. AJ
                    <br/>
                    Mobile: (852) 96345473
                    <br/>
                    <br/>
                    Name: Mr. Sam
                    <br/>
                    Mobile: (852) 93230191
                    <br/>
                    <br/>
                    Name: Mr. Lau
                    <br/>
                    Mobile: (852) 63815123
                </p>
                </td>
            </tr>
        </tbody>
        </table>
            </div>
            </div>
            </nav>
        );
    }
}

