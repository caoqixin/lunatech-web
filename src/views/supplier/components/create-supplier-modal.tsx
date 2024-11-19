"use client";
import { useCreateSupplierModal } from "@/views/supplier/hooks/use-create-supplier";
import { ResponsiveModal } from "@/components/custom/responsive-modal";
import { CreateSupplierFormWrapper } from "./create-supplier-form-wrapper";

export const CreateSupplierModal = () => {
  const { isOpen, setIsOpen, close } = useCreateSupplierModal();

  return (
    <ResponsiveModal open={isOpen} onOpenChange={setIsOpen}>
      <CreateSupplierFormWrapper onCancel={close} />
    </ResponsiveModal>
  );
};
