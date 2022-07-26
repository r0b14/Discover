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
        - static -> ele vai seguir o padrão, um abaixo do outro.
        - relative ->

### Relative

    Quando aplicamos a propriedade `relative` ao objeto abrimos um leque de possibilidades para poder aplicar outros atributos
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

    A propriedade `absolute` é como se tivesse criado um novo plano sobre os outros elementos. 