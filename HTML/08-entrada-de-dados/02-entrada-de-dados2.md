## `<select>`

- Controle que fornece um menu de opções

## `<option>`

- Contém as opções a serem selecionadas
- Atributos Necessários
    * valeu

### Atributos únicos

- multiple
    Habilita múltiplas opções

- size
    Quando opções visíveis?

``` HTML
    <!-- o valeu ficar guardado no name quando o formulário é enviado -->
    <label for="carselect">Qual modelo do carro</label>
    <select name="carmodel" id="carselect" >
        <option value="">Selecione o Modelo</option>
        <option value="Fiat">Uno</option>
        <option value="Volkswagen">Nirvus</option>
    </select>
```
### `<optgroup>`

- cria grupos para que haja seleção ou divisão de elementos partindo de um grupo.

```HTML
    <!-- optgroup -->

    <label> Please choose one or more pets:
        <select name="pets" multiple size="8">
            <optgroup label="Pets loves">
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster" disabled >Hamster</option>
            </optgroup>
            <optgroup label="Pets flying">
                <option value="parrot">Parrot</option>
                <option value="macaw">Macaw</option>
                <option value="albatross">Albatross</option>
            </optgroup>
        </select>
    </label>
```

## `<input type="search">`

- Para campos de busca
- E igual ao campo do tipo 'text' mas poderá ser um pouco diferente dependendo do user agent

### Atributos

- list / `<datalist>`
- pattern -> permitir que a expressão que seja inserida possa ser baseada em critérios
- aria-label -> ajuda com acessibilidade, porém fica invisível. leitores de tela.

```HTML
    <form action="">
        <label for="">Pesquisar o ID</label>
        <input type="search" name="id"
        size="5"
        pattern="[0-9]{2}"
        title="Digite o número do ID: 99">
        <button>Pesquisar</button>
    </form>
```


## `<input type="number" />`

- Entrada de Números

### Atributos

- min/max - não confunda com a quantidade... é o número de contagem inicial.
- step -> a forma como os números vão ser acrescentados ou decrementados... 10 em 10 ou 100 em 100 ...
- list -> vai linkar com o datalist

```HTML
    <form action="">
        <label for="">Pesquisar o ID</label>
        <input type="search" name="id"
        size="5"
        pattern="[0-9]{2}"
        title="Digite o número do ID: 99">
        <button>Pesquisar</button>
    </form>
```


## `<input type="range" />`

- Controle para selecionar um valor numérico
- Slider ou dial control
- não trás muita precisão numérica

### Atributos

- min/max - não confunda com a quantidade... é o número de contagem inicial e o max permitido.
- valeu -> numero que vai ser inicial 
- step -> a forma como os números vão ser acrescentados ou decrementados... 10 em 10 ou 
(granualidade)

```HTML
<input type="range" min="-10" max="200" step="10">  
```


## `<inputs> novos`

Outros campos interessantes
(mas que ainda não tem um ótimo suporte)

Fique de olho em https://caniuse.com

``` HTML
<input type="date">
<input type="datetime-local">
<input type="time">
```