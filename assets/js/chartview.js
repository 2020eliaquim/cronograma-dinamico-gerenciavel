const contextPie = document.getElementById('chartPie');
const contextBar = document.getElementById('progress-bar');

const dataContent = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
        label: 'My first dataset',
        backgroundColor: [
            'blue',
            'red',
            'green',
            'yellow',
            'brown',
            'silver'
        ],
        data: [15, 22, 55, 100, 98, 8],
    }]
};

const dataContentBar = {
    labels: [
        'Colheita de Café',
        'Transporte até a usinda de lavagem',
        'Lavagem dos grãos',
        'torrefação dos grão',
        'Teste de produto',
        'Divisões de porções',
        'enpacotamento do produto',
        'Carregamento do transporte',
        'Entrega nos pontos de venda',
    ],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 25, 63, 15, 88],
    backgroundColor: [
      'red',
      'blue',
      'green',
      'yellow',
      'silver',
      'black',
      'grey',
      'violet',
      'pink'
    ]
  }]
}

const config = {
    type: 'pie',
    data: dataContent,
}

const configBar = {
    type: 'bar',
    data: dataContentBar,
    options: {
        indexAxis: 'y',
    },
}

const ChartPie = new Chart(contextPie, config);

const CharBar = new Chart(contextBar, configBar);