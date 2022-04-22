var prioritizationPlugin = function() {
    function addAttributeIcon(element, attributeName, deltaX, options) {

        var attributeValue = element.prop('customProperties/' + attributeName);
        var minValue = 0;
        var maxValue = findMaxValue(options.criteria) || 100;

        if (attributeValue) {
            //default values for each property
            var content = attributeName.substring(0, 1);
            var iconFillColor = 'white';
            var iconSize = 11;
            var iconStroke = 'stroke="black" stroke-width="2"';
            var textColor = 'black';

            //apply customization options
            if (options && options.coloring) {
                iconFillColor = heatMapColorforValue(element.prop('customProperties/' + attributeName)/maxValue);
                iconStroke = '';
                textColor = 'white';
            }
            if (options && options.value) content = attributeValue;
            if (options && options.resize) iconSize = 8 + (attributeValue / (maxValue/10));

            //create the icon and append it to the element
            var translation = 100 + deltaX;
            var attributeSymbol = V('<g class="" event="remove"><circle r="' + iconSize + '" z="1000" fill="' + iconFillColor + '" transform="translate(' + translation + ')" ' + iconStroke + '/><title>' + attributeName + ': ' + attributeValue + '</title>'+
                '<text y="0.3em" text-anchor="middle" fill="' + textColor + '" font-family="Arial, helvetica, sans-serif" font-weight="bold" font-size="12" transform="translate(' + translation + ')" >' + content + '</text></g>');
            element.findView(istar.paper).$el.append(attributeSymbol.node);

            return attributeSymbol;
        }
    }

    function addPropertyToEveryInnerElement(propertyName) {
        _.each(istar.graph.getElements(), function (element) {
            if (element.isNode()) {
                if ( element.prop('customProperties/' + propertyName) ) {
                }
                else {
                    element.prop('customProperties/' + propertyName, '');
                }
            }
        });
    }

    function changeLinePattern(element, dashStyle){
        changeVisualAttribute(element, 'stroke-dasharray', dashStyle);
    }
    function changeLineThickness(element, thickness){
        changeVisualAttribute(element, 'stroke-width', thickness);
    }
    function changeLineColor(element, newColor){
        changeVisualAttribute(element, 'stroke', newColor);
    }


    function changeVisualAttribute(element, propertyName, propertValue){
        element.attr('rect/' + propertyName, propertValue);
        element.attr('circle/' + propertyName, propertValue);
        element.attr('path/' + propertyName, propertValue);
        element.attr('ellipse/' + propertyName, propertValue);
        element.attr('polygon/' + propertyName, propertValue);
    }

    function heatMapColorforValue(value) {
        var h = (1.0 - value) * 60 ;
        //h = 0 -> red
        //h = 60 -> yellow
        //h = 120 -> green
        //h = 180 -> cyan
        //h = 240 -> blue
        //h = 320 -> magenta
        var s = 100;
        var l = 50;
        return "hsl(" + h + ", " + s + "%, " + l + "%)";
        //based on http://stackoverflow.com/questions/12875486/what-is-the-algorithm-to-create-colors-for-a-heatmap
    }

    function heatMapColorforValue2(value) {
        var result =  'hsl(342, 100%, 25%)';
        if (value <= 0.11) {
            result = 'hsl(60, 100%, 90%)';
        }
        else if (value <= 0.22) {
            result = 'hsl(49, 100%, 81%)';
        }
        else if (value <= 0.33) {
            result = 'hsl(44, 99%, 73%)';
        }
        else if (value <= 0.44) {
            result = 'hsl(34, 99%, 65%)';
        }
        else if (value <= 0.55) {
            result = 'hsl(25, 98%, 61%)';
        }
        else if (value <= 0.66) {
            result = 'hsl(10, 97%, 58%)';
        }
        else if (value <= 0.77) {
            result = 'hsl(359, 79%, 50%)';
        }
        else if (value <= 0.88) {
            result = 'hsl(348, 100%, 37%)';
        }
        return result
    }

    function findMaxValue(criteria) {
        var elementWithMaxValue = _.maxBy(istar.graph.getElements(), function(element) {
            if (element.isNode()) {
                return  _.toNumber(element.prop('customProperties/' + criteria));
            }
        });

        return _.toNumber(elementWithMaxValue.prop('customProperties/' + criteria))
    }

    /* check if at least two elements have numerical values of the given criteria
             */
    function hasEnoughElementsWithTheCriteria(criteria) {
        var elementsThatHaveNumericalValueForCriteria =_.filter(istar.graph.getElements(),
            function(element) {
                var result = false;
                var value = element.prop('customProperties/' + criteria);
                if (value) {
                    if (canBeNumerical(value)) {
                        result = true;
                    }
                }
                return result;
            }
        );

        return elementsThatHaveNumericalValueForCriteria.length > 1;
    }

    /* returns true if the value is a number or if it can be converted to a number.
        examples:
        canBeNumerical(5.1) => true
        canBeNumerical('5.1') => true
        canBeNumerical('five') => false
     */
    function canBeNumerical(value) {
        return !_.isNaN(_.toNumber(value));
    }

    return {
        addSelectedAttributesToInnerElements: function () {
            $('#prioritizationSetupOptions input').each(function(){
                addPropertyToEveryInnerElement($(this).prop('value'));
                prioritizationPlugin.customProperties.push($(this).prop('value'));
            });
            alert('done!');
        },
        changeColorGradientBasedOnCriteria: function (criteria) {
            var t0 = performance.now();

            ui.changeColorElements(ui.defaultElementBackgroundColor);

            if (hasEnoughElementsWithTheCriteria(criteria)) {
                var minValue = 0;
                var maxValue = findMaxValue(criteria) || 100;
                var currentValue = 0 ;

                _.each(istar.graph.getElements(), function (element) {
                    currentValue = element.prop('customProperties/' + criteria);
                    if (currentValue && canBeNumerical(currentValue)) {
                        color = heatMapColorforValue(currentValue / maxValue);
                        ui.changeColorElement(color, element);
                    }
                });

                var t1 = performance.now();
                console.log('Execution time: ' + (t1 - t0) + 'ms');
            }
        },
        changeSizeBasedOnCriteria: function (criteria) {
            var t0 = performance.now();
            if (hasEnoughElementsWithTheCriteria(criteria)) {
                var minValue = 0;
                var maxValue = findMaxValue(criteria) || 100;
                var currentValue = 0;

                _.each(istar.graph.getElements(), function (element, isOnlyTask = false) {
                    currentValue = element.prop('customProperties/' + criteria);
                    if(isOnlyTask){
                        if(element.attributes.type=='Task'){
                            if (currentValue && canBeNumerical(currentValue)) {
                                var originalWidth = element.prop('size/width');
                                var originalHeight = element.prop('size/height');
                                var newWidth = originalWidth * element.prop('customProperties/' + criteria) / maxValue;
                                var newHeight = originalHeight * element.prop('customProperties/' + criteria) / maxValue;
                                if (newWidth < 20) newWidth = 20;
                                if (newHeight < 10) newHeight = 10;
                                element.resize(0 + newWidth, 0 + newHeight);
                            }
                            else {
                                //if no value is given, make it as small as possible
                                var originalWidth = element.prop('size/width');
                                var originalHeight = element.prop('size/height');
                                element.resize(20, 10);
                            }

                        }

                    }else{
                        if (currentValue && canBeNumerical(currentValue)) {
                            var originalWidth = element.prop('size/width');
                            var originalHeight = element.prop('size/height');
                            var newWidth = originalWidth * element.prop('customProperties/' + criteria) / maxValue;
                            var newHeight = originalHeight * element.prop('customProperties/' + criteria) / maxValue;
                            if (newWidth < 20) newWidth = 20;
                            if (newHeight < 10) newHeight = 10;
                            element.resize(0 + newWidth, 0 + newHeight);
                        }
                        else {
                            //if no value is given, make it as small as possible
                            var originalWidth = element.prop('size/width');
                            var originalHeight = element.prop('size/height');
                            element.resize(20, 10);
                        }
                        
                    }
                  
                });
            }
            var t1 = performance.now();
            console.log('Execution time: ' + (t1 - t0) + 'ms');
        },
        customProperties: [],
        highlightRelease: function (option) {
            _.each(istar.graph.getElements(), function (element) {
                if (element.isNode()) {
                    if (element.prop('customProperties/Release') != option.selectedRelease) {
                        if (option.resize) {
                            element.resize(50,25);
                            element.attr('text/font-size', '7px');
                        }
                    }
                    else {
                        if (option.line) {
                            changeLineThickness(element, 5);
                            changeLinePattern(element, '15,5');
                            //changeLineColor(element, 'blue');
                        }
                        if (option.coloring) {
                            ui.changeColorElement('#39A5FA', element);
                        }
                    }
                }
            });
        },
        showAttributeIcon: function (options) {
            var t0 = performance.now();
            _.each(istar.graph.getElements(), function (element, isOnlyTask = false) {
                if (element.isNode()) {
                    //addAttributeIcon(element, 'Priority', -25, options);
                    if(isOnlyTask){
                        if(element.attributes.type=='Task'){
                            if (options[0]) {
                                addAttributeIcon(element, options[0].criteria, -50, options[0]);
                            }
                            if (options[1]) {
                                addAttributeIcon(element, options[1].criteria, -25, options[1]);
                            }
                            if (options[2]) {
                                addAttributeIcon(element, options[2].criteria, 0, options[2]);
                            }
                        }
                        
                    }
                    else{
                        if (options[0]) {
                            addAttributeIcon(element, options[0].criteria, -50, options[0]);
                        }
                        if (options[1]) {
                            addAttributeIcon(element, options[1].criteria, -25, options[1]);
                        }
                        if (options[2]) {
                            addAttributeIcon(element, options[2].criteria, 0, options[2]);
                        }

                    }                    
                }
            });
            var t1 = performance.now();
            console.log('Execution time: ' + (t1 - t0) + 'ms');
        },
    }
}();


$('#menu-item-plugin').html("Visualization plugin");
$('#menu-plugin').append(
    '<a class="btn btn-default button-vertical" id="prioritization-attributes-modal-button" title="Add new attributes to multiple elements of the model" data-toggle="modal" data-target="#modal-attributes-setup">  <span class="glyphicon glyphicon-wrench" aria-hidden="true"></span><br> Manage attributes </a>'
    + '<a class="btn btn-default button-vertical" id="prioritize-modal-button" title="Open visualization options for ranged values" data-toggle="modal" data-target="#modal-prioritization-visualization"> <span class="glyphicon glyphicon-eye-open" aria-hidden="true"></span> <span class="glyphicon glyphicon-star" aria-hidden="true"></span> <br> Visualize range </a>'
    
);
$('#menu-item-plugin').show();
$('#logo').html('piStar + visualization');
$('.menu-bar').addClass('plugged');
$('.menu-item').addClass('plugged');

$('#modal-prioritization-visualization').on('show.bs.modal', function (e) {
    inputs = [$('#colorAttributeSelection'), $('#sizeAttributeSelection'), $('#showAttribute1Selection'), $('#showAttribute2Selection'), $('#showAttribute3Selection')];

    _.each(inputs, function (DOMElement) {
        DOMElement.html('');
        _.each(prioritizationPlugin.customProperties, function (propertyName) {
            DOMElement.append('<option value="' + propertyName + '">' + propertyName + '</option>');
        })
    });

});

$(document).ready(function () {

    $('#modal-prioritization-visualization').on('show.bs.modal', function (e) {
        inputs = [$('#colorAttributeSelection'), $('#sizeAttributeSelection'), $('#showAttribute1Selection'), $('#showAttribute2Selection'), $('#showAttribute3Selection')];
    
        _.each(inputs, function (DOMElement) {
            DOMElement.html('');
            _.each(prioritizationPlugin.customProperties, function (propertyName) {
                DOMElement.append('<option value="' + propertyName + '">' + propertyName + '</option>');
            })
        });
    
    });
    $('#setup-prioritization-action-button').click(function () {
        prioritizationPlugin.addSelectedAttributesToInnerElements();
    });

    $('#prioritization-visualization-action-button').click(function () {
        if ($('#changeColorCheckbox').prop('checked')) {
            prioritizationPlugin.changeColorGradientBasedOnCriteria($('#colorAttributeSelection :selected').prop('value'));
        }
        if ($('#changeSizeCheckbox').prop('checked')) {
            prioritizationPlugin.changeSizeBasedOnCriteria($('#sizeAttributeSelection :selected').prop('value'));
        }
        var iconOptions = [null, null, null];
        if ($('#showAttribute1Checkbox').prop('checked')) {
            var options = {
                criteria: 'Priority',
                value: true,
                coloring: false,
                resize: false,
            };
            options.criteria = $('#showAttribute1Selection :selected').prop('value');
            options.value = $('#showAttribute1Checkbox1').prop('checked');
            options.coloring = $('#showAttribute1Checkbox2').prop('checked');
            options.resize = $('#showAttribute1Checkbox3').prop('checked');
            iconOptions[0] = options;
        }
        if ($('#showAttribute2Checkbox').prop('checked')) {
            var options = {
                criteria: 'Priority',
                value: true,
                coloring: false,
                resize: false,
            };
            options.criteria = $('#showAttribute2Selection :selected').prop('value');
            options.value = $('#showAttribute2Checkbox1').prop('checked');
            options.coloring = $('#showAttribute2Checkbox2').prop('checked');
            options.resize = $('#showAttribute2Checkbox3').prop('checked');
            iconOptions[1] = options;
        }
        if ($('#showAttribute3Checkbox').prop('checked')) {
            var options = {
                criteria: 'Priority',
                value: true,
                coloring: false,
                resize: false,
            };
            options.criteria = $('#showAttribute3Selection :selected').prop('value');
            options.value = $('#showAttribute3Checkbox1').prop('checked');
            options.coloring = $('#showAttribute3Checkbox2').prop('checked');
            options.resize = $('#showAttribute3Checkbox3').prop('checked');
            iconOptions[2] = options;
        }
        if($('#onlyTasksCheckbox').prop('checked')){
            prioritizationPlugin.showAttributeIcon(iconOptions, true);
    
        }
        else{
            prioritizationPlugin.showAttributeIcon(iconOptions);
    
        }
    });

    $('#release-action-button').click(function () {
        var options = {
            selectedRelease: '1',
            line: true,
            coloring: false,
            resize: false,
        };
        options.selectedRelease = $('#input-release-name').prop('value');
        options.line = $('#releaseOptionCheckbox1').prop('checked');
        options.coloring = $('#releaseOptionCheckbox2').prop('checked');
        options.resize = $('#releaseOptionCheckbox3').prop('checked');
    
        prioritizationPlugin.highlightRelease(options);
    });

});






