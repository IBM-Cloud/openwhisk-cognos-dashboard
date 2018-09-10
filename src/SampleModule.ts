export default function main(params: any) {
  return {
    module: {
      "xsd": "https://ibm.com/daas/module/1.0/module.xsd",
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
      "table": {
        "name": "Bike Share Rides Demographics CSV",
        "description": "description of the table for visual hints",
        "column": [
          {
            "name": "Date",
            "datatype": "DATE",
            "nullable": true,
            "description": "Date",
            "label": "Date",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cDate"
          },
          {
            "name": "From_Community",
            "datatype": "NVARCHAR(256)",
            "nullable": true,
            "description": "From_Community",
            "label": "From_Community",
            "usage": "attribute",
            "regularAggregate": "countDistinct"
          },
          {
            "name": "Latitude",
            "datatype": "DOUBLE",
            "nullable": true,
            "description": "Latitude",
            "label": "Latitude",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cLatitude"
          },
          {
            "name": "Longitude",
            "datatype": "DOUBLE",
            "nullable": true,
            "description": "Longitude",
            "label": "Longitude",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cLongitude"
          },
          {
            "name": "Year",
            "datatype": "BIGINT",
            "description": "Year",
            "label": "Year",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cYear"
          },
          {
            "name": "YearMonth",
            "datatype": "NVARCHAR(256)",
            "nullable": true,
            "description": "YearMonth",
            "label": "YearMonth",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cMonth"
          },
          {
            "name": "Month",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Month",
            "label": "Month",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cMonth"
          },
          {
            "name": "MonthNameShort",
            "datatype": "NVARCHAR(256)",
            "nullable": true,
            "description": "MonthNameShort",
            "label": "MonthNameShort",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cMonth"
          },
          {
            "name": "MonthNameLong",
            "datatype": "NVARCHAR(256)",
            "nullable": true,
            "description": "MonthNameLong",
            "label": "MonthNameLong",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cMonth"
          },
          {
            "name": "Weekend",
            "datatype": "NVARCHAR(256)",
            "nullable": true,
            "description": "Weekend",
            "label": "Weekend",
            "usage": "attribute",
            "regularAggregate": "countDistinct"
          },
          {
            "name": "Day_of_Week",
            "datatype": "NVARCHAR(256)",
            "nullable": true,
            "description": "Day_of_Week",
            "label": "Day_of_Week",
            "usage": "attribute",
            "regularAggregate": "countDistinct",
            "taxonomyFamily": "cDay"
          },
          {
            "name": "Number_of_Rides",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Number_of_Rides",
            "label": "Number_of_Rides",
            "usage": "fact",
            "regularAggregate": "total"
          },
          {
            "name": "Percent_Customers",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Percent_Customers",
            "label": "Percent_Customers",
            "usage": "fact",
            "regularAggregate": "average"
          },
          {
            "name": "Percent_Subscribers",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Percent_Subscribers",
            "label": "Percent_Subscribers",
            "usage": "fact",
            "regularAggregate": "average"
          },
          {
            "name": "Percent_Dependents",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Percent_Dependents",
            "label": "Percent_Dependents",
            "usage": "fact",
            "regularAggregate": "average"
          },
          {
            "name": "Percent_Males",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Percent_Males",
            "label": "Percent_Males",
            "usage": "fact",
            "regularAggregate": "average"
          },
          {
            "name": "Percent_Females",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Percent_Females",
            "label": "Percent_Females",
            "usage": "fact",
            "regularAggregate": "average"
          },
          {
            "name": "Average_Age",
            "datatype": "BIGINT",
            "nullable": true,
            "description": "Average_Age",
            "label": "Average_Age",
            "usage": "fact",
            "regularAggregate": "average"
          }
        ]
      },
      "label": "Module Name",
      "identifier": "moduleId"
    }
  };
}
