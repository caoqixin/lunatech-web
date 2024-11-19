import { CreateSupplierForm } from "./create-supplier-form";

interface CreateSupplierFormWrapperProps {
  onCancel: () => void;
}

export const CreateSupplierFormWrapper = ({
  onCancel,
}: CreateSupplierFormWrapperProps) => {
  return <CreateSupplierForm onCancel={onCancel} />;
};
