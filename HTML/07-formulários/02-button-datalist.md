## `<button>`

- Representa um botão
- Usado para enviar formulários
- É estilizado pelo user agent

Atributos comuns

- type
    - **submit** -> enviar o formulário
    - **reset** -> limpa o que foi inserido no formulário
    ```html
        <form action="">
            <input type="text" value="Teste de texto">
            <button type="reset">
                Clear
            </button>
        </form>
    ```
    - **button** -> as vezes alguns navegadores entendem que é pra enviar. 
- **autofocus** -> se caso tiver só um elemento com essa propriedade, você vai poder apertar a tecla Enter e pode enviar o form. É como se tivesse um foco nele.
- **disabled** -> fica desabilitado. não pode ser enviado. Legal usar usando javascript.
- **name** -> permite uma melhor compreensão quando recebe os dados
- **valeu** -> está atrelado ao name
- **form** -> vai linkar a algum formulário qualquer
---
## `<datalist>`

- Lista de valores como sugestão a uma tag `<input>`
- Valores sugestivos e não obrigatório
- Usuários poderão selecionar um dos valores, ou colocar um valor diferente da sugestão.

```html
```

`<list>`

- Recebe como valor o id de um <datalist> residente no mesmo documento.

### Tipos de input suportados

- text, search, url, tel, email, data, month, week, time, datetime-local, number, range e color.

    * valores de datalist que não são compatíveis com o tipo do `<input>` não serão apresentados.

### Tipos de input não suportados (conforme especificação)

- hidden, password, checkbox, radio, file, ou qualquer tipo de button.

User Agent

- Verifica a compatibilidade com o browser https://caniuse.com