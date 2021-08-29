import { Context, hashPassword, HttpResponseNoContent, HttpResponseOK, HttpResponseUnauthorized, Post, Session, ValidateBody, verifyPassword } from '@foal/core';
import { User } from '../../entities';

const credentialsSchema = {
  type: 'object',
  properties: {
    email: { type: 'string', format: 'email', maxLength: 255 },
    password: { type: 'string' }
  },
  required: [ 'email', 'password' ],
  additionalProperties: false,
};

export class AuthController {

  @Post('/login')
  @ValidateBody(credentialsSchema)
  async login(ctx: Context<User|undefined, Session>) {
    const email = ctx.request.body.email;
    const password = ctx.request.body.password;

    const user = await User.findOne({ email });
    if (!user) {
      return new HttpResponseUnauthorized();
    }

    if (!(await verifyPassword(password, user.password))) {
      return new HttpResponseUnauthorized();
    }

    ctx.session.setUser(user);
    ctx.user = user;

    return new HttpResponseOK({
      id: user.id,
      name: user.name,
    });
  }

  @Post('/logout')
  async logout(ctx: Context<User|undefined, Session>) {
    await ctx.session.destroy();
    return new HttpResponseNoContent();
  }

  //

  @Post('/signup')
  @ValidateBody(credentialsSchema)
  async signup(ctx: Context<User|undefined, Session>) {
    const email = ctx.request.body.email;
    const password = ctx.request.body.password;

    const user = new User();
    user.email = email;
    user.avatar = '';
    user.name = 'Unknown';
    user.password = await hashPassword(password);
    await user.save();

    ctx.session.setUser(user);
    ctx.user = user;

    return new HttpResponseOK({
      id: user.id,
      name: user.name,
    });
  }

}

// import { Context, Get, HttpResponseOK } from '@foal/core';

// export class AuthController {

//   @Get('/')
//   foo(ctx: Context) {
//     return new HttpResponseOK();
//   }

// }
