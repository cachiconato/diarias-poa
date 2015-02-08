var tableid = '1P9RV33IwVqQ2pNInbjVLGfqbQKb4mQhp2TQ_Bxet'
//var query = 'SELECT NOMEPESSOA,EXERCICIO,NOME_ORGAO,NOME_PROJATIV,EMPENHO,EMPENHADO,LIQUIDADO FROM ' + tableid
var query = 'SELECT ID_ZPRT_DESP_COM_DIARIAS,ORGAO,LIQUIDADO FROM ' + tableid
var queryPais = 'SELECT ORGAO FROM ' + tableid
var key = 'AIzaSyCmJqyDLGq5UEcn0hpFO4hVhb5q74gVyLw'
var url = 'https://www.googleapis.com/fusiontables/v2/query?sql=' + query + '&key=' + key

google.load("visualization", "1", {packages:["treemap"]})
google.setOnLoadCallback(fetchDataFromFusionTables);

function drawChart(bla) {
	
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
	$.get('https://www.googleapis.com/fusiontables/v2/query?sql=' + queryPais + '&key=' + key, function(pais) {
		console.log(pais)
		$.get(url, function(filhos) {
			console.log(filhos)
			var table = [ filhos.columns ].concat([['LIXO', null, 0]]).concat(filhos.rows)
			var lixo = []
			_.each(pais.rows, function(el) {
				if (lixo.indexOf(el[0]) == -1) { 
					lixo = lixo.concat(el[0]);
					table = table.concat([[el[0],'LIXO',0]]) 
				}
			})
			drawChart(table);
		} )	
	} )

}