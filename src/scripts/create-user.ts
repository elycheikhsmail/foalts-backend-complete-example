// 3p
import { hashPassword } from '@foal/core';
import { createConnection, getConnection } from 'typeorm';

// App
import { User } from '../app/entities';

export const schema = {
  additionalProperties: false,
  properties: {
    email: { type: 'string', format: 'email', maxLength: 255 },
    password: { type: 'string' },
    name: { type: 'string', maxLength: 255 },
  },
  required: [ 'email', 'password' ],
  type: 'object',
};

export async function main(args: { email: string, password: string, name?: string }) {
  const user = new User();
  user.email = args.email;
  user.password = await hashPassword(args.password);
  user.name = args.name ?? 'Unknown';
  user.avatar = '';

  await createConnection();

  try {
    console.log(await user.save());
  } catch (error) {
    console.log(error.message);
  } finally {
    await getConnection().close();
  }
}
