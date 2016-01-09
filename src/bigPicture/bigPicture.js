(function(d3) {

  var nodes = [
    // 0
    { label : 'framework front' },
    { label : 'AngularJS', img : 'img/logo/AngularJS-Shield-large.png' },
    { label : 'Ember',     img : 'img/logo/Ember.js_Logo_and_Mascot.png' },
    { label : 'aurelia',   img : 'img/logo/aurelia.png' },
    { label : 'react',     img : 'img/logo/react-logo-1000-transparent.png' },
    // 5
    { label : 'techno back' },
    { label : 'nodejs', img : 'img/logo/nodejs-logo.png' },
    // 7
    { label : 'package manager' },
    { label : 'bower', img : 'img/logo/bower-logo.svg' },
    { label : 'npm',   img : 'img/logo/npm-logo.svg' },
    // 10
    { label : 'task manager' },
    { label : 'brunch', img : 'img/logo/brunch.png' },
    { label : 'grunt',  img : 'img/logo/grunt.png' },
    { label : 'gulp',   img : 'img/logo/gulp-logo.png' },
    // 14
    { label : 'pre-processeur css' },
    { label : 'less',   img : 'img/logo/LESS_Logo.svg.png' },
    { label : 'sass',   img : 'img/logo/sass.png' },
    { label : 'stylus', img : 'img/logo/stylus.svg' },
    // 18
    { label : 'no-sql db' },
    { label : 'mongodb', img : 'img/logo/mongodb.png' },
    //20
    { label : 'module manager' },
    { label : 'requirejs',  img : 'img/logo/requirejs-logo.svg' },
    { label : 'browserify', img : 'img/logo/browserify-logo.png' },
    { label : 'webpack',    img : 'img/logo/webpack.png' },

    // 24
    { label : 'front' },
    // 25
    { label : 'back' },

    { label : 'broccoli',    img : 'img/logo/broccoli.png' },
    { label : 'cassandra',   img : 'img/logo/Cassandra_logo.png' },
    { label : 'pouchdb',     img : 'img/logo/pouchdb.png' },

    // 29
    { label : 'mobile' },
    { label : 'cordova',      img : 'img/logo/cordova.png' },
    { label : 'nativescript', img : 'img/logo/nativescript.svg' },
    { label : 'ionic',        img : 'img/logo/ionic-logo-blog.png' },

    // 33
    { label : 'test' },
    { label : 'mocha',        img : 'img/logo/mocha-logo.png' },
    { label : 'chai',         img : 'img/logo/chai.png' },
    { label : 'jasmine',      img : 'img/logo/jasmine.png' },
    { label : 'qunit',        img : 'img/logo/icn-qunit-logo.png' },
    { label : 'protractor',   img : 'img/logo/protractor-logo.png' },

    { label : 'socketio',     img : 'img/logo/socketio.png' },
    { label : 'strong loop',  img : 'img/logo/SL_Logo_Stacked_RGB.png' },

    { label : 'backbone',     img : 'img/logo/formation-backbone-js.png' },

    { label : 'supersonic',   img : 'img/logo/supersonic.png' }
  ];

  var weightLink0 = 0.8;
  var weightLink1 = 0.9;
  var weightLink2 = 1;


  var links = [
    { source : 24, target : 25,  weight: weightLink0 },
    { source : 25, target : 29,  weight: weightLink0 },
    { source : 24, target : 33,  weight: weightLink0 },

    { source : 24, target : 7,  weight: weightLink1 },
    { source : 25, target : 7,  weight: weightLink1 },

    // front
    { source : 24, target : 0,   weight: weightLink1 },
    { source : 24, target : 10,  weight: weightLink1 },
    { source : 24, target : 14,  weight: weightLink1 },
    { source : 24, target : 20,  weight: weightLink1 },

    // back
    { source : 25, target : 5,  weight: weightLink2 },
    { source : 25, target : 18, weight: weightLink2 },

    // framework front
    { source : 0, target : 1,  weight: weightLink2 },
    { source : 0, target : 2,  weight: weightLink2 },
    { source : 0, target : 3,  weight: weightLink2 },
    { source : 0, target : 4,  weight: weightLink2 },
    { source : 0, target : 41,  weight: weightLink1 },

    // techno back
    { source : 5, target : 6,   weight: weightLink2 },
    { source : 5, target : 39,  weight: weightLink2 },
    { source : 5, target : 40,  weight: weightLink2 },

    // package manager
    { source : 7, target : 8,  weight: weightLink2 },
    { source : 7, target : 9,  weight: weightLink2 },

    // task manager
    { source : 10, target : 11, weight: weightLink2 },
    { source : 10, target : 12, weight: weightLink2 },
    { source : 10, target : 13, weight: weightLink2 },
    { source : 10, target : 26, weight: weightLink2 },

    // pre-processeur css
    { source : 14, target : 15, weight: weightLink2 },
    { source : 14, target : 16, weight: weightLink2 },
    { source : 14, target : 17, weight: weightLink2 },

    // no-sql db
    { source : 18, target : 19,  weight: weightLink2 },
    { source : 18, target : 27,  weight: weightLink2 },
    { source : 18, target : 28,  weight: weightLink2 },

    // module manager
    { source : 20, target : 21,  weight: weightLink2 },
    { source : 20, target : 22,  weight: weightLink2 },
    { source : 20, target : 23,  weight: weightLink2 },

    // mobile
    { source : 29, target : 30,  weight: weightLink2 },
    { source : 29, target : 31,  weight: weightLink2 },
    { source : 29, target : 32,  weight: weightLink2 },
    { source : 29, target : 42,  weight: weightLink2 },

    // test
    { source : 33, target : 34,  weight: weightLink2 },
    { source : 33, target : 35,  weight: weightLink2 },
    { source : 33, target : 36,  weight: weightLink2 },
    { source : 33, target : 37,  weight: weightLink2 },
    { source : 33, target : 38,  weight: weightLink2 },
  ];



  // canva creation
  var w = 1000,
      h = 800,
      imgHeight = 40;

  var labelDistance = 0;

  var vis = d3
    .select('body .big-picture')
    .append('svg:svg')
    .attr('width', w)
    .attr('height', h);


  // node interaction
  var force = d3
    .layout
    .force()
    .size([w, h])
    .nodes(nodes)
    .links(links)
    .gravity(1)
    .linkDistance(50)
    .charge(-6000)
    .linkStrength(function(x) {
      return 10 * x.weight
    });

  force.start();

  // Rendering
  // var link = vis
  //   .selectAll('line.link')
  //   .data(links)
  //   .enter()
  //   .append('svg:line')
  //   .attr('class', 'link')
  //   .style('stroke', '#CCC');

  var node = vis
    .selectAll('g.node')
    .data(force.nodes())
    .enter()
    .append('svg:g')
    .attr('class', 'node');

  // node.append('svg:circle')
  //     .attr('r', 5)
  //     .style('fill', '#555')
  //     .style('stroke', '#FFF')
  //     .style('stroke-width', 3);

  node.append('svg:image')
      .attr('height', imgHeight)
      .attr('width', imgHeight)
      .attr('attr',  function(d) {
        return d.label;
      })
      .attr('xlink:href', function(d) {
        return d.img;
      });

  node.call(force.drag);

  force.on('tick', tick);

  // function updateLink() {
  //   this.attr('x1', function(d) {
  //     return d.source.x;
  //   }).attr('y1', function(d) {
  //     return d.source.y;
  //   }).attr('x2', function(d) {
  //     return d.target.x;
  //   }).attr('y2', function(d) {
  //     return d.target.y;
  //   });
  // }

  function updateNode() {
    this.attr('transform', function(d) {
      return 'translate(' + d.x + ',' + d.y + ')';
    });
  }

  function tick() {
    node.call(updateNode);
    // link.call(updateLink);
  }

})(window.d3);
