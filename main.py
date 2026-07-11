from flask import Flask, jsonify, request, send_from_directory, redirect, url_for, render_template
import requests
import os
import re

# Configura o Flask para buscar os arquivos na mesma pasta do main.py
app = Flask(__name__, static_folder='.', static_url_path='', template_folder='.')

# 1. ROTA PRINCIPAL: Abre o seu formulário (index.html)
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')   

# 2. ROTA DE LOGIN: Recebe os dados e redireciona para os imóveis
@app.route('/login', methods=['POST'])
def login():
    # Pega os dados enviados pelo formulário
    username = request.form.get('username')
    email = request.form.get('email')
    cep = request.form.get('cep')
    endereco = request.form.get('endereco')
    numero = request.form.get('numero')

    # Mostra os dados recebidos direto no terminal do VS Code
    print(f"\n=== NOVO CADASTRO RECEBIDO ===")
    print(f"Nome: {username}")
    print(f"Email: {email}")
    print(f"CEP: {cep}")
    print(f"Endereço: {endereco}, Nº {numero}")
    print(f"===============================\n")
    
    # EM VEZ DE RETORNAR JSON: Redireciona para a página de imóveis
    return redirect(url_for('listar_imoveis'))

# 3. ROTA DE IMÓVEIS: Abre a página imoveis.html com as fotos
@app.route('/imoveis')
def listar_imoveis():
    fotos = [
        'Copilot_20260708_160717.png',
        'Gemini_Generated_Image_klivgjklivgjkliv.png',
        'Gemini_Generated_Image_o3sm1zo3sm1zo3sm - Copia.png',
        'Gemini_Generated_Image_8g1h7j8g1h7j8g1h.png',
        'Gemini_Generated_Image_9ikg2j9ikg2j9ikg.png',
        'Gemini_Generated_Image_uwlmucuwlmucuwlm.png',
        'Gemini_Generated_Image_uz0b48uz0b48uz0b.png'
    ]
    return render_template('imoveis.html', apartamento={'fotos': fotos})

# O bloco abaixo deve ficar SEMPRE no final do arquivo
if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0') # O host permite acessar pelo IP do celular também