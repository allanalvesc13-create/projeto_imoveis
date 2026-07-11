# Projeto Imóveis

Aplicação web simples para demonstração de um fluxo de formulário e catálogo de imóveis.
O projeto utiliza Flask para servir páginas estáticas (index.html, imoveis.html) e um pequeno backend em Python que recebe os dados do formulário.

> Versão atual: protótipo/POC — ideal para aprender Flask e integrar frontend estático com um backend leve.

---

## Conteúdo deste repositório

- `main.py` - Aplicação Flask que serve as páginas e recebe o POST do formulário (`/login`) e redireciona para `/imoveis`.
- `index.html` - Página inicial com formulário de cadastro/login (CEP com preenchimento automático via JS).
- `imoveis.html` - Página com catálogo de imóveis e carrossel de imagens (renderizada pelo Flask usando `render_template`).
- `apps.js` - Lógica do frontend: busca de CEP (ViaCEP), validação de senha e validação do formulário.
- `a.css` - Estilos usados pelas páginas.
- `imagens/` - Pasta com imagens usadas no catálogo.
- `requirements.txt` - Dependências Python (Flask, requests).

---

## Pré-requisitos

- Python 3.8+ (recomendado 3.11)
- pip

(Desenvolvido e testado em ambiente Windows — instruções a seguir usam caminhos/atalhos compatíveis com Windows.)

---

## Instalação e execução (Windows)

1. Clone o repositório e entre na pasta:

   git clone <URL_DO_REPO>
   cd projeto_imoveis

2. Crie e ative um ambiente virtual:

   python -m venv venv
   venv\Scripts\activate

3. Instale as dependências:

   pip install -r requirements.txt

4. Execute a aplicação:

   python main.py

5. Abra um navegador e acesse:

   http://localhost:5000

A aplicação roda por padrão em `localhost:5000` com `debug=True` (útil para desenvolvimento). Para produção, ajuste `debug=False` e utilize um servidor WSGI (gunicorn/uvicorn) ou um container Docker.

---

## Funcionalidades presentes

- Formulário de cadastro/login (frontend): nome, e-mail, senha, CEP, endereço, número, complemento.
- Validação de senha no frontend (precisa ter ao menos 1 letra maiúscula, 1 minúscula e até 8 caracteres).
- Busca automática de endereço a partir do CEP usando a API ViaCEP.
- Ao enviar o formulário, o backend apenas imprime os dados no terminal e redireciona para a página `/imoveis`.
- Página de catálogo com carrossel de imagens renderizado pelo Flask.

---


