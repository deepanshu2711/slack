import { useState } from "react";

import { Input } from "@/components/ui/input";
import { ModalForm } from "@/components/ModalForm";
import { useCreateWorkspace } from "@/hooks/mutations/workspace/useCreateWorksapce";

interface CreateWorkspaceModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CreateWorkspaceModal = ({
  open,
  setOpen,
}: CreateWorkspaceModalProps) => {
  const [name, setName] = useState("");
  const { mutate, isPending } = useCreateWorkspace();

  return (
    <ModalForm
      open={open}
      setOpen={setOpen}
      title={"Add a workspace"}
      loading={isPending}
      onSubmit={() => mutate({ name })}
    >
      <Input
        disabled={false}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoFocus
        minLength={3}
        placeholder="Workspace name e.g. 'work', 'Persomal', 'Home'"
      />
    </ModalForm>
  );
};
