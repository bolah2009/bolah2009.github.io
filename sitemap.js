/* eslint-disable import/no-extraneous-dependencies */
const xmlString = require('fs').readFileSync('sitemap.xml')
const XmlSitemap = require('xml-sitemap')
// get the XML as a string
// and pass it to the constructor
const sitemap = new XmlSitemap(xmlString).setOptionValue(
  'https://bolabuari.com/',
  'lastmod'
)

require('fs').writeFileSync('sitemap.xml', sitemap.xml)
