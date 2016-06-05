'use strict';
const React = require('react');
const DocumentMeta = require('react-document-meta');
const config = require('../config.js');

const imgStyle = {
    borderWidth: '0px',
    borderStyle: 'solid',
    width: '500px', height: '300px',
    marginLeft: '15px'
};
const imgStyle2 = {
    borderWidth: '0px',
    borderStyle: 'solid',
    width: '500px', height: '300px',
    marginLeft: '300px'
};
const tdStyle = {
    marginLeft: '500px'
};
const containerStyle = {
    color: 'rgb(255, 255, 255)',
    background: 'rgb(0, 0, 0)'
};

export default class Products extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'Products', description: "Some of the products of Great Alliance"});
        return (
            <nav className="navbar-default">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#660066">
        <tbody>
        <tr style={containerStyle}>
        <td>
        <h1> PRODUCTS </h1>
        </td>
        </tr>
        </tbody>
        </table>
            <div className="container">
                <DocumentMeta {...metaData} />
            <br/>
            <br/>
            <div>
            <p>
        GA is primarily engaged in the supplying of metal scrap products such as Rebar, H-beams, I-beams, PNS, HMS 1 (Bundle), HMS 2 (Bundle) by offering hassle-free service with transparent weighing and payment process.
            </p>
            <p>
            <b/>
            <b/>
        &nbsp;
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody>
        <tr>
            <td colspan="2">
            <span class= "center">
        <img src={require('img/1.png')} style={imgStyle}/>
            </span>
            </td>
        <td colspan="2">
        <span class= "outline">
        <img src={require('img/2.png')} style={imgStyle}/>
        </span>
        </td>
            </tr>
        <tr>
        <td colspan="2" height="20">
        </td>
        </tr>
        <tr>
        <td align="center" valign="top">
        <center><strong>Rebar</strong></center></td>
        <td align="center" valign="top">
        <center><strong>H-Beam / I-Beam</strong></center></td>
        </tr>
        <tr>
        <td colspan="2" height="40">
        </td>
        </tr>
        <tr>
        <td width="500">
        <span class= "outline">
        <img src={require('img/3.png')} style={imgStyle}/>
        </span>
        </td>
        <td width="500">
        <span class= "outline">
        <img src={require('img/4.png')} style={imgStyle}/>
        </span>
        </td>
        </tr>
        <tr>
        <td colspan="2" height="20">
        </td>
        </tr>
        <tr>
        <td align="center" valign="top">
        <center><strong>PNS</strong></center></td>
        <td align="center" valign="top">
        <center><strong>HMS1 (BUNDLE)</strong></center></td>
        </tr>
        <tr>
        <td colspan="2" height="40">
        </td>
        </tr>
            </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" valign="center">
            <tbody>
        <tr>
        <td width="500" align="center">
        <span class= "outline">
        <img src={require('img/5.png')} style={imgStyle2}/>
        </span>
        </td>
            </tr>
        <tr>
        <td colspan="2" height="20">
        </td>
        </tr>
        <tr>
        <td align="center" valign="top">
        <p style={tdStyle}><strong>HMS2 (BUNDLE)</strong></p></td>
        </tr>
            </tbody>
            </table>
            </p>
            </div>
        </div>
            </nav>
        );
    }
}


