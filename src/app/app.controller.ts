import { Context, controller, Get, HttpResponseNotFound, IAppController, render } from '@foal/core';
import { createConnection } from 'typeorm';

import { ApiController, OpenapiController } from './controllers';

export class AppController implements IAppController {
  subControllers = [
    controller('/api', ApiController),
    controller('/swagger', OpenapiController)
  ];

  async init() {
    await createConnection();
  }

  @Get('*')
  renderApp(ctx: Context) {
    if (!ctx.request.accepts('html')) {
      return new HttpResponseNotFound();
    }

    return render('./public/index.html');
  }



}
