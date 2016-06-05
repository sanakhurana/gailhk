'use strict';
function Config() {

    this.links = [
        {link: "home", name: "HOME"},
        { link: "about", name: "ABOUT US" },
        { link: "products", name: "PRODUCTS" },
        { link: "contact", name: "CONTACT US" }
    ];

}
Config.prototype.makeMetaTags = function makeMetaTags(data) {
    var metaData = {
        title: 'Great Alliance',
        meta: {
            'httpEquiv': {
                'x-ua-compatible': 'ie=edge'
            },
            name: {
                'viewport': 'width=device-width, initial-scale=1',
                'twitter:card': 'summary',
                'twitter:site': '@halkeye',
                'twitter:creator': '@halkeye'
            },
            charSet: 'utf-8'
        }
    };
    if (data.title) {
        metaData.title = data.title + ' - ' + metaData.title;
        metaData.meta.name['twitter:title'] = metaData.title;
        metaData.meta.name['og:title'] = metaData.title;
    }
    if (data.description) {
        metaData.description = data.description;
        metaData.meta.name['twitter:description'] = metaData.description;
        metaData.meta.name['og:description'] = metaData.description;
    }
    return metaData;
};

module.exports = new Config();
