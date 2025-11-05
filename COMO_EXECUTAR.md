# 🌐 Como Executar no Navegador

## ✅ Servidor HTTP Ativo

O servidor HTTP Python está rodando na porta **8081**.

## 🔗 Links para Acesso

### Opção 1: Localhost (se estiver na mesma máquina)
```
http://localhost:8081
```

### Opção 2: IP Local (para acesso na rede local)
Para descobrir seu IP local, execute:
```bash
hostname -I
```

Depois acesse no navegador:
```
http://SEU_IP:8081
```

## 📱 Projetos Disponíveis

### 1. EstudaAI (index.html principal)
- **URL:** `http://localhost:8081/index.html`
- **Descrição:** Plataforma de estudos inteligente com upload de PDFs, resumos, mapas mentais e simulados

### 2. Quiz sobre IA (projeto alternativo)
- Os arquivos `script.js` e `style.css` parecem ser de um quiz sobre Inteligência Artificial
- Para usar este projeto, você precisaria criar um HTML separado ou renomear os arquivos

## 🚀 Como Abrir no Google Chrome

### Método 1: Copiar e Colar
1. Abra o Google Chrome
2. Copie este link: `http://localhost:8081/index.html`
3. Cole na barra de endereços
4. Pressione Enter

### Método 2: Linha de Comando (Linux)
```bash
google-chrome http://localhost:8081/index.html
```

ou

```bash
xdg-open http://localhost:8081/index.html
```

### Método 3: Linha de Comando (Windows)
```cmd
start chrome http://localhost:8081/index.html
```

### Método 4: Linha de Comando (Mac)
```bash
open -a "Google Chrome" http://localhost:8081/index.html
```

## 🛑 Para Parar o Servidor

Para parar o servidor HTTP, execute:
```bash
pkill -f "python3 -m http.server 8081"
```

## 📝 Notas Importantes

- O servidor está rodando em **background** (segundo plano)
- Todos os arquivos no diretório `/vercel/sandbox` estão acessíveis
- O projeto EstudaAI usa bibliotecas externas (PDF.js, Google Fonts) que serão carregadas da internet

## 🔧 Troubleshooting

Se o link não funcionar:
1. Verifique se o servidor está rodando: `ps aux | grep "http.server"`
2. Verifique se a porta 8081 está livre: `netstat -tuln | grep 8081`
3. Tente usar `127.0.0.1` ao invés de `localhost`: `http://127.0.0.1:8081`
