import { Context, Delete, Get, HttpResponseCreated, HttpResponseNoContent, HttpResponseNotFound, HttpResponseOK, Post, UserRequired, ValidateBody, ValidatePathParam, ValidateQueryParam } from '@foal/core';
import { Story, User } from '../../entities';

export class StoriesController {
  @Get()
  @ValidateQueryParam('authorId', { type: 'number' }, { required: false })
  async readStories(ctx: Context) {
    const authorId = ctx.request.query.authorId as number|undefined;

    let queryBuilder = Story
      .createQueryBuilder('story')
      .leftJoinAndSelect('story.author', 'author')
      .select([
        'story.id',
        'story.title',
        'story.link',
        'author.id',
        'author.name'
      ]);

    if (authorId !== undefined) {
      queryBuilder = queryBuilder.where('author.id = :authorId', { authorId });
    }

    const stories = await queryBuilder.getMany();

    return new HttpResponseOK(stories);
  }

  //

  @Post()
  @ValidateBody({
    type: 'object',
    properties: {
      title: { type: 'string', maxLength: 255 },
      link: { type: 'string', maxLength: 255 },
    },
    required: [ 'title', 'link' ],
    additionalProperties: false,
  })
  @UserRequired()
  async createStory(ctx: Context) {
    const story = new Story();
    story.title = ctx.request.body.title;
    story.link = ctx.request.body.link;
    // Set the current user as the author of the story.
    story.author = ctx.user;
    await story.save();

    return new HttpResponseCreated();
  }

  @Delete('/:storyId')
  @ValidatePathParam('storyId', { type: 'number' })
  @UserRequired()
  async deleteStory(ctx: Context<User>, { storyId }: { storyId: number }) {
    // Only retrieve stories whose author is the current user.
    const story = await Story.findOne({ id: storyId, author: ctx.user });

    if (!story) {
      return new HttpResponseNotFound();
    }

    await story.remove();

    return new HttpResponseNoContent();
  }
}
