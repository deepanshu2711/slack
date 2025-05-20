import mongoose from "mongoose";

const WorkspaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    joinCode: {
      type: String,
    },
  },
  { timestamps: true },
);

export const Workspace = mongoose.model("Workspace", WorkspaceSchema);
