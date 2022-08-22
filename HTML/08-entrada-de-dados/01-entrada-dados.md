# Entrada de dados

## `<input>`
- Um dos mais usados em formulários
- Aceita os mais diversos tipos de dados
- Um dos mais poderosos e complexos
- Elevado número de combinações

### Atributos

- type -> vai definir qual o tipo de dados (tipo) -- A grande maioria vai sair atribuida ao type. 
- name -> vai definir um nome.
- id -> atribuir um identificado ao input.

## Atributos comuns `<input>`

- **autocomplete** -> vai autocompletar conforme for digitando. Porém as informações de complemente vão depender do navegador.
- **autofocus (boolean)**-> assim que carregar a página ele vai focar no elemento. O cursor vai p/ o autofocus e começa a piscar. OBS:É só um por página. 
- **disabled (boolean)** -> vai desabilitar a entrada
- **readonly (boolean)** -> permite que o valeu não seja alterado (quase todos)
- **valeu** -> é um preview do que você deseja recebe fno input, porém vc pode apagar o que está, desde que você ative o `disabled`.
    ```html
        <input type="text" value="Digita a senha">
    ``` 
- **form** -> vai permitir que o input seja linkado com algum formulário, caso o formulário esteja fora. Porém é preciso usar o atributo `name`.
- **name** -> permite alencar com um input separado do form.
- **required (boolean)** -> permitir que o input seja obrigatório (quase todos)
- **placeholder** -> password, search, tel, text, url -> é um preview do que você deseja recebe no input, porém ele some quando começa a digitar. O placeholder não substitui o `<label>`. (quase todos)
    ```html
        placeholder="Digita a senha"
    ```

## `<input type="password">`

- Colocar uma senha de maneira segura
- Esconde o que está sendo digitado no campo
- O estilo da apresentação do campo, depende o User Agent (navegador).

### Atributos

- minlength / maxlength
    * O numero mínimo e/ou máximo de caracteres para este campo.
        ```html
            <form action="">
                <input type="password" 
                    minlength="4" -> minimo de caracteres que quero receber
                    maxlength="8" -> maximo de caracteres que vou permitir
                >
                <button type="submit">Enviar</button>
            </form>
        ```
- size
    * Demonstra de forma vizual o tamanho do campo do formulário
    * O número aceitável de caracteres que esse campo deverá conter
    * O tamanho do campo que vai receber a senha

- pattern
    * Expressão regular para validar o que está sendo digitado no campo
    * altamente recomendado o uso de um padrão de segurança alta de senhas
    * Exemplo: queremos que a senha contenha caracteres hexadecimais com o limite de no mínimo 4 e no máximo 8 caracteres.
        * pattern = "[0-9 a-f A-F]{4,8}"
        ```html
        <form action="">
            <input type="password" 
            pattern="[0-9a-fA-F]{4,8}"
            title="Insira uma senha que contenha HEX no mínimo 4 caracteres e no máximo 8 caracteres e no máximo 8 caracteres"
            placeholder="coloque a sua senha"
            >

            <button type="submit">Enviar</button>
        </form>
        ```

- placeholder
    * mostra um exemplo de texto a ser digitado no campo

- readonly / disabled
    * atributo booleano indicando se o campo está habilitado ou não

- required
    * O campo será obrigatório
    ```html
        <form action="">
            <input type="password" 
            pattern="[0-9a-fA-F]{4,8}"
            title="Insira uma senha que contenha HEX no mínimo 4 caracteres e no máximo 8 caracteres e no máximo 8 caracteres"
            placeholder="coloque a senha senha"
            required
            >

            <button type="submit">Enviar</button>
        </form>
    ```
- inputmode
    * poderá alterar o uso do teclado em smartphones
    * exemplo: queremos que o cliente só adicione números
        * inputmode="numeric"
        ```html
            inputmode="numeric"
        ```

- autocomplete
    * on: permite a sugestão de: new-password ou current-password (padrão)
    * off: desabilita a opção de autocompletar
    * new-password: o navegador poderá sugerir uma nova senha
        ```html
          autocomplete="new-password"
      ```
---
## `<input type="email">`

- Espera que o usuário digite um e-mail
- Irá validar se o valor digitado é um e-mail

### Atributos

- placeholder
- readonly / disabled
- valeu

- required
    * obrigatório

- multiple
    * O campo irá receber 1 ou mais e-mails, separados por vírgulas.

- minlength / maxlength
    * O mínimo e/ou máximo valor que o campo irá conter
        `minlength="8"`
        Evita que hackers tentem extrapolar o limite de caracteres recebidos.

- size
    * valor numérico indicando quantos caracteres esse

- pattern
    * Uso de expressão regular para validar o campo
    * exemplo: o usuário só poderá colocar e-mail do domínio rockeatseat.com.br
        ` pattern=".+@rockeatseat\.com\.br"`
        ```html
            <input type="email" 
            placeholder="Email"
            pattern=".+@rockeatseat\.com\.br"
            title="Somente e-mail da rockeatseat serão aceitos."
            >
        ```
- list
    * o id de uma tag <datalist> que está no mesmo documento
    * <datalist> irá conter uma lista de valores pré definidos a fim de sugerir ao usuário, quais valores estão disponíveis
        * Os valores do <datalist> que não forem compatíveis com o campo, não serão apresentados como sugestão
        ```html
            <form action="">

            <datalist id="emailslist">
                <option>@gmail.com</option>
                <option>@hotmail.com</option>
                <option>@rockeatseat.com</option>
            </datalist>

            <input type="email"
                list="emailslist"
                placeholder="Email"
                pattern=".+@rockeatseat\.com\.br"
                title="Somente e-mail da rockeatseat serão aceitos."
                >

            <button type="submit">Enviar</button>
        </form>
        ```
- title
    * vai dá uma descrição do que é solicitado no campo. Caso os dados inseridos sejam coibidos de serem processados.

## `<input type="email">`

- Espera que o usuário digite uma url
- Irá validar se o valor digitado é uma url
### Atributos

- placeholder
- readonly / disabled
- valeu

- required
    * obrigatório

- multiple
    * O campo irá receber 1 ou mais e-mails, separados por vírgulas.

- minlength / maxlength
    * O mínimo e/ou máximo valor que o campo irá conter
        `minlength="8"`
        Evita que hackers tentem extrapolar o limite de caracteres recebidos.

    ``` HTML
        <form action="">
            <input type="url"
            required
            placeholder="http://example.com"
            value="http://example.com"
            >
            <button type="submit">Enviar</button>
        </form>
    ```
- size
    * valor numérico indicando quantos caracteres esse

- pattern
    * Uso de expressão regular para validar o campo
    * exemplo: o usuário só poderá colocar domínio .com.br
        * pattern= ".*\.com\.br\/.*"
        
- title
    * vai dá uma descrição do que é solicitado no campo. Caso os dados inseridos sejam coibidos de serem processados.