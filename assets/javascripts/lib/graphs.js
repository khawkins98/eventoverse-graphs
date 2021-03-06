JS.require('Eventoverse', function (a) {
  var area_chart, attrs, bar_chart, line_chart;
  attrs = {
    x: { caption: "Random time data" },
    y: { caption: "Random value data, seconds" }
  };

  line_chart = new Eventoverse.Graphs.Canvas("#line_chart", attrs);
  line_chart.addElement(Eventoverse.Graphs.Lines);
  line_chart.addElement(Eventoverse.Graphs.MinLine);
  line_chart.addElement(Eventoverse.Graphs.MaxLine);
  line_chart.addElement(Eventoverse.Graphs.Tooltips);
  vals = [Eventoverse.RandomData.generate_continuous(20, "key1"),
          Eventoverse.RandomData.generate_continuous(20, "key2")];
  line_chart.render(vals);

  area_chart = new Eventoverse.Graphs.Canvas("#area_chart", attrs);
  area_chart.addElement(Eventoverse.Graphs.Area);
  area_chart.addElement(Eventoverse.Graphs.Tooltips);
  area_chart.render(Eventoverse.RandomData.generate(20));

  bar_chart = new Eventoverse.Graphs.StackedCanvas("#bar_chart", attrs);
  bar_chart.addElement(Eventoverse.Graphs.Histograms);
  bar_chart.addElement(Eventoverse.Graphs.Tooltips, {tooltip_class: Eventoverse.Graphs.StackedTooltip});

  vals = [Eventoverse.RandomData.generate_continuous(20, "key1"),
          Eventoverse.RandomData.generate_continuous(20, "key2"),
          Eventoverse.RandomData.generate_continuous(20, "key3"),
          Eventoverse.RandomData.generate_continuous(20, "key4"),
          Eventoverse.RandomData.generate_continuous(20, "key5")];
  bar_chart.render(vals);
});
