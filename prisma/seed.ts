import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const prisma = new PrismaClient();

async function main() {
  // Criando Tenant
  const tenant = await prisma.tenant.create({
    data: {
      id: uuidv4(),
      name: 'Empresa Exemplo',
      domain: 'empresaexemplo.com',
    },
  });

  // Criando Usuário com Perfil
  const user = await prisma.user.create({
    data: {
      name: 'João Silva',
      email: 'joao.silva@email.com',
      tenantId: tenant.id,
      profile: {
        create: {
          role: 'Administrador',
          type: ['ADMIN', 'MANAGER'],
        },
      },
    },
  });

  // Criando Cliente
  const client = await prisma.client.create({
    data: {
      id: uuidv4(),
      name: 'Cliente Teste',
      identification: '12345678900',
      type: 'INDIVIDUAL',
      tenantId: tenant.id,
    },
  });

  // Criando Matéria-Prima e Tipo
  const rawMaterialType = await prisma.rawMaterialType.create({
    data: { name: 'Plástico' },
  });

  const rawMaterial = await prisma.rawMaterial.create({
    data: {
      name: 'Polietileno',
      lot: 'LOTE123',
      unit: 'kg',
      quantity: 100,
      rawMaterialTypeId: rawMaterialType.id,
    },
  });

  // Criando Equipamento
  const equipment = await prisma.equipment.create({
    data: {
      name: 'Máquina de Impressão',
      brand: 'XBrand',
      model: 'Modelo 2025',
    },
  });

  // Criando Pacote
  const packageItem = await prisma.package.create({
    data: {
      name: 'Pacote Embalagens',
      lot: 'PACOTE123',
      unit: 'un',
      quantity: 50,
    },
  });

  // Criando Ordem de Produção
  await prisma.productionOrder.create({
    data: {
      description: 'Impressão de Embalagens',
      width: 30.5,
      height: 50.2,
      lot: 'PROD123',
      quantityPerRoll: 200,
      diameterCore: 5.0,
      rollSize: 10.5,
      observation: 'Entrega urgente',
      status: 'PENDING',
      clientId: client.id,
      tenantId: tenant.id,
      rawMaterial: { connect: { id: rawMaterial.id } },
      equipment: { connect: { id: equipment.id } },
      package: { connect: { id: packageItem.id } },
      requesterId: user.id,
      productionResponsibleId: user.id,
      employeeId: user.id,
    },
  });

  console.log('Seed data inserido com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });