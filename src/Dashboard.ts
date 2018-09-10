import * as rp from 'request-promise';

export interface DashboardParams {
  module?: any;
  spec?: string;
  webDomain?: string;
  __bx_creds: DashboardBinding;
}

export interface DashboardBinding {
  'dynamic-dashboard-embedded': ServiceCredentials;
}

export interface ServiceCredentials {
  iam_role_crn: string;
  iam_apikey_description: string;
  apikey: string;
  api_endpoint_url: string;
  instance: string;
  client_id: string;
  client_secret: string;
  iam_apikey_name: string;
  iam_serviceid_crn: string;
  credentials: string;
}

interface Session {
  sessionId: string;
  sessionCode: string;
  keys: any[];
}

export class WebResponse {
  headers = { 'Content-Type': 'text/html' };

  constructor(public body: string, public statusCode = 200) {

  }
}

export default async function main(params: DashboardParams): Promise<WebResponse> {
  if (!params.__bx_creds) {
    throw new Error (`No package binding found - use 'ibmcloud fn service bind' prior to running action`);
  }

  const {
    api_endpoint_url: url,
    client_id: user,
    client_secret: pass
  } = params.__bx_creds['dynamic-dashboard-embedded'];

  const { 
    spec,
    module,
    webDomain = 'https://service.us.apiconnect.ibmcloud.com' 
  } = params;

  console.log(`Render module=${module !== undefined} spec=${spec !== undefined}`);

  const session: Session = await rp({
    url: `${url}v1/session`,  // url ends in a /
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
                  id: '${module ? module.identifier: ''}'
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

(<any>global).main = main;  // required when using webpack