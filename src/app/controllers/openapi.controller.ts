// import { Context, Get, HttpResponseOK } from '@foal/core';

// export class OpenapiController {

//   @Get('/')
//   foo(ctx: Context) {
//     return new HttpResponseOK();
//   }

// }


import { SwaggerController } from '@foal/swagger';
import { ApiController } from './api.controller';

export class OpenapiController extends SwaggerController  {

  options = {
    controllerClass: ApiController
  }

}