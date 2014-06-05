/**
 * Created by Daniel on 01/06/2014.
 */
var dev = true;
if(dev){
    nv.dev = true;
}

function createChart(scope, chart, attrs){
    if(angular.isArray(scope.data) && scope.data.length === 0)//don't show a empty graph
    {
        d3.select('.'+attrs['class'] + ' svg').remove();
    }

    if(d3.select('.'+attrs['class'] + ' svg').empty())//if the page has no svg create one
    {
        d3.select('.'+attrs['class']).append('svg');
    }

    d3.select('.'+attrs['class'] + ' svg')
        .attr('height',attrs['height'])
        .attr('width',attrs['width'])
        .datum(scope.data)
        .call(chart);

}

angular.module('Angular-nvd3',[])
    .directive('barChart',function(){
        return{
            restrict:'E',
            scope:{
                data:'=',
                width:'=',
                height:'=',
                funcY:'&',
                funcX:'&'
            },
            link: function(scope,element,attrs){
                scope.$watch('data',function(newValue){
                    if(!newValue){
                        return;
                    }
                    nv.addGraph(function(){
                        var chart = nv.models.discreteBarChart()
                            .height(attrs.height === undefined ? 100 : scope.height)
                            .width(attrs.width === undefined ? 100 : scope.width)
                            .x(attrs.funcX === undefined ? function(d){return d[0]}: scope.funcX())
                            .y(attrs.funcY === undefined ? function(d){return d[1]}: scope.funcY());
                        createChart(scope,chart,attrs);
                        scope.chart =chart;
                        return chart;
                    });
                });
            }
        }
    });



