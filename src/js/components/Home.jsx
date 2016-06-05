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
const styles2 = {
    marginLeft: '90px'
}

export default class Home extends React.Component {
    render() {
        const metaData = config.makeMetaTags({ title: 'Home', description: 'Great Alliance'});
        return (
            <div className="container">
                <DocumentMeta {...metaData} />
                <br/>
                <div className="well media">
                    <img src={require('img/4.png')} />
                </div>
                <br/>
                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                    <tbody>
                        <tr>
                            <td valign="top" width="315">
                            <span class="outline"><img src={require('img/2.png')} style={imgStyle}  /></span>
                            <br/>
                            <span class="caption" style={styles2}>H-Beam / I-Beam
                            </span></td>
                            <td width="30">
                            &nbsp;</td>
                            <td valign="top" width="655">
                             <p>
                                <strong style={styles}>GREAT ALLIANCE INC LTD</strong>  is currently one of the leading metal scrap supplying companies in Hong Kong. It is also known as <b>“GA”</b> in Hong Kong market.
                                                        GA offers you one-stop solutions to export scrap metal as per your requirements.
                                </p>
                                <p>
        GA is primarily engaged in the supplying of metal scrap products such as Rebar, H-beams, I-beams, PNS, HMS 1 (Bundle), HMS 2 (Bundle) by offering hassle-free service with transparent weighing and payment process.
            </p>
                            <p>
        GA has established itself as a leading player in the metal scrap industry in Hong Kong since 2014. It operates as one-stop supply center for the trading of metal scrap products.</p>
                                <a class="readmore" href="about"> Read More</a></td>
                        </tr>
                    </tbody>
                </table>
        </div>
        );
    }
}


