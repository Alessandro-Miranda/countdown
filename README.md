# Countdown

## Descrição

Countdown é um utilitário JavaScript que pode ser utilizado tanto para aplicações React como, também, utilizado em conjunto no HTML.

Através de uma data alvo, que é passada como argumento para o método, é retornado um objeto contendo a diferença dos dias, horas, minutos e segundos, da data atual até a data alvo, e, também, um booleano indicando se já se encerrou o período desejado, com atualização a cada 1 segundo. Quando utilizado em conjunto com React, é recebido uma função de dispatch (setState) para alterar os valores e gerar a re-renderização do componente

__Obs.:__ O projeto é uma adaptação - inspirada no countdown presente no [treinamento da vtex](https://github.com/vtex-trainings/store-block-template) sobre blocos customizados - utilizada em projetos e necessidades diárias.

## Instalação

Para a utilização com HTML, basta colar o script abaixo no seu arquivo principal e já terá acesso a funcionalidade de countdown invocando o método *countdown()*

```html
<script src="https://alessandro-miranda.github.io/countdown/downloads/countdown.browser.js" type="text/javascript"></script>
```

*Para utilizar com TypeScript é possível baixar as [declaração de tipo da função](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.d.ts) e outras [tipagens](https://github.com/Alessandro-Miranda/countdown/tree/main/downloads) presentes na pasta __types__.*

Ou é possível fazer o [download](https://github.com/Alessandro-Miranda/countdown/tree/main/downloads) dos arquivos necessários e realizar a inserção e os imports dentro do seu projeto, diretamente da pasta onde o arquivo for salvo.

- Para utilizar com React basta baixar o código do [countdown](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.js)
- Para utilziar com React + TypeScript, baixar as [tipagens](https://github.com/Alessandro-Miranda/countdown/tree/main/downloads) presentes na pasta _types_, o código do [countdown](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.js) e sua [definição de tipos](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.d.ts)
## Uso

Os exemplos de uso podem ser encontrados também na pasta [examples](https://github.com/Alessandro-Miranda/countdown/tree/main/examples) separados em cada caso de uso e com variações um pouco mais completas de como utilizar e invocar o metódo.

### HTML

O argumento passado para a função **countdown** deve ser uma string com uma data em formato válido, de preferência como: **ano-mês-dia** e, também, uma função que será responsável por atualizar o tempo que falta até a data alvo especificada no primeiro parâmetro.

```js
// Exemplo passando uma string contendo somente a data alvo
const { days, hours, minutes, seconds } = countdown('2021-01-20', updateTimeRemaining);

// Exemplo passando a data e hora alvo
const { days, hours, minutes, seconds } = countdown('2021-01-20T23:59:30', updateTimeRemaining);

const { hasFinished } = countdown('2021-01-20');

if (hasFinished) {
    // Faça alguma coisa caso chegue a data especificada
}
```

### React

Ao utilizar com React, deve-se passar uma função de dispatch para atualizar o state do componente como no exemplo:

Adicione a cdn ao arquivo index.html do projeto ou faça [download do arquivo ](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.js) e faça o import diretamente das pastas do projeto.

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

Para utilziar com o typescript, além de baixar o [código](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.js) do módulo, também é necessário baixar a [tipagem](https://github.com/Alessandro-Miranda/countdown/tree/main/downloads/types) utilizada e, também, [a definição de tipos](https://github.com/Alessandro-Miranda/countdown/blob/main/downloads/countdown.d.ts).

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

## Licença

O Countdown está licenciado sob a licença [MIT](https://github.com/Alessandro-Miranda/countdown/blob/main/LICENSE.md).