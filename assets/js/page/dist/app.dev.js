"use strict";

Highcharts.chart('container', {
  chart: {
    type: 'line',
    height: 387
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
      label: {
        connectorAllowed: false
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
    name: 'Buleleng',
    data: [4329, 2708, 4205, 1197, 1287, 1611, 3541, 4835, 1522, 2054, 1232, 3457]
  }]
});
$(document).ready(function _callee() {
  var result, total_data, update, _update;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("https://covid19.mathdro.id/api/countries/ID"));

        case 2:
          result = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(result.json());

        case 5:
          total_data = _context.sent;

          // kondisi
          if (result['status'] == 200) {
            count('number_positive', total_data.confirmed.value);
            count('number_died', total_data.deaths.value);
            count('number_recovered', total_data.recovered.value);
            count('number_hero', 13);
            update = new Date(total_data.lastUpdate);
            document.getElementById('last_update').innerText = "update terakhir : " + update.getDate() + "-" + (update.getMonth() + 1) + "-" + update.getFullYear() + " " + update.getHours() + ":" + update.getMinutes() + ":" + update.getSeconds();
          } else {
            count('number_positive', 385980);
            count('number_died', 13205);
            count('number_recovered', 309219);
            count('number_hero', 13);
            _update = new Date(total_data.lastUpdate);
            document.getElementById('last_update').innerText = "update terakhir : 24-10-2020 19:24:23";
          } // end


        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
});

function count($id, $target) {
  var count = new CountUp($id, 0, $target);
  count.start();
}