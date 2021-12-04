# Projeto Vue.js "aulacp109"

Para o desenvolvimento do projeto utilizou-se da [API do IBGE](https://servicodados.ibge.gov.br/api/docs/localidades#api-Distritos-estadosUFDistritosGet) para mapear Estados e regiões a partir de cada estado

Ao acessar `/locations` realiza-se uma consulta na API para buscar todos os estados e popular um componente `select`.
A partir da opção selecionada no componente, busca-se pela mesma API as regiões presentes no estado informado.

![](https://github.com/AriTedeschi/vuetify/blob/main/public/ex.png?raw=true)

Para carregar as imagens na página `/challenges` utilizou-se imagens no formato `data:image/png;base64,`, acessando-as por código como neste [exemplo](https://codepen.io/Ariaritedted/pen/ZEXbqqv).


## Para instalar o projeto rode:
```
npm install
```

### Para rodar e compilar o projeto para desenvolver
```
npm run serve
```

### Para distribuir o projeto
```
npm run build
```

### Ajustar arquivos
```
npm run lint
```

### Para modificar as configurações
Veja [documentação](https://cli.vuejs.org/config/).

Telas do projeto:
![](https://github.com/AriTedeschi/vuetify/blob/main/public/resultado.png?raw=true)
![](https://github.com/AriTedeschi/vuetify/blob/main/public/resultado2.png?raw=true)
![](https://github.com/AriTedeschi/vuetify/blob/main/public/resultado3.png?raw=true)
![](https://github.com/AriTedeschi/vuetify/blob/main/public/resultado4.png?raw=true)
![](https://github.com/AriTedeschi/vuetify/blob/main/public/resultado5.png?raw=true)
![](https://github.com/AriTedeschi/vuetify/blob/main/public/resultado6.png?raw=true)
