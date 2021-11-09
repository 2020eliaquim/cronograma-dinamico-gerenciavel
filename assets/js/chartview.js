const contextPie = document.getElementById('chartPie');
const contextBar = document.getElementById('progress-bar');

const contextPie1 = document.getElementById('chartPie1');
const contextBar1 = document.getElementById('progress-bar1');

const dataContent = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [{
        label: '',
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
    label: 'Tarefas em % de Conclusão',
    data: [65, 59, 80, 81, 56, 25, 63, 15, 88],
    backgroundColor: 'blue',
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
        scales: {
            x: {
                ticks: {
                    callback: function(value, index, values) {
                        return value + "%";
                    }
                }
            }
        },
        responsive: false,
    },
}

const ChartPie = new Chart(contextPie, config);
const CharBar = new Chart(contextBar, configBar);

const ChartPie1 = new Chart(contextPie1, config);
const CharBar1 = new Chart(contextBar1, configBar);