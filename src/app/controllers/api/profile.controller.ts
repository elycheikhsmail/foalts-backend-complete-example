import { Context, dependency, Get, HttpResponseNoContent, Post, UserRequired, ValidateQueryParam } from '@foal/core';
import { File, Disk, ValidateMultipartFormDataBody } from '@foal/storage';
import { User } from '../../entities';

export class ProfileController {
  @dependency
  disk: Disk;

  @Get('/avatar')
  @ValidateQueryParam('userId', { type: 'number' }, { required: false })
  async readProfileImage(ctx: Context<User|undefined>) {
    let user = ctx.user;

    const userId: number|undefined = ctx.request.query.userId;
    if (userId !== undefined) {
      user = await User.findOne({ id: userId })
    }

    if (!user || !user.avatar) {
      return this.disk.createHttpResponse('images/profiles/default.png');
    }

    return this.disk.createHttpResponse(user.avatar);
  }

  @Post()
  @UserRequired()
  @ValidateMultipartFormDataBody({
    files: {
      avatar: { required: false, saveTo: 'images/profiles/uploaded' }
    },
    fields: {
      name: { type: 'string', maxLength: 255 }
    }
  })
  async updateProfileImage(ctx: Context<User>) {
    ctx.user.name = ctx.request.body.fields.name;

    // Warning: use Foal's File interface
    const file = ctx.request.body.files.avatar as File|undefined;
    if (file) {
      if (ctx.user.avatar) {
        await this.disk.delete(ctx.user.avatar);
      }
      ctx.user.avatar = file.path;
    }

    await ctx.user.save();

    return new HttpResponseNoContent();
  }

}
