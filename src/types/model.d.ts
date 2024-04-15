/**
 *
 * Define all global types in this file.
 *
 */

type User = {
  email: string;
  image: string;
  username: string;
};

type Task = {
  _id: string;
  name: string;
  description: string;
  isComplete: boolean;
  creator: User;
};
