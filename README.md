# 🌐 Portfólio Fullstack — Matheus Diamantino

![Portfolio](https://img.shields.io/badge/portfolio-fullstack-blue)
![Frontend](https://img.shields.io/badge/frontend-react%20%7C%20typescript%20%7C%20tailwind-blue)
![Backend](https://img.shields.io/badge/backend-php%208%20%7C%20symfony-red)
![Database](https://img.shields.io/badge/database-mysql-orange)
![DevOps](https://img.shields.io/badge/devops-docker%20%7C%20docker--compose-blue)
![Build](https://img.shields.io/badge/build-vite-purple)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

---

# 👨‍💻 Portfólio Profissional — Matheus Diamantino

Este repositório contém o **portfólio profissional fullstack de Matheus Diamantino**, desenvolvido para apresentar projetos, experiências, tecnologias e formas de contato de maneira moderna, organizada e interativa.

O objetivo do projeto é funcionar como uma **vitrine técnica profissional**, permitindo que recrutadores, empresas e clientes avaliem rapidamente habilidades técnicas, arquitetura de software e experiência prática.

---

# 📚 Sumário

- Visão Geral  
- Objetivos do Projeto  
- Tecnologias Utilizadas  
- Arquitetura da Aplicação  
- Diagrama de Arquitetura  
- Estrutura do Projeto  
- Fluxo de Funcionamento  
- Funcionalidades  
- UI / UX  
- Setup do Projeto  
- Execução com Docker  
- Deploy  
- Contato  

---

# 🎯 Visão Geral

O portfólio é uma **aplicação web fullstack moderna**, composta por:

- Frontend SPA moderno  
- Backend estruturado  
- API para comunicação entre camadas  
- Arquitetura modular  
- Design responsivo  
- Interface interativa  

Ele foi projetado para demonstrar:

- habilidades de **desenvolvimento frontend**
- experiência com **backend PHP**
- conhecimento em **arquitetura de software**
- domínio de **DevOps**
- boas práticas de **UI/UX**

---

# 🚀 Objetivos do Projeto

Este projeto possui os seguintes objetivos:

- apresentar projetos e experiências profissionais  
- demonstrar habilidades técnicas  
- fornecer uma página profissional para recrutadores  
- centralizar informações profissionais  
- servir como cartão de visita digital  
- demonstrar arquitetura moderna de aplicações web  

---

# 🛠 Tecnologias Utilizadas

## 🎨 Frontend

| Tecnologia | Descrição |
|-----------|-----------|
| React | Biblioteca para interfaces modernas |
| TypeScript | Tipagem estática |
| Tailwind CSS | Framework CSS utilitário |
| SCSS | Estilização avançada |
| Vite | Bundler moderno |

---

## ⚙️ Backend

| Tecnologia | Descrição |
|-----------|-----------|
| PHP 8 | Linguagem principal |
| Symfony | Framework backend |

---

## 🗄 Banco de Dados

| Tecnologia | Descrição |
|-----------|-----------|
| MySQL | Banco relacional |

---

## 🐳 DevOps

| Tecnologia | Descrição |
|-----------|-----------|
| Docker | Containerização |
| Docker Compose | Orquestração de containers |

---

## 🔧 Controle de Versão

| Tecnologia | Descrição |
|-----------|-----------|
| Git | Versionamento |
| GitHub | Hospedagem do código |

---

# 🏗 Arquitetura da Aplicação

A aplicação segue um modelo **Fullstack desacoplado**, com comunicação entre frontend e backend via API HTTP.

```text
Frontend (React + Vite)
        │
        │ HTTP / API
        ▼
Backend (PHP + Symfony)
        │
        │ ORM / Queries
        ▼
Database (MySQL)
```

---

# 📊 Diagrama de Arquitetura

```text
                ┌───────────────────────────┐
                │        Usuário            │
                │        Browser            │
                └─────────────┬─────────────┘
                              │
                              │ HTTP
                              ▼
                ┌───────────────────────────┐
                │        Frontend           │
                │      React + Vite         │
                │   UI / Components         │
                └─────────────┬─────────────┘
                              │
                              │ API Requests
                              ▼
                ┌───────────────────────────┐
                │         Backend           │
                │       PHP + Symfony       │
                │  Controllers / Services   │
                └─────────────┬─────────────┘
                              │
                              │ Queries / ORM
                              ▼
                ┌───────────────────────────┐
                │        Database           │
                │          MySQL            │
                └───────────────────────────┘
```

---

# 📁 Estrutura do Projeto

```text
portfolio-fullstack
│
├── backend
│   ├── src
│   │   ├── Controller
│   │   ├── Entity
│   │   ├── Repository
│   │   ├── Service
│   │   └── Kernel.php
│   │
│   ├── config
│   │
│   ├── migrations
│   │
│   └── public
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── hooks
│   │   ├── styles
│   │   └── App.tsx
│   │
│   ├── index.html
│   └── vite.config.ts
│
├── docker
│   ├── nginx
│   ├── php
│   └── mysql
│
├── docker-compose.yml
│
└── README.md
```

---

# 🔄 Fluxo de Funcionamento

```text
Usuário acessa o site
        │
        ▼
Frontend React renderiza interface
        │
        ▼
Frontend envia requisição para API
        │
        ▼
Backend Symfony processa requisição
        │
        ▼
Backend consulta banco MySQL
        │
        ▼
Resposta retorna ao frontend
        │
        ▼
Interface é atualizada
```

---

# 🧩 Funcionalidades

O portfólio apresenta diversas seções organizadas.

## Sobre Mim

Apresentação profissional com resumo das habilidades, trajetória e foco técnico.

## Tecnologias

Lista visual das tecnologias dominadas:

- PHP
- Symfony
- React
- TypeScript
- Docker
- MySQL

## Projetos

Exibição dos principais projetos contendo:

- descrição
- tecnologias utilizadas
- links para repositórios
- demonstrações

## Currículo

Apresentação estruturada das experiências profissionais.

## Contato

Formas diretas de comunicação.

---

# 🎨 UI / UX

O projeto foi desenvolvido com foco em experiência do usuário.

Principais características:

- layout moderno  
- animações suaves  
- design responsivo  
- navegação fluida  
- componentes reutilizáveis  

---

# ⚙️ Setup do Projeto

Clone o repositório:

```bash
git clone https://github.com/Henri-Di/portfolio-fullstack.git
```

Entre na pasta do projeto:

```bash
cd portfolio-fullstack
```

---

# 🐳 Execução com Docker

Suba os containers:

```bash
docker-compose up -d
```

A aplicação ficará disponível em:

```text
http://localhost
```

---

# 🚀 Deploy

O projeto está hospedado em:

```text
https://www.matheusdiamantino.com/
```

Infraestrutura utilizada:

- containerização com Docker
- servidor Linux
- Nginx como servidor web
- backend PHP Symfony
- frontend React compilado via Vite

---

# 📫 Contato

LinkedIn:

```text
https://www.linkedin.com/in/matheus-diamantino-952b3121a/
```

GitHub:

```text
https://github.com/Henri-Di
```

Email:

```text
matheus.diamantino20@gmail.com
```

---

# 🙏 Agradecimentos

Obrigado por visitar este projeto.

Este portfólio representa não apenas minhas habilidades técnicas, mas também minha dedicação ao desenvolvimento de software de qualidade e soluções bem estruturadas.