# Cognos Dashboard Embedded Package

The OpenWhisk Cognos Dashboard Embedded package provides a set of actions for interacting with Cognos Dashboard Embedded instances. These actions allow you to view and create Dashboards using data available in IBM Cloud Object Storage or more custom locations.

## OpenWhisk entities
| Entity | Type | Parameters | Description |
|--------|------|------------|-------------|
| openwhisk-cognos-dashboard | package  | webDomain, __bx_creds | Work with a Cognos Dashboard Embedded instance. |
| create-dashboard           | action   | module, spec | Renders a Cognos Dashboard |
| sample-module              | action   |  | Demonstrates an example module |
| sample-dashboard           | sequence   |  | Demonstrates an example Dashboard |

## Parameters
| Parameter | Description |
| --------- | ----------- |
| module | A module that declares the [data source](https://console.bluemix.net/docs/services/cognos-dashboard-embedded/working_with_datasources.html#working-with-data-sources) |
| spec | An existing dashboard, see [Adding a canned dashboard to an application](https://console.bluemix.net/docs/services/cognos-dashboard-embedded/ddeusecase_addcanneddashboard.html#adding-a-canned-dashboard-to-an-application) |
| webDomain | The web domain of the site used to render the Dashboard; default is `https://service.us.apiconnect.ibmcloud.com` |
| __bx_creds | The Cognos Dashboard Embedded binding |

## Before you begin

Before you can view Dashboards, you need to have a service instance of Cognos Dashboard Embedded.

1. Follow the first two steps in the [Getting Started Tutorial](https://console.bluemix.net/docs/services/cognos-dashboard-embedded/dde_getting_started.html#getting-started-tutorial-cognos-dashboard-embedded).

## Installing the Cognos Dashboard Embedded package

Use the Cloud Functions CLI plugin to install the Cognos Dashboard Embedded package into your namespace.

1. Install the [Cloud Functions plugin](bluemix_cli.html#cloudfunctions_cli) for the IBM Cloud CLI.
2. Install the `wskdeploy` command. See the [Apache OpenWhisk documentation](https://github.com/apache/incubator-openwhisk-wskdeploy#building-the-project).

To install the Cognos Dashboard Embedded package:

1. Clone the Cognos Dashboard Embedded package repo.
    ```sh
    git clone https://github.com/IBM-Cloud/openwhisk-cognos-dashboard.git
    ```

2. Deploy the package.
    ```sh
    wskdeploy -m manifest.yaml
    ```

3. Verify that the `openwhisk-cognos-dashboard` package is added to your package list.
    ```sh
    ibmcloud fn package list
    ```

    Output:
    ```sh
    packages
    /myOrg_mySpace/openwhisk-cognos-dashboard private
    ```

## Binding Cognos Dashboard Embedded Credentials

The Cognos Dashboard Embedded package relies on the service credentials that were created in the Getting Started tutorial. A service binding will add the credentials to the package.

1. Bind the credentials to the Cognos Dashboard Embedded package.

    ```sh
    ibmcloud fn service bind dynamic-dashboard-embedded openwhisk-cognos-dashboard --instance <your cognos dashboard instance name>
    ```

## Using the package

A sample Dashboard has been provided to test the package.

1. Access the [API Management](https://console.bluemix.net/openwhisk/apimanagement) page in IBM Cloud Functions.
2. Select the **Cognos Dashboard Embedded** APIs.
3. Use the copy button to copy the **Route** to your API.
4. Vist the link `<your route URL>/sample-edit` in your browser.
5. Vist the link `<your route URL>/sample-view` in your browser.

To use your own data sources, perform the following steps.

1. Create a new Cloud Function's action similar to the Sample Module. To provide data, simply return an object with the `module` property that contains the [data source object](https://console.bluemix.net/docs/services/cognos-dashboard-embedded/working_with_datasources.html#working-with-data-sources) required by the Cognos Dashboard Embedded API. If you're rendering a canned Dashboard, return an object with the `spec` property that contains the specification.
2. Create a web-enabled sequence that begins with your action and then calls the `openwhisk-cognos-dashboard/create-dashboard` action. An example is seen in the Sample Dashboard sequence.
   ```yaml
    sequences:
      my-dashboard:
        actions: my-action,openwhisk-cognos-dashboard/create-dashboard
        web: true
   ```
3. Expose your sequence as an API. Again, this is similar to the sample dashboard route seen above. For example, the below wskdeploy manifest would create a dashboard at the URL `mydashboards/sample`.
   ```yaml
    apis:
      your-api-name:
        mydashboards:
          sample:
            my-dashboard:
              method: GET
              response: http
   ```
