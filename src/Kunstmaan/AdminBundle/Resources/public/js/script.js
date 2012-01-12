/* Author: Indri

*/
$(document).ready(function () {
	init_datePicker();
	init_tree();
});

// JS-tree
function init_tree() {
	$('#tree').jstree({
		"themes" : { 
			"theme" : "OMNext",
			"dots" : true,
			"icons" : true		
		},
		"types" : {
			"types" : {
				//Page
				"page" : {
					"icon" : {
						"image" : "libs/themes/OMNext/d.png",
						"position" : "-57px -57px" 
					}
				},				
				//Site
				"site" : {
					"icon" : {
						"image" : "libs/themes/OMNext/d.png",
						"position" : "-75px -38px" 
					}
				},
				//Settings
				"settings" : {
					"icon" : {
						"image" : "libs/themes/OMNext/d.png",
						"position" : "-57px -37px" 
					}
				}
			}
		
		
		},		
		"plugins" : [ "themes", "html_data", "types" ]
	});

}


// DATEPICKER
function init_datePicker() {
	$('.date-pick').datePicker();
}










