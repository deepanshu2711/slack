import { z } from "zod";
import { ROLES } from "./members.model";

export const UserSchemaZ = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const MemberSchemaZ = z.object({
  userId: z.string().min(1),
  workspaceId: z.string().min(1),
  role: z.enum([ROLES.ADMIN, ROLES.MEMBER]).optional(),
});

export const WorkspaceSchemaZ = z.object({
  name: z.string().min(1),
  userId: z.string().min(1),
  joinCode: z.string().optional(),
});
