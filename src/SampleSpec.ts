export default function main(params: any) {
  return {
    spec: {
      "name": "New dashboard",
      "layout": {
        "id": "page0",
        "items": [
          {
            "id": "page1",
            "items": [
              {
                "id": "page2",
                "css": "templateBox aspectRatio_default",
                "items": [
                  {
                    "id": "page3",
                    "style": {
                      "top": "0%",
                      "left": "0%",
                      "right": "66.7%",
                      "bottom": "75%"
                    },
                    "type": "templateDropZone",
                    "templateName": "dz1",
                    "relatedLayouts": "|model00000165c4684a42_00000003|"
                  },
                  {
                    "id": "page4",
                    "css": "noBorderLeft",
                    "style": {
                      "top": "0%",
                      "left": "33.3%",
                      "right": "33.4%",
                      "bottom": "75%"
                    },
                    "type": "templateDropZone",
                    "templateName": "dz3",
                    "relatedLayouts": "|model00000165c468d990_00000002|"
                  },
                  {
                    "id": "page5",
                    "css": "noBorderLeft",
                    "style": {
                      "top": "0%",
                      "left": "66.6%",
                      "right": "0%",
                      "bottom": "75%"
                    },
                    "type": "templateDropZone",
                    "templateName": "dz4",
                    "relatedLayouts": "|model00000165c4692416_00000003|"
                  },
                  {
                    "id": "page6",
                    "css": "noBorderTop",
                    "style": {
                      "top": "25%",
                      "left": "0%",
                      "right": "33.4%",
                      "bottom": "0%"
                    },
                    "type": "templateDropZone",
                    "templateName": "dz2",
                    "relatedLayouts": ""
                  },
                  {
                    "id": "page7",
                    "css": "noBorderLeft noBorderTop",
                    "style": {
                      "top": "25%",
                      "left": "66.6%",
                      "right": "0%",
                      "bottom": "0%"
                    },
                    "type": "templateDropZone",
                    "templateName": "dz5",
                    "relatedLayouts": ""
                  },
                  {
                    "id": "model00000165c4697f76_00000000",
                    "style": {
                      "top": "25.101214574898787%",
                      "left": "0.111358574610245%",
                      "height": "74.89878542510121%",
                      "width": "83.07349665924276%"
                    },
                    "type": "widget",
                    "relatedLayouts": ""
                  },
                  {
                    "id": "model00000165c4692416_00000003",
                    "style": {
                      "top": "0.20242914979757085%",
                      "left": "66.5924276169265%",
                      "height": "24.696356275303643%",
                      "width": "33.29621380846325%"
                    },
                    "type": "widget",
                    "relatedLayouts": "page5"
                  },
                  {
                    "id": "model00000165c468f866_00000003",
                    "style": {
                      "top": "25.101214574898787%",
                      "left": "83.07349665924276%",
                      "height": "74.69635627530364%",
                      "width": "16.815144766146993%"
                    },
                    "type": "widget",
                    "relatedLayouts": ""
                  },
                  {
                    "id": "model00000165c468d990_00000002",
                    "style": {
                      "top": "0.20242914979757085%",
                      "left": "33.29621380846325%",
                      "height": "24.696356275303643%",
                      "width": "33.18485523385301%"
                    },
                    "type": "widget",
                    "relatedLayouts": "page4"
                  },
                  {
                    "id": "model00000165c4684a42_00000003",
                    "style": {
                      "top": "0.20242914979757085%",
                      "left": "0.111358574610245%",
                      "height": "24.696356275303643%",
                      "width": "33.073496659242764%"
                    },
                    "type": "widget",
                    "relatedLayouts": "page3"
                  }
                ],
                "type": "scalingAbsolute"
              }
            ],
            "type": "container",
            "title": {
              "translationTable": {
                "Default": "Sample"
              }
            },
            "templateName": "Template12"
          }
        ],
        "style": {
          "height": "100%"
        },
        "type": "tab"
      },
      "theme": "defaultTheme",
      "version": 1008,
      "eventGroups": [
        {
          "id": "page1:1",
          "widgetIds": [
            "model00000165c4684a42_00000003",
            "model00000165c468d990_00000002",
            "model00000165c468f866_00000003",
            "model00000165c4692416_00000003",
            "model00000165c4697f76_00000000"
          ]
        }
      ],
      "properties": {
        "defaultLocale": "Default"
      },
      "pageContext": [],
      "dataSources": {
        "version": "1.0",
        "sources": [
          {
            "id": "model00000165c4499a5e_00000002",
            "assetId": "assetId00000165c4499a5e_00000000",
            "clientId": "myUniqueId789",
            "module": {
              "source": {
                "id": "CSV_File",
                "srcUrl": {
                  "sourceUrl": "https://developer.ibm.com/static/site-id/141/bikeShareRidesDemographics.csv",
                  "mimeType": "text/csv",
                  "property": [
                    {
                      "name": "separator",
                      "value": ","
                    },
                    {
                      "name": "ColumnNamesLine",
                      "value": "true"
                    }
                  ]
                }
              },
              "identifier": "moduleId",
              "label": "Module Name",
              "xsd": "https://ibm.com/daas/module/1.0/module.xsd",
              "table": {
                "name": "Bike Share Rides Demographics CSV",
                "description": "description of the table for visual hints",
                "column": [
                  {
                    "nullable": true,
                    "name": "Date",
                    "regularAggregate": "countDistinct",
                    "description": "Date",
                    "usage": "attribute",
                    "label": "Date",
                    "datatype": "DATE",
                    "taxonomyFamily": "cDate"
                  },
                  {
                    "nullable": true,
                    "name": "From_Community",
                    "regularAggregate": "countDistinct",
                    "description": "From_Community",
                    "usage": "attribute",
                    "label": "From_Community",
                    "datatype": "NVARCHAR(256)"
                  },
                  {
                    "nullable": true,
                    "name": "Latitude",
                    "regularAggregate": "countDistinct",
                    "description": "Latitude",
                    "usage": "attribute",
                    "label": "Latitude",
                    "datatype": "DOUBLE",
                    "taxonomyFamily": "cLatitude"
                  },
                  {
                    "nullable": true,
                    "name": "Longitude",
                    "regularAggregate": "countDistinct",
                    "description": "Longitude",
                    "usage": "attribute",
                    "label": "Longitude",
                    "datatype": "DOUBLE",
                    "taxonomyFamily": "cLongitude"
                  },
                  {
                    "name": "Year",
                    "regularAggregate": "countDistinct",
                    "description": "Year",
                    "usage": "attribute",
                    "label": "Year",
                    "datatype": "BIGINT",
                    "taxonomyFamily": "cYear"
                  },
                  {
                    "nullable": true,
                    "name": "YearMonth",
                    "regularAggregate": "countDistinct",
                    "description": "YearMonth",
                    "usage": "attribute",
                    "label": "YearMonth",
                    "datatype": "NVARCHAR(256)",
                    "taxonomyFamily": "cMonth"
                  },
                  {
                    "nullable": true,
                    "name": "Month",
                    "regularAggregate": "countDistinct",
                    "description": "Month",
                    "usage": "attribute",
                    "label": "Month",
                    "datatype": "BIGINT",
                    "taxonomyFamily": "cMonth"
                  },
                  {
                    "nullable": true,
                    "name": "MonthNameShort",
                    "regularAggregate": "countDistinct",
                    "description": "MonthNameShort",
                    "usage": "attribute",
                    "label": "MonthNameShort",
                    "datatype": "NVARCHAR(256)",
                    "taxonomyFamily": "cMonth"
                  },
                  {
                    "nullable": true,
                    "name": "MonthNameLong",
                    "regularAggregate": "countDistinct",
                    "description": "MonthNameLong",
                    "usage": "attribute",
                    "label": "MonthNameLong",
                    "datatype": "NVARCHAR(256)",
                    "taxonomyFamily": "cMonth"
                  },
                  {
                    "nullable": true,
                    "name": "Weekend",
                    "regularAggregate": "countDistinct",
                    "description": "Weekend",
                    "usage": "attribute",
                    "label": "Weekend",
                    "datatype": "NVARCHAR(256)"
                  },
                  {
                    "nullable": true,
                    "name": "Day_of_Week",
                    "regularAggregate": "countDistinct",
                    "description": "Day_of_Week",
                    "usage": "attribute",
                    "label": "Day_of_Week",
                    "datatype": "NVARCHAR(256)",
                    "taxonomyFamily": "cDay"
                  },
                  {
                    "nullable": true,
                    "name": "Number_of_Rides",
                    "regularAggregate": "total",
                    "description": "Number_of_Rides",
                    "usage": "fact",
                    "label": "Number_of_Rides",
                    "datatype": "BIGINT"
                  },
                  {
                    "nullable": true,
                    "name": "Percent_Customers",
                    "regularAggregate": "average",
                    "description": "Percent_Customers",
                    "usage": "fact",
                    "label": "Percent_Customers",
                    "datatype": "BIGINT"
                  },
                  {
                    "nullable": true,
                    "name": "Percent_Subscribers",
                    "regularAggregate": "average",
                    "description": "Percent_Subscribers",
                    "usage": "fact",
                    "label": "Percent_Subscribers",
                    "datatype": "BIGINT"
                  },
                  {
                    "nullable": true,
                    "name": "Percent_Dependents",
                    "regularAggregate": "average",
                    "description": "Percent_Dependents",
                    "usage": "fact",
                    "label": "Percent_Dependents",
                    "datatype": "BIGINT"
                  },
                  {
                    "nullable": true,
                    "name": "Percent_Males",
                    "regularAggregate": "average",
                    "description": "Percent_Males",
                    "usage": "fact",
                    "label": "Percent_Males",
                    "datatype": "BIGINT"
                  },
                  {
                    "nullable": true,
                    "name": "Percent_Females",
                    "regularAggregate": "average",
                    "description": "Percent_Females",
                    "usage": "fact",
                    "label": "Percent_Females",
                    "datatype": "BIGINT"
                  },
                  {
                    "nullable": true,
                    "name": "Average_Age",
                    "regularAggregate": "average",
                    "description": "Average_Age",
                    "usage": "fact",
                    "label": "Average_Age",
                    "datatype": "BIGINT"
                  }
                ]
              }
            },
            "name": "Test CSV Source",
            "shaping": {
              "embeddedModuleUpToDate": true
            }
          }
        ]
      },
      "drillThrough": [],
      "widgets": {
        "model00000165c4684a42_00000003": {
          "id": "model00000165c4684a42_00000003",
          "data": {
            "dataViews": [
              {
                "modelRef": "model00000165c4499a5e_00000002",
                "dataItems": [
                  {
                    "id": "model00000165c4684a42_00000000",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.Number_of_Rides",
                    "itemLabel": "Number_of_Rides"
                  }
                ],
                "id": "model00000165c4684a42_00000001"
              }
            ]
          },
          "slotmapping": {
            "slots": [
              {
                "name": "values",
                "dataItems": [
                  "model00000165c4684a42_00000000"
                ],
                "dataItemSettings": [],
                "caption": "Value",
                "id": "values",
                "layerId": "data"
              }
            ]
          },
          "type": "live",
          "name": {
            "translationTable": {}
          },
          "visId": "summary"
        },
        "model00000165c468d990_00000002": {
          "id": "model00000165c468d990_00000002",
          "data": {
            "dataViews": [
              {
                "modelRef": "model00000165c4499a5e_00000002",
                "dataItems": [
                  {
                    "id": "model00000165c468d98f_00000000",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.Average_Age",
                    "itemLabel": "Average_Age"
                  }
                ],
                "id": "model00000165c468d990_00000000"
              }
            ]
          },
          "slotmapping": {
            "slots": [
              {
                "name": "values",
                "dataItems": [
                  "model00000165c468d98f_00000000"
                ],
                "dataItemSettings": [],
                "caption": "Value",
                "id": "values",
                "layerId": "data"
              }
            ]
          },
          "type": "live",
          "name": {
            "translationTable": {}
          },
          "visId": "summary"
        },
        "model00000165c468f866_00000003": {
          "id": "model00000165c468f866_00000003",
          "data": {
            "dataViews": [
              {
                "modelRef": "model00000165c4499a5e_00000002",
                "dataItems": [
                  {
                    "id": "model00000165c468f866_00000000",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.Day_of_Week",
                    "itemLabel": "Day_of_Week"
                  }
                ],
                "id": "model00000165c468f866_00000001"
              }
            ]
          },
          "slotmapping": {
            "slots": [
              {
                "name": "level1",
                "dataItems": [
                  "model00000165c468f866_00000000"
                ],
                "caption": "Level one",
                "id": "level1",
                "layerId": "data"
              }
            ]
          },
          "type": "live",
          "name": {
            "translationTable": {}
          },
          "visId": "list"
        },
        "model00000165c4692416_00000003": {
          "id": "model00000165c4692416_00000003",
          "data": {
            "dataViews": [
              {
                "modelRef": "model00000165c4499a5e_00000002",
                "dataItems": [
                  {
                    "id": "model00000165c4692416_00000000",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.Percent_Customers",
                    "itemLabel": "Percent_Customers"
                  }
                ],
                "id": "model00000165c4692416_00000001"
              }
            ]
          },
          "slotmapping": {
            "slots": [
              {
                "name": "values",
                "dataItems": [
                  "model00000165c4692416_00000000"
                ],
                "dataItemSettings": [],
                "caption": "Value",
                "id": "values",
                "layerId": "data"
              }
            ]
          },
          "type": "live",
          "name": {
            "translationTable": {}
          },
          "visId": "summary"
        },
        "model00000165c4697f76_00000000": {
          "id": "model00000165c4697f76_00000000",
          "data": {
            "dataViews": [
              {
                "modelRef": "model00000165c4499a5e_00000002",
                "dataItems": [
                  {
                    "id": "model00000165c469ae1d_00000002",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.Month_",
                    "itemLabel": "Month"
                  },
                  {
                    "id": "model00000165c469b970_00000000",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.Number_of_Rides",
                    "itemLabel": "Number_of_Rides"
                  },
                  {
                    "id": "model00000165c469ce98_00000000",
                    "itemId": "Bike_Share_Rides_Demographics_CSV.From_Community",
                    "itemLabel": "From_Community"
                  }
                ],
                "id": "model00000165c469ae1d_00000001"
              }
            ]
          },
          "visTypeLocked": true,
          "slotmapping": {
            "slots": [
              {
                "name": "categories",
                "dataItems": [
                  "model00000165c469ae1d_00000002"
                ],
                "dataItemSettings": [],
                "caption": "Bars",
                "id": "categories"
              },
              {
                "name": "values",
                "dataItems": [
                  "model00000165c469b970_00000000"
                ],
                "caption": "Length",
                "id": "values"
              },
              {
                "name": "color",
                "dataItems": [
                  "model00000165c469ce98_00000000"
                ],
                "caption": "Color",
                "id": "color"
              }
            ]
          },
          "type": "live",
          "visId": "com.ibm.vis.rave2bundlestackedcolumn",
          "name": {
            "translationTable": {}
          }
        }
      }
    }
  };
}
