# Projeto Selenium

Projeto simples de automação de testes usando Selenium WebDriver com Node.js.

## Pré-requisitos

- Node.js instalado
- Google Chrome instalado

## Instalação

```
npm install
```

### ChromeDriver

Este projeto usa um ChromeDriver local (pasta `drivers/`, ignorada pelo git) em vez do
Selenium Manager automático, pois foi detectado um ChromeDriver antigo no PATH do sistema
(instalado junto com o Python) que conflita com a versão do Chrome instalada.

Para baixar o ChromeDriver compatível com a sua versão do Chrome:

1. Veja sua versão do Chrome em `chrome://version`.
2. Baixe o ChromeDriver correspondente em https://googlechromelabs.github.io/chrome-for-testing/
3. Extraia o `chromedriver.exe` para a pasta `drivers/` na raiz do projeto.

## Executar os testes

```
npm test
```

O teste abre o Google, pesquisa por "Selenium WebDriver" e verifica se o título da página contém "Selenium".
# Projeto-Selenium
