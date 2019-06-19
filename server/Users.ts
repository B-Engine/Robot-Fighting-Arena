import { Part } from './Parts';

interface User {
  Name: string;
  passwordHash: string;
  Parts: Part[];
}

const users: { [name: string]: {} };
