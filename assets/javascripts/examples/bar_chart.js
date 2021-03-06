JS.require('Eventoverse', function (a) {
    var bar_chart;
    attrs = {
        x: {
            caption: "Random time data"
        },
        y: {
            caption: "Random value data, seconds",
            buffer_size: 400
        }
    };

    bar_chart = new Eventoverse.Graphs.Canvas("#bar_chart", attrs);
    bar_chart.addElement(Eventoverse.Graphs.Histograms);
    bar_chart.addElement(Eventoverse.Graphs.Tooltips, {
        ordinal_scale: true,
        tip_formatter: function(d) {
            return "123";
        }
    });
    vals = [Eventoverse.RandomData.generate_continuous(20, "key1"),
            Eventoverse.RandomData.generate_continuous(20, "key2"),
            Eventoverse.RandomData.generate_continuous(20, "key3"),
            Eventoverse.RandomData.generate_continuous(20, "key4"),
            Eventoverse.RandomData.generate_continuous(20, "key5")];
    console.log(vals);
    bar_chart.render(vals);

});
