const HOURSAGO = (24 * 7);

const clist = [
    /* from  https://youtube.tracking.exposed/js/youtube-c3-impact.js but modded as 'hour' instead of 'day' */
{
    API: "https://youtube.tracking.exposed/api/v2/statistics/supporters/hours/" + HOURSAGO,
    bindto: '#yt-supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'hour' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': _.first(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        }
    }
},
{
    API: "https://youtube.tracking.exposed/api/v2/statistics/active/hours/" + HOURSAGO,
    bindto: '#yt-active-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'active' ], x: 'hour' },
        type: 'area',
        axes: {
            'active': 'y'
        },
        colors: {
            'active': _.last(palette)
        },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        }
    },
    point: { show: false },
    area: { zerobased: false }
},
{
    API: "https://youtube.tracking.exposed/api/v2/statistics/processing/hours/" + HOURSAGO,
    bindto: '#yt-processing-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'failure', 'successful', 'unprocessed', 'total', 'hasMetadata' ], x: 'hour' },
        type: 'line',
        colors: {
            'failure': palette[0],
            'unprocessed': palette[2],
            'successful': palette[4],
            'total': palette[1],
            'hasMetadata': palette[3]
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        },
    },
    point: { show: false }
},
/* ————————————-——————————— */
{
    API: "https://paadc.tracking.exposed/api/v2/statistics/supporters/hours/" + HOURSAGO,
    bindto: '#pa-supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'hour' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': _.first(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        }
    }
},
{
    API: "https://paadc.tracking.exposed/api/v2/statistics/active/hours/" + HOURSAGO,
    bindto: '#pa-active-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'active' ], x: 'hour' },
        type: 'area',
        axes: {
            'active': 'y'
        },
        colors: {
            'active': _.last(palette)
        },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        }
    },
    point: { show: false },
    area: { zerobased: false }
},
{
    API: "https://paadc.tracking.exposed/api/v2/statistics/metadata/hours/" + HOURSAGO,
    bindto: '#pa-metadata-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: {
            value : [ "complete", "isAd", "total" ],
            x: 'hour'
        },
        type: 'line',
        colors: {
            'complete': palette[0],
            'isAd': palette[2],
            'total': palette[7]
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            }
        },
    },
    point: { show: false },
 },
 {
     API: "https://paadc.tracking.exposed/api/v2/statistics/impressions/hours/" + HOURSAGO,
     bindto: '#pa-impressions-graph',
     data : {
         mimeType: 'json',
         xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
         keys: {
             value : [ 'private', 'public', 'total' ],
             x: 'hour'
         },
         type: 'line',
     },
     axis: {
         x: {
             type: 'timeseries',
             tick: {
                 format: '%Y-%m-%d %H:00',
             }
         },
     },
     point: { show: false },
  },
  {
      API: "https://paadc.tracking.exposed/api/v2/statistics/metadata/hours/" + HOURSAGO,
      bindto: '#pa-timelines-graph',
      data : {
          mimeType: 'json',
          xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
          keys: {
              value : [ 'total' ],
              x: 'hour'
          },
          type: 'line',
      },
      axis: {
          x: {
              type: 'timeseries',
              tick: {
                  format: '%Y-%m-%d %H:00',
              }
          },
      },
      point: { show: false },
   },
/* ————————————-——————————— */
{
    API: "https://pornhub.tracking.exposed/api/v2/statistics/supporters/hours/" + HOURSAGO,
    bindto: '#po-supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'hour' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': _.first(palette)
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        }
    }
},
{
    API: "https://pornhub.tracking.exposed/api/v2/statistics/active/hours/" + HOURSAGO,
    bindto: '#po-active-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'active' ], x: 'hour' },
        type: 'area',
        axes: {
            'active': 'y'
        },
        colors: {
            'active': _.last(palette)
        },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        }
    },
    point: { show: false },
    area: { zerobased: false }
},
{
    API: "https://pornhub.tracking.exposed/api/v2/statistics/processing/hours/" + HOURSAGO,
    bindto: '#po-processing-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'failure', 'successful', 'unprocessed', 'total', 'hasMetadata' ], x: 'hour' },
        type: 'line',
        colors: {
            'failure': palette[0],
            'unprocessed': palette[2],
            'successful': palette[4],
            'total': palette[1],
            'hasMetadata': palette[3]
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d %H:00',
            },
        },
    },
    point: { show: false }
}

/* end! and this copy paste is over */
]




$(document).ready(async function() {

    var graphNodes = $('.c3graph');
    console.log("Retrieved", _.size(graphNodes), "from the impact.md page");

    const graphs = _.compact(_.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;

        const config = _.find(clist, { bindto: graphId });
        if(!config) {
            console.log("Invalid ID", graphId, "not found among the c3 configs");
            $("graphId").html("<h6 style='color:red'>Error in generating graph</h6>");
            return null;;
        }
        return {
            config,
            graphId
        }
    }));
    console.log(graphs);

    let generated = [];
    for (const g of graphs) {
        try {
            let x = await renderGraph(g);
            generated.push(x);
        } catch(error) {
            $(g.graphId).html("<h6 style='color:red'>Error: " + error.message + "</h6>");
        }
    }
});

async function renderGraph(g) {
    const connection = await fetch(g.config.API);
    const content = await connection.json();
    if(content.error) {
        console.log("Error received!", g.graphId, JSON.stringify(content));
    } else if (!_.size(content)) {
        console.log("Empty answer for", g.graphId, JSON.stringify(content));
    } else {
        console.log("Generating graph", g.graphId, g,
                    "Retrieved", _.size(content),
                    "adding to config.data https://c3js.org/reference.html");
        g.config.data.json = content;
        return c3.generate(g.config);
    }
}

function buildApiUrl() {}
