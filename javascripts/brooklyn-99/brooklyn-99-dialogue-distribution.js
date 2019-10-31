var main = d3.select('main')
		var scrolly = main.select('#scrolly');
		var figure = scrolly.select('figure');
		var article = scrolly.select('article');
		var step = article.selectAll('.step');
		var characters =['Jake','Amy','Charles','Gina',
		'Rosa','Terry','Holt','Hitchcock','Scully','Wuntch',
		'The Vulture','Doug Judy','Kevin','CJ','Teddy','Pimento'];
		//d3.select('#quoteChart').selectAll('li').data(characters).enter().append('li').text(function(d) { return d; });

	//SS1 Chart
	var ss1 = [{"char":"Jake","lines":29.56},{"char":"Amy","lines":11.56},
		{"char":"Charles","lines":12.05},{"char":"Gina","lines":9.77},
		{"char":"Rosa","lines":6.84},{"char":"Terry","lines":11.16},
		{"char":"Holt","lines":14.66},{"char":"Hitchcock","lines":1.22},
		{"char":"Scully","lines":2.52},{"char":"Wuntch","lines":0},
		{"char":"The Vulture","lines":0.16},{"char":"CJ","lines":0},
		{"char":"Doug Judy","lines":0},{"char":"Kevin","lines":0.49},
		{"char":"Teddy","lines":0},{"char":"Pimento","lines":0}];
	
	var ss2 = [{"char":"Jake","lines":28.84},{"char":"Amy","lines":10.16},
		{"char":"Charles","lines":12.02},{"char":"Gina","lines":9.59},
		{"char":"Rosa","lines":6.05},{"char":"Terry","lines":9.52},
		{"char":"Holt","lines":17.58},{"char":"Hitchcock","lines":1.53},
		{"char":"Scully","lines":2.50},{"char":"Wuntch","lines":1.18},
		{"char":"The Vulture","lines":0},{"char":"CJ","lines":0},
		{"char":"Doug Judy","lines":0.35},{"char":"Kevin","lines":0.69},
		{"char":"Teddy","lines":0},{"char":"Pimento","lines":0}];

	var ss3 = [{"char":"Jake","lines":30.02},{"char":"Amy","lines":10.45},
		{"char":"Charles","lines":12.63},{"char":"Gina","lines":8.87},
		{"char":"Rosa","lines":7.16},{"char":"Terry","lines":10.01},
		{"char":"Holt","lines":12.63},{"char":"Hitchcock","lines":1.80},
		{"char":"Scully","lines":2.58},{"char":"Wuntch","lines":0.59},
		{"char":"The Vulture","lines":0.90},{"char":"CJ","lines":0},
		{"char":"Doug Judy","lines":0.75},{"char":"Kevin","lines":0.06},
		{"char":"Teddy","lines":0},{"char":"Pimento","lines":1.52}];
	
	var ss4 = [{"char":"Jake","lines":30.15},{"char":"Amy","lines":11.13},
		{"char":"Charles","lines":10.40},{"char":"Gina","lines":7.05},
		{"char":"Rosa","lines":7.82},{"char":"Terry","lines":10.38},
		{"char":"Holt","lines":15.18},{"char":"Hitchcock","lines":1.50},
		{"char":"Scully","lines":1.85},{"char":"Wuntch","lines":0},
		{"char":"The Vulture","lines":0.16},{"char":"CJ","lines":1.12},
		{"char":"Doug Judy","lines":1.14},{"char":"Kevin","lines":0.17},
		{"char":"Teddy","lines":0.67},{"char":"Pimento","lines":1.40}];
	
	var ss5 = [{"char":"Jake","lines":32.90},{"char":"Amy","lines":12.58},
		{"char":"Charles","lines":9.58},{"char":"Gina","lines":4.74},
		{"char":"Rosa","lines":8.17},{"char":"Terry","lines":9.58},
		{"char":"Holt","lines":14.97},{"char":"Hitchcock","lines":2.46},
		{"char":"Scully","lines":2.29},{"char":"Wuntch","lines":0},
		{"char":"The Vulture","lines":0.28},{"char":"CJ","lines":0},
		{"char":"Doug Judy","lines":0.98},{"char":"Kevin","lines":1.39},
		{"char":"Teddy","lines":0.4},{"char":"Pimento","lines":0.86}];
	
	var ss6 = [{"char":"Jake","lines":33.90},{"char":"Amy","lines":12.17},
		{"char":"Charles","lines":8.61},{"char":"Gina","lines":5.13},
		{"char":"Rosa","lines":7.89},{"char":"Terry","lines":9.14},
		{"char":"Holt","lines":13.96},{"char":"Hitchcock","lines":2.50},
		{"char":"Scully","lines":2.65},{"char":"Wuntch","lines":0.85},
		{"char":"The Vulture","lines":0.42},{"char":"CJ","lines":0.57},
		{"char":"Doug Judy","lines":1.02},{"char":"Kevin","lines":1.17},
		{"char":"Teddy","lines":0},{"char":"Pimento","lines":0}];

		var margin = {top: 20, right: 20, bottom: 50, left: 180},
			width = 960 - margin.left - margin.right,
			height = 500 - margin.top - margin.bottom;

		// set the ranges
		var y = d3.scaleBand()
				.range([height, 0])
				.padding(0.1);

		var x = d3.scaleLinear()
				.range([0, width]);
				
		// append the svg object to the body of the page
		// append a 'group' element to 'svg'
		// moves the 'group' element to the top left margin
		var svg = d3.select("#quoteChart").append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", 
				"translate(" + margin.left + "," + margin.top + ")");


function make_x_gridlines() {
    return d3.axisBottom(x)
    	.ticks(12)
  }

function redrawChart(array) {
// format the data
	d3.selectAll('svg > g > *').remove();
	array.forEach(function(d) {
		d.lines = +d.lines;
	});
	

  // Scale the range of the data in the domains
  x.domain([0, d3.max(array, function(d){ return d.lines; })])
  y.domain(array.map(function(d) { return d.char; }));


  // append the rectangles for the bar chart
  svg.selectAll(".bar")
      .data(array)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("width", function(d) {return x(d.lines); } )
      .attr("y", function(d) { return y(d.char); })
      .attr("height", y.bandwidth()*0.75);


	//add the x Axis
	svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0).tickValues(d3.range(2, d3.max(array, function(d){ return d.lines; }),2 )));

	// add the y Axis
	svg.append("g")
		.call(d3.axisLeft(y).tickSizeOuter(0).tickSize(0));
	svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
	  .style("font-size","15px")
	  .style("font-family", "Open Sans")
      .text("Distribution of Lines Spoken (%)");

	svg.append("g")
  		.attr("class","grid")
  		.attr("transform","translate(0," + height + ")")
  		.style("stroke-dasharray",("3,3"))
  		.call(make_x_gridlines()
            .tickSize(-height)
            .tickFormat("")
         )

}



//SCROLLAMA

	// initialize the scrollama
	var scroller = scrollama();

	// generic window resize listener event
	function handleResize() {
		// 1. update height of step elements
		var stepH = Math.floor(window.innerHeight * 0.75);
		step.style('height', stepH + 'px');

		var figureHeight = window.innerHeight * 0.75
		var figureMarginTop = (window.innerHeight - figureHeight) / 2  

		figure
			.style('height', figureHeight + 'px')
			.style('top', figureMarginTop + 'px');

		// 3. tell scrollama to update new element dimensions
		scroller.resize();
	}

	// scrollama event handlers
	function handleStepEnter(response) {
		console.log(response)
		// response = { element, direction, index }

		// add color to current step only
		step.classed('is-active', function (d, i) {
			return i === response.index;
		})

		// update graphic based on step
		figure.select('p').text(response.index + 1);
		var arrayName = "ss" + (response.index+1);
		//console.log(arrayName);
		redrawChart(window[arrayName]);
		
	}

	function setupStickyfill() {
		d3.selectAll('.sticky').each(function () {
			Stickyfill.add(this);
		});
	}

	function init() {
		setupStickyfill();

		// 1. force a resize on load to ensure proper dimensions are sent to scrollama
		handleResize();

		// 2. setup the scroller passing options
		// 		this will also initialize trigger observations
		// 3. bind scrollama event handlers (this can be chained like below)
		scroller.setup({
			step: '#scrolly article .step',
			offset: 0.33,
			debug: false,
		})
			.onStepEnter(handleStepEnter)


		// setup resize event
		window.addEventListener('resize', handleResize);
	}

	// kick things off
	init();



