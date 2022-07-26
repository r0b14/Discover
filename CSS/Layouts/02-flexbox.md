# Flexbox

* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (Horizontal ou vertical)
* Alinhamento, direcionamento, ordenar e tamanhos

```CSS
    div.parent {
        display: flex;
    }
```

## Flex-direction

* Qual a direção do flex: horizontal ou vertical
* row | column
    row => flex-direction:row -> linhas (padrão)
    column => flex-direction:column -> colunas

## Alinhamento

* justify-content 
    justify-content: space-between -> vai justificar os elementos na mesma linha, porém com um espaçamento entre eles - jogar para as extremidades
    justify-content: center -> vai justificar todos os elementos na mesma linha, porém no centro e sem espaçamento
* align-items

```CSS
body {
  height: 100vh;
  margin: 0;
  
  display: flex;
  align-items: center;
}

.container {
    display: flex;
    justify-content: center;
    width: 100vw;
}
.box {
  width: 50px;
  height: 50px;
  margin-bottom: 8px;
}

.blue {
  background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
```