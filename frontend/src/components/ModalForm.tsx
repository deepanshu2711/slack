import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from './ui/button';

interface ModalWrapperProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  loading: boolean;
  onSubmit: () => void;
  children: React.ReactNode;
}

export const ModalForm = ({
  open,
  setOpen,
  title,
  loading,
  onSubmit,
  children,
}: ModalWrapperProps) => {
  return (
    <Dialog open={open} onOpenChange={() => setOpen(false)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
          className="space-y-4"
        >
          {children}
          <div className="flex justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Submit'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
