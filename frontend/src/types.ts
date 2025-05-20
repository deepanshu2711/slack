export interface User {
  _id: string;
  email: string;
}

export interface Workspace {
  _id: string;
  name: string;
  userId: string;
  joinCode: string;
}
