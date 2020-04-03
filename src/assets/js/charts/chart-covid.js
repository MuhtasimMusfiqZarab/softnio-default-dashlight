"use strict";

!function (NioApp, $) {
  "use strict"; // Vector Map

  var worldMap = {
    map: 'world_en',
    data: {
      "af": "16.63",
      "al": "11.58",
      "dz": "158.97",
      "ao": "85.81",
      "ag": "1.1",
      "ar": "351.02",
      "am": "8.83",
      "au": "1219.72",
      "at": "366.26",
      "az": "52.17",
      "bs": "7.54",
      "bh": "21.73",
      "bd": "105.4",
      "bb": "3.96",
      "by": "52.89",
      "be": "461.33",
      "bz": "1.43",
      "bj": "6.49",
      "bt": "1.4",
      "bo": "19.18",
      "ba": "16.2",
      "bw": "12.5",
      "br": "2023.53",
      "bn": "11.96",
      "bg": "44.84",
      "bf": "8.67",
      "bi": "1.47",
      "kh": "11.36",
      "cm": "21.88",
      "ca": "1563.66",
      "cv": "1.57",
      "cf": "2.11",
      "td": "7.59",
      "cl": "199.18",
      "cn": "5745.13",
      "co": "283.11",
      "km": "0.56",
      "cd": "12.6",
      "cg": "11.88",
      "cr": "35.02",
      "ci": "22.38",
      "hr": "59.92",
      "cy": "22.75",
      "cz": "195.23",
      "dk": "304.56",
      "dj": "1.14",
      "dm": "0.38",
      "do": "50.87",
      "ec": "61.49",
      "eg": "216.83",
      "sv": "21.8",
      "gq": "14.55",
      "er": "2.25",
      "ee": "19.22",
      "et": "30.94",
      "fj": "3.15",
      "fi": "231.98",
      "fr": "2555.44",
      "ga": "12.56",
      "gm": "1.04",
      "ge": "11.23",
      "de": "3305.9",
      "gh": "18.06",
      "gr": "305.01",
      "gd": "0.65",
      "gt": "40.77",
      "gn": "4.34",
      "gw": "0.83",
      "gy": "2.2",
      "ht": "6.5",
      "hn": "15.34",
      "hk": "226.49",
      "hu": "132.28",
      "is": "12.77",
      "in": "1430.02",
      "id": "695.06",
      "ir": "337.9",
      "iq": "84.14",
      "ie": "204.14",
      "il": "201.25",
      "it": "2036.69",
      "jm": "13.74",
      "jp": "5390.9",
      "jo": "27.13",
      "kz": "129.76",
      "ke": "32.42",
      "ki": "0.15",
      "kr": "986.26",
      "undefined": "5.73",
      "kw": "117.32",
      "kg": "4.44",
      "la": "6.34",
      "lv": "23.39",
      "lb": "39.15",
      "ls": "1.8",
      "lr": "0.98",
      "ly": "77.91",
      "lt": "35.73",
      "lu": "52.43",
      "mk": "9.58",
      "mg": "8.33",
      "mw": "5.04",
      "my": "218.95",
      "mv": "1.43",
      "ml": "9.08",
      "mt": "7.8",
      "mr": "3.49",
      "mu": "9.43",
      "mx": "1004.04",
      "md": "5.36",
      "mn": "5.81",
      "me": "3.88",
      "ma": "91.7",
      "mz": "10.21",
      "mm": "35.65",
      "na": "11.45",
      "np": "15.11",
      "nl": "770.31",
      "nz": "138",
      "ni": "6.38",
      "ne": "5.6",
      "ng": "206.66",
      "no": "413.51",
      "om": "53.78",
      "pk": "174.79",
      "pa": "27.2",
      "pg": "8.81",
      "py": "17.17",
      "pe": "153.55",
      "ph": "189.06",
      "pl": "438.88",
      "pt": "223.7",
      "qa": "126.52",
      "ro": "158.39",
      "ru": "1476.91",
      "rw": "5.69",
      "ws": "0.55",
      "st": "0.19",
      "sa": "434.44",
      "sn": "12.66",
      "rs": "38.92",
      "sc": "0.92",
      "sl": "1.9",
      "sg": "217.38",
      "sk": "86.26",
      "si": "46.44",
      "sb": "0.67",
      "za": "354.41",
      "es": "1374.78",
      "lk": "48.24",
      "kn": "0.56",
      "lc": "1",
      "vc": "0.58",
      "sd": "65.93",
      "sr": "3.3",
      "sz": "3.17",
      "se": "444.59",
      "ch": "522.44",
      "sy": "59.63",
      "tw": "426.98",
      "tj": "5.58",
      "tz": "22.43",
      "th": "312.61",
      "tl": "0.62",
      "tg": "3.07",
      "to": "0.3",
      "tt": "21.2",
      "tn": "43.86",
      "tr": "729.05",
      "tm": 0,
      "ug": "17.12",
      "ua": "136.56",
      "ae": "239.65",
      "gb": "2258.57",
      "us": "14624.18",
      "uy": "40.71",
      "uz": "37.72",
      "vu": "0.72",
      "ve": "285.21",
      "vn": "101.99",
      "ye": "30.02",
      "zm": "15.69",
      "zw": "5.57"
    }
  };

  function jqvmap_init() {
    var elm = '.vector-map';

    if ($(elm).exists() && typeof $.fn.vectorMap === 'function') {
      $(elm).each(function () {
        var $self = $(this),
            _self_id = $self.attr('id'),
            map_data = eval(_self_id);

        $self.vectorMap({
          map: map_data.map,
          backgroundColor: 'transparent',
          borderColor: '#dee6ed',
          borderOpacity: 1,
          borderWidth: 1,
          color: '#ccd7e2',
          enableZoom: false,
          hoverColor: '#9cabff',
          hoverOpacity: null,
          normalizeFunction: 'linear',
          scaleColors: ['#ccd7e2', '#798bff'],
          selectedColor: '#6576ff',
          showTooltip: true,
          values: map_data.data,
          onLabelShow: function onLabelShow(event, label, code) {
            var mapData = JQVMap.maps,
                what = Object.keys(mapData)[0],
                name = mapData[what].paths[code]['name'];
            label.html(name + ' - ' + (map_data.data[code] || 0));
          }
        });
      });
    }
  }

  ;
  NioApp.coms.docReady.push(jqvmap_init);
  var confirmedCases = {
    labels: ["22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan", "31 Jan", "01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb", "08 Feb", "09 Feb", "10 Feb", "11 Feb", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb", "17 Feb", "18 Feb", "19 Feb", "20 Feb", "21 Feb", "22 Feb", "23 Feb", "24 Feb", "25 Feb", "26 Feb", "27 Feb", "28 Feb", "29 Feb"],
    dataUnit: 'People',
    lineTension: 0.1,
    datasets: [{
      label: "Infected",
      color: "#816bff",
      background: 'transparent',
      data: [1254, 1354, 1650, 1752, 1820, 2200, 2400, 2500, 2545, 2700, 2790, 2900, 3000, 3200, 3500, 4000, 4400, 4800, 5800, 6900, 8000, 9900, 11542, 14000, 17000, 21054, 28000, 36000, 45000, 55000, 70500, 81900, 91054, 105421, 135400, 149254, 176345, 192544, 214524]
    }, {
      label: "Deadths",
      color: "#e85347",
      background: 'transparent',
      data: [140, 186, 202, 265, 322, 365, 398, 442, 462, 491, 521, 542, 566, 586, 611, 624, 684, 701, 731, 768, 799, 826, 1145, 1454, 1645, 2117, 3545, 4541, 5451, 6454, 7645, 8754, 9875, 12545, 14545, 17541, 19465, 23005, 28545]
    }]
  };

  function lineCovidCase(selector, set_data) {
    var $selector = selector ? $(selector) : $('.covid-case-line-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          label: _get_data.datasets[i].label,
          tension: _get_data.lineTension,
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].color,
          pointBorderColor: "transparent",
          pointBackgroundColor: "transparent",
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: _get_data.datasets[i].color,
          pointBorderWidth: 2,
          pointHoverRadius: 3,
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 3,
          data: _get_data.datasets[i].data
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'line',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            labels: {
              boxWidth: 30,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          },
          scales: {
            yAxes: [{
              display: true,
              ticks: {
                beginAtZero: false,
                fontSize: 12,
                fontColor: '#9eaecf',
                padding: 10,
                callback: function callback(value) {
                  return Math.abs(value) > 999 ? Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + ' k' : Math.sign(value) * Math.abs(value);
                },
                min: 1000,
                stepSize: 5000
              },
              gridLines: {
                color: "#e5ecf8",
                tickMarkLength: 0,
                zeroLineColor: '#e5ecf8'
              }
            }],
            xAxes: [{
              display: false,
              ticks: {
                fontSize: 9,
                fontColor: '#9eaecf',
                source: 'auto',
                padding: 10
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: 'transparent'
              }
            }]
          }
        }
      });
    });
  } // init chart


  NioApp.coms.docReady.push(function () {
    lineCovidCase();
  });
  var dailyIncrease = {
    labels: ["22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan", "31 Jan", "01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb", "08 Feb", "09 Feb", "10 Feb", "11 Feb", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb", "17 Feb", "18 Feb", "19 Feb", "20 Feb", "21 Feb", "22 Feb", "23 Feb", "24 Feb", "25 Feb", "26 Feb", "27 Feb", "28 Feb", "29 Feb"],
    dataUnit: 'People',
    lineTension: 0.1,
    datasets: [{
      label: "Infected",
      color: "#816bff",
      background: '#816bff',
      data: [1254, 1354, 1650, 1752, 1820, 2200, 2400, 2500, 2545, 2700, 2790, 2900, 3000, 3200, 3500, 4000, 4400, 4800, 5800, 6900, 8000, 9900, 11542, 14000, 17000, 21054, 28000, 36000, 45000, 55000, 70500, 81900, 91054, 105421, 135400, 149254, 176345, 192544, 214524]
    }, {
      label: "Deadths",
      color: "#e85347",
      background: '#e85347',
      data: [140, 186, 202, 265, 322, 365, 398, 442, 462, 491, 521, 542, 566, 586, 611, 624, 684, 701, 731, 768, 799, 826, 1145, 1454, 1645, 2117, 3545, 4541, 5451, 6454, 7645, 8754, 9875, 12545, 14545, 17541, 19465, 23005, 28545]
    }]
  };
  var dailyIncreaseCountry = {
    labels: ["22 Jan", "23 Jan", "24 Jan", "25 Jan", "26 Jan", "27 Jan", "28 Jan", "29 Jan", "30 Jan", "31 Jan", "01 Feb", "02 Feb", "03 Feb", "04 Feb", "05 Feb", "06 Feb", "07 Feb", "08 Feb", "09 Feb", "10 Feb", "11 Feb", "12 Feb", "13 Feb", "14 Feb", "15 Feb", "16 Feb", "17 Feb", "18 Feb", "19 Feb", "20 Feb", "21 Feb", "22 Feb", "23 Feb", "24 Feb", "25 Feb", "26 Feb", "27 Feb", "28 Feb", "29 Feb"],
    dataUnit: 'People',
    datasets: [{
      label: "Infected",
      color: "#9cabff",
      background: "#9cabff",
      data: [1140, 1186, 1202, 2265, 2822, 3065, 3145, 3654, 3945, 4117, 4221, 4454, 4645, 4754, 5145, 5317, 5545, 6717, 6945, 7241, 7451, 8954, 9145, 9454, 9645, 10117, 10545, 11541, 12044, 13454, 14645, 15754, 16875, 17545, 19545, 20541, 22465, 25005, 28545]
    }, {
      label: "Deadths",
      color: "#e85347",
      background: "#e85347",
      data: [340, 486, 502, 665, 822, 965, 1045, 1154, 1245, 1317, 1321, 1404, 1445, 1454, 1485, 1501, 1545, 1517, 1564, 1581, 1601, 1624, 1645, 1654, 1685, 1697, 1705, 1741, 1744, 1784, 1845, 1854, 1875, 1895, 1905, 1941, 1965, 2005, 2545]
    }]
  };

  function barCovidcase(selector, set_data) {
    var $selector = selector ? $(selector) : $('.covid-case-bar-chart');
    $selector.each(function () {
      var $self = $(this),
          _self_id = $self.attr('id'),
          _get_data = typeof set_data === 'undefined' ? eval(_self_id) : set_data;

      var selectCanvas = document.getElementById(_self_id).getContext("2d");
      var chart_data = [];

      for (var i = 0; i < _get_data.datasets.length; i++) {
        chart_data.push({
          label: _get_data.datasets[i].label,
          tension: _get_data.lineTension,
          backgroundColor: _get_data.datasets[i].background,
          borderWidth: 2,
          borderColor: _get_data.datasets[i].color,
          data: _get_data.datasets[i].data,
          barPercentage: .7,
          categoryPercentage: .7
        });
      }

      var chart = new Chart(selectCanvas, {
        type: 'bar',
        data: {
          labels: _get_data.labels,
          datasets: chart_data
        },
        options: {
          legend: {
            display: _get_data.legend ? _get_data.legend : false,
            labels: {
              boxWidth: 12,
              padding: 20,
              fontColor: '#6783b8'
            }
          },
          maintainAspectRatio: false,
          tooltips: {
            enabled: true,
            callbacks: {
              title: function title(tooltipItem, data) {
                return data['labels'][tooltipItem[0]['index']];
              },
              label: function label(tooltipItem, data) {
                return data.datasets[tooltipItem.datasetIndex]['data'][tooltipItem['index']] + ' ' + _get_data.dataUnit;
              }
            },
            backgroundColor: '#eff6ff',
            titleFontSize: 13,
            titleFontColor: '#6783b8',
            titleMarginBottom: 6,
            bodyFontColor: '#9eaecf',
            bodyFontSize: 12,
            bodySpacing: 4,
            yPadding: 10,
            xPadding: 10,
            footerMarginTop: 0,
            displayColors: false
          },
          scales: {
            yAxes: [{
              display: true,
              stacked: true,
              ticks: {
                beginAtZero: true,
                fontSize: 12,
                fontColor: '#9eaecf',
                padding: 10,
                callback: function callback(value) {
                  return Math.abs(value) > 999 ? Math.sign(value) * (Math.abs(value) / 1000).toFixed(1) + ' k' : Math.sign(value) * Math.abs(value);
                },
                stepSize: 5000
              },
              gridLines: {
                color: "#e5ecf8",
                tickMarkLength: 0,
                zeroLineColor: '#e5ecf8'
              }
            }],
            xAxes: [{
              display: false,
              stacked: true,
              ticks: {
                fontSize: 9,
                fontColor: '#9eaecf',
                source: 'auto',
                padding: 10
              },
              gridLines: {
                color: "transparent",
                tickMarkLength: 0,
                zeroLineColor: 'transparent'
              }
            }]
          }
        }
      });
    });
  } // init chart


  NioApp.coms.docReady.push(function () {
    barCovidcase();
  });
}(NioApp, jQuery);