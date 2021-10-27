const acc = d3.selectAll('.accordion')
acc.on("click", function () {
    let isActive = !d3.select(this).classed("active")
    d3.select(this).classed('active', isActive)
    // let panel = d3.select(this.parentNode).selectAll('.accordion-panel')
    let panel = $(this).parent().find('.accordion-panel')
    panel.slideToggle()
})

// for debugging - automatically open all panels
acc.each(function(d, i) {
    var onClickFunc = d3.select(this).on("click");
    onClickFunc.apply(this, [d, i]);
});        