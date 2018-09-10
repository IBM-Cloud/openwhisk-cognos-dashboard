import Dashboard from '../src/Dashboard';
import SampleModule from '../src/SampleModule';

import * as dotenv from 'dotenv';
import { expect } from 'chai';

dotenv.config();

const { 
  BX_CREDS: __bx_creds,
  WEB_DOMAIN: webDomain
} = process.env;

describe('openwhisk-cognos-dashboard', function () {

  it('sample', () => {
    Dashboard({
      __bx_creds: JSON.parse(__bx_creds),
      module: SampleModule,
      webDomain 
    });
  });

});