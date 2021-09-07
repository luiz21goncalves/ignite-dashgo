/* eslint-disable import/no-extraneous-dependencies */
import { createServer, Factory, Model } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  return createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name() {
          const firstName = faker.name.firstName();
          const lastName = faker.name.lastName();

          return `${firstName} ${lastName}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList('user', 20);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get('users');
      this.post('users');

      this.namespace = '';
      this.passthrough();
    },
  });
}
