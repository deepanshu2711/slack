export const ROLES = {
  ADMIN: "admin",
  MEMBER: "member",
};

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

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

export interface Member {
  _id: string;
  userId: string;
  workspaceId: string;
  role: (typeof ROLES)[keyof typeof ROLES];
}
