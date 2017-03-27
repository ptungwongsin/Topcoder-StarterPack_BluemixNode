class PercentileList {
    constructor () {}

    static get ITEM_TEMPLATE() {
        return _.template(
            '<li class="list-group-item clickable" data-text="<%- label %> <%- percentile %>%">' +
                '<span class="list-group-item-heading">' +
                    '<%- label %>' +
                    '<%= hasChild ? \'&nbsp;<span href="#" class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>\' : \'\' %>' +
                '</span>' +
                '<div class="progress">' +
                    '<div class="progress-bar" role="progressbar" aria-valuenow="<%- percentile %>" aria-valuemin="0" aria-valuemax="100" style="width: <%- percentile %>%;">' +
                        '<%- percentile %>%' +
                    '</div>' +
                '</div>' +
            '</li>'
        );
    }

    static render(items) {
        var $html = $('<ul class="list-group"></ul>');
        if (!_.isEmpty(items)) {
            items.forEach((item) => {
                var $item = $(PercentileList.ITEM_TEMPLATE({
                    label: item.name,
                    hasChild: !_.isEmpty(item.children),
                    percentile: (item.percentile * 100).toFixed(2)
                }));

                $item.click((e) => {
                    TextToSpeech.speak($item.data('text'));
                    e.stopPropagation();
                });

                // Render expandable child nodes
                if (!_.isEmpty(item.children)) {
                    var nodeId = new Date().getTime();
                    var $title = $item.find('.list-group-item-heading');
                    $title.click((e) => {
                        $title.find('.glyphicon-chevron-down, .glyphicon-chevron-up')
                                .toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
                        $('#' + nodeId).toggleClass('hidden');
                        e.stopPropagation();
                    });
                    $item.append(this.render(item.children)
                            .attr('id', nodeId)
                            .addClass('hidden'));
                }
                $html.append($item);
            });
        }
        return $html;
    }
}
