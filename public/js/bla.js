var tableid = '1P9RV33IwVqQ2pNInbjVLGfqbQKb4mQhp2TQ_Bxet'
//var query = 'SELECT NOMEPESSOA,EXERCICIO,NOME_ORGAO,NOME_PROJATIV,EMPENHO,EMPENHADO,LIQUIDADO FROM ' + tableid
var query = 'SELECT ID_ZPRT_DESP_COM_DIARIAS,NOME_ORGAO,LIQUIDADO FROM ' + tableid
var key = 'AIzaSyCmJqyDLGq5UEcn0hpFO4hVhb5q74gVyLw'
var url = 'https://www.googleapis.com/fusiontables/v2/query?sql=' + query + '&key=' + key

google.load("visualization", "1", {packages:["treemap"]})
google.setOnLoadCallback(fetchDataFromFusionTables);

function drawChart(res) {

  console.log(res.rows);
  var chartData = new google.visualization.DataTable();
  chartData.addColumn('string', 'lixo');
  chartData.addColumn('string', 'Parent');
  chartData.addColumn('number', 'Valor');
  chartData.addColumn('number', 'increase/decrease (color)');

  chartData.addRow(['LIXAO', null, 0, 0]);

  var count = 10;
  _.each(res.rows, function(row) { count+=100; chartData.addRow([row[0], 'LIXAO', row[2], count]) });

	var tree = new google.visualization.TreeMap(document.getElementById('treeGraph'));

	tree.draw(chartData, {
	  minColor: '#f00',
	  midColor: '#ddd',
	  maxColor: '#0d0',
	  headerHeight: 15,
	  fontColor: 'black',
	  showScale: true
});

}

function fetchDataFromFusionTables() {
	$.get(url, drawChart )

}
