"use strict";

Highcharts.chart('container', {
  chart: {
    type: 'line',
    height: 325
  },
  title: {
    text: 'Statistik Kasus Coronavirus di Bali'
  },
  subtitle: {
    text: 'Source: Static data'
  },
  xAxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  },
  yAxis: {
    title: {
      text: 'Jumlah Kasus'
    }
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
      events: {
        click: function click() {
          alert('You just clicked the graph');
        }
      }
    }
  },
  series: [{
    name: 'Badung',
    data: [2000, 2087, 2039, 2056, 2504, 2609, 2759, 2812, 2943, 3010, 3144, 3534]
  }, {
    name: 'Karangasem',
    data: [1800, 1890, 1900, 2000, 2976, 3000, 3178, 3288, 3398, 3467, 3592, 4213]
  }, {
    name: 'Bangli',
    data: [1320, 1392, 3949, 1147, 4881, 2714, 1258, 2709, 1819, 2558, 2793, 4680]
  }, {
    name: 'Jembrana',
    data: [1669, 3899, 4606, 3353, 1661, 3753, 1256, 3250, 2733, 4388, 1247, 4518]
  }, {
    name: 'Gianyar',
    data: [3147, 3903, 1799, 1925, 1330, 4067, 2285, 2412, 2468, 4640, 1393, 2552]
  }, {
    name: 'Buleleng',
    data: [4329, 2708, 4205, 1197, 1287, 1611, 3541, 4835, 1522, 2054, 1232, 3457]
  }]
});