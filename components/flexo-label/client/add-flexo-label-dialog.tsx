import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import { ClientType } from "@/prisma/app/generated/prisma/client";

interface AddFlexoLabelDialogProps<T = any> {
  isOpen: boolean;
  onClose: () => void;
  client?: T; // Cliente existente (opcional, genérico)
}

const AddFlexoLabelDialog = <T,>({
  isOpen,
  onClose,
  client,
}: AddFlexoLabelDialogProps<T>) => {
  const clientType: ClientType[] = Object.values(ClientType);

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

  // O formSchema pode ser definido posteriormente
  const formSchema = z.object({
    id: z.string().uuid().optional(),
    name: z
      .string()
      .min(2, { message: "Nome deve ter no mínimo 2 caracteres." })
      .max(50, { message: "Nome deve ter no máximo 50 caracteres." }),
    identification: z
      .string()
      .optional()
      .refine(
        (value) => {
          if (!value) return true; // Permite campo vazio

          const cleanedValue = value.replace(/\D/g, ""); // Remove caracteres não numéricos
          const isCpf = cleanedValue.length === 11;
          const isCnpj = cleanedValue.length === 14;

          if (isCpf) return cpfRegex.test(value);
          if (isCnpj) return cnpjRegex.test(value);

          return false;
        },
        {
          message:
            "Documento inválido. Use um CPF (000.000.000-00) ou CNPJ (00.000.000/0000-00).",
        }
      ),
    type: z.enum(clientType as [string, ...string[]], {
      errorMap: () => ({ message: "Tipo inválido." }),
    }),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: client ?? {
      id: undefined,
      name: "",
      identification: undefined,
      type: ClientType.COMPANY,
      createdAt: undefined,
      updatedAt: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (client) {
      console.log("Editando cliente:", values);
      // Lógica para editar o cliente existente
    } else {
      console.log("Adicionando novo cliente:", values);
      // Lógica para adicionar um novo cliente
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl min-h-fit max-h-[80%]">
        <div className="h-fit">
          <DialogTitle className="mb-4 text-2xl">
            {client ? "Editar Cliente" : "Adicionar Novo Cliente"}
          </DialogTitle>
          <DialogDescription>
            {client
              ? "Atualize as informações do cliente."
              : "Formulário para adicionar um novo cliente."}
          </DialogDescription>
          <Separator className="my-4 w-full" />
        </div>
        <ScrollArea className="h-full w-full rounded-md border p-4">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 px-1"
            >
              {/* Campos do formulário */}
              <Button type="submit">
                {client ? "Salvar Alterações" : "Adicionar Cliente"}
              </Button>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AddFlexoLabelDialog;
