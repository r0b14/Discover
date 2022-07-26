# Page Layouts

    - Tables -> eram as teblas que seu usavam
    - Floats e clear -> elementos flutuantes (r,l)
    - Frameworks e Grid Systems -> eram grades que separavam a tela.
    - Flexbox -> Posicionar elementos
    - Grid -> facilidade para poder posicionar os elementos na tela

## Posicionamentos

    Controlar onde, na página, o elemento irá ficar, alterando o fluxo normal dos elementos.

    - Name: position
    - Valeu: static | relative | absolute | fixed
        - static -> ele vai seguir o padrão, um abaixo do outro. O fluxo normal
        - relative ( position: relative) 
        - absolute (position: absolute)
        - fixed (position: fixed)

### Relative

    Quando aplicamos a propriedade `relative` ao objeto abrimos um leque de possibilidades para poder aplicar outros atributos
      É como se todos estivessem no mesmo plano... porém há como uma sobrepor a outra (caixa).
        5 propriedades: 
        - top | right | bottom | left | z-index

        ```CSS
            .box {
                width:150px;
                height: 150px;
                margin-bottom: 8px;
            }
            .box1 {
                background-color: red;
                position: relative;
                left: 155px;
                top: 240px;
            }
            .box2 {
                background-color: blue;
            }
            .box3 {
                background-color: green;
            }
        ```

### Absolute

    A propriedade `absolute` é como se tivesse criado um novo plano sobre os outros elementos. O espaço que fica em aberto quando movemos os elementos usando `relative` não existe quando usamos o `absolute`. - quebra de fluxo -
    Ele vai ser `absolute` em relação a sua página completa.
    
        ```CSS
            .box {
                width:150px;
                height: 150px;
                margin-bottom: 8px;
            }
            main {
                margin-top: 400px;
            }
            .box1 {
                background-color: red;
                position: absolute;
                left: 200px;
                top: 40px;
            }
            .box2 {
                background-color: blue;
            }
            .box3 {
                background-color: green;
            }
        ```
### Fixed

    Permite que a caixa fique fixa na página. Todos os outros elementos vão se mover, exeto ele.
    - top | bottom | left | right

### Element Stacking

    Empilhamento de elementos
    `z-index`
    ```CSS
        .box {
            width: 150px;
            height: 150px;
            margin-bottom: 8px;
        }
        .box1 {
            background-color: red;
            position: absolute;
            left: 9px;
            top: 9px;
            z-index: 4;
        }
        .box2 {
            background-color: green;
            position: absolute;
            left: 13px;
            top: 13px;
            z-index: 2;
        }
        .box3 {
            background-color: blue;
            position: absolute;
            left: 18px;
            top: 18px
        }
        