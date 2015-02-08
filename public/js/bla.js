var tableid = '1P9RV33IwVqQ2pNInbjVLGfqbQKb4mQhp2TQ_Bxet'
//var query = 'SELECT NOMEPESSOA,EXERCICIO,NOME_ORGAO,NOME_PROJATIV,EMPENHO,EMPENHADO,LIQUIDADO FROM ' + tableid
var query = 'SELECT NOME_PROJATIV,NOME_ORGAO,LIQUIDADO FROM ' + tableid
var key = 'AIzaSyCmJqyDLGq5UEcn0hpFO4hVhb5q74gVyLw'
var url = 'https://www.googleapis.com/fusiontables/v2/query?sql=' + query + '&key=' + key

google.load("visualization", "1", {packages:["treemap"]})
google.setOnLoadCallback(fetchDataFromFusionTables);

function drawChart(res) {
	
	var bla = [ res.columns ].concat(res.rows);
	console.log(res)
	console.log(bla)
	var data = google.visualization.arrayToDataTable(bla);
	
	var tree = new google.visualization.TreeMap(document.getElementById('treeGraph'));

	tree.draw(data, {
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