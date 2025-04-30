# 📝 Gerenciador de Tarefas Diárias

Um gerenciador simples e eficaz de tarefas diárias (To-Do List), desenvolvido com **React** e **TypeScript**, focado em produtividade, organização pessoal e uma interface limpa e responsiva.

## 🚀 Tecnologias Utilizadas

- ⚛️ React
- 🟦 TypeScript
- 💅 CSS Modules / Styled-components (dependendo do seu setup)
- 🧠 useState, useEffect (hooks nativos)
- 📦 Vite (para build e dev server rápidos)

## ✨ Funcionalidades

- ✅ Adicionar nova tarefa
- 🔁 Marcar tarefa como concluída ou pendente
- 🗑️ Remover tarefa
- 📝 Editar tarefa existente
- 🔍 Filtro de tarefas por status: todas | concluídas | pendentes
- 💾 Armazenamento local com `localStorage`
- 📱 Responsivo para mobile, tablet e desktop

## 📸 Preview

![Preview da aplicação](./screenshot.png) <!-- Adicione um print aqui -->

## 🛠️ Instalação e Uso

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repo.git

# Acesse o diretório
cd nome-do-repo

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
Acesse: http://localhost:5173

🔧 Estrutura de Pastas
css
Copiar
Editar
src/
├── components/
│   ├── TaskItem.tsx
│   └── TaskForm.tsx
├── hooks/
│   └── useTasks.ts (opcional)
├── pages/
│   └── Home.tsx
├── types/
│   └── Task.ts
├── App.tsx
├── main.tsx
└── styles/
🧩 Tipo da Tarefa
ts
Copiar
Editar
export interface Task {
  id: string;
  title: string;
  completed: boolean;
}
📌 TODO Futuro
🔔 Notificações de lembrete

📅 Integração com calendário

🌐 Backend com autenticação e persistência via API

👨‍💻 Autor
Feito com ❤️ por Seu Nome
Entre em contato para feedbacks, ideias ou colaborações!

📄 Licença
Este projeto está sob a licença MIT.

yaml
Copiar
Editar

---

Quer que eu inclua também badges do GitHub (build, license, etc), ou transformar esse projeto em algo mais r
