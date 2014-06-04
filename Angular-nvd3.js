/**
 * Created by Daniel on 01/06/2014.
 */
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
                height:'='
            },
            link: function(scope,element,attrs){
                scope.$watch('data',function(newValue){
                    if(!newValue){
                        return;
                    }
                    nv.addGraph(function(){
                        var chart = nv.models.discreteBarChart()
                            .x(function(d){return d[0]})
                            .y(function(d){return d[1]});
                        createChart(scope,chart,attrs);
                        scope.chart =chart;
                        return chart;
                    });
                });
            }
        }
    });



