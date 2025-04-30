import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon } from "lucide-react";

interface AddRtpiDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddRtpiDialog: React.FC<AddRtpiDialogProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl min-h-fit max-h-[80%]">
        <div className="h-fit">
          <DialogTitle className="mb-4 text-2xl">Adicionar RTPI</DialogTitle>
          <DialogDescription>
            Formulário para adicionar um novo RTPI.
          </DialogDescription>
          <Separator className="my-4 w-full" />
        </div>
        <ScrollArea className="h-full w-full rounded-md border p-4">
          <form>
            <div className="p-4">
              <div>
                <Label className="mt-8">Nome</Label>
                <Input className="mt-2 mb-8" placeholder="Digite aqui"></Input>
              </div>
              <div>
                <Label className="mt-8">
                  1-Nome, endereço e CNPJ do estabelecimento proprietário do
                  produto:
                </Label>
                <Textarea
                  className="mt-2 mb-8"
                  placeholder="COOPERATIVA REGIONAL AGRO-PECUÁRIA DE SANTA RITA DO SAPUCAÍ LTDA, RODOVIA BR 459, KM 121, BAIRRO INDUSTRIAL - SANTA RITA DO SAPUCAÍ - MG - CNPJ - 24.490.401/0024-21"
                />
              </div>
              <div>
                <Label className="mt-8">
                  2 - Designação do produto por nome e marca comercial:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">3 - Classificação do produto:</Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  4 - Forma física de apresentação:
                </Label>
                <div className="mt-2 mb-8 w-full">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="farelada">Farelada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <Label className="mt-8">
                  5 - Característica da embalagem e forma de acondicionamento:
                </Label>
                <div className="flex items-center gap-2 mt-2 mb-8">
                  <div className="flex gap-2 w-full">
                    <Select>
                      <SelectTrigger className="auto">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Umidade</SelectItem>
                        <SelectItem value="2">Proteína Bruta</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-auto">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="max">Máximo</SelectItem>
                        <SelectItem value="min">Mínimo</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input type="number" className="w-24"></Input>
                    <Select>
                      <SelectTrigger className="w-auto">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="g">g</SelectItem>
                        <SelectItem value="mg">mg</SelectItem>
                        <SelectItem value="UI/mg">UI/mg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="flex-shrink-0">
                    <PlusIcon />
                  </Button>
                </div>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  6 - Característica da embalagem e forma de acondicionamento:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">7 - Eventuais Substitutivos:</Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">8 - Níveis de garantia:</Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  9 - Descrição do controle do produto acabado:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  10 - Indicações de uso e espécie animal a que se destina:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">11 - Modo de usar:</Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  12 - Conteúdo líquido expresso no sistema métrico decimal:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">13 - Prazo de validade:</Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">14 - Condições de conservação:</Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  15- Restrições e outras recomendações:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
              <div>
                <Label className="mt-8">
                  16 - ANEXO - Croqui do rótulo devidamente aprovado e assinado
                  pelo Responsável Técnico:
                </Label>
                <Textarea className="mt-2 mb-8" placeholder="Digite aqui" />
              </div>
            </div>
          </form>
        </ScrollArea>
        <div className="flex justify-end gap-4">
          <Button className="primary">Cancelar</Button>
          <Button className="danger">Salvar</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddRtpiDialog;
