import { Trash } from "lucide-react";

import { ModalForm } from "@/components/ModalForm"



interface PreferencesModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  initialValues: string;
}

export const PreferencesModal = ({ open, setOpen, initialValues }: PreferencesModalProps) => {
  // const [value, setValue] = useState(initialValues);
  const value = initialValues; // Assuming initialValues is the workspace name

  return (
    <ModalForm open={open} setOpen={setOpen} title={value} loading={false} onSubmit={() => { }}>
      <div className="px-4 pb-4 flex flex-col gap-y-2">
        <div className="px-5 py-4  bg-white rounded-lg border cursor-pointer hocer:bg-gray-50">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold">Workspace name</p>
            <p className="text-sm text-[#1264a3] hover:underline  font-semibold">Edit</p>
          </div>
          <p className="text-sm">
            {value}
          </p>
        </div>
        <button disabled={false} onClick={() => { }} className="flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50 text-rose-600">
          <Trash className="size-4" />
          <p className="text-sm font-semibold">Delete Workspace</p>
        </button>
      </div>
    </ModalForm>
  )
}
