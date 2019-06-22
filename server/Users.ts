import { Part } from './Parts';

interface User {
  Name: string;
  Parts: Part[];
  version: string;
}

const users: { [name: string]: User } = {};
