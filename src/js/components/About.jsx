'use strict';
const React = require('react');
const DocumentMeta = require('react-document-meta');
const config = require('../config.js');
const styles = {
    color: '#d51a0e'
}
const imgStyle = {
    borderWidth: '0px',
    borderStyle: 'solid',
    width: '305px', height: '200px'
}
const containerStyle = {
    color: 'rgb(255, 255, 255)',
    background: 'rgb(0, 0, 0)'
}

export default class Contact extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'About', description: 'About Great Alliance'});
        return (
            <nav className="navbar-default">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" bgcolor="#660066">
        <tbody>
        <tr style={containerStyle}>
        <td>
        <h1> ABOUT US </h1>
            </td>
            </tr>
            </tbody>
            </table>
            <div className="container">
                <DocumentMeta {...metaData} />
        <div className="container-fluid">
        <br/>
        <br/>
    <div className="well">
    <img src={require('img/4.png')} />
    </div>
        <div>
    <p>
    <strong>GREAT ALLIANCE INC LTD</strong> is currently one of the leading metal scrap supplying companies in Hong Kong. It is also known as “GA” in Hong Kong market.</p>
    <p>
        GA offers you one-stop solutions to export scrap metal as per your requirements.

            GA has established itself as a leading player in the metal scrap industry in Hong Kong since 2014. It operates as one-stop supply center for the trading of metal scrap products.
        </p>
    <p>
        GA is primarily engaged in the supplying of steel products such as Rebar, H-beams, I-beams, PNS HMS 1 (Bundle) & HMS 2 (Bundle).

            We supply metal scrap by offering the most transparent pricing and weighing processes in Hong Kong. We also provide container booking and inland container haulage services.

        </p>
            <p>
        Our facilities are all equipped with computerized weighbridges to ensure the most transparent and accurate weighing of scrap metal. The system uses digital weight indicators for customers’ easy viewing of the weighing process.
            </p>
            <p>
        To further, assure our customers of confidence in all transactions with GA, we advocate payment methods of the highest security as well as transparency.
            </p>
            <br/>
            <br/>
            </div>
            </div>
            </div>
            </nav>
        );
    }
}
