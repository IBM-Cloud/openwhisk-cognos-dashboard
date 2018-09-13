"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rp = require("request-promise");
class WebResponse {
    constructor(body, statusCode = 200) {
        this.body = body;
        this.statusCode = statusCode;
        this.headers = { 'Content-Type': 'text/html' };
    }
}
exports.WebResponse = WebResponse;
async function main(params) {
    if (!params.__bx_creds) {
        throw new Error(`No package binding found - use 'ibmcloud fn service bind' prior to running action`);
    }
    const { api_endpoint_url: url, client_id: user, client_secret: pass } = params.__bx_creds['dynamic-dashboard-embedded'];
    const { spec, module, webDomain = 'https://service.us.apiconnect.ibmcloud.com' } = params;
    console.log(`Render module=${module !== undefined} spec=${spec !== undefined}`);
    const session = await rp({
        url: `${url}v1/session`,
        headers: {
            accept: 'application/json'
        },
        auth: {
            user,
            pass
        },
        json: true,
        method: 'POST',
        body: {
            expiresIn: 3600,
            webDomain
        }
    });
    if (!session.sessionCode) {
        throw Error(`Unable to retrieve session code`);
    }
    const html = `
    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title></title>
      <style type="text/css">
        html { height: 100%; }
        body { height: 780px }
      </style>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <script src="${url}CognosApi.js"></script>
      <script>
        setTimeout(() => {
          console.log('Creating CognosApi');
          window.cognos = new CognosApi({
            cognosRootURL: '${url}',
            sessionCode: '${session.sessionCode}',
            node: document.getElementsByTagName('body')[0]
          });

          var module = ${module ? JSON.stringify(module) : undefined};
          var spec = ${spec ? JSON.stringify(spec) : undefined};
          
          console.log('Initializing CognosApi');
          window.cognos.initialize().then(() => {
            console.log('API created successfully');

            if (spec) {
              window.cognos.dashboard.openDashboard({dashboardSpec: spec})
              .then((dashboardAPI) => {
                console.log('Dashboard created successfully.');
                window.dashboard = dashboardAPI;
              })
              .catch((err) => console.log(err));
            }

            if (module) {
              window.cognos.dashboard.createNew()
              .then((dashboardAPI) => {
                console.log('Dashboard created successfully.');
                
                window.dashboardAPI = dashboardAPI;

                dashboardAPI.addSources([{
                  module: module,
                  name: '${module ? module.label : ''}',
                  id: '${module ? module.identifier : ''}'
                }]);
              })
              .catch((err) => console.log(err));
            }

          }, (err) => console.log('Failed to create API. ' + err.message));
        }, 1000);
      </script>
    </head>
    <body>
      <!-- dashboard dynamically renders here -->
    </body>
    </html>
  `;
    return new WebResponse(html);
}
exports.default = main;
global.main = main; // required when using webpack
