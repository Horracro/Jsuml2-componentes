'use strict'

					var width = 800;
					var height = 400;
					var div = document.getElementById( "nodoPadre" );
					div.setAttribute( 'class', 'ud_diagram_div' );
					div.style.width = width + 'px';
					div.style.height = height + 'px';
					var canvas = document.createElement('canvas');

					canvas.setAttribute( 'class', 'ud_diagram_canvas' );
					canvas.width = width;
					canvas.height = height;
					var mainContext = canvas.getContext('2d');
					div.appendChild( canvas );
					canvas = document.createElement('canvas');
					canvas.setAttribute( 'class', 'ud_diagram_canvas' );
					canvas.width = this.width;
					canvas.height = this.height;
					canvas.onmousedown = function () { return false; }
					var motionContext = canvas.getContext('2d');
					

					var d1 = new UMLUseCaseDiagram({backgroundNodes: "#ff9900"});
					d1.initialize( 1, div, mainContext, motionContext, width, height );
					
					var d2 = new UMLClassDiagram({backgroundNodes: "#ff9900"});
					d2.initialize( 1, div, mainContext, motionContext, width, height );