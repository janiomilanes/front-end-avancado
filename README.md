# 🧮 Calculadora Simples com React + Vite

Este é um projeto de calculadora simples criado com **React** e **Vite**. Ele demonstra o uso de componentes reutilizáveis para realizar operações matemáticas básicas: adição, subtração, multiplicação e divisão.

## 📦 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- JavaScript (ES7+)

## 📁 Estrutura do Projeto

src/
├── App.jsx
└── components/
├── Adicao.jsx
├── Subtracao.jsx
├── Multiplicacao.jsx
└── Divisao.jsx

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-react-vite.git
   cd calculadora-react-vite
npm install
npm run dev
http://localhost:5173

## 🧠 Como Funciona

O componente principal App.jsx importa quatro componentes:

<Adicao num1={4} num2={6} />

<Subtracao num1={10} num2={4} />

<Multiplicacao num1={4} num2={5} />

<Divisao num1={10} num2={2} />

Cada componente realiza a operação e exibe o resultado diretamente na interface.
