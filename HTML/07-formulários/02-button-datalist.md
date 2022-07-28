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