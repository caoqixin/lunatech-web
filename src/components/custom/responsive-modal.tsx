import { useMedia } from "react-use";
import { Dialog, DialogContent } from "../ui/dialog";
import { Drawer, DrawerContent } from "../ui/drawer";

interface ResponsiveModalProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ResponsiveModal = ({
  children,
  open,
  onOpenChange,
}: ResponsiveModalProps) => {
  const isDesktop = useMedia("(min-width: 768px)", true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto max-h-[85vh] hide-scrollbar">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <div className="w-full sm:max-w-full p-0 border-none overflow-y-auto max-h-[85vh] hide-scrollbar">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};