import { createConnection } from 'typeorm';
import { Story, User } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    author: { type: 'string', format: 'email', maxLength: 255 },
    title: { type: 'string', maxLength: 255 },
    link: { type: 'string', maxLength: 255 },
  },
  required: [ 'author', 'title', 'link' ],
  type: 'object',
};

export async function main(args: { author: string, title: string, link: string }) {
  const connection = await createConnection();

  const user = await User.findOneOrFail({ email: args.author });

  const story = new Story();
  story.author = user;
  story.title = args.title;
  story.link = args.link;

  try {
    console.log(await story.save());
  } catch (error) {
    console.error(error);
  } finally {
    await connection.close();
  }
}
