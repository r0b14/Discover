# Entrada de dados

## `<input>`
- Um dos mais usados em formulários
- Aceita os mais diversos tipos de dados
- Um dos mais poderosos e complexos
- Elevado número de combinações

### Atributos

- type -> vai definir qual o tipo de dados (tipo)
- name
- id

## Atributos comuns `<input>`

- autocomplete -> vai autocompletar conforme for digitando
- autofocus (boolean)-> assim que carregar a página ele vai focar no elemento. É só um por página.
- disabled (boolean) -> vai desabilitar a entrada
- readonly (boolean) -> permite que o valeu não seja alterado
- valeu -> é um preview do que você deseja recebe no input
    ```html
        <input type="text" value="Digita a senha">
    ``` 
- form -> vai permitir que o input seja linkado com algum formulário
- name 
- required (boolean) -> permitir que o input seja obrigatório
- placeholder -> password, search, tel, text, url -> é um preview do que você deseja recebe no input, porém ele some quando começa a digitar. O placeholder não substitui o `<label>`.
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
                    minlength="4"
                    maxlength="8"
                >
                <button type="submit">Enviar</button>
            </form>
        ```
- size
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
    * on: permite a sugestão de: new-password ou current-password
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