import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const options = {
  chart: {
    type: 'column',
  },
  title: {
    text: 'Прохідні бали 2020 року по факультетах/інститутах',
  },
  subtitle: {
    text: 'Дані взято: <a href="https://kpi.ua/2020-score">Kpi.ua</a>',
  },
  xAxis: {
    type: 'category',
    labels: {
      rotation: -45,
      style: {
        fontSize: '10px',
      },
    },
  },
  yAxis: {
    min: 180,

    title: {
      text: 'Середній встуаний бал по спеціальностям',
    },
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    pointFormat: 'Середній всупний бал в 2020: <b>{point.y:.1f} балів</b>',
  },
  series: [
    {
      name: 'Population',
      data: [
        ['Економіка', 186.85],
        ['Право', 186.95],
        ['Публічне управління та адмініструваня', 187.3],
        ['Маркетинг', 189.7],
        ['Інженерія програмного забезпечення', 190],
        ['Філолонія(Англ)', 190.45],
        ["Комп'ютерні науки", 190.74],
        ['Журналістика', 193.125],
      ],
      dataLabels: {
        enabled: true,
        rotation: -90,
        color: '#FFFFFF',
        align: 'right',
        format: '{point.y:.1f}', // one decimal
        y: 10, // 10 pixels down from the top
        style: {
          fontSize: '13px',
          fontFamily: 'Verdana, sans-serif',
        },
      },
    },
  ],
};

export function MiddleMarks(props) {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
}
