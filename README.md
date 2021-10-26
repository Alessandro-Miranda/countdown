# Countdown

## Descrição

Countdown é um módulo JavaScript que pode ser utilizado tanto para aplicações React como, também, utilizado em conjunto no HTML.

Através de uma data alvo, que é passada como argumento para o método, é retornado um objeto contendo a diferença dos dias, horas, minutos e segundos, da data atual até a data alvo, e, também, um booleano indicando se já se encerrou o período desejado, com atualização a cada 1 segundo. Quando utilizado em conjunto com React, é recebido uma função de dispatch (setState) para alterar os valores e gerar a re-renderização do componente

## Instalação

Para a utilização com HTML, basta colar o script abaixo no seu arquivo principal e já terá acesso a funcionalidade de contador acessando o método *countdown*

```html
<script src="url_da_cdn_aqui"></script>
```

Também é possível copiar o código [aqui](url) e realizar a inserção dentro do seu projeto e realizar os imports diretamente da pasta onde o arquivo for salvo.

## Uso

### HTML

O argumento passado para a função **countdown** deve ser uma string com uma data em formato válido, de preferência como: **ano-mês-dia**

```js
// Exemplo passando uma string contendo somente a data alvo
const { days, hours, minutes, seconds } = countdown('2021-01-20');

// Exemplo passando a data e hora alvo
const { days, hours, minutes, seconds } = countdown('2021-01-20T23:59:30');

const { hasFinished } = countdown('2021-01-20');

if (hasFinished) {
    // Faça alguma coisa caso chegue a data especificada
}
```

### React

Ao utilizar com React, pode-se passar uma função de dispatch para atualizar o state do componente como no exemplo:

```jsx
// Exemplo básico de utilização com React
function Countdown(props) {

    const [ timeRemaining, setTimeRemaining ] = useState({});

    useEffect(() => {
        // Se tiver chegado a data alvo, para as atualizações do componente 
        if(timeRemaining.hasFinished) return;

        // Data alvo, função de atualização de state
        countdown(props.targetDate, setTimeRemaining)
    }, [timeRemaining])

    return (
        <>
            <span>{timeRemaining.days}</span>
            <span>{timeRemaining.hours}</span>
            <span>{timeRemaining.minutes}</span>
            <span>{timeRemaining.seconds}</span>
        </>
    );
}
```

Exemplo básico de utilização utilizando React e typescript

Adicione a cdn ao arquivo index.html do projeto ou copie o [código]() e cole em um arquivo dentro do seu projeto e realize o import da forma padrão

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Desafio 1 do Hirging Coders #2" />

        <title>Your page</title>
    </head>

    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

        <script src="link_cdn"></script> <!--Link da cdn -->
    </body>

</html>
```

Após adicionar a CDN ao index.html, é possível ter acesso ao tipo TimeSplit: Objeto definindo cada valor (dias, horas, minutos, segundos e se o período de tempo chegou ao fim).

```tsx
// Countdown.tsx
// Exemplo com o pacote baixado e colocado localmente no projeto
import { TimeSplit } from '{your-file-path}';

type Props = {
    targetDate: string;
    // Outras props...
}

function Countdown({ targetDate }: Props) {
    const [ timeRemaining, setTimeRemaining ] = useState<TimeSplit>({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
        hasFinished: false
    });

    useEffect(() => {
        // Se tiver chegado a data alvo, para as atualizações do componente 
        if(timeRemaining.hasFinished) return;

        // Data alvo, função de atualização de state
        countdown(props.targetDate, setTimeRemaining)
    }, [timeRemaining])

    return (
        <>
            <span>{timeRemaining.days}</span>
            <span>{timeRemaining.hours}</span>
            <span>{timeRemaining.minutes}</span>
            <span>{timeRemaining.seconds}</span>
        </>
    );
}
```

## Desenvolvimento

Para adaptar as funcionalidades para as necessidades de uso, ou somente colaborar com o projeto, basta clonar o templete e utilizar para realizar as modificações.

## Licença

O Countdown está licensiado sob a licença [MIT](https://github.com/Alessandro-Miranda/countdown/blob/main/LICENSE.md).