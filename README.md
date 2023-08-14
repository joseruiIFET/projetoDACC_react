# Cadastro de Professores: Projeto Front-end React

Bem-vindo ao projeto de Cadastro de Professores! Este projeto é uma aplicação front-end construída com React que interage com uma API REST de cadastro de professores. Neste `README`, você encontrará instruções detalhadas sobre como configurar, instalar e executar o projeto.

## Índice

- [Cadastro de Professores: Projeto Front-end React](#cadastro-de-professores-projeto-front-end-react)
  - [Índice](#índice)
  - [Pré-requisitos](#pré-requisitos)
  - [Configuração do Ambiente](#configuração-do-ambiente)
  - [Instalação](#instalação)
  - [Execução](#execução)
  - [Funcionalidades](#funcionalidades)
  - [Estrutura do Projeto](#estrutura-do-projeto)
  - [Disponibilizando na Rede Local](#disponibilizando-na-rede-local)
  - [Licença](#licença)

## Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes softwares instalados em sua máquina:

- [Node.js](https://nodejs.org/) (que vem com o npm - um gerenciador de pacotes para JavaScript).

## Configuração do Ambiente

1. **Node.js e npm**: O React é construído com JavaScript e requer o Node.js para execução. Se você ainda não tem o Node.js instalado, siga para [nodejs.org](https://nodejs.org/) e baixe a versão recomendada.

2. **Verifique a instalação**: Após a instalação, você pode verificar se tudo correu bem executando:

```bash
node -v
npm -v
```

Estes comandos devem exibir as versões do Node.js e npm, respectivamente.

## Instalação

1. **Clone este repositório**: 

```bash
git clone https://link-do-seu-repositório.git
```

2. **Navegue até o diretório do projeto**:

```bash
cd caminho-para-o-diretório-do-projeto
```

3. **Instale as dependências**: No terminal, execute o seguinte comando para instalar todas as dependências necessárias:

```bash
npm install
```

## Execução

Após a instalação das dependências, você pode executar o projeto com:

```bash
npm start
```

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação no navegador padrão.

## Funcionalidades

- **Listagem de Professores**: Veja todos os professores cadastrados em uma tabela organizada.
- **Adição de Professores**: Use um formulário para adicionar novos professores à lista.
- **Edição de Professores**: Edite as informações dos professores diretamente da lista.
- **Exclusão de Professores**: Remova professores da lista conforme necessário.

## Estrutura do Projeto

O projeto segue uma estrutura modular:

- `src/`: Contém todo o código fonte da aplicação.
- `src/components/`: Guarda os componentes React.
- `src/api/`: Funções para interagir com a API REST.
- `src/models/`: Define os modelos de dados usados no projeto.

## Disponibilizando na Rede Local

Para acessar sua aplicação React a partir de dispositivos diferentes na mesma rede local, siga os seguintes passos:

1. **Configuração do Endereço de Host**:
   
    - Abra o arquivo `package.json` localizado no diretório raiz do seu projeto.
    - Localize o script de início, geralmente denominado `"start"`. O padrão é: `"start": "react-scripts start"`.
    - Modifique-o para: `"start": "HOST=0.0.0.0 react-scripts start"`. Esta configuração permite que o servidor de desenvolvimento ouça todas as solicitações de IP, tornando-o acessível na rede local.

2. **Identificar o Endereço IP Local**:

    - Você precisa descobrir o endereço IP do computador onde o servidor React está em execução. Em sistemas baseados em UNIX (como Linux e macOS), você pode fazer isso com o comando `ifconfig`. Em sistemas Windows, use o comando `ipconfig`.

3. **Acessando a Aplicação**:

    - Após iniciar sua aplicação com `npm start` ou `yarn start`, em vez de usar `localhost:3000` em seu navegador, use `http://SEU_ENDEREÇO_IP:3000`.

4. **Nota Importante**: 

    - Ao

 fazer essa alteração, sua aplicação React ainda tentará acessar a API no endereço `localhost:8080` (ou o endereço definido em seu código). Se sua API também precisa ser acessível a partir de outros dispositivos na rede, certifique-se de configurá-la adequadamente e de atualizar o endereço no código da aplicação React.

5. **Precauções de Segurança**: 

    - Ao definir o HOST como `0.0.0.0`, você pode tornar sua máquina vulnerável na rede. Sempre garanta que você está fazendo isso em um ambiente seguro e confiável, e lembre-se de reverter essa configuração antes de fazer deploy em ambientes de produção.

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.