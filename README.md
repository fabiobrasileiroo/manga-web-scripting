# Manga Web Scripting

## Descrição

O projeto *Manga Web Scripting* é uma API para extrair imagens de capítulos de mangás a partir de uma URL fornecida. A API usa o `express` para criar um servidor web e o `swagger-ui-express` para fornecer uma interface interativa para a documentação da API.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript do lado do servidor.
- **Express**: Framework para criar servidores web.
- **Swagger UI Express**: Interface para documentação da API.
- **YAMLJS**: Carregador de arquivos YAML para configuração do Swagger.
- **CORS**: Middleware para permitir solicitações de origens diferentes.

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/your-username/manga-web-scripting.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd manga-web-scripting
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

## Configuração

Certifique-se de ter o arquivo de especificação Swagger (`swagger.yaml`) na raiz do diretório do projeto.

## Uso

1. Inicie o servidor:

    ```bash
    npm start
    ```

    O servidor estará disponível em `http://localhost:3000`.

2. Acesse a documentação da API via Swagger UI:

    Navegue até `http://localhost:3000/api-docs` no seu navegador para acessar a interface Swagger.

## Rotas

### GET /api-docs

Retorna a interface Swagger UI para a documentação da API.

## CORS

O CORS está configurado para permitir todas as origens. Isso pode ser ajustado conforme necessário no arquivo `src/index.js`.

## Estrutura do Projeto

- `src/index.js`: Arquivo principal que configura o servidor Express, middleware CORS, e Swagger UI.
- `swagger.yaml`: Arquivo de especificação Swagger para a documentação da API.

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir uma issue ou enviar um pull request. 

## Licença

Este projeto está licenciado sob a Licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Para dúvidas ou mais informações, entre em contato com [seu-email@dominio.com](fabio.h591@gmail.com).

