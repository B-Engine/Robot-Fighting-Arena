import { GamePart } from './Parts';

interface User {
  Name: string;
  Parts: GamePart[];
  version: string;
}

const users: { [name: string]: User } = {};
