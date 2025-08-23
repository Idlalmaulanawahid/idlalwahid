
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/portfolio-landing"
  },
  {
    "renderMode": 2,
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 65847, hash: 'e4ee8fb92b1825c5503e986916592c60549c7cac9473337c02ab3abaa8691acd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 31987, hash: '441764eacba2e70caeac56387fb31c1a6292ad0c702cc94bbcd2ccf2d57629d7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 140091, hash: '942e4a1fbdc8ffbc793dfbfaf301ad3affba3fab87e48d781a9d6378e69fc293', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio-landing/index.html': {size: 140108, hash: 'ed488373792882a8b64df7b8015949d0c7ad16b7a239a37630bc1938637e2267', text: () => import('./assets-chunks/portfolio-landing_index_html.mjs').then(m => m.default)},
    'styles-7CPXSK5O.css': {size: 406812, hash: 'WpG/tY2G8Yc', text: () => import('./assets-chunks/styles-7CPXSK5O_css.mjs').then(m => m.default)}
  },
};
