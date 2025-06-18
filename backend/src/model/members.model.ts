import mongoose from 'mongoose';
import { IMember, IMemberModel } from '../types';
//
// export const ROLES = Object({
//   ADMIN: "admin",
//   MEMBER: "member",
// });

export const ROLES = {
  ADMIN: 'admin',
  MEMBER: 'member',
};

export type RoleType = (typeof ROLES)[keyof typeof ROLES];

const MemberSchema = new mongoose.Schema<IMember, IMemberModel>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workspace',
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(ROLES),
      default: ROLES.MEMBER,
    },
  },
  { timestamps: true }
);

MemberSchema.methods.isAdmin = function () {
  return this.role === 'admin';
};

MemberSchema.statics.findByUserAndWorkspace = function (userId, workspaceId) {
  return this.findOne({ userId, workspaceId });
};

MemberSchema.index({ userId: 1, workspaceId: 1 }, { unique: true });

export const Member =
  (mongoose.models.Member as IMemberModel) ||
  mongoose.model<IMember, IMemberModel>('Member', MemberSchema);
