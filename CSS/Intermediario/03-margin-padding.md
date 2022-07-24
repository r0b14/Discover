# Margin

Espaços entre os elementos

- margin-top | margin-right | margin-bottom | margin-left  
- valeus: `<length>` | `<percentage>` | auto

```css
div {
    /* shorthand */
    margin: 12px 16px 10px 4px; top-right-bottom-left
    margin: 12px 16px 0; top-right-left-bottom
    margin: 8px 16px; -> top-bottom | right-left
    margin: 8px; all
}

```

* Cuidado com margin collapsing ( top se ajunta ao bottom )

# Padding

Preenchimento interno da caixa

- padding-top | padding-right | padding-bottom | padding-left  
- valeus: `<length>` | `<percentage>`

```css

div {
    /* shorthand */
    padding: 12px 16px 10px 4px; top-right-bottom-left
    padding: 12px 16px 0; top-right-left-bottom
    padding: 8px 16px; -> top-bottom | right-left
    padding: 8px; all
}

```

* Padding poderá causar diferença na largura de um elemento