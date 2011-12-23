// Author: Indri & Ibe
$(document).ready(function () {
	init_tree();
	init_DragDrop();
	init_main_functions();
	initTop();
	initDel();
	initCancel();
});

// JS-tree
function init_tree() {
	$('#tree').jstree({
		"plugins" : [ "themes", "html_data", "types", "search" ],
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
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-57px -57px" 
					}
				},				
				//Site
				"site" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-75px -38px" 
					}
				},
				//Settings
				"settings" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-57px -37px" 
					}
				},
				//Image
				"image" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-20px -74px" 
					}
				},
				//Video
				"video" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-75px -55px" 
					}
				},
				//Slideshow
				"slide" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-2px -72px" 
					}
				},
				//Files
				"files" : {
					"icon" : {
						"image" : "/bundles/kunstmaanadmin/js/libs/themes/OMNext/d.png",
						"position" : "-38px -72px" 
					}
				}
			}
		
		
		},
		// Configuring the search plugin
		"search" : {
			"ajax" : {
			    "url" : "", //<-- Link naar php
			    "data" : function (str) {
			        return {
			            "operation" : "search",
			            "search_str" : str
			        };
			    }
			}
		}
	});
	$("#search").click(function() {
		$(this).jstree("search", document.getElementById("searchVal").value);
	});
	
	
}

//Drag and Drop
function init_DragDrop() {
	$('#pageparts').sortable({  
	    handle: '.prop_bar',  
	    cursor: 'move',  
	    placeholder: 'placeholder',  
	    forcePlaceholderSize: true, 
		revert: 100,
	    //opacity: 0.4
	    opacity: 1,
		start: function(e, ui) {
			$('.draggable').css('opacity', ".4");
		},
		stop: function(e, ui) {
			$('.draggable').css('opacity', "1");
		}
	    //containment: 'document'
	})  
	.disableSelection();
}

 

//Drop down main_actions
function init_main_functions() {
	$(window).scroll(
		function() {
			var scrollTop = $(this).scrollTop();
			if(scrollTop >= 180){
				$('.main_actions_top').addClass('slideDown');
			}
			
			if(scrollTop < 180){
				$('.main_actions_top').removeClass('slideDown');
			}		
		}
	);
}

///// Toplink /////
function initTop() {
	$(".up").click(function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, 700);
	});
}

///// Media-Grid Helper /////
function initDel() {
	$('.media-grid .del').live("mouseover mouseout", function(e) {
		if (e.type == "mouseover") {
			$(this).parent().find('.item').addClass('warning');
			$(this).parent().find('.helper').html('Delete').addClass('warning');
		} else {
			$(this).parent().find('.item').removeClass('warning');
			$(this).parent().find('.helper').html('Click to edit').removeClass('warning');
		}
	});
}

function initCancel() {
	$('.modal .btn.cancel').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().modal('hide');
	});
	$('.modal form .btn.cancel').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().parent().modal('hide');
	});
}
























