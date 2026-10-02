# Projeto: Landing Page — Odonto Vianópolis

## 1. Objetivo

Criar uma landing page profissional para o consultório odontológico **Odonto Vianópolis**, com foco em:

* Apresentação profissional do consultório
* Geração de confiança
* Divulgação dos serviços odontológicos
* Agendamento de consultas pelo WhatsApp
* Localização no Google Maps
* SEO local
* Presença no Google
* Performance
* Responsividade
* Conversão de visitantes em pacientes

> **IMPORTANTE:** Todas as informações abaixo, exceto o nome "Odonto Vianópolis", são fictícias e devem ser facilmente substituíveis posteriormente.

A aplicação deverá ser desenvolvida utilizando **Next.js + TypeScript**.

---

# 2. Informações fictícias do estabelecimento

## Nome

**Odonto Vianópolis**

## Slogan

> Seu sorriso em boas mãos.

## Descrição

> Na Odonto Vianópolis, oferecemos atendimento odontológico completo, personalizado e humanizado para cuidar da saúde e da estética do seu sorriso.

## Categoria

**Clínica Odontológica**

## Telefone

```text
(31) 3333-4444
```

## WhatsApp

```text
+55 31 99999-8888
```

## E-mail

```text
contato@odontovianopolis.com.br
```

## Endereço fictício

```text
Rua das Acácias, 250
Vianópolis
Betim - MG
32600-000
Brasil
```

## Horário de funcionamento

```text
Segunda: 08:00 - 18:00
Terça: 08:00 - 18:00
Quarta: 08:00 - 18:00
Quinta: 08:00 - 18:00
Sexta: 08:00 - 18:00
Sábado: 08:00 - 12:00
Domingo: Fechado
```

## Redes sociais

Instagram:

```text
@odontovianopolis
```

Facebook:

```text
facebook.com/odontovianopolis
```

---

# 3. Stack

Utilizar:

* Next.js
* TypeScript
* React
* Tailwind CSS
* ESLint
* Prettier
* Git
* GitHub
* Vercel

Utilizar o **App Router do Next.js**.

---

# 4. Direção visual

A identidade visual deve transmitir:

* Saúde
* Confiança
* Higiene
* Modernidade
* Profissionalismo
* Acolhimento

Evitar aparência excessivamente hospitalar.

A página deve parecer uma clínica odontológica moderna e premium.

### Sugestão de paleta

Utilizar tons claros e sofisticados:

```text
Primary:
Azul/azul-petróleo

Secondary:
Verde-água suave

Background:
Branco / off-white

Text:
Cinza escuro

Accent:
Azul claro
```

A interface deve ter bastante espaço em branco.

Utilizar bordas arredondadas de forma moderada.

---

# 5. Estrutura da página

A landing page deverá possuir:

```text
Header
    ↓
Hero
    ↓
Números / Diferenciais
    ↓
Sobre a clínica
    ↓
Especialidades / Serviços
    ↓
Por que escolher a Odonto Vianópolis
    ↓
Equipe
    ↓
Depoimentos
    ↓
Galeria
    ↓
FAQ
    ↓
Localização
    ↓
Horário de atendimento
    ↓
CTA
    ↓
Footer
```

---

# 6. Header

O Header deve conter:

```text
LOGO

Início
Sobre
Tratamentos
Equipe
Dúvidas
Contato

[ Agendar consulta ]
```

No mobile:

```text
Logo
Menu hamburger
```

O botão:

```text
Agendar consulta
```

deve direcionar para o WhatsApp.

---

# 7. Hero

O Hero é uma das partes mais importantes da página.

Criar uma seção moderna com:

### Headline

> Seu sorriso em boas mãos.

### Subheadline

> Atendimento odontológico completo, personalizado e humanizado para cuidar da sua saúde e transformar seu sorriso.

### CTA principal

```text
Agendar minha consulta
```

### CTA secundário

```text
Conheça nossos tratamentos
```

Ao lado do texto, utilizar uma imagem profissional de:

* Dentista atendendo paciente
* Consultório moderno
* Profissional sorrindo
* Ambiente odontológico sofisticado

A imagem deve transmitir confiança e humanização.

---

# 8. Barra de confiança

Logo abaixo do Hero, criar pequenos indicadores.

Exemplo:

```text
+10 anos
de experiência

+5.000
pacientes atendidos

Atendimento
personalizado

Estrutura
moderna
```

Como os números são fictícios, deixar esses dados centralizados na configuração para serem alterados facilmente.

---

# 9. Sobre a clínica

Título:

> Cuidamos do seu sorriso com atenção em cada detalhe.

Texto fictício:

> A Odonto Vianópolis nasceu com o propósito de oferecer uma experiência odontológica mais acolhedora, moderna e personalizada. Nossa equipe trabalha para proporcionar segurança, conforto e excelência em cada atendimento.

Adicionar:

* Foto da clínica
* Foto de profissional
* Texto institucional

CTA:

```text
Conheça a clínica
```

---

# 10. Tratamentos odontológicos

Criar uma seção:

> Tratamentos para cuidar do seu sorriso

Exibir cards.

### Limpeza e prevenção

> Cuidados preventivos para manter sua saúde bucal em dia.

### Clareamento dental

> Tratamentos para deixar seu sorriso mais iluminado.

### Implantes dentários

> Soluções modernas para recuperação de dentes perdidos.

### Ortodontia

> Tratamentos para alinhar os dentes e melhorar sua mordida.

### Facetas dentárias

> Procedimentos estéticos para transformar o sorriso.

### Restauração

> Recuperação da estrutura e função dos dentes.

### Odontopediatria

> Atendimento especializado para crianças.

### Avaliação odontológica

> Avaliação completa para identificar as melhores opções de tratamento.

---

# 11. Estrutura dos serviços

Criar um tipo:

```typescript
type DentalService = {
  id: string;
  name: string;
  description: string;
  image?: string;
  slug: string;
  active: boolean;
};
```

Os serviços devem ser configuráveis.

Não espalhar textos diretamente nos componentes.

---

# 12. CTA para WhatsApp

Criar componente reutilizável:

```text
WhatsAppButton
```

Exemplo:

```text
Olá! Gostaria de agendar uma avaliação na Odonto Vianópolis.
```

Função:

```typescript
generateWhatsAppLink({
  phone,
  message
})
```

O telefone deve vir da configuração da clínica.

---

# 13. Seção "Por que escolher a Odonto Vianópolis?"

Criar cards:

### Atendimento humanizado

> Cada paciente é atendido de forma individualizada.

### Estrutura moderna

> Ambiente confortável e equipado para proporcionar uma experiência tranquila.

### Profissionais qualificados

> Equipe preparada para diferentes necessidades odontológicas.

### Tecnologia

> Utilização de recursos modernos para diagnóstico e tratamento.

### Segurança

> Protocolos de higiene e segurança em todos os atendimentos.

---

# 14. Equipe

Criar seção:

> Conheça nossa equipe

Dados fictícios:

### Dra. Mariana Oliveira

**Cirurgiã-Dentista**

CRO-MG 00000

Especialista em Dentística e Estética.

---

### Dr. Rafael Mendes

**Cirurgião-Dentista**

CRO-MG 00000

Especialista em Implantodontia.

---

### Dra. Camila Ferreira

**Cirurgiã-Dentista**

CRO-MG 00000

Especialista em Ortodontia.

> Os nomes, CROs e especialidades são fictícios e devem ser substituídos pelos dados reais antes da publicação.

---

# 15. Depoimentos

Criar seção:

> O que nossos pacientes dizem

Utilizar depoimentos fictícios apenas durante o desenvolvimento.

Exemplo:

> "Fui muito bem atendida desde o primeiro contato. Toda a equipe foi extremamente atenciosa."

**Mariana S.**

---

> "O ambiente é muito confortável e o atendimento foi excelente."

**Carlos R.**

---

> "Finalmente encontrei uma clínica onde me sinto tranquilo durante o tratamento."

**Fernanda A.**

IMPORTANTE:

Antes da publicação, substituir por depoimentos reais e autorizados pelos pacientes.

---

# 16. Galeria

Criar galeria para:

* Recepção
* Consultórios
* Equipamentos
* Equipe
* Ambiente
* Fachada

Utilizar:

```text
next/image
```

Todas as imagens devem possuir:

```text
alt
width
height
```

quando aplicável.

---

# 17. FAQ

Criar perguntas frequentes.

### Preciso marcar uma consulta?

> Sim. Entre em contato pelo WhatsApp para verificar os horários disponíveis.

### Vocês atendem crianças?

> Sim. A clínica oferece atendimento odontológico infantil.

### A clínica aceita cartão?

> Sim. Aceitamos cartões de crédito e débito.

### Vocês trabalham com convênios?

> Informação fictícia. Deixar configurável no projeto.

### Como chegar à clínica?

> Estamos localizados em Vianópolis, Betim-MG. Consulte o mapa na seção de localização.

### Posso tirar dúvidas pelo WhatsApp?

> Sim. Nossa equipe está disponível para orientar você e realizar o agendamento.

---

# 18. Localização

Criar seção:

> Onde estamos

Mostrar:

```text
Odonto Vianópolis

Rua das Acácias, 250
Vianópolis
Betim - MG
32600-000
```

Adicionar:

```text
[ Abrir no Google Maps ]
```

Também adicionar mapa incorporado, se apropriado.

---

# 19. Horário

Criar componente:

```text
OpeningHours
```

Exibir:

```text
Segunda       08:00 - 18:00
Terça         08:00 - 18:00
Quarta        08:00 - 18:00
Quinta        08:00 - 18:00
Sexta         08:00 - 18:00
Sábado        08:00 - 12:00
Domingo       Fechado
```

---

# 20. SEO

Implementar SEO completo.

Title:

```text
Odonto Vianópolis | Clínica Odontológica em Betim - MG
```

Description:

```text
Odonto Vianópolis: clínica odontológica em Betim-MG.
Oferecemos tratamentos odontológicos, estética dental,
implantes, ortodontia e atendimento personalizado.
Agende sua consulta.
```

Keywords devem ser utilizadas naturalmente.

Exemplos:

```text
dentista em Betim
clínica odontológica em Betim
dentista Vianópolis
odontologia em Betim
implante dentário Betim
clareamento dental Betim
ortodontista em Betim
```

Não utilizar keyword stuffing.

---

# 21. Metadata do Next.js

Utilizar a API de Metadata do Next.js.

Exemplo conceitual:

```typescript
export const metadata: Metadata = {
  title: "Odonto Vianópolis | Clínica Odontológica em Betim - MG",
  description:
    "Clínica odontológica em Betim-MG com atendimento personalizado...",
};
```

---

# 22. Open Graph

Configurar:

```text
og:title
og:description
og:image
og:url
og:type
```

Quando o site for compartilhado no:

* WhatsApp
* Facebook
* LinkedIn
* outras plataformas

deve aparecer uma prévia profissional.

---

# 23. Schema.org

Como se trata de um consultório odontológico, utilizar dados estruturados adequados.

Considerar:

```text
Dentist
LocalBusiness
```

Exemplo:

```json
{
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Odonto Vianópolis",
  "image": "https://odontovianopolis.com.br/images/clinic.jpg",
  "url": "https://odontovianopolis.com.br",
  "telephone": "+5531999998888",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Rua das Acácias, 250",
    "addressLocality": "Betim",
    "addressRegion": "MG",
    "postalCode": "32600-000",
    "addressCountry": "BR"
  },
  "openingHours": [
    "Mo-Fr 08:00-18:00",
    "Sa 08:00-12:00"
  ]
}
```

Os dados estruturados devem ser gerados a partir da configuração da clínica.

---

# 24. Google Business Profile

O projeto deve considerar a configuração do Perfil da Empresa no Google.

Informações:

```text
Nome:
Odonto Vianópolis

Categoria:
Dentista / Clínica odontológica

Endereço:
Rua das Acácias, 250
Vianópolis
Betim - MG

Telefone:
(31) 3333-4444

Site:
https://odontovianopolis.com.br
```

Configurar:

* Nome
* Categoria
* Endereço
* Telefone
* Horários
* Site
* Fotos
* Descrição
* Serviços

O cadastro real deverá ser feito com a conta Google do proprietário da clínica.

---

# 25. Google Search Console

Preparar o projeto para:

```text
Google Search Console
```

Configurar:

* Verificação do domínio
* Sitemap
* Indexação
* Inspeção de URL

Criar:

```text
/sitemap.xml
/robots.txt
```

Utilizar as funcionalidades nativas do Next.js quando possível.

---

# 26. Google Maps

Criar botão:

```text
Abrir no Google Maps
```

O endereço deve ser configurável.

Não deixar o endereço hardcoded em vários componentes.

---

# 27. Analytics

Preparar integração com:

```text
Google Analytics
Google Tag Manager
```

Eventos:

```text
click_whatsapp
click_phone
click_maps
click_instagram
click_schedule
```

Exemplo:

```text
Usuário entra no site
        ↓
Visualiza tratamentos
        ↓
Clica em "Agendar consulta"
        ↓
WhatsApp
        ↓
Evento click_whatsapp
```

---

# 28. Performance

Priorizar performance.

Utilizar:

* Server Components
* next/image
* Lazy loading
* Otimização de fontes
* CSS otimizado
* JavaScript somente quando necessário
* Componentes leves

Monitorar:

```text
LCP
INP
CLS
```

O site deve apresentar boa performance no mobile.

---

# 29. Responsividade

Testar:

```text
375px
390px
768px
1024px
1440px
```

A experiência mobile é prioritária.

No celular:

* CTA WhatsApp facilmente acessível
* Menu simples
* Botões grandes
* Textos legíveis
* Imagens otimizadas

---

# 30. Acessibilidade

Implementar:

* HTML semântico
* `alt` nas imagens
* Contraste adequado
* Navegação por teclado
* Labels
* Focus states
* Botões acessíveis
* Hierarquia correta de headings

---

# 31. Estrutura de projeto

Sugestão:

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   └── ...
│
├── components/
│   ├── Header/
│   ├── Hero/
│   ├── TrustBar/
│   ├── About/
│   ├── Treatments/
│   ├── WhyChooseUs/
│   ├── Team/
│   ├── Testimonials/
│   ├── Gallery/
│   ├── FAQ/
│   ├── Location/
│   ├── OpeningHours/
│   ├── WhatsAppButton/
│   └── Footer/
│
├── config/
│   └── clinic.ts
│
├── lib/
│   ├── whatsapp.ts
│   ├── seo.ts
│   ├── schema.ts
│   └── analytics.ts
│
├── types/
│   ├── clinic.ts
│   └── treatment.ts
│
└── styles/
```

---

# 32. Configuração centralizada

Criar:

```text
src/config/clinic.ts
```

Exemplo:

```typescript
export const clinic = {
  name: "Odonto Vianópolis",

  slogan: "Seu sorriso em boas mãos.",

  description:
    "Atendimento odontológico completo, personalizado e humanizado.",

  phone: "+553133334444",

  whatsapp: "+5531999998888",

  email: "contato@odontovianopolis.com.br",

  address: {
    street: "Rua das Acácias, 250",
    neighborhood: "Vianópolis",
    city: "Betim",
    state: "MG",
    zipCode: "32600-000",
    country: "BR"
  },

  social: {
    instagram: "https://instagram.com/odontovianopolis",
    facebook: "https://facebook.com/odontovianopolis"
  }
};
```

Todos os componentes devem consumir essa configuração.

---

# 33. Imagens

Para o MVP, utilizar imagens locais ou uma solução de armazenamento simples.

Estrutura:

```text
public/
└── images/
    ├── clinic/
    ├── team/
    ├── treatments/
    └── gallery/
```

Utilizar:

```tsx
<Image />
```

do Next.js.

No futuro, caso exista um painel administrativo para o cliente fazer upload de fotos, migrar para uma solução como:

* Cloudinary
* S3
* Storage compatível

---

# 34. Domínio

Domínio planejado:

```text
odontovianopolis.com.br
```

O domínio real deverá ser registrado pelo proprietário da clínica.

Configuração:

```text
Domínio
   ↓
DNS
   ↓
Vercel
   ↓
Next.js
   ↓
HTTPS
```

---

# 35. Deploy

Utilizar:

```text
GitHub
   ↓
Vercel
   ↓
Next.js
   ↓
odontovianopolis.com.br
```

Configurar deploy automático.

Fluxo:

```text
git push
    ↓
GitHub
    ↓
Vercel
    ↓
Build
    ↓
Deploy
```

---

# 36. Segurança

Não colocar secrets no frontend.

Utilizar:

```text
.env.local
```

para informações privadas.

Nunca colocar no Git:

```text
.env
.env.local
API keys
tokens
senhas
credentials
```

Adicionar ao `.gitignore`.

---

# 37. Conteúdo fictício

Durante o desenvolvimento, utilizar os dados fictícios fornecidos neste documento.

Antes da publicação, substituir:

* Telefone
* WhatsApp
* E-mail
* Endereço
* CROs
* Profissionais
* Fotos
* Depoimentos
* Horários
* Tratamentos
* Redes sociais
* Dados do Google Maps

Nenhuma informação fictícia deve permanecer na versão final publicada.

---

# 38. Checklist de desenvolvimento

## Interface

* [ ] Header
* [ ] Hero
* [ ] CTA
* [ ] Sobre
* [ ] Tratamentos
* [ ] Diferenciais
* [ ] Equipe
* [ ] Depoimentos
* [ ] Galeria
* [ ] FAQ
* [ ] Localização
* [ ] Horários
* [ ] Footer

## Funcionalidades

* [ ] WhatsApp
* [ ] Telefone
* [ ] Google Maps
* [ ] Instagram
* [ ] Menu mobile
* [ ] Formulário, se necessário

## SEO

* [ ] Title
* [ ] Description
* [ ] H1
* [ ] H2
* [ ] Canonical
* [ ] Sitemap
* [ ] Robots
* [ ] Schema.org
* [ ] Open Graph
* [ ] Favicon

## Google

* [ ] Google Business Profile
* [ ] Search Console
* [ ] Sitemap enviado
* [ ] Indexação solicitada
* [ ] Google Maps

## Performance

* [ ] Imagens otimizadas
* [ ] Mobile
* [ ] Lighthouse
* [ ] Core Web Vitals
* [ ] Sem JavaScript desnecessário

## Deploy

* [ ] GitHub
* [ ] Vercel
* [ ] DNS
* [ ] Domínio
* [ ] HTTPS
* [ ] Environment variables

---

# 39. Evolução futura

O projeto deve começar como uma landing page única.

Não implementar inicialmente:

* Login
* Dashboard
* Banco de dados
* Multi-tenancy
* Pagamentos
* SaaS

Primeiro validar:

```text
Next.js
    ↓
Landing Page
    ↓
SEO
    ↓
Schema.org
    ↓
WhatsApp
    ↓
Google Maps
    ↓
Deploy
    ↓
Domínio
    ↓
Google
```

Depois transformar a arquitetura em uma plataforma reutilizável.

---

# 40. Evolução para SaaS

No futuro, permitir:

```text
Cliente
   ↓
Dashboard
   ↓
Editar clínica
   ↓
Alterar tratamentos
   ↓
Alterar fotos
   ↓
Alterar horários
   ↓
Alterar WhatsApp
   ↓
Landing Page atualizada
```

Possível arquitetura:

```text
                 Next.js
                    │
             ┌──────┴──────┐
             │             │
         Dashboard      Website
             │             │
             └──────┬──────┘
                    │
                PostgreSQL
                    │
              Multi-tenancy
```

---

# 41. Objetivo final do MVP

O resultado final deverá ser uma landing page profissional para:

# Odonto Vianópolis

Com:

* Design moderno
* Identidade visual odontológica
* Responsividade
* WhatsApp
* Google Maps
* Tratamentos
* Equipe
* Depoimentos
* Galeria
* FAQ
* Horários
* SEO local
* Schema.org
* Sitemap
* Robots
* Open Graph
* Analytics preparado
* Google Search Console preparado
* Google Business Profile preparado
* Deploy na Vercel
* Domínio personalizado
* HTTPS

O código deve ser limpo, componentizado, reutilizável e preparado para futuramente transformar o projeto em uma plataforma de landing pages para múltiplas clínicas e estabelecimentos.

---

# 42. Instrução para implementação

Implementar o projeto em etapas.

**Não tentar criar todo o sistema de uma vez.**

Seguir esta ordem:

### Etapa 1 — Setup

* Criar projeto Next.js
* TypeScript
* Tailwind
* ESLint
* Estrutura de pastas

### Etapa 2 — Design

* Definir identidade visual
* Header
* Hero
* Seções
* Footer
* Responsividade

### Etapa 3 — Componentização

Criar componentes reutilizáveis.

### Etapa 4 — Conteúdo

Adicionar dados fictícios da Odonto Vianópolis.

### Etapa 5 — SEO

Implementar:

* Metadata
* Sitemap
* Robots
* Canonical
* Open Graph

### Etapa 6 — Schema

Implementar:

```text
Dentist
LocalBusiness
```

### Etapa 7 — Conversão

Implementar:

* WhatsApp
* Telefone
* Google Maps
* CTAs

### Etapa 8 — Performance

Otimizar:

* Imagens
* Fonts
* JavaScript
* Core Web Vitals

### Etapa 9 — Deploy

Publicar no:

```text
GitHub → Vercel
```

### Etapa 10 — Google

Configurar:

* Search Console
* Sitemap
* Indexação
* Google Business Profile

Somente depois de concluir o MVP considerar:

* Banco de dados
* Dashboard
* Upload de imagens
* Multi-tenancy
* Autenticação
* SaaS
* Pagamentos

---

# Resultado esperado

Criar uma landing page que pareça um **site profissional de uma clínica odontológica moderna**, e não apenas um template genérico.

O visitante deve conseguir, em poucos segundos:

1. Entender o que é a Odonto Vianópolis.
2. Ver quais tratamentos são oferecidos.
3. Sentir confiança na clínica.
4. Encontrar endereço e horário.
5. Encontrar o telefone.
6. Clicar no WhatsApp.
7. Agendar uma consulta.

A prioridade deve ser:

**Confiança → Clareza → Conversão → SEO → Performance.**

---

# Status atual (01/10/2026)

* MVP migrado para Next.js + TypeScript, preservando 1:1 o design/cores do protótipo HTML original.
* Deploy de preview funcionando na Vercel: https://odonto-vianopolis.vercel.app
* Repositório no GitHub: https://github.com/diegolauar/landpage-odonto (branch `main`, sincronizado)
* Dr. Álvaro Amaral já é membro real da equipe (nome, CRO-MG 62817, foto e especialidade reais, extraídos de um pôster de divulgação)
* WhatsApp da clínica já atualizado para o número real: `+5531999999999`

## Aguardando validação do cliente antes do deploy final

* Dra. Mariana Oliveira e Dra. Camila Ferreira — ainda fictícias (trocar por profissionais reais ou remover os cards?)
* Depoimentos — ainda fictícios, precisam ser substituídos por depoimentos reais e autorizados pelos pacientes
* Fotos reais da clínica (recepção, consultórios, equipamentos, ambiente, fachada) — hoje são placeholders "Foto: ..."
* Conferir endereço, horários, telefone fixo, e-mail e redes sociais em `src/config/clinic.ts` (ainda fictícios)

## Próximos passos (depois da aprovação do cliente)

1. Atualizar os dados fictícios acima em `src/config/clinic.ts`
2. Conectar o domínio `odontovianopolis.com.br` ao projeto na Vercel (DNS + HTTPS)
3. Configurar Google Search Console, enviar sitemap e solicitar indexação
4. Configurar/otimizar o Google Business Profile
5. Promover o deploy pra produção com o domínio definitivo
