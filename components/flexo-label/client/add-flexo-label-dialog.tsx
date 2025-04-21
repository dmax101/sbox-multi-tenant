import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ClientType } from "@prisma/client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import _ from "lodash";
import { ClientFieldTypes } from "./client-field-type";

interface AddFlexoLabelDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddFlexoLabelDialog: React.FC<AddFlexoLabelDialogProps> = ({
  isOpen,
  onClose,
}) => {
  const clientType: ClientType[] = Object.values(ClientType);

  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;

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
    defaultValues: {
      id: undefined,
      name: "",
      identification: undefined,
      type: ClientType.COMPANY,
      createdAt: undefined,
      updatedAt: undefined,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form values:", values);
  }

  function handleTypeInfo(value: string) {
    console.log(value);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl min-h-fit max-h-[80%]">
        <div className="h-fit">
          <DialogTitle className="mb-4 text-2xl">
            Adicionar novo cliente
          </DialogTitle>
          <DialogDescription>
            Formulário para adicionar um novo cliente.
          </DialogDescription>
          <Separator className="my-4 w-full" />
        </div>
        <ScrollArea className="h-full w-full rounded-md border p-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 px-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Digite o nome do cliente"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>Nome do cliente/empresa.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Selecione o tipo do cliente.</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={(value) => {
                          field.onChange(value);
                          handleTypeInfo(value);
                        }}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {clientType.map((value: string) => {
                          return (
                            <FormItem
                              className="flex items-center space-x-3 space-y-0"
                              key={value}
                            >
                              <FormControl>
                                <RadioGroupItem value={value} />
                              </FormControl>
                              <FormLabel className="font-normal">
                                {_.startCase(value.toLowerCase())}
                              </FormLabel>
                            </FormItem>
                          );
                        })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {(form.watch("type") === ClientType.COMPANY ||
                form.watch("type") === ClientType.INDIVIDUAL) && (
                <FormField
                  control={form.control}
                  name="identification"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identificação</FormLabel>
                      <FormControl>
                        <Input
                          placeholder={`${ form.watch("type") === ClientType.COMPANY ? ClientFieldTypes.CNPJ : ClientFieldTypes.CPF }`}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Informe o { form.watch("type") === ClientType.COMPANY ? ClientFieldTypes.CNPJ : ClientFieldTypes.CPF } do cliente.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default AddFlexoLabelDialog;
