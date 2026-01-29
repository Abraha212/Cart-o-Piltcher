# Cartão Saúde Piltcher - Landing Page

Landing page institucional para o Cartão Saúde Piltcher, desenvolvida com Next.js, Tailwind CSS e Lucide React.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Estilização**: Tailwind CSS 3.4
- **Ícones**: Lucide React
- **Linguagem**: TypeScript

## Estrutura do Projeto

```
src/
├── app/
│   ├── globals.css      # Estilos globais e configurações do Tailwind
│   ├── layout.tsx       # Layout raiz da aplicação
│   └── page.tsx         # Página principal
└── components/
    ├── Header.tsx       # Menu superior fixo
    ├── Hero.tsx         # Seção principal com CTA
    ├── Plans.tsx        # Tabela de planos
    ├── Transformation.tsx # Seção de benefícios
    ├── FAQ.tsx          # Perguntas frequentes (accordion)
    ├── Contact.tsx      # Localização e contato
    └── Footer.tsx       # Rodapé
```

## Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

## Cores do Projeto

- **Navy (Azul Marinho)**: Cor institucional para textos e backgrounds escuros
- **Lime (Verde Limão)**: CTAs e destaques
- **Branco/Cinza Claro**: Fundos gerais

## Personalização

### Imagens

As imagens estão usando placeholders. Para adicionar imagens reais:

1. **Hero Section** (`Hero.tsx`): Substitua a URL do `backgroundImage` por uma imagem de médico atendendo paciente
2. **Transformation Section** (`Transformation.tsx`): Substitua a URL por uma imagem de médica sorrindo/família

### Informações de Contato

Atualize em `Contact.tsx`:
- Endereço
- Telefone
- WhatsApp

### Logo

Substitua o placeholder do logo em `Header.tsx` e `Footer.tsx` pela imagem real do logo.

## Responsividade

A landing page é totalmente responsiva:
- **Mobile**: Menu hambúrguer, layout em coluna única
- **Tablet**: Layout adaptado com 2 colunas onde aplicável
- **Desktop**: Layout completo com 3 colunas nos planos

## Performance

- Componentes otimizados para carregamento rápido
- Lazy loading no iframe do mapa
- CSS otimizado com Tailwind (purge automático)
