import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie',
  },
  title: {
    text: 'Статистика розподілу студентів по спеціальностям',
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
  },
  accessibility: {
    point: {
      valueSuffix: '%',
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %',
      },
    },
  },
  series: [
    {
      name: 'Кількість студентів',
      colorByPoint: true,
      data: [
        {
          name: "(122)Комп'ютерні науки",
          y: 1293,
          sliced: true,
          selected: true,
        },
        {
          name: '(121) Інженерія програмного забезпечення',
          y: 1600,
        },
        {
          name: '(113) Прикладна математика',
          y: 574,
        },
        {
          name: '(111) Математика',
          y: 196,
        },
        {
          name: '(105) Прикладна фізика та наноматеріали',
          y: 98,
        },
        {
          name: '(104) Фізика та астрономія',
          y: 69,
        },
        {
          name: '(101) Екологія',
          y: 106,
        },
        {
          name: '(081)Право',
          y: 409,
        },
        {
          name: '(075) Маркетинг',
          y: 258,
        },
        {
          name: '(073) Менеджмент',
          y: 622,
        },
        {
          name: '(061) Журналістика',
          y: 268,
        },
        {
          name: '(054) Соціологія',
          y: 71,
        },
        {
          name: '(051) Економіка',
          y: 505,
        },
        {
          name: '(035) Філологія',
          y: 378,
        },
        {
          name: '(023) Образотворче мистецтво',
          y: 112,
        },
        {
          name: '(124) Системний аналіз',
          y: 494,
        },
        {
          name: '(123) Комп’ютерна інженерія',
          y: 1027,
        },
        {
          name: '(172) Телекомунікації та радіотехніка',
          y: 893,
        },
        {
          name: '(171) Електроніка',
          y: 318,
        },
      ],
    },
  ],
};

export function DiagramInfo(props) {
  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
}
