// std
import { ok, strictEqual } from 'assert';

// 3p
import { Context, createController, getHttpMethod, getPath, isHttpResponseOK } from '@foal/core';

// App
import { StoriesController } from './stories.controller';

describe('StoriesController', () => {

  let controller: StoriesController;

  beforeEach(() => controller = createController(StoriesController));

  describe('has a "foo" method that', () => {

    it('should handle requests at GET /.', () => {
      strictEqual(getHttpMethod(StoriesController, 'foo'), 'GET');
      strictEqual(getPath(StoriesController, 'foo'), '/');
    });

    it('should return an HttpResponseOK.', () => {
      const ctx = new Context({});
      ok(isHttpResponseOK(controller.foo(ctx)));
    });

  });

});
