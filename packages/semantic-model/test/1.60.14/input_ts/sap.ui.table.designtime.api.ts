import { LibraryFile } from "../../../src/apiJson";

export const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.60.14",
  symbols: [
    {
      kind: "namespace",
      name: "sap.ui.table",
      basename: "table",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "",
      static: true,
      visibility: "public",
      description: "Table-like controls, mainly for desktop scenarios."
    },
    {
      kind: "class",
      name: "sap.ui.table.AnalyticalColumn",
      basename: "AnalyticalColumn",
      resource: "sap/ui/table/AnalyticalColumn.js",
      module: "sap/ui/table/AnalyticalColumn",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.table.Column",
      description:
        "This column adds additional properties to the table column which are needed for the analytical binding and table",
      experimental: {
        since: "1.21",
        text:
          "The AnalyticalColumn will be productized soon. Some attributes will be added to Column."
      },
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "leadingProperty",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Defines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.",
            methods: ["getLeadingProperty", "setLeadingProperty"]
          },
          {
            name: "summed",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "If defined a sum for this column is calculated",
            methods: ["getSummed", "setSummed"]
          },
          {
            name: "inResult",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Specifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.",
            methods: ["getInResult", "setInResult"]
          },
          {
            name: "showIfGrouped",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Specifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.",
            methods: ["getShowIfGrouped", "setShowIfGrouped"]
          },
          {
            name: "groupHeaderFormatter",
            type: "any",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "If the column is grouped, this formatter is used to format the value in the group header",
            methods: ["getGroupHeaderFormatter", "setGroupHeaderFormatter"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new AnalyticalColumn.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.AnalyticalColumn with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Column.extend}."
        },
        {
          name: "getGroupHeaderFormatter",
          visibility: "public",
          returnValue: {
            type: "any",
            description: "Value of property <code>groupHeaderFormatter</code>"
          },
          description:
            "Gets current value of property {@link #getGroupHeaderFormatter groupHeaderFormatter}.\n\nIf the column is grouped, this formatter is used to format the value in the group header"
        },
        {
          name: "getInResult",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>inResult</code>"
          },
          description:
            "Gets current value of property {@link #getInResult inResult}.\n\nSpecifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLeadingProperty",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>leadingProperty</code>"
          },
          description:
            "Gets current value of property {@link #getLeadingProperty leadingProperty}.\n\nDefines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.AnalyticalColumn."
        },
        {
          name: "getShowIfGrouped",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showIfGrouped</code>"
          },
          description:
            "Gets current value of property {@link #getShowIfGrouped showIfGrouped}.\n\nSpecifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSummed",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>summed</code>"
          },
          description:
            "Gets current value of property {@link #getSummed summed}.\n\nIf defined a sum for this column is calculated\n\nDefault value is <code>false</code>."
        },
        {
          name: "isGroupable",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "<code>true</code> if the column is groupable"
          },
          description:
            "Returns the information whether the column is groupable.\n\nThe column is groupable only if the following conditions are fulfilled: <ul> <li>The column must be child of an <code>AnalyticalTable</code>.</li> <li>The <code>rows</code> aggregation of the table must be bound.</li> <li>The metadata of the model must be loaded.</li> <li>The column's <code>leadingProperty</code> must be a sortable and filterable dimension.</li> </ul>"
        },
        {
          name: "setGroupHeaderFormatter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalColumn",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oGroupHeaderFormatter",
              type: "any",
              optional: false,
              description:
                "New value for property <code>groupHeaderFormatter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGroupHeaderFormatter groupHeaderFormatter}.\n\nIf the column is grouped, this formatter is used to format the value in the group header\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setInResult",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalColumn",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bInResult",
              type: "boolean",
              optional: false,
              description: "New value for property <code>inResult</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getInResult inResult}.\n\nSpecifies that the dimension referred to by the column shall be included in the granularity of the data result. It allows a finer distinction between a visible/grouped/(included)inResult column.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLeadingProperty",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalColumn",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sLeadingProperty",
              type: "string",
              optional: false,
              description: "New value for property <code>leadingProperty</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLeadingProperty leadingProperty}.\n\nDefines the primary model property which is used inside the Column. In case of the analytical extension this means the property which is grouped by for dimensions or the property which is summed for measures.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setShowIfGrouped",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalColumn",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowIfGrouped",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showIfGrouped</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowIfGrouped showIfGrouped}.\n\nSpecifies whether the column is displayed within the table even if it is grouped or not. A grouped column has the same value for every rows within the group.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSummed",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalColumn",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSummed",
              type: "boolean",
              optional: false,
              description: "New value for property <code>summed</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSummed summed}.\n\nIf defined a sum for this column is calculated\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.AnalyticalColumnMenu",
      basename: "AnalyticalColumnMenu",
      resource: "sap/ui/table/AnalyticalColumnMenu.js",
      module: "sap/ui/table/AnalyticalColumnMenu",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.table.ColumnMenu",
      description: "A column menu which is used by the analytical column",
      experimental: {
        since: "1.21",
        text: "The AnalyticalColumnMenu will be productized soon."
      },
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "control" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description: "Constructor for a new AnalyticalColumnMenu."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.AnalyticalColumnMenu with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.ColumnMenu.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.AnalyticalColumnMenu."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.AnalyticalTable",
      basename: "AnalyticalTable",
      resource: "sap/ui/table/AnalyticalTable.js",
      module: "sap/ui/table/AnalyticalTable",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.table.Table",
      description:
        "Table which handles analytical OData backends. The AnalyticalTable only works with an AnalyticalBinding and correctly annotated OData services. Please check on the SAP Annotations for OData Version 2.0 documentation for further details.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "sumOnTop",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              'Specifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      sumOnTop: true\n    }\n  });\n</pre>',
            deprecated: {
              since: "1.44.0",
              text:
                "please use the corresponding binding parameter <code>sumOnTop</code> instead."
            },
            methods: ["getSumOnTop", "setSumOnTop"]
          },
          {
            name: "numberOfExpandedLevels",
            type: "int",
            defaultValue: 0,
            group: "Misc",
            visibility: "public",
            description:
              'Number of levels, which should be opened initially (on first load of data).\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      numberOfExpandedLevels: 1\n    }\n  });\n</pre>',
            deprecated: {
              since: "1.44.0",
              text:
                "please use the corresponding binding parameter <code>numberOfExpandedLevels</code> instead."
            },
            methods: ["getNumberOfExpandedLevels", "setNumberOfExpandedLevels"]
          },
          {
            name: "autoExpandMode",
            type: "string",
            defaultValue: "Bundled",
            group: "Misc",
            visibility: "public",
            description:
              'The kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must be a value of <code>sap.ui.table.TreeAutoExpandMode</code>.\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      autoExpandMode: "Bundled"\n    }\n  });\n</pre>',
            deprecated: {
              since: "1.44.0",
              text:
                "please use the corresponding binding parameter <code>autoExpandMode</code> instead."
            },
            methods: ["getAutoExpandMode", "setAutoExpandMode"]
          },
          {
            name: "columnVisibilityMenuSorter",
            type: "any",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description:
              "Functions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.",
            methods: [
              "getColumnVisibilityMenuSorter",
              "setColumnVisibilityMenuSorter"
            ]
          },
          {
            name: "collapseRecursive",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.\n\nCalling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and the binding supports this feature.",
            methods: ["getCollapseRecursive", "setCollapseRecursive"]
          },
          {
            name: "dirty",
            type: "boolean",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description: "If dirty the content of the Table will be overlayed.",
            deprecated: {
              since: "1.21.2",
              text: "replaced by {@link sap.ui.table.Table#setShowOverlay}"
            },
            methods: ["getDirty", "setDirty"]
          }
        ],
        designtime: "sap/ui/table/designtime/AnalyticalTable.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new AnalyticalTable.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "http://scn.sap.com/docs/DOC-44986",
          "{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}",
          "{@link fiori:/analytical-table-alv/ Analytical Table}"
        ]
      },
      methods: [
        {
          name: "addSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "a reference to the <code>AnalyticalTable</code> control, can be used for chaining"
          },
          parameters: [
            {
              name: "iFromIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be selected."
            },
            {
              name: "iToIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be selected."
            }
          ],
          description:
            'Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The nodes are referenced via their absolute row index. Please be aware that the absolute row index only applies to the tree which is visualized by the <code>AnalyticalTable</code> control. Invisible nodes (collapsed child nodes) will not be taken into account.\n\nPlease also take notice of the fact, that "addSelectionInterval" does not change any other selection. To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".'
        },
        {
          name: "clearSelection",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "a reference to the <code>AnalyticalTable</code> control, can be used for chaining"
          },
          description:
            "Clears the complete selection (all analytical table rows/nodes will be deselected)."
        },
        {
          name: "collapse",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "vRowIndex",
              type: "int|int[]",
              optional: false,
              description:
                "A single index, or an array of indices of the rows to be collapsed"
            }
          ],
          description: "Collapses one or more rows."
        },
        {
          name: "collapseAll",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description: "<code>this</code> to allow method chaining"
          },
          description:
            "Collapses all nodes (and their child nodes if collapseRecursive is activated)."
        },
        {
          name: "expand",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "vRowIndex",
              type: "int|int[]",
              optional: false,
              description:
                "A single index or an array of indices of the rows to be expanded"
            }
          ],
          description: "Expands one or more rows."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.AnalyticalTable with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Table.extend}."
        },
        {
          name: "getAutoExpandMode",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>autoExpandMode</code>"
          },
          description:
            'Gets current value of property {@link #getAutoExpandMode autoExpandMode}.\n\nThe kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must be a value of <code>sap.ui.table.TreeAutoExpandMode</code>.\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      autoExpandMode: "Bundled"\n    }\n  });\n</pre>\n\nDefault value is <code>Bundled</code>.',
          deprecated: {
            since: "1.44.0",
            text:
              "please use the corresponding binding parameter <code>autoExpandMode</code> instead."
          }
        },
        {
          name: "getCollapseRecursive",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>collapseRecursive</code>"
          },
          description:
            "Gets current value of property {@link #getCollapseRecursive collapseRecursive}.\n\nSetting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.\n\nCalling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and the binding supports this feature.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getColumnVisibilityMenuSorter",
          visibility: "public",
          returnValue: {
            type: "any",
            description:
              "Value of property <code>columnVisibilityMenuSorter</code>"
          },
          description:
            "Gets current value of property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.\n\nFunctions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored."
        },
        {
          name: "getContextByIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "object",
            description: "The context of a row by its index"
          },
          parameters: [
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "Index of the row to return the context from."
            }
          ],
          description: "Returns the context of a row by its index."
        },
        {
          name: "getDirty",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>dirty</code>"
          },
          description:
            "Gets current value of property {@link #getDirty dirty}.\n\nIf dirty the content of the Table will be overlayed.",
          deprecated: {
            since: "1.21.2",
            text: "replaced by {@link sap.ui.table.Table#setShowOverlay}"
          }
        },
        {
          name: "getEnableGrouping",
          visibility: "public",
          description:
            "The property <code>enableGrouping</code> is not supported by the <code>AnalyticalTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "getGroupBy",
          visibility: "public",
          description:
            "The <code>groupBy</code> association is not supported by the <code>AnalyticalTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.AnalyticalTable."
        },
        {
          name: "getNumberOfExpandedLevels",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>numberOfExpandedLevels</code>"
          },
          description:
            'Gets current value of property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.\n\nNumber of levels, which should be opened initially (on first load of data).\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      numberOfExpandedLevels: 1\n    }\n  });\n</pre>\n\nDefault value is <code>0</code>.',
          deprecated: {
            since: "1.44.0",
            text:
              "please use the corresponding binding parameter <code>numberOfExpandedLevels</code> instead."
          }
        },
        {
          name: "getSelectedIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "int[]",
            description:
              "an array containing all selected indices (ascending ordered integers)"
          },
          description:
            "Retrieves the lead selection index. The lead selection index is, among other things, used to determine the start/end of a selection range, when using Shift-Click to select multiple entries at once."
        },
        {
          name: "getSelectedIndices",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "int[]",
            description: "an array containing all selected indices"
          },
          description:
            'Returns an array containing the row indices of all selected tree nodes (in ascending order).\n\nPlease be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be returned.'
        },
        {
          name: "getSumOnTop",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>sumOnTop</code>"
          },
          description:
            'Gets current value of property {@link #getSumOnTop sumOnTop}.\n\nSpecifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      sumOnTop: true\n    }\n  });\n</pre>\n\nDefault value is <code>false</code>.',
          deprecated: {
            since: "1.44.0",
            text:
              "please use the corresponding binding parameter <code>sumOnTop</code> instead."
          }
        },
        {
          name: "getTotalSize",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "int",
            description: "The total size of the data entries"
          },
          description: "Returns the total size of the data entries."
        },
        {
          name: "isExpanded",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean",
            description:
              "<code>true</code> if the row is expanded, <code>false</code> if it is collapsed"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description: "The index of the row to be checked"
            }
          ],
          description: "Checks whether the row is expanded or collapsed."
        },
        {
          name: "isIndexSelected",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean",
            description: "true if the index is selected, false otherwise"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description:
                "The row index for which the selection state should be retrieved"
            }
          ],
          description: "Checks if the row at the given index is selected."
        },
        {
          name: "removeSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "a reference to the <code>AnalyticalTable</code> control, can be used for chaining"
          },
          parameters: [
            {
              name: "iFromIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be deselected."
            },
            {
              name: "iToIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be deselected."
            }
          ],
          description:
            "All rows/tree nodes inside the range (including boundaries) will be deselected. The nodes are referenced with their absolute row index. Please be aware that the absolute row index only applies to the tree which is visualized by the <code>AnalyticalTable</code> control. Invisible nodes (collapsed child nodes) will not be taken into account."
        },
        {
          name: "resumeUpdateAnalyticalInfo",
          visibility: "protected",
          parameters: [
            {
              name: "bSuppressRefresh",
              type: "boolean",
              optional: false,
              description: "binding shall not refresh data"
            },
            {
              name: "bForceChange",
              type: "boolean",
              optional: false,
              description: "forces the binding to fire a change event"
            }
          ],
          description:
            "This function is used by some composite controls to force updating the AnalyticalInfo"
        },
        {
          name: "selectAll",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "a reference to the <code>AnalyticalTable</code> control, can be used for chaining"
          },
          description:
            "Selects all available nodes/rows.\n\nExplanation of the SelectAll function and what to expect from its behavior: All rows/nodes stored locally on the client are selected. In addition all subsequent rows/tree nodes, which will be paged into view are also immediately selected. However, due to obvious performance/network traffic reasons, the SelectAll function will NOT retrieve any data from the backend."
        },
        {
          name: "setAutoExpandMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sAutoExpandMode",
              type: "string",
              optional: false,
              description: "New value for property <code>autoExpandMode</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getAutoExpandMode autoExpandMode}.\n\nThe kind of auto expansion algorithm, e.g. optimized filter conditions, per level requests, ... Must be a value of <code>sap.ui.table.TreeAutoExpandMode</code>.\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      autoExpandMode: "Bundled"\n    }\n  });\n</pre>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Bundled</code>.',
          deprecated: {
            since: "1.44.0",
            text:
              "please use the corresponding binding parameter <code>autoExpandMode</code> instead."
          }
        },
        {
          name: "setCollapseRecursive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bCollapseRecursive",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>collapseRecursive</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.\n\nSetting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed.\n\nCalling the setter of this property only has an effect when the tables <code>rows</code> aggregation is already bound and the binding supports this feature.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setColumnVisibilityMenuSorter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oColumnVisibilityMenuSorter",
              type: "any",
              optional: false,
              description:
                "New value for property <code>columnVisibilityMenuSorter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnVisibilityMenuSorter columnVisibilityMenuSorter}.\n\nFunctions which is used to sort the column visibility menu entries e.g.: function(ColumnA, ColumnB) { return 0 = equals, <0 lower, >0 greater }; Other values than functions will be ignored.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setDirty",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bDirty",
              type: "boolean",
              optional: false,
              description: "New value for property <code>dirty</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDirty dirty}.\n\nIf dirty the content of the Table will be overlayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.",
          deprecated: {
            since: "1.21.2",
            text: "replaced by {@link sap.ui.table.Table#setShowOverlay}"
          }
        },
        {
          name: "setEnableGrouping",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "The property <code>enableGrouping</code> is not supported by the <code>AnalyticalTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "setGroupBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "The <code>groupBy</code> association is not supported by the <code>AnalyticalTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "setNumberOfExpandedLevels",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iNumberOfExpandedLevels",
              type: "int",
              optional: false,
              description:
                "New value for property <code>numberOfExpandedLevels</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getNumberOfExpandedLevels numberOfExpandedLevels}.\n\nNumber of levels, which should be opened initially (on first load of data).\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      numberOfExpandedLevels: 1\n    }\n  });\n</pre>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>.',
          deprecated: {
            since: "1.44.0",
            text:
              "please use the corresponding binding parameter <code>numberOfExpandedLevels</code> instead."
          }
        },
        {
          name: "setSelectedIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "a reference to the <code>AnalyticalTable</code> control, can be used for chaining"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description:
                "The row index which will be selected (in case it exists)"
            }
          ],
          description:
            "In an <code>AnalyticalTable</code> control you can only select indices, which correspond to the currently visualized tree. Invisible nodes (e.g. collapsed child nodes) cannot be selected via Index, because they do not correspond to an <code>AnalyticalTable</code> row."
        },
        {
          name: "setSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "a reference to the <code>AnalyticalTable</code> control, can be used for chaining"
          },
          parameters: [
            {
              name: "iFromIndex",
              type: "int",
              optional: false,
              description: "the start index of the selection range"
            },
            {
              name: "iToIndex",
              type: "int",
              optional: false,
              description: "the end index of the selection range"
            }
          ],
          description:
            "Sets the selection of the <code>AnalyticalTable</code> control to the given range (including boundaries).\n\n<b>Note:</b> The previous selection will be lost/overridden. If this is not the required behavior, please use <code>addSelectionInterval</code> and <code>removeSelectionInterval</code>."
        },
        {
          name: "setSumOnTop",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.AnalyticalTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSumOnTop",
              type: "boolean",
              optional: false,
              description: "New value for property <code>sumOnTop</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getSumOnTop sumOnTop}.\n\nSpecifies if the total values should be displayed in the group headers or on bottom of the row. Does not affect the total sum.\n\nThe value of the property is only taken into account if no parameter is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      sumOnTop: true\n    }\n  });\n</pre>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.',
          deprecated: {
            since: "1.44.0",
            text:
              "please use the corresponding binding parameter <code>sumOnTop</code> instead."
          }
        },
        {
          name: "suspendUpdateAnalyticalInfo",
          visibility: "protected",
          description:
            "This function is used by some composite controls to avoid updating the AnalyticalInfo when several column are added to the table. In order to finally update the AnalyticalInfo and request data, resumeUpdateAnalyticalInfo must be called."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.Column",
      basename: "Column",
      resource: "sap/ui/table/Column.js",
      module: "sap/ui/table/Column",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description:
        "The column allows you to define column specific properties that will be applied when rendering the table.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Dimension",
            visibility: "public",
            description:
              'Width of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.',
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "minWidth",
            type: "int",
            defaultValue: 0,
            group: "Dimension",
            visibility: "public",
            since: "1.44.1",
            description:
              "Defines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.",
            methods: ["getMinWidth", "setMinWidth"]
          },
          {
            name: "flexible",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              'If the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the original width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end of the table.',
            deprecated: {
              since: "1.44",
              text:
                'this property has no effect. Use the property <code>minWidth</code> in combination with the property <code>width="auto"</code> instead.'
            },
            methods: ["getFlexible", "setFlexible"]
          },
          {
            name: "resizable",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "If set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)",
            methods: ["getResizable", "setResizable"]
          },
          {
            name: "hAlign",
            type: "sap.ui.core.HorizontalAlign",
            defaultValue: "Begin",
            group: "Appearance",
            visibility: "public",
            description:
              "Horizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.",
            methods: ["getHAlign", "setHAlign"]
          },
          {
            name: "sorted",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Indicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling <code>Column.sort()</code>",
            methods: ["getSorted", "setSorted"]
          },
          {
            name: "sortOrder",
            type: "sap.ui.table.SortOrder",
            defaultValue: "Ascending",
            group: "Appearance",
            visibility: "public",
            description:
              "This property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code>",
            methods: ["getSortOrder", "setSortOrder"]
          },
          {
            name: "sortProperty",
            type: "string",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Specifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.\n\nA column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.",
            methods: ["getSortProperty", "setSortProperty"]
          },
          {
            name: "filtered",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Indicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling <code>Column.sort()</code>",
            methods: ["getFiltered", "setFiltered"]
          },
          {
            name: "filterProperty",
            type: "string",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Specifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.\n\nA column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field.",
            methods: ["getFilterProperty", "setFilterProperty"]
          },
          {
            name: "filterValue",
            type: "string",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "Specifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>\n&gt; 50\n&lt; 100\n&gt;= 150\n&lt;= 200\n= 250\n!= 300\n*something    ends with\nsomething*    starts with\n*something*   contains\nsome..thing   between\n50..100       between\n</pre>",
            methods: ["getFilterValue", "setFilterValue"]
          },
          {
            name: "filterOperator",
            type: "string",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description: "Filter operator to use when filtering this column.",
            methods: ["getFilterOperator", "setFilterOperator"]
          },
          {
            name: "defaultFilterOperator",
            type: "string",
            defaultValue: null,
            group: "Behavior",
            visibility: "public",
            description:
              "If this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed.",
            methods: ["getDefaultFilterOperator", "setDefaultFilterOperator"]
          },
          {
            name: "filterType",
            type: "any",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            since: "1.9.2",
            description:
              "Type of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: <code>sap.ui.model.type.Date</code> or an expression similar to the binding syntax, e.g.: <code>\"\\{type: 'sap.ui.model.type.Date', formatOptions: \\{UTC: true\\}, constraints: \\{\\} \\}\"</code>. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is <code>sap.ui.model.type.String</code>.",
            methods: ["getFilterType", "setFilterType"]
          },
          {
            name: "grouped",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description: "Indicates if the column is grouped.",
            methods: ["getGrouped", "setGrouped"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "Invisible controls are not rendered.",
            methods: ["getVisible", "setVisible"]
          },
          {
            name: "name",
            type: "string",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.11.1",
            description:
              "The name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label.",
            methods: ["getName", "setName"]
          },
          {
            name: "showFilterMenuEntry",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            since: "1.13.0",
            description: "Defines if the filter menu entry is displayed",
            methods: ["getShowFilterMenuEntry", "setShowFilterMenuEntry"]
          },
          {
            name: "showSortMenuEntry",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            since: "1.13.0",
            description: "Defines if the sort menu entries are displayed",
            methods: ["getShowSortMenuEntry", "setShowSortMenuEntry"]
          },
          {
            name: "headerSpan",
            type: "any",
            defaultValue: 1,
            group: "Behavior",
            visibility: "public",
            description:
              "If this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.",
            methods: ["getHeaderSpan", "setHeaderSpan"]
          },
          {
            name: "autoResizable",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.21.1",
            description:
              "Enables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox</code>",
            methods: ["getAutoResizable", "setAutoResizable"]
          }
        ],
        aggregations: [
          {
            name: "label",
            singularName: "label",
            type: "sap.ui.core.Control",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "Label of the column which is displayed in the column header. This aggregation is for the standard behavior, where you only want to display one single row header. If a string is supplied, a default label control will be created. Which control this is depends on the loaded libraries.",
            methods: ["getLabel", "destroyLabel", "setLabel"]
          },
          {
            name: "multiLabels",
            singularName: "multiLabel",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.13.1",
            description:
              "Labels of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation if you want to use multiple headers per column.",
            methods: [
              "getMultiLabels",
              "destroyMultiLabels",
              "insertMultiLabel",
              "addMultiLabel",
              "removeMultiLabel",
              "indexOfMultiLabel",
              "removeAllMultiLabels"
            ]
          },
          {
            name: "template",
            singularName: "template",
            type: "sap.ui.core.Control",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              'Template (cell renderer) of this column. A template is decoupled from the column. Each time the template\'s properties or aggregations have been changed, the template has to be applied again via <code>setTemplate</code> for the changes to take effect. If a string is defined, a default text control will be created with its text property bound to the value of the string. The default template depends on the libraries loaded. If there is no template, the column will not be rendered in the table. The set of supported controls is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}" in the documentation for more details. While it is technically possible to also use other controls, doing so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support, and keyboard support.',
            methods: ["getTemplate", "destroyTemplate", "setTemplate"]
          },
          {
            name: "menu",
            singularName: "menu",
            type: "sap.ui.unified.Menu",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.\n\n<b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>. To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of <code>sap.ui.unified.Menu</code>.",
            methods: ["getMenu", "destroyMenu", "setMenu"]
          }
        ],
        defaultAggregation: "label",
        events: [
          {
            name: "columnMenuOpen",
            visibility: "public",
            since: "1.33.0",
            description: "Fires before the column menu is opened.",
            parameters: {
              menu: {
                name: "menu",
                type: "sap.ui.unified.Menu",
                description:
                  "Refence to the selected <code>menu</code> instance to be opened."
              }
            },
            methods: [
              "attachColumnMenuOpen",
              "detachColumnMenuOpen",
              "fireColumnMenuOpen"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Column.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "columnMenuOpen",
          visibility: "public",
          since: "1.33.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    menu: {
                      name: "menu",
                      type: "sap.ui.unified.Menu",
                      optional: false,
                      description:
                        "Refence to the selected <code>menu</code> instance to be opened."
                    }
                  }
                }
              }
            }
          ],
          description: "Fires before the column menu is opened."
        }
      ],
      methods: [
        {
          name: "addMultiLabel",
          visibility: "public",
          since: "1.13.1",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMultiLabel",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The multiLabel to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some multiLabel to the aggregation {@link #getMultiLabels multiLabels}."
        },
        {
          name: "attachColumnMenuOpen",
          visibility: "public",
          since: "1.33.0",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Column</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:columnMenuOpen columnMenuOpen} event of this <code>sap.ui.table.Column</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Column</code> itself.\n\nFires before the column menu is opened."
        },
        {
          name: "destroyLabel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the label in the aggregation {@link #getLabel label}."
        },
        {
          name: "destroyMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the menu in the aggregation {@link #getMenu menu}."
        },
        {
          name: "destroyMultiLabels",
          visibility: "public",
          since: "1.13.1",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the multiLabels in the aggregation {@link #getMultiLabels multiLabels}."
        },
        {
          name: "destroyTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the template in the aggregation {@link #getTemplate template}."
        },
        {
          name: "detachColumnMenuOpen",
          visibility: "public",
          since: "1.33.0",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:columnMenuOpen columnMenuOpen} event of this <code>sap.ui.table.Column</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.Column with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "fireColumnMenuOpen",
          visibility: "protected",
          since: "1.33.0",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                menu: {
                  name: "menu",
                  type: "sap.ui.unified.Menu",
                  optional: true,
                  description:
                    "Refence to the selected <code>menu</code> instance to be opened."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:columnMenuOpen columnMenuOpen} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getAutoResizable",
          visibility: "public",
          since: "1.21.1",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>autoResizable</code>"
          },
          description:
            "Gets current value of property {@link #getAutoResizable autoResizable}.\n\nEnables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox</code>\n\nDefault value is <code>false</code>."
        },
        {
          name: "getDefaultFilterOperator",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>defaultFilterOperator</code>"
          },
          description:
            "Gets current value of property {@link #getDefaultFilterOperator defaultFilterOperator}.\n\nIf this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed."
        },
        {
          name: "getFiltered",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>filtered</code>"
          },
          description:
            "Gets current value of property {@link #getFiltered filtered}.\n\nIndicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling <code>Column.sort()</code>\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFilterOperator",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>filterOperator</code>"
          },
          description:
            "Gets current value of property {@link #getFilterOperator filterOperator}.\n\nFilter operator to use when filtering this column."
        },
        {
          name: "getFilterProperty",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>filterProperty</code>"
          },
          description:
            "Gets current value of property {@link #getFilterProperty filterProperty}.\n\nSpecifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.\n\nA column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field."
        },
        {
          name: "getFilterType",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "any",
            description: "Value of property <code>filterType</code>"
          },
          description:
            "Gets current value of property {@link #getFilterType filterType}.\n\nType of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: <code>sap.ui.model.type.Date</code> or an expression similar to the binding syntax, e.g.: <code>\"\\{type: 'sap.ui.model.type.Date', formatOptions: \\{UTC: true\\}, constraints: \\{\\} \\}\"</code>. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is <code>sap.ui.model.type.String</code>."
        },
        {
          name: "getFilterValue",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>filterValue</code>"
          },
          description:
            "Gets current value of property {@link #getFilterValue filterValue}.\n\nSpecifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>\n&gt; 50\n&lt; 100\n&gt;= 150\n&lt;= 200\n= 250\n!= 300\nsomething    ends with\nsomething*    starts with\nsomething*   contains\nsome..thing   between\n50..100       between\n</pre>"
        },
        {
          name: "getFlexible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flexible</code>"
          },
          description:
            'Gets current value of property {@link #getFlexible flexible}.\n\nIf the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the original width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end of the table.\n\nDefault value is <code>true</code>.',
          deprecated: {
            since: "1.44",
            text:
              'this property has no effect. Use the property <code>minWidth</code> in combination with the property <code>width="auto"</code> instead.'
          }
        },
        {
          name: "getGrouped",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>grouped</code>"
          },
          description:
            "Gets current value of property {@link #getGrouped grouped}.\n\nIndicates if the column is grouped.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getHAlign",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.HorizontalAlign",
            description: "Value of property <code>hAlign</code>"
          },
          description:
            "Gets current value of property {@link #getHAlign hAlign}.\n\nHorizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.\n\nDefault value is <code>Begin</code>."
        },
        {
          name: "getHeaderSpan",
          visibility: "public",
          returnValue: {
            type: "any",
            description: "Value of property <code>headerSpan</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderSpan headerSpan}.\n\nIf this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.\n\nDefault value is <code>1</code>."
        },
        {
          name: "getLabel",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control|string" },
          description:
            "Gets content of aggregation {@link #getLabel label}.\n\nLabel of the column which is displayed in the column header. This aggregation is for the standard behavior, where you only want to display one single row header. If a string is supplied, a default label control will be created. Which control this is depends on the loaded libraries."
        },
        {
          name: "getMenu",
          visibility: "public",
          returnValue: { type: "sap.ui.unified.Menu" },
          description:
            "Gets content of aggregation {@link #getMenu menu}.\n\nThe menu used by the column. By default the {@link sap.ui.table.ColumnMenu} is used.\n\n<b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>. To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of <code>sap.ui.unified.Menu</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.Column."
        },
        {
          name: "getMinWidth",
          visibility: "public",
          since: "1.44.1",
          returnValue: {
            type: "int",
            description: "Value of property <code>minWidth</code>"
          },
          description:
            "Gets current value of property {@link #getMinWidth minWidth}.\n\nDefines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getMultiLabels",
          visibility: "public",
          since: "1.13.1",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getMultiLabels multiLabels}.\n\nLabels of the column which are displayed in the column header. Define a control for each header row in the table. Use this aggregation if you want to use multiple headers per column."
        },
        {
          name: "getName",
          visibility: "public",
          since: "1.11.1",
          returnValue: {
            type: "string",
            description: "Value of property <code>name</code>"
          },
          description:
            "Gets current value of property {@link #getName name}.\n\nThe name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label."
        },
        {
          name: "getResizable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>resizable</code>"
          },
          description:
            "Gets current value of property {@link #getResizable resizable}.\n\nIf set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowFilterMenuEntry",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFilterMenuEntry</code>"
          },
          description:
            "Gets current value of property {@link #getShowFilterMenuEntry showFilterMenuEntry}.\n\nDefines if the filter menu entry is displayed\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowSortMenuEntry",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSortMenuEntry</code>"
          },
          description:
            "Gets current value of property {@link #getShowSortMenuEntry showSortMenuEntry}.\n\nDefines if the sort menu entries are displayed\n\nDefault value is <code>true</code>."
        },
        {
          name: "getSorted",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>sorted</code>"
          },
          description:
            "Gets current value of property {@link #getSorted sorted}.\n\nIndicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling <code>Column.sort()</code>\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSortOrder",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.SortOrder",
            description: "Value of property <code>sortOrder</code>"
          },
          description:
            "Gets current value of property {@link #getSortOrder sortOrder}.\n\nThis property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code>\n\nDefault value is <code>Ascending</code>."
        },
        {
          name: "getSortProperty",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>sortProperty</code>"
          },
          description:
            "Gets current value of property {@link #getSortProperty sortProperty}.\n\nSpecifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.\n\nA column menu entry for sorting can only be generated if the <code>sortProperty</code> is set."
        },
        {
          name: "getTemplate",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control|string" },
          description:
            'Gets content of aggregation {@link #getTemplate template}.\n\nTemplate (cell renderer) of this column. A template is decoupled from the column. Each time the template\'s properties or aggregations have been changed, the template has to be applied again via <code>setTemplate</code> for the changes to take effect. If a string is defined, a default text control will be created with its text property bound to the value of the string. The default template depends on the libraries loaded. If there is no template, the column will not be rendered in the table. The set of supported controls is limited. See section "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}" in the documentation for more details. While it is technically possible to also use other controls, doing so might lead to issues with regards to scrolling, alignment, condensed mode, screen reader support, and keyboard support.'
        },
        {
          name: "getTemplateClone",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.core.Control|null",
            description:
              "Clone of the column template, or <code>null</code> if no column template is defined"
          },
          parameters: [
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "Index of the column in the column aggregation of the table"
            }
          ],
          description:
            "Returns a column template clone. It either finds an unused clone or clones a new one from the column template."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nInvisible controls are not rendered.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            'Gets current value of property {@link #getWidth width}.\n\nWidth of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.'
        },
        {
          name: "indexOfMultiLabel",
          visibility: "public",
          since: "1.13.1",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMultiLabel",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The multiLabel whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMultiLabels multiLabels}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertMultiLabel",
          visibility: "public",
          since: "1.13.1",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMultiLabel",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The multiLabel to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the multiLabel should be inserted at; for a negative value of <code>iIndex</code>, the multiLabel is inserted at position 0; for a value greater than the current size of the aggregation, the multiLabel is inserted at the last position"
            }
          ],
          description:
            "Inserts a multiLabel into the aggregation {@link #getMultiLabels multiLabels}."
        },
        {
          name: "removeAllMultiLabels",
          visibility: "public",
          since: "1.13.1",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMultiLabels multiLabels}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeMultiLabel",
          visibility: "public",
          since: "1.13.1",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed multiLabel or <code>null</code>"
          },
          parameters: [
            {
              name: "vMultiLabel",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The multiLabel to remove or its index or id"
            }
          ],
          description:
            "Removes a multiLabel from the aggregation {@link #getMultiLabels multiLabels}."
        },
        {
          name: "setAutoResizable",
          visibility: "public",
          since: "1.21.1",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAutoResizable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>autoResizable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAutoResizable autoResizable}.\n\nEnables auto-resizing of the column on double clicking the resize bar. The width is determined on the widest currently displayed content. It does not consider rows which are currently not scrolled into view. Currently only implemented to work with the following controls: <code>sap.m.Text, sap.m.Label, sap.m.Link, sap.m.Input, sap.ui.commons.TextView, sap.ui.commons.Label, sap.ui.commons.Link and sap.ui.commons.TextField, sap.ui.commons.Checkbox, sap.m.Checkbox</code>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setDefaultFilterOperator",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDefaultFilterOperator",
              type: "string",
              optional: false,
              description:
                "New value for property <code>defaultFilterOperator</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDefaultFilterOperator defaultFilterOperator}.\n\nIf this property is set, the default filter operator of the column is overridden. By default <code>Contains</code> is used for string and <code>EQ</code> for other types. A valid <code>sap.ui.model.FilterOperator</code> needs to be passed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFiltered",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFiltered",
              type: "boolean",
              optional: false,
              description: "New value for property <code>filtered</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFiltered filtered}.\n\nIndicates if the column is filtered. This property only controls if a filter indicator is displayed in the column header - it does not trigger the filter function. The column has to be filtered by calling <code>Column.sort()</code>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFilterOperator",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFilterOperator",
              type: "string",
              optional: false,
              description: "New value for property <code>filterOperator</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFilterOperator filterOperator}.\n\nFilter operator to use when filtering this column.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFilterProperty",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFilterProperty",
              type: "string",
              optional: false,
              description: "New value for property <code>filterProperty</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFilterProperty filterProperty}.\n\nSpecifies the binding property on which the column shall be filtered. Since the column template may have composite bindings, it's not possible to figure out on which binding property the filter shall be applied. Therefore the binding property for filtering must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>filterProperty</code>.\n\nA column menu entry for filtering can only be generated if the <code>filterProperty</code> is set. The default menu entry is a text input field.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFilterType",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFilterType",
              type: "any",
              optional: false,
              description: "New value for property <code>filterType</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFilterType filterType}.\n\nType of Filter. This is used to transform the search term to the specified type, to make sure that the right columns are displayed. This should be the same as defined in binding for this column. As an alternative you can pass a function which does the conversion. The function receives the entered filter value as parameter and returns the proper value for the filter expression. Another option is to pass the class name of the type, e.g.: <code>sap.ui.model.type.Date</code> or an expression similar to the binding syntax, e.g.: <code>\"\\{type: 'sap.ui.model.type.Date', formatOptions: \\{UTC: true\\}, constraints: \\{\\} \\}\"</code>. Here the escaping is mandatory to avoid handling by the binding parser. By default the filter type is <code>sap.ui.model.type.String</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFilterValue",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFilterValue",
              type: "string",
              optional: false,
              description: "New value for property <code>filterValue</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFilterValue filterValue}.\n\nSpecifies the value of the filter as string (will be converted into the proper data type). It is possible to provide a filterOperator as string, as shown here: <pre>\n&gt; 50\n&lt; 100\n&gt;= 150\n&lt;= 200\n= 250\n!= 300\nsomething    ends with\nsomething*    starts with\nsomething*   contains\nsome..thing   between\n50..100       between\n</pre>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFlexible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlexible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>flexible</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getFlexible flexible}.\n\nIf the table is wider than the sum of widths of the visible columns, the columns will be resized proportionally to their widths that were set originally. If set to false, the column will be displayed in the original width. If all columns are set to not be flexible, an extra "dummy" column will be created at the end of the table.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>.',
          deprecated: {
            since: "1.44",
            text:
              'this property has no effect. Use the property <code>minWidth</code> in combination with the property <code>width="auto"</code> instead.'
          }
        },
        {
          name: "setGrouped",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bGrouped",
              type: "boolean",
              optional: false,
              description: "New value for property <code>grouped</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGrouped grouped}.\n\nIndicates if the column is grouped.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setHAlign",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHAlign",
              type: "sap.ui.core.HorizontalAlign",
              optional: false,
              description: "New value for property <code>hAlign</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHAlign hAlign}.\n\nHorizontal alignment of the column content. Controls with a text align do not inherit the horizontal alignment. You have to set the text align directly on the template.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Begin</code>."
        },
        {
          name: "setHeaderSpan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderSpan",
              type: "any",
              optional: false,
              description: "New value for property <code>headerSpan</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderSpan headerSpan}.\n\nIf this property is set, a span is applied for the header. When moving columns, all columns which are part of the header will be moved. The <code>headerSpan</code> can be either an integer or an array of integers (if you use the multi header feature of the table). If you only specify an integer, this span is applied for all header rows, with multiple integers you can specify a separate span for each header row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setLabel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vLabel",
              type: "sap.ui.core.Control|string",
              optional: false,
              description: "The label to set"
            }
          ],
          description: "Sets the aggregated {@link #getLabel label}."
        },
        {
          name: "setMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMenu",
              type: "sap.ui.unified.Menu",
              optional: false,
              description: "The menu to set"
            }
          ],
          description: "Sets the aggregated {@link #getMenu menu}."
        },
        {
          name: "setMinWidth",
          visibility: "public",
          since: "1.44.1",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinWidth",
              type: "int",
              optional: false,
              description: "New value for property <code>minWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMinWidth minWidth}.\n\nDefines the minimum width of a column in pixels. <p>This property only has an effect if the given column width is flexible, for example with width <code>auto</code>. <p>This property only influences the automatic behavior. If a user adjusts the column width manually, the column width can become smaller. <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setName",
          visibility: "public",
          since: "1.11.1",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sName",
              type: "string",
              optional: false,
              description: "New value for property <code>name</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getName name}.\n\nThe name of the column which is used in the column visibility menu item as text. If not set as a fallback the column menu tries to get the text from the nested Label.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setResizable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bResizable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>resizable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getResizable resizable}.\n\nIf set to true, the column can be resized either using the resize bar (by mouse) or using the keyboard (SHIFT + Left/Right Arrow keys)\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowFilterMenuEntry",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFilterMenuEntry",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showFilterMenuEntry</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowFilterMenuEntry showFilterMenuEntry}.\n\nDefines if the filter menu entry is displayed\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowSortMenuEntry",
          visibility: "public",
          since: "1.13.0",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSortMenuEntry",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showSortMenuEntry</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSortMenuEntry showSortMenuEntry}.\n\nDefines if the sort menu entries are displayed\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setSorted",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSorted",
              type: "boolean",
              optional: false,
              description: "New value for property <code>sorted</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSorted sorted}.\n\nIndicates if the column is sorted. This property only controls if a sort indicator is displayed in the column header - it does not trigger the sort function. The column has to be sorted by calling <code>Column.sort()</code>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSortOrder",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSortOrder",
              type: "sap.ui.table.SortOrder",
              optional: false,
              description: "New value for property <code>sortOrder</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSortOrder sortOrder}.\n\nThis property indicates the sort direction (Ascending or Descending). The corresponding icon will be rendered if the property <code>sorted</code> is <code>true</code>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Ascending</code>."
        },
        {
          name: "setSortProperty",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSortProperty",
              type: "string",
              optional: false,
              description: "New value for property <code>sortProperty</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSortProperty sortProperty}.\n\nSpecifies the binding property on which the column will sort. Since the column template may have composite bindings, it's not possible to figure out on which binding property the sort shall be applied. Therefore the binding property for sorting must be specified. For example, if the first name and last name are displayed in the same column, only one of the two can be defined as <code>sortProperty</code>.\n\nA column menu entry for sorting can only be generated if the <code>sortProperty</code> is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTemplate",
              type: "sap.ui.core.Control|string",
              optional: false,
              description: "The template to set"
            }
          ],
          description: "Sets the aggregated {@link #getTemplate template}."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nInvisible controls are not rendered.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getWidth width}.\n\nWidth of the column in CSS units. Default value is <code>auto</code>, see <a href="https://www.w3.org/TR/CSS2/tables.html#width-layout"></a> <p>Minimal column width is device-dependent, for example on desktop devices the column will not be smaller than 48px. <p>This property can be changed by the user or by the application configuration/personalization. <p>If a user adjusts the column width manually, the resulting value is always set in pixels. In addition, other columns with width <code>auto</code> get a fixed minimum width and do not shrink after the resizing.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.'
        },
        {
          name: "shouldRender",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description:
              "Returns <code>true</code>, if the column should be rendered"
          },
          description: "Returns whether the column should be rendered."
        },
        {
          name: "sort",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Column",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bDescending",
              type: "boolean",
              optional: false,
              description:
                "Sort order of the column (if undefined the default will be ascending)"
            }
          ],
          description: "Sorts the current column ascending or descending.",
          deprecated: {
            since: "1.5.1",
            text: 'Please use the function "sap.ui.Table.prototype.sort".'
          }
        },
        {
          name: "toggleSort",
          visibility: "public",
          "ui5-metamodel": true,
          description: "Toggles the sort order of the column.",
          deprecated: {
            since: "1.5.1",
            text: 'Please use the function "sap.ui.Table.prototype.sort".'
          }
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.ColumnMenu",
      basename: "ColumnMenu",
      resource: "sap/ui/table/ColumnMenu.js",
      module: "sap/ui/table/ColumnMenu",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.unified.Menu",
      description:
        "The column menu provides all common actions that can be performed on a column.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "control" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new ColumnMenu.\n\n<b>Note:</b> Applications must not use or change the default <code>sap.ui.table.ColumnMenu</code> of a column in any way or create own instances of <code>sap.ui.table.ColumnMenu</code>. To add a custom menu to a column, use the aggregation <code>menu</code> with a new instance of <code>sap.ui.unified.Menu</code>."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.ColumnMenu with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.unified.Menu.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.ColumnMenu."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.GroupEventType",
      basename: "GroupEventType",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "GroupEventType",
      static: true,
      visibility: "public",
      description:
        "Details about the group event to distinguish between different actions associated with grouping",
      properties: [
        {
          name: "group",
          visibility: "public",
          static: true,
          type: "string",
          description: "Group Column"
        },
        {
          name: "hideGroupedColumn",
          visibility: "public",
          static: true,
          type: "string",
          description: "Show grouped column only as group header"
        },
        {
          name: "moveDown",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Change the group order of the columns. Move column one position down in the group sequence"
        },
        {
          name: "moveUp",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Change the group order of the columns. Move column one position up in the group sequence"
        },
        {
          name: "showGroupedColumn",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Show grouped column also as a column, not just as group header"
        },
        {
          name: "ungroup",
          visibility: "public",
          static: true,
          type: "string",
          description: "Ungroup Column"
        },
        {
          name: "ungroupAll",
          visibility: "public",
          static: true,
          type: "string",
          description: "Ungroup All Columns"
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.NavigationMode",
      basename: "NavigationMode",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "NavigationMode",
      static: true,
      visibility: "public",
      description: "Navigation mode of the table",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Paginator",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Uses the paginator control. This option must no longer be used. Using a scrollbar is the only navigation mode which is supported by the <code>sap.ui.table</code> library. The <code>navigationMode</code> property has always been a visual representation. No matter which navigation mode is used, data fetched from an OData service is loaded page-wise.",
          deprecated: {
            since: "1.38",
            text: "replaced by {@link sap.ui.table.NavigationMode.Scrollbar}"
          }
        },
        {
          name: "Scrollbar",
          visibility: "public",
          static: true,
          type: "string",
          description: "Uses the scrollbar control."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.Row",
      basename: "Row",
      resource: "sap/ui/table/Row.js",
      module: "sap/ui/table/Row",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Element",
      description: "The row.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        aggregations: [
          {
            name: "cells",
            singularName: "cell",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The controls for the cells.",
            methods: [
              "getCells",
              "destroyCells",
              "insertCell",
              "addCell",
              "removeCell",
              "indexOfCell",
              "removeAllCells"
            ]
          },
          {
            name: "_rowAction",
            singularName: "_rowAction",
            type: "sap.ui.table.RowAction",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_rowAction", "destroy_rowAction", "set_rowAction"]
          },
          {
            name: "_settings",
            singularName: "_setting",
            type: "sap.ui.table.RowSettings",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_settings", "destroy_settings", "set_settings"]
          }
        ],
        defaultAggregation: "cells"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Row.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addCell",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Row",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCell",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The cell to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some cell to the aggregation {@link #getCells cells}."
        },
        {
          name: "destroyCells",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Row",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the cells in the aggregation {@link #getCells cells}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.Row with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getCells",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getCells cells}.\n\nThe controls for the cells."
        },
        {
          name: "getIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "int",
            description:
              "index of the row (considers scroll position and fixed rows)"
          },
          description:
            "Returns the index of the row in the table or -1 if not added to a table. This function considers the scroll position of the table and also takes fixed rows and fixed bottom rows into account."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.table.Row."
        },
        {
          name: "indexOfCell",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oCell",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The cell whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getCells cells}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertCell",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Row",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCell",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The cell to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the cell should be inserted at; for a negative value of <code>iIndex</code>, the cell is inserted at position 0; for a value greater than the current size of the aggregation, the cell is inserted at the last position"
            }
          ],
          description:
            "Inserts a cell into the aggregation {@link #getCells cells}."
        },
        {
          name: "removeAllCells",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getCells cells}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeCell",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed cell or <code>null</code>"
          },
          parameters: [
            {
              name: "vCell",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The cell to remove or its index or id"
            }
          ],
          description:
            "Removes a cell from the aggregation {@link #getCells cells}."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.RowAction",
      basename: "RowAction",
      resource: "sap/ui/table/RowAction.js",
      module: "sap/ui/table/RowAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.45.0",
      extends: "sap.ui.core.Control",
      description:
        "The <code>RowAction</code> control allows to display multiple action items which can be selected by the user. If more action items are available as the available space allows to display an overflow mechanism is provided. This control must only be used in the context of the <code>sap.ui.table.Table</code> control to define row actions.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.",
            methods: ["getVisible", "setVisible"]
          }
        ],
        aggregations: [
          {
            name: "items",
            singularName: "item",
            type: "sap.ui.table.RowActionItem",
            cardinality: "0..n",
            visibility: "public",
            description: "The action items which should be displayed.",
            methods: [
              "getItems",
              "destroyItems",
              "insertItem",
              "addItem",
              "removeItem",
              "indexOfItem",
              "removeAllItems"
            ]
          },
          {
            name: "_icons",
            singularName: "_icon",
            type: "sap.ui.core.Icon",
            cardinality: "0..n",
            visibility: "hidden",
            methods: [
              "get_icons",
              "destroy_icons",
              "insert_icon",
              "add_icon",
              "remove_icon",
              "indexOf_icon",
              "removeAll_icons"
            ]
          },
          {
            name: "_menu",
            singularName: "_menu",
            type: "sap.ui.unified.Menu",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_menu", "destroy_menu", "set_menu"]
          }
        ],
        defaultAggregation: "items"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new RowAction.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.table.RowActionItem",
              optional: false,
              description: "The item to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some item to the aggregation {@link #getItems items}."
        },
        {
          name: "destroyItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the items in the aggregation {@link #getItems items}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.RowAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getItems",
          visibility: "public",
          returnValue: { type: "sap.ui.table.RowActionItem[]" },
          description:
            "Gets content of aggregation {@link #getItems items}.\n\nThe action items which should be displayed."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.RowAction."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nWhether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfItem",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.table.RowActionItem",
              optional: false,
              description: "The item whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.table.RowActionItem</code> in the aggregation {@link #getItems items}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oItem",
              type: "sap.ui.table.RowActionItem",
              optional: false,
              description: "The item to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the item should be inserted at; for a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value greater than the current size of the aggregation, the item is inserted at the last position"
            }
          ],
          description:
            "Inserts a item into the aggregation {@link #getItems items}."
        },
        {
          name: "removeAllItems",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getItems items}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeItem",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description: "The removed item or <code>null</code>"
          },
          parameters: [
            {
              name: "vItem",
              type: "int|string|sap.ui.table.RowActionItem",
              optional: false,
              description: "The item to remove or its index or id"
            }
          ],
          description:
            "Removes a item from the aggregation {@link #getItems items}."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nWhether the control should be visible on the screen. If set to <code>false</code>, the control is hidden.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.RowActionItem",
      basename: "RowActionItem",
      resource: "sap/ui/table/RowActionItem.js",
      module: "sap/ui/table/RowActionItem",
      export: "",
      static: true,
      visibility: "public",
      since: "1.45.0",
      extends: "sap.ui.core.Element",
      description:
        "An action items to be displayed in a <code>RowAction</code> control. This element must only be used in the context of the <code>sap.ui.table.Table</code> control to define row actions.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "icon",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "The icon of the item.",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Whether the item should be visible on the screen.",
            methods: ["getVisible", "setVisible"]
          },
          {
            name: "text",
            type: "string",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "The text of the item. It is used as tooltip and for accessibility purposes.",
            methods: ["getText", "setText"]
          },
          {
            name: "type",
            type: "sap.ui.table.RowActionType",
            defaultValue: "Custom",
            group: "Behavior",
            visibility: "public",
            description:
              "The type of the item. Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly this setting is used.",
            methods: ["getType", "setType"]
          }
        ],
        events: [
          {
            name: "press",
            visibility: "public",
            description:
              "The <code>press</code> is fired when the user triggers the corresponding action.",
            methods: ["attachPress", "detachPress", "firePress"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new RowActionItem.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "press",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description:
            "The <code>press</code> is fired when the user triggers the corresponding action."
        }
      ],
      methods: [
        {
          name: "attachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.RowActionItem</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ui.table.RowActionItem</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.RowActionItem</code> itself.\n\nThe <code>press</code> is fired when the user triggers the corresponding action."
        },
        {
          name: "detachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ui.table.RowActionItem</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.RowActionItem with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "firePress",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:press press} to attached listeners."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nThe icon of the item."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.RowActionItem."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nThe text of the item. It is used as tooltip and for accessibility purposes.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionType",
            description: "Value of property <code>type</code>"
          },
          description:
            "Gets current value of property {@link #getType type}.\n\nThe type of the item. Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly this setting is used.\n\nDefault value is <code>Custom</code>."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nWhether the item should be visible on the screen.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIcon",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>icon</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIcon icon}.\n\nThe icon of the item.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sText",
              type: "string",
              optional: false,
              description: "New value for property <code>text</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getText text}.\n\nThe text of the item. It is used as tooltip and for accessibility purposes.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setType",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sType",
              type: "sap.ui.table.RowActionType",
              optional: false,
              description: "New value for property <code>type</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getType type}.\n\nThe type of the item. Setting the type ensures default values for the properties <code>icon</code> and <code>text</code>. If an icon or text is set explicitly this setting is used.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Custom</code>."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.RowActionItem",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nWhether the item should be visible on the screen.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.RowActionType",
      basename: "RowActionType",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "RowActionType",
      static: true,
      visibility: "public",
      description: "Row Action types.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Custom",
          visibility: "public",
          static: true,
          type: "string",
          description: "Custom defined Row Action."
        },
        {
          name: "Delete",
          visibility: "public",
          static: true,
          type: "string",
          description: "Delete Row Action."
        },
        {
          name: "Navigation",
          visibility: "public",
          static: true,
          type: "string",
          description: "Navigation Row Action."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.RowSettings",
      basename: "RowSettings",
      resource: "sap/ui/table/RowSettings.js",
      module: "sap/ui/table/RowSettings",
      export: "",
      static: true,
      visibility: "public",
      since: "1.48.0",
      extends: "sap.ui.core.Element",
      description:
        "The <code>RowSettings</code> control allows you to configure a row. You can only use this control in the context of the <code>sap.ui.table.Table</code> control to define row settings.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "highlight",
            type: "sap.ui.core.MessageType",
            defaultValue: "None",
            group: "Appearance",
            visibility: "public",
            since: "1.48.0",
            description:
              "The highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default), no highlights are visible.",
            methods: ["getHighlight", "setHighlight"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new element, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for new RowSettings.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.RowSettings with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getHighlight",
          visibility: "public",
          since: "1.48.0",
          returnValue: {
            type: "sap.ui.core.MessageType",
            description: "Value of property <code>highlight</code>"
          },
          description:
            "Gets current value of property {@link #getHighlight highlight}.\n\nThe highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default), no highlights are visible.\n\nDefault value is <code>None</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.RowSettings."
        },
        {
          name: "setHighlight",
          visibility: "public",
          since: "1.48.0",
          returnValue: {
            type: "sap.ui.table.RowSettings",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHighlight",
              type: "sap.ui.core.MessageType",
              optional: false,
              description: "New value for property <code>highlight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHighlight highlight}.\n\nThe highlight state of the rows. If the highlight is set to {@link sap.ui.core.MessageType.None} (default), no highlights are visible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>None</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.SelectionBehavior",
      basename: "SelectionBehavior",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "SelectionBehavior",
      static: true,
      visibility: "public",
      description: "Selection behavior of the table",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Row",
          visibility: "public",
          static: true,
          type: "string",
          description: "Rows can be selected on the complete row."
        },
        {
          name: "RowOnly",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Rows can only be selected on the row (and the selector is hidden)."
        },
        {
          name: "RowSelector",
          visibility: "public",
          static: true,
          type: "string",
          description: "Rows can only be selected on the row selector."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.SelectionMode",
      basename: "SelectionMode",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "SelectionMode",
      static: true,
      visibility: "public",
      description: "Selection mode of the table",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Multi",
          visibility: "public",
          static: true,
          type: "string",
          description: "Select multiple rows at a time.",
          deprecated: {
            since: "1.38",
            text: "replaced by {@link sap.ui.table.SelectionMode.MultiToggle}"
          }
        },
        {
          name: "MultiToggle",
          visibility: "public",
          static: true,
          type: "string",
          description: "Select multiple rows at a time (toggle behavior)."
        },
        {
          name: "None",
          visibility: "public",
          static: true,
          type: "string",
          description: "No rows can be selected."
        },
        {
          name: "Single",
          visibility: "public",
          static: true,
          type: "string",
          description: "Select one row at a time."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.SharedDomRef",
      basename: "SharedDomRef",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "SharedDomRef",
      static: true,
      visibility: "public",
      description:
        "Shared DOM Reference IDs of the table.\n\nContains IDs of shared DOM references, which should be accessible to inheriting controls via getDomRef() function.",
      properties: [
        {
          name: "HorizontalScrollBar",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The element id of the Horizontal Scroll Bar of the sap.ui.table.Table."
        },
        {
          name: "VerticalScrollBar",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The element id of the Vertical Scroll Bar of the sap.ui.table.Table."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.SortOrder",
      basename: "SortOrder",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "SortOrder",
      static: true,
      visibility: "public",
      description: "Sort order of a column",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Ascending",
          visibility: "public",
          static: true,
          type: "string",
          description: "Sort Order: ascending."
        },
        {
          name: "Descending",
          visibility: "public",
          static: true,
          type: "string",
          description: "Sort Order: descending."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.Table",
      basename: "Table",
      resource: "sap/ui/table/Table.js",
      module: "sap/ui/table/Table",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.core.Control",
      description:
        "<p> Provides a comprehensive set of features for displaying and dealing with vast amounts of data. The Table control supports desktop PCs and tablet devices. On tablets, special consideration should be given to the number of visible columns and rows due to the limited performance of some devices. </p> <p> In order to keep the document DOM as lean as possible, the Table control reuses its DOM elements of the rows. When the user scrolls, only the row contexts are changed but the rendered controls remain the same. This allows the Table control to handle huge amounts of data. Nevertheless, restrictions apply regarding the number of displayed columns. Keep the number as low as possible to improve performance. Due to the nature of tables, the used control for column templates also has a big influence on the performance. </p> <p> The Table control relies completely on data binding, and its supported feature set is tightly coupled to the data model and binding being used. </p>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto",
            group: "Dimension",
            visibility: "public",
            description: "Width of the Table.",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "rowHeight",
            type: "int",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description:
              "Row height in pixel.\n\nIn the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.\n\nIn the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to {@link sap.ui.table.VisibleRowCountMode.Fixed Fixed} or {@link sap.ui.table.VisibleRowCountMode.Interactive Interactive}, the value defines the minimum height, and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode.Auto Auto}, the value defines the actual height, and any content that doesn't fit is cut off.\n\nIf no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content.",
            methods: ["getRowHeight", "setRowHeight"]
          },
          {
            name: "columnHeaderHeight",
            type: "int",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description:
              "Header row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.\n\n<b>Note</b>: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied to each individual row of the table's header.",
            methods: ["getColumnHeaderHeight", "setColumnHeaderHeight"]
          },
          {
            name: "columnHeaderVisible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "Flag whether the column header is visible or not.",
            methods: ["getColumnHeaderVisible", "setColumnHeaderVisible"]
          },
          {
            name: "visibleRowCount",
            type: "int",
            defaultValue: 10,
            group: "Appearance",
            visibility: "public",
            description: "Number of visible rows of the table.",
            methods: ["getVisibleRowCount", "setVisibleRowCount"]
          },
          {
            name: "firstVisibleRow",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            description: "First visible row.",
            methods: ["getFirstVisibleRow", "setFirstVisibleRow"]
          },
          {
            name: "selectionMode",
            type: "sap.ui.table.SelectionMode",
            defaultValue: "MultiToggle",
            group: "Behavior",
            visibility: "public",
            description:
              "Selection mode of the Table. This property controls whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance. When the selection mode is changed, the current selection is removed. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionMode.None</code> is set.",
            methods: ["getSelectionMode", "setSelectionMode"]
          },
          {
            name: "selectionBehavior",
            type: "sap.ui.table.SelectionBehavior",
            defaultValue: "RowSelector",
            group: "Behavior",
            visibility: "public",
            description:
              "Selection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.",
            methods: ["getSelectionBehavior", "setSelectionBehavior"]
          },
          {
            name: "selectedIndex",
            type: "int",
            defaultValue: -1,
            group: "Appearance",
            visibility: "public",
            description:
              "Zero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.",
            methods: ["getSelectedIndex", "setSelectedIndex"]
          },
          {
            name: "editable",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Flag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)",
            methods: ["getEditable", "setEditable"]
          },
          {
            name: "navigationMode",
            type: "sap.ui.table.NavigationMode",
            defaultValue: "Scrollbar",
            group: "Behavior",
            visibility: "public",
            description:
              "This property has been deprecated and must not be used anymore, since <code>Scrollbar</code> is the only supported option.",
            deprecated: { since: "1.38" },
            methods: ["getNavigationMode", "setNavigationMode"]
          },
          {
            name: "threshold",
            type: "int",
            defaultValue: 100,
            group: "Appearance",
            visibility: "public",
            description:
              "The <code>threshold</code> defines how many additional (not yet visible records) shall be pre-fetched to enable smooth scrolling. The threshold is always added to the <code>visibleRowCount</code>. If the <code>visibleRowCount</code> is 10 and the <code>threshold</code> is 100, there will be 110 records fetched with the initial load. If the <code>threshold</code> is lower than the <code>visibleRowCount</code>, the <code>visibleRowCount</code> will be used as the <code>threshold</code>. If the value is 0 then the thresholding is disabled.",
            methods: ["getThreshold", "setThreshold"]
          },
          {
            name: "enableColumnReordering",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description: "Flag to enable or disable column reordering",
            methods: ["getEnableColumnReordering", "setEnableColumnReordering"]
          },
          {
            name: "enableGrouping",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "Enables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.\n\nThe following restrictions apply: <ul> <li>Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul>",
            experimental: {
              since: "1.28",
              text: "This feature has a limited functionality."
            },
            methods: ["getEnableGrouping", "setEnableGrouping"]
          },
          {
            name: "showColumnVisibilityMenu",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Flag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns",
            methods: [
              "getShowColumnVisibilityMenu",
              "setShowColumnVisibilityMenu"
            ]
          },
          {
            name: "showNoData",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Flag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells",
            methods: ["getShowNoData", "setShowNoData"]
          },
          {
            name: "visibleRowCountMode",
            type: "sap.ui.table.VisibleRowCountMode",
            defaultValue: "Fixed",
            group: "Appearance",
            visibility: "public",
            since: "1.9.2",
            description:
              'Defines how the table handles the visible rows in the table.\n\nIn the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.\n\nIn the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. <h3>Limitations</h3> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul>\n\nIn the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.',
            methods: ["getVisibleRowCountMode", "setVisibleRowCountMode"]
          },
          {
            name: "minAutoRowCount",
            type: "int",
            defaultValue: 5,
            group: "Appearance",
            visibility: "public",
            description:
              "This property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.",
            methods: ["getMinAutoRowCount", "setMinAutoRowCount"]
          },
          {
            name: "fixedColumnCount",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.\n\n<b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul>",
            methods: ["getFixedColumnCount", "setFixedColumnCount"]
          },
          {
            name: "fixedRowCount",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            description:
              "Number of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.",
            methods: ["getFixedRowCount", "setFixedRowCount"]
          },
          {
            name: "fixedBottomRowCount",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            since: "1.18.7",
            description:
              "Number of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.",
            methods: ["getFixedBottomRowCount", "setFixedBottomRowCount"]
          },
          {
            name: "enableColumnFreeze",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.21.0",
            description:
              "Flag whether to show or hide the column menu item to freeze or unfreeze a column.",
            methods: ["getEnableColumnFreeze", "setEnableColumnFreeze"]
          },
          {
            name: "enableCellFilter",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.21.0",
            description:
              "Flag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.",
            methods: ["getEnableCellFilter", "setEnableCellFilter"]
          },
          {
            name: "showOverlay",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            since: "1.21.2",
            description:
              "Setting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.",
            methods: ["getShowOverlay", "setShowOverlay"]
          },
          {
            name: "enableSelectAll",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            since: "1.23.0",
            description:
              "Specifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.",
            methods: ["getEnableSelectAll", "setEnableSelectAll"]
          },
          {
            name: "enableCustomFilter",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.23.0",
            description:
              "Set this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.",
            methods: ["getEnableCustomFilter", "setEnableCustomFilter"]
          },
          {
            name: "enableBusyIndicator",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.27.0",
            description:
              "If set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.",
            methods: ["getEnableBusyIndicator", "setEnableBusyIndicator"]
          },
          {
            name: "rowActionCount",
            type: "int",
            defaultValue: 0,
            group: "Appearance",
            visibility: "public",
            since: "1.45.0",
            description:
              "Number of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.",
            methods: ["getRowActionCount", "setRowActionCount"]
          },
          {
            name: "alternateRowColors",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            since: "1.52",
            description:
              "Enables alternating table row colors. Alternate row coloring is not available for the tree mode.",
            methods: ["getAlternateRowColors", "setAlternateRowColors"]
          }
        ],
        dnd: { draggable: true, droppable: true },
        aggregations: [
          {
            name: "title",
            singularName: "title",
            type: "sap.ui.core.Control",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "Control or text of title section of the Table (if not set it will be hidden)",
            methods: ["getTitle", "destroyTitle", "setTitle"]
          },
          {
            name: "footer",
            singularName: "footer",
            type: "sap.ui.core.Control",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "Control or text of footer section of the Table (if not set it will be hidden)",
            methods: ["getFooter", "destroyFooter", "setFooter"]
          },
          {
            name: "toolbar",
            singularName: "toolbar",
            type: "sap.ui.core.Toolbar",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Toolbar of the Table If not set, no toolbar area will be rendered. Note: The CSS class sapMTBHeader-CTX is applied on the given toolbar.",
            deprecated: {
              since: "1.38",
              text:
                "This aggregation is deprecated, use the <code>extension</code> aggregation instead."
            },
            methods: ["getToolbar", "destroyToolbar", "setToolbar"]
          },
          {
            name: "extension",
            singularName: "extension",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Extension section of the Table. If not set, no extension area will be rendered. Note: In case a <code>sap.m.Toolbar</code> is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar.",
            methods: [
              "getExtension",
              "destroyExtension",
              "insertExtension",
              "addExtension",
              "removeExtension",
              "indexOfExtension",
              "removeAllExtension"
            ]
          },
          {
            name: "columns",
            singularName: "column",
            type: "sap.ui.table.Column",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            description: "Columns of the Table",
            methods: [
              "getColumns",
              "destroyColumns",
              "insertColumn",
              "addColumn",
              "removeColumn",
              "indexOfColumn",
              "removeAllColumns",
              "bindColumns",
              "unbindColumns"
            ]
          },
          {
            name: "rows",
            singularName: "row",
            type: "sap.ui.table.Row",
            cardinality: "0..n",
            visibility: "public",
            bindable: true,
            dnd: { draggable: true, droppable: true },
            description: "Rows of the Table",
            methods: [
              "getRows",
              "destroyRows",
              "insertRow",
              "addRow",
              "removeRow",
              "indexOfRow",
              "removeAllRows",
              "bindRows",
              "unbindRows"
            ]
          },
          {
            name: "noData",
            singularName: "noData",
            type: "sap.ui.core.Control",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            description:
              "The value for the noData aggregation can be either a string value or a control instance. The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no data text.",
            methods: ["getNoData", "destroyNoData", "setNoData"]
          },
          {
            name: "rowActionTemplate",
            singularName: "rowActionTemplate",
            type: "sap.ui.table.RowAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Template for row actions. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowActionTemplate</code> for the changes to take effect.",
            methods: [
              "getRowActionTemplate",
              "destroyRowActionTemplate",
              "setRowActionTemplate"
            ]
          },
          {
            name: "rowSettingsTemplate",
            singularName: "rowSettingsTemplate",
            type: "sap.ui.table.RowSettings",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Template for row settings. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowSettingsTemplate</code> for the changes to take effect.",
            methods: [
              "getRowSettingsTemplate",
              "destroyRowSettingsTemplate",
              "setRowSettingsTemplate"
            ]
          },
          {
            name: "contextMenu",
            singularName: "contextMenu",
            type: "sap.ui.core.IContextMenu",
            cardinality: "0..1",
            visibility: "public",
            since: "1.54",
            description:
              "Defines the context menu for the table.\n\n<b>Note:</b> The context menu will also be available for the row selectors as well as in the row actions cell of the table control.\n\nThe custom context menu will not be shown in the group header rows and the sum row of the <code>AnalyticalTable</code> control.\n\nIf this aggregation is set, then the <code>enableCellFilter</code> property will have no effect.",
            methods: ["getContextMenu", "destroyContextMenu", "setContextMenu"]
          }
        ],
        defaultAggregation: "columns",
        associations: [
          {
            name: "groupBy",
            singularName: "groupBy",
            type: "sap.ui.table.Column",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The column by which the table is grouped. Grouping will only be performed if <code>enableGrouping</code> is set to <code>true</code>.",
            experimental: {
              since: "1.28",
              text: "This feature has a limited functionality."
            },
            methods: ["getGroupBy", "setGroupBy"]
          },
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledby).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ],
        events: [
          {
            name: "rowSelectionChange",
            visibility: "public",
            description:
              "fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)",
            parameters: {
              rowIndex: {
                name: "rowIndex",
                type: "int",
                description:
                  "row index which has been clicked so that the selection has been changed (either selected or deselected)"
              },
              rowContext: {
                name: "rowContext",
                type: "object",
                description:
                  "binding context of the row which has been clicked so that selection has been changed"
              },
              rowIndices: {
                name: "rowIndices",
                type: "int[]",
                description:
                  "array of row indices which selection has been changed (either selected or deselected)"
              },
              selectAll: {
                name: "selectAll",
                type: "boolean",
                description:
                  'indicator if "select all" function is used to select rows'
              },
              userInteraction: {
                name: "userInteraction",
                type: "boolean",
                description:
                  "indicates that the event was fired due to an explicit user interaction like clicking the row header or using the keyboard (SPACE or ENTER) to select a row or a range of rows."
              }
            },
            methods: [
              "attachRowSelectionChange",
              "detachRowSelectionChange",
              "fireRowSelectionChange"
            ]
          },
          {
            name: "columnSelect",
            visibility: "public",
            description: "fired when a column of the table has been selected",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "reference to the selected column"
              }
            },
            methods: [
              "attachColumnSelect",
              "detachColumnSelect",
              "fireColumnSelect"
            ]
          },
          {
            name: "columnResize",
            visibility: "public",
            description: "fired when a table column is resized.",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "resized column."
              },
              width: {
                name: "width",
                type: "sap.ui.core.CSSSize",
                description:
                  "new width of the table column as CSS Size definition."
              }
            },
            methods: [
              "attachColumnResize",
              "detachColumnResize",
              "fireColumnResize"
            ]
          },
          {
            name: "columnMove",
            visibility: "public",
            description: "fired when a table column is moved.",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "moved column."
              },
              newPos: {
                name: "newPos",
                type: "int",
                description: "new position of the column."
              }
            },
            methods: ["attachColumnMove", "detachColumnMove", "fireColumnMove"]
          },
          {
            name: "sort",
            visibility: "public",
            description: "fired when the table is sorted.",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "sorted column."
              },
              sortOrder: {
                name: "sortOrder",
                type: "sap.ui.table.SortOrder",
                description: "Sort Order"
              },
              columnAdded: {
                name: "columnAdded",
                type: "boolean",
                description:
                  "If column was added to sorter this is true. If new sort is started this is set to false"
              }
            },
            methods: ["attachSort", "detachSort", "fireSort"]
          },
          {
            name: "filter",
            visibility: "public",
            description: "fired when the table is filtered.",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "filtered column."
              },
              value: {
                name: "value",
                type: "string",
                description: "filter value."
              }
            },
            methods: ["attachFilter", "detachFilter", "fireFilter"]
          },
          {
            name: "group",
            visibility: "public",
            description: "fired when the table is grouped (experimental!).",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "grouped column."
              }
            },
            methods: ["attachGroup", "detachGroup", "fireGroup"]
          },
          {
            name: "columnVisibility",
            visibility: "public",
            description:
              "fired when the visibility of a table column is changed.",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "affected column."
              },
              visible: {
                name: "visible",
                type: "boolean",
                description: "new value of the visible property."
              }
            },
            methods: [
              "attachColumnVisibility",
              "detachColumnVisibility",
              "fireColumnVisibility"
            ]
          },
          {
            name: "cellClick",
            visibility: "public",
            since: "1.21.0",
            description:
              "fired when the user clicks a cell of the table (experimental!).",
            parameters: {
              cellControl: {
                name: "cellControl",
                type: "sap.ui.core.Control",
                description: "The control of the cell."
              },
              cellDomRef: {
                name: "cellDomRef",
                type: "Object",
                description:
                  "DOM reference of the clicked cell. Can be used to position the context menu."
              },
              rowIndex: {
                name: "rowIndex",
                type: "int",
                description: "Row index of the selected cell."
              },
              columnIndex: {
                name: "columnIndex",
                type: "int",
                description:
                  "Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation."
              },
              columnId: {
                name: "columnId",
                type: "string",
                description: "Column ID of the selected cell."
              },
              rowBindingContext: {
                name: "rowBindingContext",
                type: "sap.ui.model.Context",
                description: "Row binding context of the selected cell."
              }
            },
            methods: ["attachCellClick", "detachCellClick", "fireCellClick"]
          },
          {
            name: "cellContextmenu",
            visibility: "public",
            since: "1.21.0",
            description: "fired when the user clicks a cell of the table.",
            deprecated: {
              since: "1.54",
              text: "replaced by <code>beforeOpenContextMenu</code>."
            },
            parameters: {
              cellControl: {
                name: "cellControl",
                type: "sap.ui.core.Control",
                description: "The control of the cell."
              },
              cellDomRef: {
                name: "cellDomRef",
                type: "Object",
                description:
                  "DOM reference of the clicked cell. Can be used to position the context menu."
              },
              rowIndex: {
                name: "rowIndex",
                type: "int",
                description: "Row index of the selected cell."
              },
              columnIndex: {
                name: "columnIndex",
                type: "int",
                description:
                  "Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation."
              },
              columnId: {
                name: "columnId",
                type: "string",
                description: "Column ID of the selected cell."
              },
              rowBindingContext: {
                name: "rowBindingContext",
                type: "sap.ui.model.Context",
                description: "Row binding context of the selected cell."
              }
            },
            methods: [
              "attachCellContextmenu",
              "detachCellContextmenu",
              "fireCellContextmenu"
            ]
          },
          {
            name: "beforeOpenContextMenu",
            visibility: "public",
            since: "1.54",
            description:
              "Fired when the user requests the context menu for a table cell.",
            parameters: {
              rowIndex: {
                name: "rowIndex",
                type: "int",
                description: "Row index where the context menu opens."
              },
              columnIndex: {
                name: "columnIndex",
                type: "int",
                description:
                  "Column index where the context menu opens. This is the index of the column in the <code>columns</code> aggregation."
              },
              contextMenu: {
                name: "contextMenu",
                type: "sap.ui.core.IContextMenu",
                description: "Context menu"
              }
            },
            methods: [
              "attachBeforeOpenContextMenu",
              "detachBeforeOpenContextMenu",
              "fireBeforeOpenContextMenu"
            ]
          },
          {
            name: "columnFreeze",
            visibility: "public",
            since: "1.21.0",
            description: "fired when a column of the table should be freezed",
            parameters: {
              column: {
                name: "column",
                type: "sap.ui.table.Column",
                description: "reference to the column to freeze"
              }
            },
            methods: [
              "attachColumnFreeze",
              "detachColumnFreeze",
              "fireColumnFreeze"
            ]
          },
          {
            name: "customFilter",
            visibility: "public",
            since: "1.23.0",
            description:
              "This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter.",
            methods: [
              "attachCustomFilter",
              "detachCustomFilter",
              "fireCustomFilter"
            ]
          },
          {
            name: "firstVisibleRowChanged",
            visibility: "public",
            since: "1.37.0",
            description:
              "This event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically.",
            methods: [
              "attachFirstVisibleRowChanged",
              "detachFirstVisibleRowChanged",
              "fireFirstVisibleRowChanged"
            ]
          },
          {
            name: "busyStateChanged",
            visibility: "public",
            since: "1.37.0",
            description:
              "This event gets fired when the busy state of the table changes. It should only be used by composite controls.",
            methods: [
              "attachBusyStateChanged",
              "detachBusyStateChanged",
              "fireBusyStateChanged"
            ]
          },
          {
            name: "paste",
            visibility: "public",
            since: "1.60",
            description:
              "This event gets fired when the user performs paste from clipboard on the table. Paste action can be performed from the context menu or with CTRL-V keyboard key combination.",
            parameters: {
              data: {
                name: "data",
                type: "string[][]",
                description:
                  "2D-Array of strings with data from the clipboard. The first dimension represents the rows and the second dimension represents the cells of the tabular data."
              }
            },
            methods: ["attachPaste", "detachPaste", "firePaste"]
          }
        ],
        designtime: "sap/ui/table/designtime/Table.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new Table.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}",
          "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}",
          "{@link fiori:/grid-table/ Grid Table}"
        ]
      },
      events: [
        {
          name: "beforeOpenContextMenu",
          visibility: "public",
          since: "1.54",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    rowIndex: {
                      name: "rowIndex",
                      type: "int",
                      optional: false,
                      description: "Row index where the context menu opens."
                    },
                    columnIndex: {
                      name: "columnIndex",
                      type: "int",
                      optional: false,
                      description:
                        "Column index where the context menu opens. This is the index of the column in the <code>columns</code> aggregation."
                    },
                    contextMenu: {
                      name: "contextMenu",
                      type: "sap.ui.core.IContextMenu",
                      optional: false,
                      description: "Context menu"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when the user requests the context menu for a table cell."
        },
        {
          name: "busyStateChanged",
          visibility: "public",
          since: "1.37.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description:
            "This event gets fired when the busy state of the table changes. It should only be used by composite controls."
        },
        {
          name: "cellClick",
          visibility: "public",
          since: "1.21.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    cellControl: {
                      name: "cellControl",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description: "The control of the cell."
                    },
                    cellDomRef: {
                      name: "cellDomRef",
                      type: "Object",
                      optional: false,
                      description:
                        "DOM reference of the clicked cell. Can be used to position the context menu."
                    },
                    rowIndex: {
                      name: "rowIndex",
                      type: "int",
                      optional: false,
                      description: "Row index of the selected cell."
                    },
                    columnIndex: {
                      name: "columnIndex",
                      type: "int",
                      optional: false,
                      description:
                        "Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation."
                    },
                    columnId: {
                      name: "columnId",
                      type: "string",
                      optional: false,
                      description: "Column ID of the selected cell."
                    },
                    rowBindingContext: {
                      name: "rowBindingContext",
                      type: "sap.ui.model.Context",
                      optional: false,
                      description: "Row binding context of the selected cell."
                    }
                  }
                }
              }
            }
          ],
          description:
            "fired when the user clicks a cell of the table (experimental!)."
        },
        {
          name: "cellContextmenu",
          visibility: "public",
          since: "1.21.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    cellControl: {
                      name: "cellControl",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description: "The control of the cell."
                    },
                    cellDomRef: {
                      name: "cellDomRef",
                      type: "Object",
                      optional: false,
                      description:
                        "DOM reference of the clicked cell. Can be used to position the context menu."
                    },
                    rowIndex: {
                      name: "rowIndex",
                      type: "int",
                      optional: false,
                      description: "Row index of the selected cell."
                    },
                    columnIndex: {
                      name: "columnIndex",
                      type: "int",
                      optional: false,
                      description:
                        "Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation."
                    },
                    columnId: {
                      name: "columnId",
                      type: "string",
                      optional: false,
                      description: "Column ID of the selected cell."
                    },
                    rowBindingContext: {
                      name: "rowBindingContext",
                      type: "sap.ui.model.Context",
                      optional: false,
                      description: "Row binding context of the selected cell."
                    }
                  }
                }
              }
            }
          ],
          description: "fired when the user clicks a cell of the table.",
          deprecated: {
            since: "1.54",
            text: "replaced by <code>beforeOpenContextMenu</code>."
          }
        },
        {
          name: "columnFreeze",
          visibility: "public",
          since: "1.21.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "reference to the column to freeze"
                    }
                  }
                }
              }
            }
          ],
          description: "fired when a column of the table should be freezed"
        },
        {
          name: "columnMove",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "moved column."
                    },
                    newPos: {
                      name: "newPos",
                      type: "int",
                      optional: false,
                      description: "new position of the column."
                    }
                  }
                }
              }
            }
          ],
          description: "fired when a table column is moved."
        },
        {
          name: "columnResize",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "resized column."
                    },
                    width: {
                      name: "width",
                      type: "sap.ui.core.CSSSize",
                      optional: false,
                      description:
                        "new width of the table column as CSS Size definition."
                    }
                  }
                }
              }
            }
          ],
          description: "fired when a table column is resized."
        },
        {
          name: "columnSelect",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "reference to the selected column"
                    }
                  }
                }
              }
            }
          ],
          description: "fired when a column of the table has been selected"
        },
        {
          name: "columnVisibility",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "affected column."
                    },
                    visible: {
                      name: "visible",
                      type: "boolean",
                      optional: false,
                      description: "new value of the visible property."
                    }
                  }
                }
              }
            }
          ],
          description: "fired when the visibility of a table column is changed."
        },
        {
          name: "customFilter",
          visibility: "public",
          since: "1.23.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description:
            "This event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter."
        },
        {
          name: "filter",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "filtered column."
                    },
                    value: {
                      name: "value",
                      type: "string",
                      optional: false,
                      description: "filter value."
                    }
                  }
                }
              }
            }
          ],
          description: "fired when the table is filtered."
        },
        {
          name: "firstVisibleRowChanged",
          visibility: "public",
          since: "1.37.0",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description:
            "This event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically."
        },
        {
          name: "group",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "grouped column."
                    }
                  }
                }
              }
            }
          ],
          description: "fired when the table is grouped (experimental!)."
        },
        {
          name: "paste",
          visibility: "public",
          since: "1.60",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    data: {
                      name: "data",
                      type: "string[][]",
                      optional: false,
                      description:
                        "2D-Array of strings with data from the clipboard. The first dimension represents the rows and the second dimension represents the cells of the tabular data."
                    }
                  }
                }
              }
            }
          ],
          description:
            "This event gets fired when the user performs paste from clipboard on the table. Paste action can be performed from the context menu or with CTRL-V keyboard key combination."
        },
        {
          name: "rowSelectionChange",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    rowIndex: {
                      name: "rowIndex",
                      type: "int",
                      optional: false,
                      description:
                        "row index which has been clicked so that the selection has been changed (either selected or deselected)"
                    },
                    rowContext: {
                      name: "rowContext",
                      type: "object",
                      optional: false,
                      description:
                        "binding context of the row which has been clicked so that selection has been changed"
                    },
                    rowIndices: {
                      name: "rowIndices",
                      type: "int[]",
                      optional: false,
                      description:
                        "array of row indices which selection has been changed (either selected or deselected)"
                    },
                    selectAll: {
                      name: "selectAll",
                      type: "boolean",
                      optional: false,
                      description:
                        'indicator if "select all" function is used to select rows'
                    },
                    userInteraction: {
                      name: "userInteraction",
                      type: "boolean",
                      optional: false,
                      description:
                        "indicates that the event was fired due to an explicit user interaction like clicking the row header or using the keyboard (SPACE or ENTER) to select a row or a range of rows."
                    }
                  }
                }
              }
            }
          ],
          description:
            "fired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)"
        },
        {
          name: "sort",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    column: {
                      name: "column",
                      type: "sap.ui.table.Column",
                      optional: false,
                      description: "sorted column."
                    },
                    sortOrder: {
                      name: "sortOrder",
                      type: "sap.ui.table.SortOrder",
                      optional: false,
                      description: "Sort Order"
                    },
                    columnAdded: {
                      name: "columnAdded",
                      type: "boolean",
                      optional: false,
                      description:
                        "If column was added to sorter this is true. If new sort is started this is set to false"
                    }
                  }
                }
              }
            }
          ],
          description: "fired when the table is sorted."
        }
      ],
      methods: [
        {
          name: "_enableSynchronization",
          visibility: "restricted",
          returnValue: {
            type: "Promise",
            description:
              "Returns a promise that resolves with the synchronization interface, and rejects with an error object."
          },
          description:
            "Enriches the table with synchronization capabilities exposed through an interface of the SyncExtension applied to the table. <b>Do not call this method more than once on the same table!</b>",
          references: ["sap.ui.table.TableSyncExtension#getInterface"]
        },
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "addColumn",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oColumn",
              type: "sap.ui.table.Column",
              optional: false,
              description: "The column to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some column to the aggregation {@link #getColumns columns}."
        },
        {
          name: "addExtension",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oExtension",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The extension to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some extension to the aggregation {@link #getExtension extension}."
        },
        {
          name: "addRow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oRow",
              type: "sap.ui.table.Row",
              optional: false,
              description: "The row to add; if empty, nothing is inserted"
            }
          ],
          description: "Adds some row to the aggregation {@link #getRows rows}."
        },
        {
          name: "addSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndexFrom",
              type: "int",
              optional: false,
              description: "Index from which the selection should start"
            },
            {
              name: "iIndexTo",
              type: "int",
              optional: false,
              description: "Index up to which to select"
            }
          ],
          description:
            "Adds the given selection interval to the selection. In case of single selection, only <code>iIndexTo</code> is added to the selection."
        },
        {
          name: "attachBeforeOpenContextMenu",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:beforeOpenContextMenu beforeOpenContextMenu} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nFired when the user requests the context menu for a table cell."
        },
        {
          name: "attachBusyStateChanged",
          visibility: "public",
          since: "1.37.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:busyStateChanged busyStateChanged} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nThis event gets fired when the busy state of the table changes. It should only be used by composite controls."
        },
        {
          name: "attachCellClick",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:cellClick cellClick} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the user clicks a cell of the table (experimental!)."
        },
        {
          name: "attachCellContextmenu",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:cellContextmenu cellContextmenu} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the user clicks a cell of the table.",
          deprecated: {
            since: "1.54",
            text: "replaced by <code>beforeOpenContextMenu</code>."
          }
        },
        {
          name: "attachColumnFreeze",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:columnFreeze columnFreeze} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when a column of the table should be freezed"
        },
        {
          name: "attachColumnMove",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:columnMove columnMove} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when a table column is moved."
        },
        {
          name: "attachColumnResize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:columnResize columnResize} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when a table column is resized."
        },
        {
          name: "attachColumnSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:columnSelect columnSelect} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when a column of the table has been selected"
        },
        {
          name: "attachColumnVisibility",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:columnVisibility columnVisibility} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the visibility of a table column is changed."
        },
        {
          name: "attachCustomFilter",
          visibility: "public",
          since: "1.23.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:customFilter customFilter} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nThis event is triggered when the custom filter item of the column menu is pressed. The column on which the event was triggered is passed as parameter."
        },
        {
          name: "attachFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:filter filter} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the table is filtered."
        },
        {
          name: "attachFirstVisibleRowChanged",
          visibility: "public",
          since: "1.37.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nThis event gets fired when the first visible row is changed. It should only be used by composite controls. The event even is fired when setFirstVisibleRow is called programmatically."
        },
        {
          name: "attachGroup",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:group group} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the table is grouped (experimental!)."
        },
        {
          name: "attachPaste",
          visibility: "public",
          since: "1.60",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:paste paste} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nThis event gets fired when the user performs paste from clipboard on the table. Paste action can be performed from the context menu or with CTRL-V keyboard key combination."
        },
        {
          name: "attachRowSelectionChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:rowSelectionChange rowSelectionChange} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the row selection of the table has been changed (the event parameters can be used to determine selection changes - to find out the selected rows you should better use the table selection API)"
        },
        {
          name: "attachSort",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.Table</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:sort sort} event of this <code>sap.ui.table.Table</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.Table</code> itself.\n\nfired when the table is sorted."
        },
        {
          name: "autoResizeColumn",
          visibility: "public",
          parameters: [
            {
              name: "iColIndex",
              type: "int",
              optional: false,
              description:
                "The index of the column in the list of visible columns."
            }
          ],
          description:
            "Triggers automatic resizing of a column to the widest content.",
          experimental: {
            text:
              "Experimental! Presently implemented to only work with a very limited set of controls (e.g. sap.m.Text)."
          }
        },
        {
          name: "bindColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBindingInfo",
              type: "object",
              optional: false,
              description: "The binding information"
            }
          ],
          description:
            "Binds aggregation {@link #getColumns columns} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "bindRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBindingInfo",
              type: "object",
              optional: false,
              description: "The binding information"
            }
          ],
          description:
            "Binds aggregation {@link #getRows rows} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "clearSelection",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description: "Removes complete selection."
        },
        {
          name: "destroyColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the columns in the aggregation {@link #getColumns columns}."
        },
        {
          name: "destroyContextMenu",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the contextMenu in the aggregation {@link #getContextMenu contextMenu}."
        },
        {
          name: "destroyExtension",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the extension in the aggregation {@link #getExtension extension}."
        },
        {
          name: "destroyFooter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the footer in the aggregation {@link #getFooter footer}."
        },
        {
          name: "destroyNoData",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the noData in the aggregation {@link #getNoData noData}."
        },
        {
          name: "destroyRowActionTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the rowActionTemplate in the aggregation {@link #getRowActionTemplate rowActionTemplate}."
        },
        {
          name: "destroyRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the rows in the aggregation {@link #getRows rows}."
        },
        {
          name: "destroyRowSettingsTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the rowSettingsTemplate in the aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}."
        },
        {
          name: "destroyTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the title in the aggregation {@link #getTitle title}."
        },
        {
          name: "destroyToolbar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the toolbar in the aggregation {@link #getToolbar toolbar}.",
          deprecated: {
            since: "1.38",
            text:
              "This aggregation is deprecated, use the <code>extension</code> aggregation instead."
          }
        },
        {
          name: "detachBeforeOpenContextMenu",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:beforeOpenContextMenu beforeOpenContextMenu} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachBusyStateChanged",
          visibility: "public",
          since: "1.37.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:busyStateChanged busyStateChanged} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachCellClick",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:cellClick cellClick} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachCellContextmenu",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:cellContextmenu cellContextmenu} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration.",
          deprecated: {
            since: "1.54",
            text: "replaced by <code>beforeOpenContextMenu</code>."
          }
        },
        {
          name: "detachColumnFreeze",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:columnFreeze columnFreeze} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachColumnMove",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:columnMove columnMove} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachColumnResize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:columnResize columnResize} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachColumnSelect",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:columnSelect columnSelect} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachColumnVisibility",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:columnVisibility columnVisibility} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachCustomFilter",
          visibility: "public",
          since: "1.23.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:customFilter customFilter} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFilter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:filter filter} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachFirstVisibleRowChanged",
          visibility: "public",
          since: "1.37.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:firstVisibleRowChanged firstVisibleRowChanged} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachGroup",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:group group} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachPaste",
          visibility: "public",
          since: "1.60",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:paste paste} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachRowSelectionChange",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:rowSelectionChange rowSelectionChange} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSort",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:sort sort} event of this <code>sap.ui.table.Table</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "exportData",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.util.Export",
            description: "Export object"
          },
          parameters: [
            {
              name: "mSettings",
              type: "object",
              optional: true,
              description:
                "settings for the new Export, see {@link sap.ui.core.util.Export} <code>constructor</code>"
            }
          ],
          description:
            'Creates a new {@link sap.ui.core.util.Export} object and fills row/column information from the table if not provided. For the cell content, the column\'s "sortProperty" will be used (experimental!)\n\n<p><b>Please note: This method uses synchronous requests. Support and functioning ends with the support for synchronous requests in browsers.</b></p>',
          experimental: {
            text:
              "Experimental because the property for the column/cell definitions (sortProperty) could change in future."
          },
          deprecated: {
            since: "1.56",
            text: "replaced by the <code>sap.ui.export</code> library."
          }
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.Table with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "filter",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "oColumn",
              type: "sap.ui.table.Column",
              optional: false,
              description: "Column to be filtered"
            },
            {
              name: "sValue",
              type: "string",
              optional: false,
              description: "Filter value as string (will be converted)"
            }
          ],
          description: "Filter the given column by the given value."
        },
        {
          name: "fireBeforeOpenContextMenu",
          visibility: "protected",
          since: "1.54",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                rowIndex: {
                  name: "rowIndex",
                  type: "int",
                  optional: true,
                  description: "Row index where the context menu opens."
                },
                columnIndex: {
                  name: "columnIndex",
                  type: "int",
                  optional: true,
                  description:
                    "Column index where the context menu opens. This is the index of the column in the <code>columns</code> aggregation."
                },
                contextMenu: {
                  name: "contextMenu",
                  type: "sap.ui.core.IContextMenu",
                  optional: true,
                  description: "Context menu"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:beforeOpenContextMenu beforeOpenContextMenu} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireBusyStateChanged",
          visibility: "protected",
          since: "1.37.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:busyStateChanged busyStateChanged} to attached listeners."
        },
        {
          name: "fireCellClick",
          visibility: "protected",
          since: "1.21.0",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                cellControl: {
                  name: "cellControl",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description: "The control of the cell."
                },
                cellDomRef: {
                  name: "cellDomRef",
                  type: "Object",
                  optional: true,
                  description:
                    "DOM reference of the clicked cell. Can be used to position the context menu."
                },
                rowIndex: {
                  name: "rowIndex",
                  type: "int",
                  optional: true,
                  description: "Row index of the selected cell."
                },
                columnIndex: {
                  name: "columnIndex",
                  type: "int",
                  optional: true,
                  description:
                    "Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation."
                },
                columnId: {
                  name: "columnId",
                  type: "string",
                  optional: true,
                  description: "Column ID of the selected cell."
                },
                rowBindingContext: {
                  name: "rowBindingContext",
                  type: "sap.ui.model.Context",
                  optional: true,
                  description: "Row binding context of the selected cell."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:cellClick cellClick} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireCellContextmenu",
          visibility: "protected",
          since: "1.21.0",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                cellControl: {
                  name: "cellControl",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description: "The control of the cell."
                },
                cellDomRef: {
                  name: "cellDomRef",
                  type: "Object",
                  optional: true,
                  description:
                    "DOM reference of the clicked cell. Can be used to position the context menu."
                },
                rowIndex: {
                  name: "rowIndex",
                  type: "int",
                  optional: true,
                  description: "Row index of the selected cell."
                },
                columnIndex: {
                  name: "columnIndex",
                  type: "int",
                  optional: true,
                  description:
                    "Column index of the selected cell. This is the index of visible columns and might differ from the index maintained in the column aggregation."
                },
                columnId: {
                  name: "columnId",
                  type: "string",
                  optional: true,
                  description: "Column ID of the selected cell."
                },
                rowBindingContext: {
                  name: "rowBindingContext",
                  type: "sap.ui.model.Context",
                  optional: true,
                  description: "Row binding context of the selected cell."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:cellContextmenu cellContextmenu} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object.",
          deprecated: {
            since: "1.54",
            text: "replaced by <code>beforeOpenContextMenu</code>."
          }
        },
        {
          name: "fireColumnFreeze",
          visibility: "protected",
          since: "1.21.0",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "reference to the column to freeze"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:columnFreeze columnFreeze} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireColumnMove",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "moved column."
                },
                newPos: {
                  name: "newPos",
                  type: "int",
                  optional: true,
                  description: "new position of the column."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:columnMove columnMove} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireColumnResize",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "resized column."
                },
                width: {
                  name: "width",
                  type: "sap.ui.core.CSSSize",
                  optional: true,
                  description:
                    "new width of the table column as CSS Size definition."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:columnResize columnResize} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireColumnSelect",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "reference to the selected column"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:columnSelect columnSelect} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireColumnVisibility",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "affected column."
                },
                visible: {
                  name: "visible",
                  type: "boolean",
                  optional: true,
                  description: "new value of the visible property."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:columnVisibility columnVisibility} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireCustomFilter",
          visibility: "protected",
          since: "1.23.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:customFilter customFilter} to attached listeners."
        },
        {
          name: "fireFilter",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "filtered column."
                },
                value: {
                  name: "value",
                  type: "string",
                  optional: true,
                  description: "filter value."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:filter filter} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireFirstVisibleRowChanged",
          visibility: "protected",
          since: "1.37.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:firstVisibleRowChanged firstVisibleRowChanged} to attached listeners."
        },
        {
          name: "fireGroup",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "grouped column."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:group group} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "firePaste",
          visibility: "protected",
          since: "1.60",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                data: {
                  name: "data",
                  type: "string[][]",
                  optional: true,
                  description:
                    "2D-Array of strings with data from the clipboard. The first dimension represents the rows and the second dimension represents the cells of the tabular data."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:paste paste} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireRowSelectionChange",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                rowIndex: {
                  name: "rowIndex",
                  type: "int",
                  optional: true,
                  description:
                    "row index which has been clicked so that the selection has been changed (either selected or deselected)"
                },
                rowContext: {
                  name: "rowContext",
                  type: "object",
                  optional: true,
                  description:
                    "binding context of the row which has been clicked so that selection has been changed"
                },
                rowIndices: {
                  name: "rowIndices",
                  type: "int[]",
                  optional: true,
                  description:
                    "array of row indices which selection has been changed (either selected or deselected)"
                },
                selectAll: {
                  name: "selectAll",
                  type: "boolean",
                  optional: true,
                  description:
                    'indicator if "select all" function is used to select rows'
                },
                userInteraction: {
                  name: "userInteraction",
                  type: "boolean",
                  optional: true,
                  description:
                    "indicates that the event was fired due to an explicit user interaction like clicking the row header or using the keyboard (SPACE or ENTER) to select a row or a range of rows."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:rowSelectionChange rowSelectionChange} to attached listeners."
        },
        {
          name: "fireSort",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                column: {
                  name: "column",
                  type: "sap.ui.table.Column",
                  optional: true,
                  description: "sorted column."
                },
                sortOrder: {
                  name: "sortOrder",
                  type: "sap.ui.table.SortOrder",
                  optional: true,
                  description: "Sort Order"
                },
                columnAdded: {
                  name: "columnAdded",
                  type: "boolean",
                  optional: true,
                  description:
                    "If column was added to sorter this is true. If new sort is started this is set to false"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:sort sort} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getAlternateRowColors",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>alternateRowColors</code>"
          },
          description:
            "Gets current value of property {@link #getAlternateRowColors alternateRowColors}.\n\nEnables alternating table row colors. Alternate row coloring is not available for the tree mode.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getCellControl",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.core.Control",
            description:
              "Control inside the cell with the given row and column index or <code>null</code> if no such control exists"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description:
                "Index of row in the table's <code>rows</code> aggregation"
            },
            {
              name: "iColumnIndex",
              type: "int",
              optional: false,
              description:
                "Index of column in the list of visible columns or in the <code>columns</code> aggregation, as indicated with <code>bVisibleColumnIndex</code>"
            },
            {
              name: "bVisibleColumnIndex",
              type: "boolean",
              optional: false,
              description:
                "If set to <code>true</code>, the given column index is interpreted as index in the list of visible columns, otherwise as index in the <code>columns</code> aggregation"
            }
          ],
          description:
            "Returns the control inside the cell with the given row index (in the <code>rows</code> aggregation) and column index (in the <code>columns</code> aggregation or in the list of visible columns only, depending on parameter <code>bVisibleColumnIndex</code>)."
        },
        {
          name: "getColumnHeaderHeight",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>columnHeaderHeight</code>"
          },
          description:
            "Gets current value of property {@link #getColumnHeaderHeight columnHeaderHeight}.\n\nHeader row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.\n\n<b>Note</b>: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied to each individual row of the table's header."
        },
        {
          name: "getColumnHeaderVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>columnHeaderVisible</code>"
          },
          description:
            "Gets current value of property {@link #getColumnHeaderVisible columnHeaderVisible}.\n\nFlag whether the column header is visible or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getColumns",
          visibility: "public",
          returnValue: { type: "sap.ui.table.Column[]" },
          description:
            "Gets content of aggregation {@link #getColumns columns}.\n\nColumns of the Table"
        },
        {
          name: "getComputedFixedColumnCount",
          visibility: "protected",
          returnValue: {
            type: "int",
            description:
              "The actual fixed column count computed based on the table width."
          },
          description:
            "In contrast to the function <code>getFixedColumnCount</code> which returns the value of the property <code>fixedColumnCount</code>, this function returns the actual fixed column count computed based on the table width.\n\n<b>Note:</b> The computed column count is only available after the table is fully rendered."
        },
        {
          name: "getContextByIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.model.Context|null",
            description: "The context at this index or null"
          },
          parameters: [
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "Index of the row to return the context from."
            }
          ],
          description:
            "Returns the context of a row by its index. Please note that for server-based models like OData, the supplied index might not have been loaded yet. If the context is not available at the client, the binding will trigger a backend request and request this single context. Although this API looks synchronous it may not return a context but load it and fire a change event on the binding.\n\nFor server-based models you should consider to only make this API call when the index is within the currently visible scroll area."
        },
        {
          name: "getContextMenu",
          visibility: "public",
          since: "1.54",
          returnValue: { type: "sap.ui.core.IContextMenu" },
          description:
            "Gets content of aggregation {@link #getContextMenu contextMenu}.\n\nDefines the context menu for the table.\n\n<b>Note:</b> The context menu will also be available for the row selectors as well as in the row actions cell of the table control.\n\nThe custom context menu will not be shown in the group header rows and the sum row of the <code>AnalyticalTable</code> control.\n\nIf this aggregation is set, then the <code>enableCellFilter</code> property will have no effect."
        },
        {
          name: "getDragDropConfig",
          visibility: "public",
          since: "1.52",
          returnValue: { description: "sap.ui.core.dnd.DragDropBase[]" },
          description:
            "Gets content of aggregation <code>dragDropConfig</code> which defines the drag-and-drop configuration.\n\nThe following restrictions apply: <ul> <li>Columns cannot be configured to be draggable.</li> <li>The following rows are not draggable: <ul> <li>Empty rows</li> <li>Group header rows</li> <li>Sum rows</li> </ul> </li> <li>Columns cannot be configured to be droppable.</li> <li>The following rows are not droppable: <ul> <li>The dragged row itself</li> <li>Empty rows</li> <li>Group header rows</li> <li>Sum rows</li> </ul> </li> </ul>"
        },
        {
          name: "getEditable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>editable</code>"
          },
          description:
            "Gets current value of property {@link #getEditable editable}.\n\nFlag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableBusyIndicator",
          visibility: "public",
          since: "1.27.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableBusyIndicator</code>"
          },
          description:
            "Gets current value of property {@link #getEnableBusyIndicator enableBusyIndicator}.\n\nIf set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getEnableCellFilter",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableCellFilter</code>"
          },
          description:
            "Gets current value of property {@link #getEnableCellFilter enableCellFilter}.\n\nFlag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getEnableColumnFreeze",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableColumnFreeze</code>"
          },
          description:
            "Gets current value of property {@link #getEnableColumnFreeze enableColumnFreeze}.\n\nFlag whether to show or hide the column menu item to freeze or unfreeze a column.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getEnableColumnReordering",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableColumnReordering</code>"
          },
          description:
            "Gets current value of property {@link #getEnableColumnReordering enableColumnReordering}.\n\nFlag to enable or disable column reordering\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableCustomFilter",
          visibility: "public",
          since: "1.23.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableCustomFilter</code>"
          },
          description:
            "Gets current value of property {@link #getEnableCustomFilter enableCustomFilter}.\n\nSet this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getEnableGrouping",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableGrouping</code>"
          },
          description:
            "Gets current value of property {@link #getEnableGrouping enableGrouping}.\n\nEnables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.\n\nThe following restrictions apply: <ul> <li>Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul>\n\nDefault value is <code>false</code>.",
          experimental: {
            since: "1.28",
            text: "This feature has a limited functionality."
          }
        },
        {
          name: "getEnableSelectAll",
          visibility: "public",
          since: "1.23.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableSelectAll</code>"
          },
          description:
            "Gets current value of property {@link #getEnableSelectAll enableSelectAll}.\n\nSpecifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getExtension",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getExtension extension}.\n\nExtension section of the Table. If not set, no extension area will be rendered. Note: In case a <code>sap.m.Toolbar</code> is used as header the CSS class sapMTBHeader-CTX should be applied on this toolbar."
        },
        {
          name: "getFirstVisibleRow",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>firstVisibleRow</code>"
          },
          description:
            "Gets current value of property {@link #getFirstVisibleRow firstVisibleRow}.\n\nFirst visible row.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getFixedBottomRowCount",
          visibility: "public",
          since: "1.18.7",
          returnValue: {
            type: "int",
            description: "Value of property <code>fixedBottomRowCount</code>"
          },
          description:
            "Gets current value of property {@link #getFixedBottomRowCount fixedBottomRowCount}.\n\nNumber of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getFixedColumnCount",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>fixedColumnCount</code>"
          },
          description:
            "Gets current value of property {@link #getFixedColumnCount fixedColumnCount}.\n\nNumber of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.\n\n<b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul>\n\nDefault value is <code>0</code>."
        },
        {
          name: "getFixedRowCount",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>fixedRowCount</code>"
          },
          description:
            "Gets current value of property {@link #getFixedRowCount fixedRowCount}.\n\nNumber of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getFooter",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control|string" },
          description:
            "Gets content of aggregation {@link #getFooter footer}.\n\nControl or text of footer section of the Table (if not set it will be hidden)"
        },
        {
          name: "getGroupBy",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID" },
          description:
            "ID of the element which is the current target of the association {@link #getGroupBy groupBy}, or <code>null</code>.",
          experimental: {
            since: "1.28",
            text: "This feature has a limited functionality."
          }
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.table.Table."
        },
        {
          name: "getMinAutoRowCount",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>minAutoRowCount</code>"
          },
          description:
            "Gets current value of property {@link #getMinAutoRowCount minAutoRowCount}.\n\nThis property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.\n\nDefault value is <code>5</code>."
        },
        {
          name: "getNavigationMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.NavigationMode",
            description: "Value of property <code>navigationMode</code>"
          },
          description:
            "Gets current value of property {@link #getNavigationMode navigationMode}.\n\nThis property has been deprecated and must not be used anymore, since <code>Scrollbar</code> is the only supported option.\n\nDefault value is <code>Scrollbar</code>.",
          deprecated: { since: "1.38" }
        },
        {
          name: "getNoData",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control|string" },
          description:
            "Gets content of aggregation {@link #getNoData noData}.\n\nThe value for the noData aggregation can be either a string value or a control instance. The control is shown, in case there is no data for the Table available. In case of a string value this will simply replace the no data text."
        },
        {
          name: "getRowActionCount",
          visibility: "public",
          since: "1.45.0",
          returnValue: {
            type: "int",
            description: "Value of property <code>rowActionCount</code>"
          },
          description:
            "Gets current value of property {@link #getRowActionCount rowActionCount}.\n\nNumber of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getRowActionTemplate",
          visibility: "public",
          returnValue: { type: "sap.ui.table.RowAction" },
          description:
            "Gets content of aggregation {@link #getRowActionTemplate rowActionTemplate}.\n\nTemplate for row actions. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowActionTemplate</code> for the changes to take effect."
        },
        {
          name: "getRowHeight",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>rowHeight</code>"
          },
          description:
            "Gets current value of property {@link #getRowHeight rowHeight}.\n\nRow height in pixel.\n\nIn the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.\n\nIn the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to {@link sap.ui.table.VisibleRowCountMode.Fixed Fixed} or {@link sap.ui.table.VisibleRowCountMode.Interactive Interactive}, the value defines the minimum height, and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode.Auto Auto}, the value defines the actual height, and any content that doesn't fit is cut off.\n\nIf no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content."
        },
        {
          name: "getRows",
          visibility: "public",
          returnValue: { type: "sap.ui.table.Row[]" },
          description:
            "Gets content of aggregation {@link #getRows rows}.\n\nRows of the Table"
        },
        {
          name: "getRowSettingsTemplate",
          visibility: "public",
          returnValue: { type: "sap.ui.table.RowSettings" },
          description:
            "Gets content of aggregation {@link #getRowSettingsTemplate rowSettingsTemplate}.\n\nTemplate for row settings. A template is decoupled from the row or table. Each time the template's properties or aggregations are changed, the template has to be applied again via <code>setRowSettingsTemplate</code> for the changes to take effect."
        },
        {
          name: "getSelectedIndex",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>selectedIndex</code>"
          },
          description:
            "Gets current value of property {@link #getSelectedIndex selectedIndex}.\n\nZero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "getSelectedIndices",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: { type: "int[]", description: "Selected indices" },
          description:
            'Zero-based indices of selected items, wrapped in an array. An empty array means "no selection".'
        },
        {
          name: "getSelectionBehavior",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.SelectionBehavior",
            description: "Value of property <code>selectionBehavior</code>"
          },
          description:
            "Gets current value of property {@link #getSelectionBehavior selectionBehavior}.\n\nSelection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.\n\nDefault value is <code>RowSelector</code>."
        },
        {
          name: "getSelectionMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.SelectionMode",
            description: "Value of property <code>selectionMode</code>"
          },
          description:
            "Gets current value of property {@link #getSelectionMode selectionMode}.\n\nSelection mode of the Table. This property controls whether single or multiple rows can be selected and how the selection can be extended. It may also influence the visual appearance. When the selection mode is changed, the current selection is removed. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionMode.None</code> is set.\n\nDefault value is <code>MultiToggle</code>."
        },
        {
          name: "getShowColumnVisibilityMenu",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>showColumnVisibilityMenu</code>"
          },
          description:
            "Gets current value of property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.\n\nFlag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowNoData",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showNoData</code>"
          },
          description:
            "Gets current value of property {@link #getShowNoData showNoData}.\n\nFlag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowOverlay",
          visibility: "public",
          since: "1.21.2",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showOverlay</code>"
          },
          description:
            "Gets current value of property {@link #getShowOverlay showOverlay}.\n\nSetting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSortedColumns",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Column[]",
            description: "Array of sorted columns"
          },
          description:
            "Gets sorted columns in the order of which the sort API at the table or column was called. Sorting on binding level is not reflected here.",
          references: ["sap.ui.table.Table#sort", "sap.ui.table.Column#sort"]
        },
        {
          name: "getThreshold",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>threshold</code>"
          },
          description:
            "Gets current value of property {@link #getThreshold threshold}.\n\nThe <code>threshold</code> defines how many additional (not yet visible records) shall be pre-fetched to enable smooth scrolling. The threshold is always added to the <code>visibleRowCount</code>. If the <code>visibleRowCount</code> is 10 and the <code>threshold</code> is 100, there will be 110 records fetched with the initial load. If the <code>threshold</code> is lower than the <code>visibleRowCount</code>, the <code>visibleRowCount</code> will be used as the <code>threshold</code>. If the value is 0 then the thresholding is disabled.\n\nDefault value is <code>100</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control|string" },
          description:
            "Gets content of aggregation {@link #getTitle title}.\n\nControl or text of title section of the Table (if not set it will be hidden)"
        },
        {
          name: "getToolbar",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Toolbar" },
          description:
            "Gets content of aggregation {@link #getToolbar toolbar}.\n\nToolbar of the Table If not set, no toolbar area will be rendered. Note: The CSS class sapMTBHeader-CTX is applied on the given toolbar.",
          deprecated: {
            since: "1.38",
            text:
              "This aggregation is deprecated, use the <code>extension</code> aggregation instead."
          }
        },
        {
          name: "getVisibleRowCount",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>visibleRowCount</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleRowCount visibleRowCount}.\n\nNumber of visible rows of the table.\n\nDefault value is <code>10</code>."
        },
        {
          name: "getVisibleRowCountMode",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "sap.ui.table.VisibleRowCountMode",
            description: "Value of property <code>visibleRowCountMode</code>"
          },
          description:
            'Gets current value of property {@link #getVisibleRowCountMode visibleRowCountMode}.\n\nDefines how the table handles the visible rows in the table.\n\nIn the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.\n\nIn the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. <h3>Limitations</h3> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul>\n\nIn the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.\n\nDefault value is <code>Fixed</code>.'
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the Table.\n\nDefault value is <code>auto</code>."
        },
        {
          name: "indexOfColumn",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oColumn",
              type: "sap.ui.table.Column",
              optional: false,
              description: "The column whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.table.Column</code> in the aggregation {@link #getColumns columns}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfExtension",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oExtension",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The extension whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getExtension extension}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfRow",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oRow",
              type: "sap.ui.table.Row",
              optional: false,
              description: "The row whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.table.Row</code> in the aggregation {@link #getRows rows}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertColumn",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oColumn",
              type: "sap.ui.table.Column",
              optional: false,
              description: "The column to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the column should be inserted at; for a negative value of <code>iIndex</code>, the column is inserted at position 0; for a value greater than the current size of the aggregation, the column is inserted at the last position"
            }
          ],
          description:
            "Inserts a column into the aggregation {@link #getColumns columns}."
        },
        {
          name: "insertExtension",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oExtension",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The extension to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the extension should be inserted at; for a negative value of <code>iIndex</code>, the extension is inserted at position 0; for a value greater than the current size of the aggregation, the extension is inserted at the last position"
            }
          ],
          description:
            "Inserts a extension into the aggregation {@link #getExtension extension}."
        },
        {
          name: "insertRow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oRow",
              type: "sap.ui.table.Row",
              optional: false,
              description: "The row to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the row should be inserted at; for a negative value of <code>iIndex</code>, the row is inserted at position 0; for a value greater than the current size of the aggregation, the row is inserted at the last position"
            }
          ],
          description:
            "Inserts a row into the aggregation {@link #getRows rows}."
        },
        {
          name: "isIndexSelected",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean",
            description: "Whether the index is selected"
          },
          parameters: [
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "Index to check for selection"
            }
          ],
          description: "Checks whether an index is selected."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAllColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getColumns columns}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllExtension",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getExtension extension}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Row[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getRows rows}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeColumn",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Column",
            description: "The removed column or <code>null</code>"
          },
          parameters: [
            {
              name: "vColumn",
              type: "int|string|sap.ui.table.Column",
              optional: false,
              description: "The column to remove or its index or id"
            }
          ],
          description:
            "Removes a column from the aggregation {@link #getColumns columns}."
        },
        {
          name: "removeExtension",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed extension or <code>null</code>"
          },
          parameters: [
            {
              name: "vExtension",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The extension to remove or its index or id"
            }
          ],
          description:
            "Removes a extension from the aggregation {@link #getExtension extension}."
        },
        {
          name: "removeRow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Row",
            description: "The removed row or <code>null</code>"
          },
          parameters: [
            {
              name: "vRow",
              type: "int|string|sap.ui.table.Row",
              optional: false,
              description: "The row to remove or its index or id"
            }
          ],
          description:
            "Removes a row from the aggregation {@link #getRows rows}."
        },
        {
          name: "removeSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndexFrom",
              type: "int",
              optional: false,
              description: "Index from which the deselection should start"
            },
            {
              name: "iIndexTo",
              type: "int",
              optional: false,
              description: "Index up to which to deselect"
            }
          ],
          description:
            "Removes the given selection interval from the selection. In case of single selection, only <code>iIndexTo</code> is removed from the selection."
        },
        {
          name: "selectAll",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Add all rows to the selection. Please note that for server based models like OData the indices which are considered to be selected might not be available at the client yet. Calling getContextByIndex might not return a result but trigger a roundtrip to request this single entity."
        },
        {
          name: "setAlternateRowColors",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAlternateRowColors",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>alternateRowColors</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAlternateRowColors alternateRowColors}.\n\nEnables alternating table row colors. Alternate row coloring is not available for the tree mode.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setColumnHeaderHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColumnHeaderHeight",
              type: "int",
              optional: false,
              description:
                "New value for property <code>columnHeaderHeight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnHeaderHeight columnHeaderHeight}.\n\nHeader row height in pixel. If a value greater than 0 is set, it overrides the height defined in the <code>rowHeight</code> property for the rows in the table's header. The value defines the minimum height, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.\n\n<b>Note</b>: In a {@link sap.ui.table.Column#getMultiLabels MultiLabel} scenario, the height is applied to each individual row of the table's header.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setColumnHeaderVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bColumnHeaderVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>columnHeaderVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColumnHeaderVisible columnHeaderVisible}.\n\nFlag whether the column header is visible or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setContextMenu",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContextMenu",
              type: "sap.ui.core.IContextMenu",
              optional: false,
              description: "The contextMenu to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getContextMenu contextMenu}."
        },
        {
          name: "setEditable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEditable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>editable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEditable editable}.\n\nFlag whether the controls of the Table are editable or not (currently this only controls the background color in certain themes!)\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableBusyIndicator",
          visibility: "public",
          since: "1.27.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableBusyIndicator",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>enableBusyIndicator</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableBusyIndicator enableBusyIndicator}.\n\nIf set to <code>true</code>, the table changes its busy state, resulting in showing or hiding the busy indicator. The table will switch to busy as soon as data is retrieved to be displayed in the currently visible rows. This happens, for example, during scrolling, filtering, or sorting. As soon as the data has been retrieved, the table switches back to not busy. The busy state of the table can still be set manually by calling {@link sap.ui.core.Control#setBusy}.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEnableCellFilter",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableCellFilter",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>enableCellFilter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableCellFilter enableCellFilter}.\n\nFlag whether to enable or disable the context menu on cells to trigger a filtering with the cell value.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEnableColumnFreeze",
          visibility: "public",
          since: "1.21.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableColumnFreeze",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>enableColumnFreeze</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableColumnFreeze enableColumnFreeze}.\n\nFlag whether to show or hide the column menu item to freeze or unfreeze a column.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEnableColumnReordering",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableColumnReordering",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>enableColumnReordering</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableColumnReordering enableColumnReordering}.\n\nFlag to enable or disable column reordering\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableCustomFilter",
          visibility: "public",
          since: "1.23.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableCustomFilter",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>enableCustomFilter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableCustomFilter enableCustomFilter}.\n\nSet this parameter to true to implement your own filter behaviour. Instead of the filter input box a button will be rendered for which' press event (customFilter) you can register an event handler.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setEnableGrouping",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableGrouping",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableGrouping</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableGrouping enableGrouping}.\n\nEnables or disables grouping. If grouping is enabled, the table is grouped by the column which is defined in the <code>groupBy</code> association.\n\nThe following restrictions apply: <ul> <li>Only client models are supported (e.g. {@link sap.ui.model.json.JSONModel}). Grouping does not work with OData models.</li> <li>The table can only be grouped by <b>one</b> column at a time. Grouping by another column will remove the current grouping.</li> <li>If grouping has been done, sorting and filtering is not possible. Any existing sorting and filtering rules do no longer apply. The UI is not updated accordingly (e.g. menu items, sort and filter icons).</li> <li>The column, by which the table is grouped, is not visible. It will become visible again only if the table is grouped by another column or grouping is disabled.</li> </ul>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.",
          experimental: {
            since: "1.28",
            text: "This feature has a limited functionality."
          }
        },
        {
          name: "setEnableSelectAll",
          visibility: "public",
          since: "1.23.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableSelectAll",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableSelectAll</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableSelectAll enableSelectAll}.\n\nSpecifies if a select all button should be displayed in the top left corner. This button is only displayed if the row selector is visible and the selection mode is set to any kind of multi selection.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setFirstVisibleRow",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iFirstVisibleRow",
              type: "int",
              optional: false,
              description: "New value for property <code>firstVisibleRow</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFirstVisibleRow firstVisibleRow}.\n\nFirst visible row.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setFixedBottomRowCount",
          visibility: "public",
          since: "1.18.7",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iFixedBottomRowCount",
              type: "int",
              optional: false,
              description:
                "New value for property <code>fixedBottomRowCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFixedBottomRowCount fixedBottomRowCount}.\n\nNumber of rows that are fix on the bottom. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setFixedColumnCount",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iFixedColumnCount",
              type: "int",
              optional: false,
              description:
                "New value for property <code>fixedColumnCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFixedColumnCount fixedColumnCount}.\n\nNumber of columns that are fixed on the left. Only columns which are not fixed can be scrolled horizontally.\n\n<b>Note</b> <ul> <li>Fixed columns need a defined width for the feature to work.</li> <li>The aggregated width of all fixed columns must not exceed the table width. Otherwise the table ignores the value of the property and adapts the behavior in an appropriate way to ensure that the user is still able to scroll horizontally.</li> </ul>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setFixedRowCount",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iFixedRowCount",
              type: "int",
              optional: false,
              description: "New value for property <code>fixedRowCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFixedRowCount fixedRowCount}.\n\nNumber of rows that are fix on the top. When you use a vertical scrollbar, only the rows which are not fixed, will scroll.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setFooter",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vFooter",
              type: "sap.ui.core.Control|string",
              optional: false,
              description: "The footer to set"
            }
          ],
          description: "Sets the aggregated {@link #getFooter footer}."
        },
        {
          name: "setGroupBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oGroupBy",
              type: "sap.ui.core.ID|sap.ui.table.Column",
              optional: false,
              description:
                "ID of an element which becomes the new target of this groupBy association; alternatively, an element instance may be given"
            }
          ],
          description: "Sets the associated {@link #getGroupBy groupBy}.",
          experimental: {
            since: "1.28",
            text: "This feature has a limited functionality."
          }
        },
        {
          name: "setMinAutoRowCount",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinAutoRowCount",
              type: "int",
              optional: false,
              description: "New value for property <code>minAutoRowCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMinAutoRowCount minAutoRowCount}.\n\nThis property is used to set the minimum count of visible rows when the property visibleRowCountMode is set to Auto or Interactive. For any other visibleRowCountMode, it is ignored.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>5</code>."
        },
        {
          name: "setNavigationMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sNavigationMode",
              type: "sap.ui.table.NavigationMode",
              optional: false,
              description: "New value for property <code>navigationMode</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getNavigationMode navigationMode}.\n\nThis property has been deprecated and must not be used anymore, since <code>Scrollbar</code> is the only supported option.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Scrollbar</code>.",
          deprecated: { since: "1.38" }
        },
        {
          name: "setNoData",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vNoData",
              type: "sap.ui.core.Control|string",
              optional: false,
              description: "The noData to set"
            }
          ],
          description: "Sets the aggregated {@link #getNoData noData}."
        },
        {
          name: "setRowActionCount",
          visibility: "public",
          since: "1.45.0",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iRowActionCount",
              type: "int",
              optional: false,
              description: "New value for property <code>rowActionCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRowActionCount rowActionCount}.\n\nNumber of row actions made visible which determines the width of the row action column. The values <code>0</code>, <code>1</code> and <code>2</code> are possible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setRowActionTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oRowActionTemplate",
              type: "sap.ui.table.RowAction",
              optional: false,
              description: "The rowActionTemplate to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getRowActionTemplate rowActionTemplate}."
        },
        {
          name: "setRowHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iRowHeight",
              type: "int",
              optional: false,
              description: "New value for property <code>rowHeight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRowHeight rowHeight}.\n\nRow height in pixel.\n\nIn the table's header, it defines the minimum height of the row, but it cannot be less than the default height based on the content density configuration. The actual height can increase based on the content.\n\nIn the table's body, it defines the height of the row content. The actual row height is also influenced by other factors, such as the border width. If the <code>visibleRowCountMode</code> property is set to {@link sap.ui.table.VisibleRowCountMode.Fixed Fixed} or {@link sap.ui.table.VisibleRowCountMode.Interactive Interactive}, the value defines the minimum height, and the actual height can increase based on the content. If the mode is {@link sap.ui.table.VisibleRowCountMode.Auto Auto}, the value defines the actual height, and any content that doesn't fit is cut off.\n\nIf no value is set (includes 0), a default height is applied based on the content density configuration. In any <code>visibleRowCountMode</code>, the actual height can increase based on the content.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setRowSettingsTemplate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oRowSettingsTemplate",
              type: "sap.ui.table.RowSettings",
              optional: false,
              description: "The rowSettingsTemplate to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getRowSettingsTemplate rowSettingsTemplate}."
        },
        {
          name: "setSelectedIndex",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iSelectedIndex",
              type: "int",
              optional: false,
              description: "New value for property <code>selectedIndex</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSelectedIndex selectedIndex}.\n\nZero-based index of selected item. Index value for no selection is -1. When multi-selection is enabled and multiple items are selected, the method returns the lead selected item. Sets the zero-based index of the currently selected item. This method removes any previous selections. When the given index is invalid, the call is ignored.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>-1</code>."
        },
        {
          name: "setSelectionBehavior",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSelectionBehavior",
              type: "sap.ui.table.SelectionBehavior",
              optional: false,
              description:
                "New value for property <code>selectionBehavior</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSelectionBehavior selectionBehavior}.\n\nSelection behavior of the Table. This property defines whether the row selector is displayed and whether the row, the row selector or both can be clicked to select a row. <b>Note:</b> Since the group header visualization relies on the row selectors, the row selectors are always shown if the grouping functionality (depends on table type) is enabled, even if <code>sap.ui.table.SelectionBehavior.RowOnly</code> is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>RowSelector</code>."
        },
        {
          name: "setSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iIndexFrom",
              type: "int",
              optional: false,
              description: "Index from which the selection should start"
            },
            {
              name: "iIndexTo",
              type: "int",
              optional: false,
              description: "Index up to which to select"
            }
          ],
          description:
            "Sets the given selection interval as selection. In case of single selection, only <code>iIndexTo</code> is selected."
        },
        {
          name: "setSelectionMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSelectionMode",
              type: "sap.ui.table.SelectionMode",
              optional: false,
              description: "the selection mode, see sap.ui.table.SelectionMode"
            }
          ],
          description: "Sets the selection mode. The current selection is lost."
        },
        {
          name: "setShowColumnVisibilityMenu",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowColumnVisibilityMenu",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showColumnVisibilityMenu</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowColumnVisibilityMenu showColumnVisibilityMenu}.\n\nFlag to show or hide the column visibility menu. This menu will get displayed in each generated column header menu. It allows to show or hide columns\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowNoData",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowNoData",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showNoData</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowNoData showNoData}.\n\nFlag whether to show the no data overlay or not once the table is empty. If set to false the table will just show a grid of empty cells\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowOverlay",
          visibility: "public",
          since: "1.21.2",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowOverlay",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showOverlay</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowOverlay showOverlay}.\n\nSetting this property to true will show an overlay on top of the Table content and users cannot click anymore on the Table content.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setThreshold",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iThreshold",
              type: "int",
              optional: false,
              description: "The threshold"
            }
          ],
          description:
            "Sets the threshold value, which will be added to all data requests in case the Table is bound against an OData service."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTitle",
              type: "sap.ui.core.Control|string",
              optional: false,
              description: "The title to set"
            }
          ],
          description: "Sets the aggregated {@link #getTitle title}."
        },
        {
          name: "setToolbar",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oToolbar",
              type: "sap.ui.core.Toolbar",
              optional: false,
              description: "The toolbar to set"
            }
          ],
          description: "Sets the aggregated {@link #getToolbar toolbar}.",
          deprecated: {
            since: "1.38",
            text:
              "This aggregation is deprecated, use the <code>extension</code> aggregation instead."
          }
        },
        {
          name: "setTooltip",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTooltip",
              type: "string|sap.ui.core.TooltipBase",
              optional: false,
              description: "The tooltip"
            }
          ],
          description:
            "Sets a new tooltip for this object. The tooltip can either be a simple string (which in most cases will be rendered as the <code>title</code> attribute of this Element) or an instance of {@link sap.ui.core.TooltipBase}.\n\nIf a new tooltip is set, any previously set tooltip is deactivated.\n\nPlease note that tooltips are not rendered for the table. The tooltip property will be set but it won't effect the DOM."
        },
        {
          name: "setVisibleRowCount",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iVisibleRowCount",
              type: "int",
              optional: false,
              description: "New value for property <code>visibleRowCount</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleRowCount visibleRowCount}.\n\nNumber of visible rows of the table.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>10</code>."
        },
        {
          name: "setVisibleRowCountMode",
          visibility: "public",
          since: "1.9.2",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sVisibleRowCountMode",
              type: "sap.ui.table.VisibleRowCountMode",
              optional: false,
              description:
                "New value for property <code>visibleRowCountMode</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getVisibleRowCountMode visibleRowCountMode}.\n\nDefines how the table handles the visible rows in the table.\n\nIn the <code>"Fixed"</code> mode, the table always has as many rows as defined in the <code>visibleRowCount</code> property.\n\nIn the <code>"Auto"</code> mode, the <code>visibleRowCount</code> property is changed by the table automatically. It will then adjust its row count to the space it is allowed to cover (limited by the surrounding container), but it cannot have less than defined in the <code>minAutoRowCount</code> property. The <code>visibleRowCount</code> property cannot be set manually. <h3>Limitations</h3> <ul> <li>All rows need to have the same height.</li> <li>The table must be rendered without siblings in its parent DOM element. The only exception is if the parent element is a CSS flex container, and the table is a CSS flex item allowed to grow and shrink.</li> </ul>\n\nIn the <code>"Interactive"</code> mode, the table has as many rows as defined in the <code>visibleRowCount</code> property after rendering. The user can change the <code>visibleRowCount</code> by dragging a resizer.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Fixed</code>.'
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nWidth of the Table.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>auto</code>."
        },
        {
          name: "sort",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "oColumn",
              type: "sap.ui.table.Column|undefined",
              optional: false,
              description: "Column to be sorted or undefined to clear sorting"
            },
            {
              name: "oSortOrder",
              type: "sap.ui.table.SortOrder",
              optional: false,
              description:
                "Sort order of the column (if undefined the default will be ascending)"
            },
            {
              name: "bAdd",
              type: "Boolean",
              optional: false,
              description:
                "Set to true to add the new sort criterion to the existing sort criteria"
            }
          ],
          description: "Sorts the given column ascending or descending."
        },
        {
          name: "unbindColumns",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getColumns columns} from model data."
        },
        {
          name: "unbindRows",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.Table",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getRows rows} from model data."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.table.TablePersoController",
      basename: "TablePersoController",
      resource: "sap/ui/table/TablePersoController.js",
      module: "sap/ui/table/TablePersoController",
      export: "",
      static: true,
      visibility: "public",
      since: "1.21.1",
      extends: "sap.ui.base.ManagedObject",
      description:
        "The TablePersoController can be used to connect a table with a persistence service.",
      "ui5-metadata": {
        stereotype: "object",
        properties: [
          {
            name: "autoSave",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Auto save state",
            methods: ["getAutoSave", "setAutoSave"]
          },
          {
            name: "persoService",
            type: "any",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Personalization Service object. Needs to have the following methods: <ul> <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> </ul>",
            methods: ["getPersoService", "setPersoService"]
          },
          {
            name: "customDataKey",
            type: "string",
            defaultValue: "persoKey",
            group: "Misc",
            visibility: "public",
            description:
              "By defining a custom data key the <code>TablePersoController</code> will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.",
            methods: ["getCustomDataKey", "setCustomDataKey"]
          }
        ],
        associations: [
          {
            name: "table",
            singularName: "table",
            type: "sap.ui.table.Table",
            cardinality: "0..1",
            visibility: "public",
            description: "The target table of this controller.",
            methods: ["getTable", "setTable"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new TablePersoController.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.TablePersoController with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.ManagedObject.extend}."
        },
        {
          name: "getAutoSave",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>autoSave</code>"
          },
          description:
            "Gets current value of property {@link #getAutoSave autoSave}.\n\nAuto save state\n\nDefault value is <code>true</code>."
        },
        {
          name: "getCustomDataKey",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>customDataKey</code>"
          },
          description:
            "Gets current value of property {@link #getCustomDataKey customDataKey}.\n\nBy defining a custom data key the <code>TablePersoController</code> will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.\n\nDefault value is <code>persoKey</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.TablePersoController."
        },
        {
          name: "getPersoService",
          visibility: "public",
          returnValue: {
            type: "any",
            description: "Value of property <code>persoService</code>"
          },
          description:
            "Gets current value of property {@link #getPersoService persoService}.\n\nPersonalization Service object. Needs to have the following methods: <ul> <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> </ul>"
        },
        {
          name: "getTable",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID" },
          description:
            "ID of the element which is the current target of the association {@link #getTable table}, or <code>null</code>."
        },
        {
          name: "openDialog",
          visibility: "public",
          parameters: [{ name: "mSettings", type: "object", optional: false }],
          description:
            "Opens the personalization dialog for the Table to modify the visibility and the order of the columns.\n\n<i>Using this functionality will require to load the sap.m library because the personalization dialog is only available in this library for now.</i>",
          experimental: {
            since: "1.21.2",
            text: "API might change / feature requires the sap.m library!"
          }
        },
        {
          name: "refresh",
          visibility: "public",
          returnValue: {
            type: "jQuery.Promise",
            description:
              "<code>jQuery Promise</code> which is resolved once the refresh is finished"
          },
          description:
            "Refresh the personalizations (reloads data from service)."
        },
        {
          name: "savePersonalizations",
          visibility: "public",
          returnValue: {
            type: "jQuery.Promise",
            description:
              "<code>jQuery Promise</code> which is resolved once the save is finished"
          },
          description: "Saves the current personalization state."
        },
        {
          name: "setAutoSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TablePersoController",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAutoSave",
              type: "boolean",
              optional: false,
              description: "New value for property <code>autoSave</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAutoSave autoSave}.\n\nAuto save state\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setCustomDataKey",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TablePersoController",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sCustomDataKey",
              type: "string",
              optional: false,
              description: "New value for property <code>customDataKey</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCustomDataKey customDataKey}.\n\nBy defining a custom data key the <code>TablePersoController</code> will try to get the key for saving the perso data from the custom data of the Table and Column instead of creating it by concatenating the ID of the Table and the Column. Basically this will be more stable than using the auto IDs.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>persoKey</code>."
        },
        {
          name: "setPersoService",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TablePersoController",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPersoService",
              type: "any",
              optional: false,
              description: "New value for property <code>persoService</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPersoService persoService}.\n\nPersonalization Service object. Needs to have the following methods: <ul> <li>getPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>setPersData(oBundle) : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> <li>delPersData() : <code>jQuery Promise</code> (http://api.jquery.com/promise/)</li> </ul>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TablePersoController",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTable",
              type: "sap.ui.core.ID|sap.ui.table.Table",
              optional: false,
              description:
                "ID of an element which becomes the new target of this table association; alternatively, an element instance may be given"
            }
          ],
          description: "Sets the associated {@link #getTable table}."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.TreeAutoExpandMode",
      basename: "TreeAutoExpandMode",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "TreeAutoExpandMode",
      static: true,
      visibility: "public",
      description:
        "Different modes for setting the auto expand mode on tree or analytical bindings."
    },
    {
      kind: "class",
      name: "sap.ui.table.TreeTable",
      basename: "TreeTable",
      resource: "sap/ui/table/TreeTable.js",
      module: "sap/ui/table/TreeTable",
      export: "",
      static: true,
      visibility: "public",
      extends: "sap.ui.table.Table",
      description:
        "The TreeTable control provides a comprehensive set of features to display hierarchical data.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "expandFirstLevel",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              'Specifies whether the first level is expanded.\n\nThe value of the property is only taken into account if no parameter <code>numberOfExpandedLevels</code> is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      numberOfExpandedLevels: 1\n    }\n  });\n</pre>',
            deprecated: {
              since: "1.46.3",
              text:
                "replaced by the corresponding binding parameter <code>numberOfExpandedLevels</code>."
            },
            methods: ["getExpandFirstLevel", "setExpandFirstLevel"]
          },
          {
            name: "useGroupMode",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "If group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.",
            methods: ["getUseGroupMode", "setUseGroupMode"]
          },
          {
            name: "groupHeaderProperty",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description:
              "The property name of the rows data which will be displayed as a group header if the group mode is enabled",
            methods: ["getGroupHeaderProperty", "setGroupHeaderProperty"]
          },
          {
            name: "collapseRecursive",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Setting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.",
            methods: ["getCollapseRecursive", "setCollapseRecursive"]
          },
          {
            name: "rootLevel",
            type: "int",
            defaultValue: 0,
            group: "Data",
            visibility: "public",
            description:
              "The root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.",
            methods: ["getRootLevel", "setRootLevel"]
          }
        ],
        events: [
          {
            name: "toggleOpenState",
            visibility: "public",
            description:
              "Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode.",
            parameters: {
              rowIndex: {
                name: "rowIndex",
                type: "int",
                description: "Index of the expanded/collapsed row"
              },
              rowContext: {
                name: "rowContext",
                type: "object",
                description: "Binding context of the expanded/collapsed row"
              },
              expanded: {
                name: "expanded",
                type: "boolean",
                description:
                  "Flag that indicates whether the row has been expanded or collapsed"
              }
            },
            methods: [
              "attachToggleOpenState",
              "detachToggleOpenState",
              "fireToggleOpenState"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "id for the new control, generated automatically if no id is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new TreeTable.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:08197fa68e4f479cbe30f639cc1cd22c sap.ui.table}",
          "{@link topic:148892ff9aea4a18b912829791e38f3e Tables: Which One Should I Choose?}",
          "{@link fiori:/tree-table/ Tree Table}"
        ]
      },
      events: [
        {
          name: "toggleOpenState",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    rowIndex: {
                      name: "rowIndex",
                      type: "int",
                      optional: false,
                      description: "Index of the expanded/collapsed row"
                    },
                    rowContext: {
                      name: "rowContext",
                      type: "object",
                      optional: false,
                      description:
                        "Binding context of the expanded/collapsed row"
                    },
                    expanded: {
                      name: "expanded",
                      type: "boolean",
                      optional: false,
                      description:
                        "Flag that indicates whether the row has been expanded or collapsed"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode."
        }
      ],
      methods: [
        {
          name: "addSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          parameters: [
            {
              name: "iFromIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be selected."
            },
            {
              name: "iToIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be selected."
            }
          ],
          description:
            'Marks a range of tree nodes as selected, starting with iFromIndex going to iToIndex. The TreeNodes are referenced via their absolute row index. Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable. Invisible nodes (collapsed child nodes) will not be regarded.\n\nPlease also take notice of the fact, that "addSelectionInterval" does not change any other selection. To override the current selection, please use "setSelctionInterval" or for a single entry use "setSelectedIndex".'
        },
        {
          name: "attachToggleOpenState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.ui.table.TreeTable</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toggleOpenState toggleOpenState} event of this <code>sap.ui.table.TreeTable</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.table.TreeTable</code> itself.\n\nFired when a row has been expanded or collapsed by user interaction. Only available in hierarchical mode."
        },
        {
          name: "clearSelection",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          description:
            "Clears the complete selection (all tree table rows/nodes will lose their selection)"
        },
        {
          name: "collapse",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "vRowIndex",
              type: "int|int[]",
              optional: false,
              description:
                "A single index or an array of indices of the rows to be collapsed"
            }
          ],
          description: "Collapses one or more rows."
        },
        {
          name: "collapseAll",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description: "<code>this</code> to allow method chaining"
          },
          description:
            "Collapses all nodes (and lower if collapseRecursive is activated)"
        },
        {
          name: "detachToggleOpenState",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toggleOpenState toggleOpenState} event of this <code>sap.ui.table.TreeTable</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "expand",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "vRowIndex",
              type: "int|int[]",
              optional: false,
              description:
                "A single index or an array of indices of the rows to be expanded"
            }
          ],
          description: "Expands one or more rows."
        },
        {
          name: "expandToLevel",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          parameters: [
            {
              name: "iLevel",
              type: "int",
              optional: false,
              description: "the level to which the trees shall be expanded"
            }
          ],
          description:
            "Expands all nodes starting from the root level to the given level 'iLevel'.\n\nOnly supported with ODataModel v2, when running in OperationMode.Client or OperationMode.Auto. Fully supported for <code>sap.ui.model.ClientTreeBinding</code>, e.g. if you are using a <code>sap.ui.model.json.JSONModel</code>.\n\nPlease also see <code>sap.ui.model.odata.OperationMode</code>."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.ui.table.TreeTable with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.table.Table.extend}."
        },
        {
          name: "fireToggleOpenState",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                rowIndex: {
                  name: "rowIndex",
                  type: "int",
                  optional: true,
                  description: "Index of the expanded/collapsed row"
                },
                rowContext: {
                  name: "rowContext",
                  type: "object",
                  optional: true,
                  description: "Binding context of the expanded/collapsed row"
                },
                expanded: {
                  name: "expanded",
                  type: "boolean",
                  optional: true,
                  description:
                    "Flag that indicates whether the row has been expanded or collapsed"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toggleOpenState toggleOpenState} to attached listeners."
        },
        {
          name: "getCollapseRecursive",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>collapseRecursive</code>"
          },
          description:
            "Gets current value of property {@link #getCollapseRecursive collapseRecursive}.\n\nSetting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEnableGrouping",
          visibility: "public",
          description:
            "The property <code>enableGrouping</code> is not supported by the <code>TreeTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "getExpandFirstLevel",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expandFirstLevel</code>"
          },
          description:
            'Gets current value of property {@link #getExpandFirstLevel expandFirstLevel}.\n\nSpecifies whether the first level is expanded.\n\nThe value of the property is only taken into account if no parameter <code>numberOfExpandedLevels</code> is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      numberOfExpandedLevels: 1\n    }\n  });\n</pre>\n\nDefault value is <code>false</code>.',
          deprecated: {
            since: "1.46.3",
            text:
              "replaced by the corresponding binding parameter <code>numberOfExpandedLevels</code>."
          }
        },
        {
          name: "getGroupBy",
          visibility: "public",
          description:
            "The <code>groupBy</code> association is not supported by the <code>TreeTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "getGroupHeaderProperty",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>groupHeaderProperty</code>"
          },
          description:
            "Gets current value of property {@link #getGroupHeaderProperty groupHeaderProperty}.\n\nThe property name of the rows data which will be displayed as a group header if the group mode is enabled"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.ui.table.TreeTable."
        },
        {
          name: "getRootLevel",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>rootLevel</code>"
          },
          description:
            "Gets current value of property {@link #getRootLevel rootLevel}.\n\nThe root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getSelectedIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "int",
            description: "index of lead selected row"
          },
          description:
            "Retrieves the lead selection index. The lead selection index is, among other things, used to determine the start/end of a selection range, when using Shift-Click to select multiple entries at once."
        },
        {
          name: "getSelectedIndices",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "int[]",
            description: "an array containing all selected indices"
          },
          description:
            'Returns an array containing the row indices of all selected tree nodes (ordered ascending).\n\nPlease be aware of the following: Due to performance/network traffic reasons, the getSelectedIndices function returns only all indices of actually selected rows/tree nodes. Unknown rows/nodes (as in "not yet loaded" to the client), will not be returned.'
        },
        {
          name: "getUseGroupMode",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>useGroupMode</code>"
          },
          description:
            "Gets current value of property {@link #getUseGroupMode useGroupMode}.\n\nIf group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.\n\nDefault value is <code>false</code>."
        },
        {
          name: "isExpanded",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean",
            description:
              "<code>true</code> if the row is expanded, <code>false</code> if it is collapsed"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description: "The index of the row to be checked"
            }
          ],
          description: "Checks whether the row is expanded or collapsed."
        },
        {
          name: "isIndexSelected",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "boolean",
            description: "true if the index is selected, false otherwise"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description:
                "The row index for which the selection state should be retrieved"
            }
          ],
          description: "Checks if the row at the given index is selected."
        },
        {
          name: "removeSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          parameters: [
            {
              name: "iFromIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be deselected."
            },
            {
              name: "iToIndex",
              type: "int",
              optional: false,
              description:
                "The starting index of the range which will be deselected."
            }
          ],
          description:
            "All rows/tree nodes inside the range (including boundaries) will be deselected. Tree nodes are referenced with theit absolute row index inside the tree- Please be aware, that the absolute row index only applies to the tree which is visualized by the TreeTable. Invisible nodes (collapsed child nodes) will not be regarded."
        },
        {
          name: "selectAll",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          description:
            "Selects all available nodes/rows.\n\nAll rows/tree nodes that are locally stored on the client and that are part of the currently visible tree are selected. Additional rows or tree nodes that come into view through scrolling or paging are also selected immediately as soon as they get visible. However, <code>SelectAll</code> does not retrieve any data from the back end in order to improve performance and reduce the network traffic."
        },
        {
          name: "setCollapseRecursive",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bCollapseRecursive",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>collapseRecursive</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCollapseRecursive collapseRecursive}.\n\nSetting collapseRecursive to true means, that when collapsing a node all subsequent child nodes will also be collapsed. This property is only supported with sap.ui.model.odata.v2.ODataModel. <b>Note:</b> collapseRecursive is currently <b>not</b> supported if your OData service exposes the hierarchy annotation <code>hierarchy-descendant-count-for</code>. In this case the value of the collapseRecursive property is ignored. For more information about the OData hierarchy annotations, please see the <b>SAP Annotations for OData Version 2.0</b> specification.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEnableGrouping",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "The property <code>enableGrouping</code> is not supported by the <code>TreeTable</code> control.",
          deprecated: {
            since: "1.28",
            text:
              "To get a group-like visualization the <code>useGroupMode</code> property can be used."
          },
          references: ["sap.ui.table.TreeTable#setUseGroupMode"]
        },
        {
          name: "setExpandFirstLevel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bExpandFirstLevel",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>expandFirstLevel</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getExpandFirstLevel expandFirstLevel}.\n\nSpecifies whether the first level is expanded.\n\nThe value of the property is only taken into account if no parameter <code>numberOfExpandedLevels</code> is given in the binding information. Changes to this property after the table is bound do not have any effect unless an explicit (re-)bind of the <code>rows</code> aggregation is done.\n\nExample: <pre>\n  oTable.bindRows({\n    path: "...",\n    parameters: {\n      numberOfExpandedLevels: 1\n    }\n  });\n</pre>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>.',
          deprecated: {
            since: "1.46.3",
            text:
              "replaced by the corresponding binding parameter <code>numberOfExpandedLevels</code>."
          }
        },
        {
          name: "setFixedRowCount",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "iRowCount",
              type: "int",
              optional: false,
              description: "New value for property <code>fixedRowCount</code>"
            }
          ],
          description:
            "Setter for property <code>fixedRowCount</code>.\n\n<b>This property is not supportd for the TreeTable and will be ignored!</b>\n\nDefault value is <code>0</code>"
        },
        {
          name: "setGroupBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "The <code>groupBy</code> association is not supported by the <code>TreeTable</code> control.",
          deprecated: { since: "1.28" }
        },
        {
          name: "setGroupHeaderProperty",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sGroupHeaderProperty",
              type: "string",
              optional: false,
              description:
                "New value for property <code>groupHeaderProperty</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getGroupHeaderProperty groupHeaderProperty}.\n\nThe property name of the rows data which will be displayed as a group header if the group mode is enabled\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setRootLevel",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iRootLevel",
              type: "int",
              optional: false,
              description: "New value for property <code>rootLevel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRootLevel rootLevel}.\n\nThe root level is the level of the topmost tree nodes, which will be used as an entry point for OData services. This property is only supported when the TreeTable uses an underlying odata services with hierarchy annotations. This property is only supported with sap.ui.model.odata.v2.ODataModel The hierarchy annotations may also be provided locally as a parameter for the ODataTreeBinding.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setSelectedIndex",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          parameters: [
            {
              name: "iRowIndex",
              type: "int",
              optional: false,
              description: "The row index which will be selected (if existing)"
            }
          ],
          description:
            "Overridden from Table.js base class. In a TreeTable you can only select indices, which correspond to the currently visualized tree. Invisible tree nodes (e.g. collapsed child nodes) can not be selected via Index, because they do not correspond to a TreeTable row."
        },
        {
          name: "setSelectionInterval",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "a reference on the TreeTable control, can be used for chaining"
          },
          parameters: [
            {
              name: "iFromIndex",
              type: "int",
              optional: false,
              description: "the start index of the selection range"
            },
            {
              name: "iToIndex",
              type: "int",
              optional: false,
              description: "the end index of the selection range"
            }
          ],
          description:
            'Sets the selection of the TreeTable to the given range (including boundaries). Beware: The previous selection will be lost/overridden. If this is not wanted, please use "addSelectionInterval" and "removeSelectionInterval".'
        },
        {
          name: "setUseFlatMode",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlat",
              type: "boolean",
              optional: false,
              description:
                "If set to <code>true</code>, the flat mode is enabled"
            }
          ],
          description:
            "Allows to hide the tree structure (tree icons, indentation) in tree mode (property <code>useGroupMode</code> is set to <code>false</code>).\n\nThis option might be useful in some scenarios when actually a tree table must be used but under certain conditions the data is not hierarchical, because it contains leafs only.\n\n<b>Note:</b> In flat mode the user of the table cannot expand or collapse certain nodes and the hierarchy is not visible to the user. The caller of this function has to ensure to use this option only with non-hierarchical data."
        },
        {
          name: "setUseGroupMode",
          visibility: "public",
          returnValue: {
            type: "sap.ui.table.TreeTable",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUseGroupMode",
              type: "boolean",
              optional: false,
              description: "New value for property <code>useGroupMode</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUseGroupMode useGroupMode}.\n\nIf group mode is enabled nodes with subitems are rendered as if they were group headers. This can be used to do the grouping for an OData service on the backend and visualize this in a table.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.table.VisibleRowCountMode",
      basename: "VisibleRowCountMode",
      resource: "sap/ui/table/library.js",
      module: "sap/ui/table/library",
      export: "VisibleRowCountMode",
      static: true,
      visibility: "public",
      description: "VisibleRowCountMode of the table",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Auto",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The table automatically fills the height of the surrounding container."
        },
        {
          name: "Fixed",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The table always has as many rows as defined in the <code>visibleRowCount</code> property."
        },
        {
          name: "Interactive",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The user can change the <code>visibleRowCount</code> by dragging a resizer."
        }
      ]
    }
  ]
};