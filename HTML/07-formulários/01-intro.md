# Formulários

Para que serve?
- Capturar dados de entrada (input)
- Interação -> 
- Controle -> player de vídeo...

Pré Requisito
- Basico de HTML

Domintar
- Estilização
- Validação
- Controle Customizado
- Javascript

---
## a tag `<form>`

- Elemento que definirá um formulário
- É um container estilo `<section>` `<footer>`

Atributos básicos

- action -> pra onde esse formulário vai ser submetido (enviado)
- method -> definir 2 verbos HTTP POST ou GET (um jeito de enviar os dados)
    - GET -> fica visível (padrão)
    - POST -> fica invisível 

---
## `fieldset` legend

Geralmente são melhores interpretados pelos leitores de tela. Isso permite uma melhor acessibilidade

- Agrupamento de campos
- mesmo propósito
- semântico
- acessibilidade

Atributos Especiais

- Disabled -> fica desabilitado o formulário
    - desabilita todos os elementos internos
    - não serão enviados ao submeter
    ``` HTML
        <form action="" method="">
            <fieldset disabled>
                <legend class="contatos">Contatos</legend>

                <label for="">Nome</label>
                <input type="text">
            </fieldset>
        </form>
    ```
- form
    - Esse atributo vai permitir que o seu `<fieldset>` seja linkado (ligado) junto ao form através do id
    - o id de um formulário ao qual esse fieldset pertence
    - não precisa estar dentro do formulário
    ```HTML
        <form id="contato" action="" method="">
            <button>Enviar</button>
        </form>

        <fieldset form="contatos">
            <legend class="contatos">Contatos</legend>

            <label for="">Nome</label>
            <input type="text">
        </fieldset>
    ```
- name
    - permite descrever melhor. inserir uma legenda.
    - nome do grupo

    `<legend>`

    - nome do agrupamento
    - primeiro elemento dentro do fieldset

---
## `<label>`

`<label>`

- Associar e indentificar uma (ou mais) tag de entrada de dados
- Acessibilidade
- Você poderá clicar para mudar o foco da entrada de dados

Atributos

- For
    - vai permitir fazer a conexão entre o formulário e a tag label.
    - para fazer a conexão entre este label e a tag de entrada de dados
    - é feita via id do input
    - só funciona com elementos específicos
        - button, input (no hidden), meter, output, progress, select, textarea.
    
    Sem o uso do for 
    ``` HTML
        <label>
            nome completo:
            <input type="text">
        </label>
    ```
    com o uso do for 
    ``` HTML
        <label for="nome"> nome completo: </label>
        <input id="nome" type="text">
    ```