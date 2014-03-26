// Copyright (c) 2014 International Aid Transparency Initiative (IATI)
// Licensed under the MIT license whose full text can be found at http://opensource.org/licenses/MIT


var view_main=exports;
exports.name="main";

var ctrack=require("./ctrack.js")
var plate=require("./plate.js")
var iati=require("./iati.js")
var fetch=require("./fetch.js")

var views=require("./views.js")

// the chunk names this view will fill with new data
view_main.chunks=[
	"table_active_datas",
	"table_ended_datas",
];

//
// Perform ajax call to get numof data
//
view_main.view=function(args)
{

	views.main.chunks.forEach(function(n){ctrack.chunk(n,"{spinner}");});

	views.planned.chunks.forEach(function(n){ctrack.chunk(n,"{spinner}");});
	views.active.chunks.forEach(function(n){ctrack.chunk(n,"{spinner}");});
	views.ended.chunks.forEach(function(n){ctrack.chunk(n,"{spinner}");});
	views.stats.chunks.forEach(function(n){ctrack.chunk(n,"{spinner}");});
	views.donors_top.chunks.forEach(function(n){ctrack.chunk(n,"{spinner}");});


	ctrack.setcrumb(0);
	ctrack.change_hash();

	views.planned.ajax({output:"count"});
	views.active.ajax({output:"count"});
	views.ended.ajax({output:"count"});
	views.stats.ajax();
	
	views.active.ajax({limit:5,plate:"{table_active_data}",chunk:"table_active_datas"});
	views.ended.ajax({limit:5,plate:"{table_ended_data}",chunk:"table_ended_datas"});
	
// do fake ajax calls here
	views.donors_top.ajax();

	views.heatmap.ajax({limit:200});
}