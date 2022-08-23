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

## `<input type="url" />`

- Espera que o usuário digite uma `url`.
- Irá validar se o valor digitado é uma url.

### Atributos

- placeholder -> dicas para o usuario
- readonly / disabled
- valeu -> dicas para o usuario

- required (validação)
    * obrigatório

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
    * valor numérico indicando o tamanho do campo.

- pattern
    * Uso de expressão regular para validar o campo
    * exemplo: o usuário só poderá colocar domínio .com.br
        * pattern= ".*\.com\.br\/.*"

- list 
    * o id de uma tag `<datalist>` que está no mesmo documento
    * `<datalist>` irá conter uma lista de valores pré definidos a fim de sugerir ao usuário quais valores estão disponíveis.
        * Os valores do `<datalist>` que não forem compativeis com o campo, não serão apresentados como sugestão

- title
    * vai dá uma descrição do que é solicitado no campo. Caso os dados inseridos sejam coibidos de serem processados.

- spellcheck
    * Habilitar a verificação ortográfica para este input


## `<input type="file" />`

- Usuário poderá escolher 1 ou mais **arquivos** para enviar no formulário.

### Atributos

- value
    * contém o arquivo a ser enviado

- accept
    * descreve que tipos de arquivos serão aceitos, tendo em vista que por padrão serão vários tipos de arquivos aceitos.
    * exemplo: .doc, .docx, .pdf, audio/*, video/*, image/png, .png, image/*(será aceito todo tipo de imagem) => (/*) todo tipo de.

- files
    * a lista de arquivo ou arquivos

- multiple
    * permite o envio de múltiplos arquivos
    * chave boolean

#### Envio dos arquivos

Para envio dos arquivos o formulário deverá utilizar o método POST e o atributo enctype como "multipart/form-data"

```HTML
    <form action="" method="post" enctype="multipart/form-data">
        <input type="file"
        value=""
        accept=".doc"
        multiple
        />
    </form>
```


## `<input type="color" />`

- Interface para selecionar cor
- Color picker

### Atributos
- value: RGB
    * se inválido, o preto será exibido

- list
    * o id de uma tag `<datalist>` que está no mesmo documento
    * `<datalist>` irá conter uma lista de valores pré definidos a fim 
        * Os valores do `<datalist>` que não forem compatíveis com o campo

```HTML
    <datalist id="colorsdata">
        <option>#00ff00</option>
    </datalist>

    <form action="" method="post" enctype="multipart/form-data">
        <input type="color"
        value="rgb"
        list="colorsdata"
        />
    </form>
```


## `<input type="checkbox" >`

- Caixas que podem ser marcadas
- Selecionar um valor para ser enviado
- Se não selecionado, não será enviado nenhum dado

### Atributos

- globais

- value
    * valor que aquele campo contém
    * se não estiver presente, o padrão é 'on'
    * é a descrição que vai assumir assim que marcar e essa descrição será enviada para o backend.
    
- checked
    * para deixar o campo marcado por padrão

```HTML
    <label for="subscribe"> Receber notificações </label>
    <input type="checkbox" name="subscribe" id="subscribe">
```

#### Multipas marcações

- Usaremos o atributo 'name' com o mesmo nome para os diversos campos

```HTML
    <fieldset>
        <legend> Choose your interests </legend>
        <div>
            <input type="checkbox" name="coding" id="interest" value="coding" checked>
            <label for="coding"> Coding </label>
        </div>
        <div>
            <input type="checkbox" name="music" id="interest" value="music" checked>
            <label for="music"> Music </label>
        </div>
    </fieldset>
```

## `<input type="hidden" id="timestamp" name="timestamp" valeu="1286705410">`

- invisivel ao usuario
- será enviado com o formulário
- não receberá foco
- leitores de tela não percebem esse campo

### Atributos

- value
    * nesse caso, geralmente usado para poder capturar o horário em que o formulário foi enviado.

- name
    * a forma que vai ser identificado no backend


## `<input type="radio">`

- Projetado para selecionar uma única opção de um grupo de opções

### Atributos

- checked
    * indica que o campo foi marcado

- valeu
    valor que aquele campo contém


## `<input type="textarea">`

- mais de uma linha
- útil para textos grandes

### Atributos

- id -> identificar qual o meu text area (o for é ligado com o id, caso tenha um label)
- name -> quando enviarmos o nosso formulário o name vai ser enviado para o backend.
- rows e cols -> colunas e linhas. Definir o tamanho inicial 
- maxlength e minlength -> máximo e mínimo que recebe.
- wrap -> quebrar linha automático - padrão = soft (quebra automática)
... outros comuns aos `<inputs>'s`
    - autocomplete, autofocus, disabled, placeholder, readonly, form, required.