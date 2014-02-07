JS.Packages(function() {

    // Find the allready loaded package JS file and load up the other libraries from it
    // This way we can be more independent of where the file is being loaded from
    librariesPath = $('script[src*=package]').attr('src');
    librariesPath = librariesPath.replace('lib/package.js','');

    with(this) {
        file(
            // Don't load jquery here
            // There's a good chance it's already loaded, if not we can load it on the example projects
            //'assets/javascripts/vendor/jquery.js',
             librariesPath + '/vendor/tipsy.js',
             librariesPath + '/vendor/underscore.js',
             librariesPath + '/vendor/graph/d3.js',
             librariesPath + '/vendor/graph/colorbrewer.js',
             librariesPath + '/lib/graphs/core.js',
             librariesPath + '/lib/graphs/utils.js',
             librariesPath + '/lib/graphs/random_data.js',
             librariesPath + '/lib/graphs/canvas.js',
             librariesPath + '/lib/graphs/line.js',
             librariesPath + '/lib/graphs/histogram.js',
             librariesPath + '/lib/graphs/tooltip.js')
            .provides("Eventoverse")
            .requires('JS.Class');
    }
});