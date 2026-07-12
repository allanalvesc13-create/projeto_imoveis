# 🏠 Projeto Aluguel de Imóveis

Uma aplicação web moderna para exibir um formulário de cadastro e um catálogo de imóveis com carrossel interativo de imagens. Desenvolvido com **Flask** (backend em Python) e front-end responsivo em **HTML/CSS/JavaScript**.

---

## ✨ Funcionalidades

✅ **Página inicial** - Formulário elegante de cadastro/login com validação  
✅ **Processamento de dados** - Recebimento seguro de informações do usuário  
✅ **Galeria de imóveis** - Listagem com carrossel interativo de fotos  
✅ **Interface responsiva** - Adaptada para desktop, tablet e mobile  
✅ **Busca de CEP** - Integração com APIs para preenchimento automático de endereço  
✅ **Servimento de arquivos estáticos** - CSS, JS e imagens no mesmo diretório  

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| **Python** | 3.8+ | Linguagem backend |
| **Flask** | 2.0+ | Framework web Python |
| **HTML5** | - | Estrutura das páginas |
| **CSS3** | - | Estilização responsiva |
| **JavaScript** | ES6+ | Interatividade e validação |

---

## 📋 Requisitos

- **Python** 3.8 ou superior
- **pip** (gerenciador de pacotes Python)
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

---

## 🚀 Instalação Rápida

### 1️⃣ Clonar/Copiar o Projeto
```bash
cd C:\Users\allan\OneDrive\Documentos\aluguel_projeto
```

### 2️⃣ Criar Ambiente Virtual (Recomendado)

**PowerShell:**
```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

**CMD:**
```cmd
python -m venv .venv
.\.venv\Scripts\activate
```

### 3️⃣ Instalar Dependências
```bash
pip install -r requirements.txt
```

---

## 🏃 Como Executar

```bash
python main.py
```

A aplicação iniciará em modo **debug** e estará disponível em:

| Rota | Descrição |
|------|-----------|
| `http://localhost:5000/` | Página inicial com formulário |
| `http://localhost:5000/imoveis` | Galeria de imóveis com carrossel |

**Nota:** A aplicação escuta em `0.0.0.0:5000`, permitindo acesso via IP da máquina (útil para acessar pelo celular).

---

## 📁 Estrutura do Projeto

```
aluguel_projeto/
├── main.py                 # Aplicação Flask com rotas principais
├── requirements.txt        # Dependências do projeto
├── index.html             # Página de cadastro/login
├── imoveis.html           # Página de galeria com carrossel
├── a.css                  # Estilos CSS da aplicação
├── apps.js                # Scripts JavaScript (validação, CEP, etc.)
├── README.md              # Este arquivo
└── imagens/               # Pasta com imagens dos imóveis
    ├── Gemini_Generated_Image_*.png
    └── ...
```

---

## 🔧 Componentes Principais

### `main.py` - Backend Flask

Três rotas principais:

1. **`GET /`** - Retorna a página de login
2. **`POST /login`** - Processa os dados do formulário
3. **`GET /imoveis`** - Exibe galeria com carrossel de imagens

### `index.html` - Formulário de Cadastro

- Campos: Nome, Email, CEP, Endereço, Número
- Validação de entrada no cliente
- Integração com API de CEP para autopreenchimento

### `imoveis.html` - Galeria de Imóveis

- **Carrossel interativo** com botões de navegação
- **Responsivo** - adapta-se a qualquer tamanho de tela
- Exibe informações do imóvel (quartos, banheiros, garagem)
- Contato direto disponível

### `apps.js` - Lógica Front-end

- Busca de CEP via API ViaCEP
- Validação de formulário
- Lógica de navegação do carrossel

### `a.css` - Estilização

- Design moderno e clean
- Responsividade com media queries
- Animações suaves e transições

---

## 📝 Como Usar

### 1️⃣ **Adicionar Novas Imagens**

1. Coloque os arquivos de imagem na pasta `imagens/`
2. Atualize a lista `fotos` em `main.py`:

```python
fotos = [
    'Gemini_Generated_Image_klivgjklivgjkliv.png',
    'sua_nova_imagem.jpg',  # Adicione aqui
    # ...
]
```

### 2️⃣ **Customizar Informações de Imóvel**

Edite o dict `apartamento` em `main.py`:

```python
@app.route('/imoveis')
def listar_imoveis():
    fotos = [...]
    return render_template('imoveis.html', apartamento={
        'fotos': fotos,
        'nome': 'Apartamento no Centro',
        'quartos': 2,
        'banheiros': 1
    })
```

### 3️⃣ **Implementar Autenticação**

A rota `/login` atualmente apenas redireciona. Para adicionar autenticação:

```python
# Adicione validação e armazenamento de dados
# Ex: banco de dados, sessões, etc.
```

---

## ⚙️ Configuração Avançada

### Mudar Porta Padrão

Em `main.py`, altere a última linha:

```python
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)  # Porta 8000
```

### Desabilitar Modo Debug (Produção)

```python
app.run(debug=False, host='0.0.0.0')
```

---

## 🐛 Troubleshooting

| Problema | Solução |
|----------|---------|
| Porta 5000 já em uso | Mude para outra porta em `main.py` |
| Módulo Flask não encontrado | Execute `pip install -r requirements.txt` |
| Imagens não aparecem | Verifique se estão em `imagens/` e atualizar lista em `main.py` |
| CEP não autocompleta | Verifique conexão com internet (API ViaCEP) |

---

## 📚 Próximas Melhorias Sugeridas

- [ ] Implementar banco de dados (SQLite/PostgreSQL)
- [ ] Sistema de autenticação com login/senha
- [ ] Painel admin para gerenciar imóveis
- [ ] API REST para gerenciamento de propriedades
- [ ] Testes automatizados
- [ ] Documentação interativa (Swagger)
- [ ] Deploy em servidor (Heroku, AWS, etc.)

---

## 📄 Licença

Este projeto é de uso livre. Sinta-se à vontade para modificar e distribuir.

---

## 👤 Autor

Desenvolvido como projeto de aprendizado em desenvolvimento web full-stack.

---

## 💬 Suporte

Dúvidas ou sugestões? Abra uma issue ou entre em contato!

---

**Última atualização:** Julho 2026

