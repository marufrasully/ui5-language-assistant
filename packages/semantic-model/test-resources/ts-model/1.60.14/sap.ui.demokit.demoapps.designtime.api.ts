import { LibraryFile } from "@vscode-ui5/semantic-model/src/apiJson";

const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.60.14",
  symbols: [
    {
      kind: "namespace",
      name: "sap.ui.demokit",
      basename: "demokit",
      resource: "sap/ui/demokit/library.js",
      module: "sap/ui/demokit/library",
      export: "",
      static: true,
      visibility: "restricted",
      description:
        "SAPUI5 library with non-public controls, used in the UI5 demokit (SDK)"
    },
    {
      kind: "class",
      name: "sap.ui.demokit.CodeSampleContainer",
      basename: "CodeSampleContainer",
      resource: "sap/ui/demokit/CodeSampleContainer.js",
      module: "sap/ui/demokit/CodeSampleContainer",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description:
        "A container for both the source and the runtime results of a CodeSample. By default, only the runtime results are shown. There are additional controls that allow the user to display the source, modify and run it.\n\nThe container provides a sub container that can be used in calls to sap.ui.setRoot() as if it would be a normal UIArea. So the sample code doesn't have to know that it runs in a CodeSample container.",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "scriptElementId",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Id of the script element that contains the initial sample code for this code sample.",
            methods: ["getScriptElementId", "setScriptElementId"]
          },
          {
            name: "uiAreaId",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Id of the container for the running code. This Id can be used in calls to sap.ui.setRoot as if it would be a normal UIArea. Internally, a container UIElement is created with that Id.",
            methods: ["getUiAreaId", "setUiAreaId"]
          },
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "A title to be displayed above the code.",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "sourceVisible",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Whether the source code is visible or not.",
            methods: ["getSourceVisible", "setSourceVisible"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "90%",
            group: "Misc",
            visibility: "public",
            description: "Width of the CodeSample container.",
            methods: ["getWidth", "setWidth"]
          }
        ],
        aggregations: [
          {
            name: "_uiarea",
            singularName: "_uiarea",
            type: "sap.ui.demokit.UIAreaSubstitute",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "The UIAreaSubstitute used by this code sample container",
            methods: ["get_uiarea", "destroy_uiarea", "set_uiarea"]
          }
        ],
        events: [
          {
            name: "apply",
            visibility: "public",
            description:
              "Fired when the user decides to apply his/her changes to the sample code",
            parameters: {
              code: {
                name: "code",
                type: "string",
                description: "the current code that will be applied"
              }
            },
            methods: ["attachApply", "detachApply", "fireApply"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new CodeSampleContainer.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "apply",
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
                    code: {
                      name: "code",
                      type: "string",
                      optional: false,
                      description: "the current code that will be applied"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when the user decides to apply his/her changes to the sample code"
        }
      ],
      methods: [
        {
          name: "attachApply",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.CodeSampleContainer</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:apply apply} event of this <code>sap.ui.demokit.CodeSampleContainer</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.demokit.CodeSampleContainer</code> itself.\n\nFired when the user decides to apply his/her changes to the sample code"
        },
        {
          name: "detachApply",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:apply apply} event of this <code>sap.ui.demokit.CodeSampleContainer</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.demokit.CodeSampleContainer with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireApply",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                code: {
                  name: "code",
                  type: "string",
                  optional: true,
                  description: "the current code that will be applied"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:apply apply} to attached listeners."
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
            "Returns a metadata object for class sap.ui.demokit.CodeSampleContainer."
        },
        {
          name: "getScriptElementId",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>scriptElementId</code>"
          },
          description:
            "Gets current value of property {@link #getScriptElementId scriptElementId}.\n\nId of the script element that contains the initial sample code for this code sample."
        },
        {
          name: "getSourceVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>sourceVisible</code>"
          },
          description:
            "Gets current value of property {@link #getSourceVisible sourceVisible}.\n\nWhether the source code is visible or not.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nA title to be displayed above the code."
        },
        {
          name: "getUiAreaId",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>uiAreaId</code>"
          },
          description:
            "Gets current value of property {@link #getUiAreaId uiAreaId}.\n\nId of the container for the running code. This Id can be used in calls to sap.ui.setRoot as if it would be a normal UIArea. Internally, a container UIElement is created with that Id."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the CodeSample container.\n\nDefault value is <code>90%</code>."
        },
        {
          name: "setScriptElementId",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sScriptElementId",
              type: "string",
              optional: false,
              description: "New value for property <code>scriptElementId</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getScriptElementId scriptElementId}.\n\nId of the script element that contains the initial sample code for this code sample.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSourceVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bSourceVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>sourceVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSourceVisible sourceVisible}.\n\nWhether the source code is visible or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nA title to be displayed above the code.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setUiAreaId",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sUiAreaId",
              type: "string",
              optional: false,
              description: "New value for property <code>uiAreaId</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUiAreaId uiAreaId}.\n\nId of the container for the running code. This Id can be used in calls to sap.ui.setRoot as if it would be a normal UIArea. Internally, a container UIElement is created with that Id.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeSampleContainer",
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
            "Sets a new value for property {@link #getWidth width}.\n\nWidth of the CodeSample container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>90%</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.CodeViewer",
      basename: "CodeViewer",
      resource: "sap/ui/demokit/CodeViewer.js",
      module: "sap/ui/demokit/CodeViewer",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description: "Shows a piece of (Javascript) code and allows to edit it",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "source",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The source code to display.",
            methods: ["getSource", "setSource"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The CSS width property",
            methods: ["getWidth", "setWidth"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The CSS height property",
            methods: ["getHeight", "setHeight"]
          },
          {
            name: "editable",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Whether the code can be edited or not",
            methods: ["getEditable", "setEditable"]
          },
          {
            name: "lineNumbering",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Whether the code to have line numbering or not",
            methods: ["getLineNumbering", "setLineNumbering"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Whether the code viewer should be visible",
            methods: ["getVisible", "setVisible"]
          }
        ],
        events: [
          {
            name: "press",
            visibility: "public",
            description:
              "Called when the mouse button is clicked over the non-editable(!) control",
            methods: ["attachPress", "detachPress", "firePress"]
          },
          {
            name: "save",
            visibility: "public",
            description: "Called when the editor is active and should be saved",
            methods: ["attachSave", "detachSave", "fireSave"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new CodeViewer.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
            "Called when the mouse button is clicked over the non-editable(!) control"
        },
        {
          name: "save",
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
          description: "Called when the editor is active and should be saved"
        }
      ],
      methods: [
        {
          name: "attachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.CodeViewer</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ui.demokit.CodeViewer</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.demokit.CodeViewer</code> itself.\n\nCalled when the mouse button is clicked over the non-editable(!) control"
        },
        {
          name: "attachSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.CodeViewer</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:save save} event of this <code>sap.ui.demokit.CodeViewer</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.demokit.CodeViewer</code> itself.\n\nCalled when the editor is active and should be saved"
        },
        {
          name: "detachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ui.demokit.CodeViewer</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSave",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:save save} event of this <code>sap.ui.demokit.CodeViewer</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.demokit.CodeViewer with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "firePress",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
          name: "fireSave",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
            "Fires event {@link #event:save save} to attached listeners."
        },
        {
          name: "getEditable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>editable</code>"
          },
          description:
            "Gets current value of property {@link #getEditable editable}.\n\nWhether the code can be edited or not\n\nDefault value is <code>false</code>."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\nThe CSS height property"
        },
        {
          name: "getLineNumbering",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>lineNumbering</code>"
          },
          description:
            "Gets current value of property {@link #getLineNumbering lineNumbering}.\n\nWhether the code to have line numbering or not\n\nDefault value is <code>false</code>."
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
            "Returns a metadata object for class sap.ui.demokit.CodeViewer."
        },
        {
          name: "getSource",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>source</code>"
          },
          description:
            "Gets current value of property {@link #getSource source}.\n\nThe source code to display."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nWhether the code viewer should be visible\n\nDefault value is <code>true</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nThe CSS width property"
        },
        {
          name: "setEditable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
            "Sets a new value for property {@link #getEditable editable}.\n\nWhether the code can be edited or not\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\nThe CSS height property\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setLineNumbering",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bLineNumbering",
              type: "boolean",
              optional: false,
              description: "New value for property <code>lineNumbering</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLineNumbering lineNumbering}.\n\nWhether the code to have line numbering or not\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSource",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSource",
              type: "string",
              optional: false,
              description: "New value for property <code>source</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSource source}.\n\nThe source code to display.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
            "Sets a new value for property {@link #getVisible visible}.\n\nWhether the code viewer should be visible\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.CodeViewer",
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
            "Sets a new value for property {@link #getWidth width}.\n\nThe CSS width property\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.FileUploadIntrospector",
      basename: "FileUploadIntrospector",
      resource: "sap/ui/demokit/FileUploadIntrospector.js",
      module: "sap/ui/demokit/FileUploadIntrospector",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description:
        "Control that allows to monitor uploaded files in a demo scenario. This is not a general purpose monitor but only works with the demo fileupload service.",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "uploadUrl",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The URL to check the upload content with....",
            methods: ["getUploadUrl", "setUploadUrl"]
          },
          {
            name: "autoRefreshInterval",
            type: "string",
            defaultValue: "0",
            group: "Misc",
            visibility: "public",
            description:
              "Interval in milliseconds after which the content is checked again. values lower or equal to 0 mean 'no automatic refresh'.",
            methods: ["getAutoRefreshInterval", "setAutoRefreshInterval"]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "(CSS) Height of the control",
            methods: ["getHeight", "setHeight"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Width of the file list",
            methods: ["getWidth", "setWidth"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new FileUploadIntrospector.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
            "Creates a new subclass of class sap.ui.demokit.FileUploadIntrospector with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAutoRefreshInterval",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>autoRefreshInterval</code>"
          },
          description:
            "Gets current value of property {@link #getAutoRefreshInterval autoRefreshInterval}.\n\nInterval in milliseconds after which the content is checked again. values lower or equal to 0 mean 'no automatic refresh'.\n\nDefault value is <code>0</code>."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\n(CSS) Height of the control"
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
            "Returns a metadata object for class sap.ui.demokit.FileUploadIntrospector."
        },
        {
          name: "getUploadUrl",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>uploadUrl</code>"
          },
          description:
            "Gets current value of property {@link #getUploadUrl uploadUrl}.\n\nThe URL to check the upload content with...."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nWidth of the file list"
        },
        {
          name: "refresh",
          visibility: "public",
          "ui5-metamodel": true,
          description:
            "Trigger an explicit refresh of the displayed information"
        },
        {
          name: "setAutoRefreshInterval",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.FileUploadIntrospector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sAutoRefreshInterval",
              type: "string",
              optional: false,
              description:
                "New value for property <code>autoRefreshInterval</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAutoRefreshInterval autoRefreshInterval}.\n\nInterval in milliseconds after which the content is checked again. values lower or equal to 0 mean 'no automatic refresh'.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>0</code>."
        },
        {
          name: "setHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.FileUploadIntrospector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\n(CSS) Height of the control\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setUploadUrl",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.FileUploadIntrospector",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sUploadUrl",
              type: "string",
              optional: false,
              description: "New value for property <code>uploadUrl</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUploadUrl uploadUrl}.\n\nThe URL to check the upload content with....\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.FileUploadIntrospector",
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
            "Sets a new value for property {@link #getWidth width}.\n\nWidth of the file list\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.HexagonButton",
      basename: "HexagonButton",
      resource: "sap/ui/demokit/HexagonButton.js",
      module: "sap/ui/demokit/HexagonButton",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description: "A custom button with a 'hexagon' shape",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "icon",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Icon to display",
            methods: ["getIcon", "setIcon"]
          },
          {
            name: "color",
            type: "string",
            defaultValue: "blue",
            group: "Misc",
            visibility: "public",
            description: "The color of the hexagon",
            methods: ["getColor", "setColor"]
          },
          {
            name: "position",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "The position. If set, the button is rendered with an absolute position.",
            methods: ["getPosition", "setPosition"]
          },
          {
            name: "enabled",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description: "Whether the button is enabled or not.",
            methods: ["getEnabled", "setEnabled"]
          },
          {
            name: "imagePosition",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "The position of the contained image. If not set the image is rendered with a fixed relative position.",
            methods: ["getImagePosition", "setImagePosition"]
          }
        ],
        events: [
          {
            name: "press",
            visibility: "public",
            description: "Fired when the user clicks the hex button",
            methods: ["attachPress", "detachPress", "firePress"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new HexagonButton.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
          description: "Fired when the user clicks the hex button"
        }
      ],
      methods: [
        {
          name: "attachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.HexagonButton</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ui.demokit.HexagonButton</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.demokit.HexagonButton</code> itself.\n\nFired when the user clicks the hex button"
        },
        {
          name: "detachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ui.demokit.HexagonButton</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.demokit.HexagonButton with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "firePress",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
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
          name: "getColor",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>color</code>"
          },
          description:
            "Gets current value of property {@link #getColor color}.\n\nThe color of the hexagon\n\nDefault value is <code>blue</code>."
        },
        {
          name: "getEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enabled</code>"
          },
          description:
            "Gets current value of property {@link #getEnabled enabled}.\n\nWhether the button is enabled or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getIcon",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>icon</code>"
          },
          description:
            "Gets current value of property {@link #getIcon icon}.\n\nIcon to display"
        },
        {
          name: "getImagePosition",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>imagePosition</code>"
          },
          description:
            "Gets current value of property {@link #getImagePosition imagePosition}.\n\nThe position of the contained image. If not set the image is rendered with a fixed relative position."
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
            "Returns a metadata object for class sap.ui.demokit.HexagonButton."
        },
        {
          name: "getPosition",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>position</code>"
          },
          description:
            "Gets current value of property {@link #getPosition position}.\n\nThe position. If set, the button is rendered with an absolute position."
        },
        {
          name: "setColor",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sColor",
              type: "string",
              optional: false,
              description: "New value for property <code>color</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColor color}.\n\nThe color of the hexagon\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>blue</code>."
        },
        {
          name: "setEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnabled",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnabled enabled}.\n\nWhether the button is enabled or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIcon",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sIcon",
              type: "string",
              optional: false,
              description: "New value for property <code>icon</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIcon icon}.\n\nIcon to display\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setImagePosition",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sImagePosition",
              type: "string",
              optional: false,
              description: "New value for property <code>imagePosition</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getImagePosition imagePosition}.\n\nThe position of the contained image. If not set the image is rendered with a fixed relative position.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setPosition",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sPosition",
              type: "string",
              optional: false,
              description: "New value for property <code>position</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPosition position}.\n\nThe position. If set, the button is rendered with an absolute position.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.HexagonButtonGroup",
      basename: "HexagonButtonGroup",
      resource: "sap/ui/demokit/HexagonButtonGroup.js",
      module: "sap/ui/demokit/HexagonButtonGroup",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description: "A group of HexagonButtons, aligned in a packed grid",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "colspan",
            type: "int",
            defaultValue: 3,
            group: "Misc",
            visibility: "public",
            description:
              "How many buttons might be placed in the same row of the grid",
            methods: ["getColspan", "setColspan"]
          }
        ],
        aggregations: [
          {
            name: "buttons",
            singularName: "button",
            type: "sap.ui.demokit.HexagonButton",
            cardinality: "0..n",
            visibility: "public",
            description: "The buttons to layout in a grid",
            methods: [
              "getButtons",
              "destroyButtons",
              "insertButton",
              "addButton",
              "removeButton",
              "indexOfButton",
              "removeAllButtons"
            ]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new HexagonButtonGroup.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButtonGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oButton",
              type: "sap.ui.demokit.HexagonButton",
              optional: false,
              description: "The button to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some button to the aggregation {@link #getButtons buttons}."
        },
        {
          name: "destroyButtons",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButtonGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the buttons in the aggregation {@link #getButtons buttons}."
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
            "Creates a new subclass of class sap.ui.demokit.HexagonButtonGroup with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getButtons",
          visibility: "public",
          returnValue: { type: "sap.ui.demokit.HexagonButton[]" },
          description:
            "Gets content of aggregation {@link #getButtons buttons}.\n\nThe buttons to layout in a grid"
        },
        {
          name: "getColspan",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>colspan</code>"
          },
          description:
            "Gets current value of property {@link #getColspan colspan}.\n\nHow many buttons might be placed in the same row of the grid\n\nDefault value is <code>3</code>."
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
            "Returns a metadata object for class sap.ui.demokit.HexagonButtonGroup."
        },
        {
          name: "indexOfButton",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oButton",
              type: "sap.ui.demokit.HexagonButton",
              optional: false,
              description: "The button whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.demokit.HexagonButton</code> in the aggregation {@link #getButtons buttons}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButtonGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oButton",
              type: "sap.ui.demokit.HexagonButton",
              optional: false,
              description: "The button to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the button should be inserted at; for a negative value of <code>iIndex</code>, the button is inserted at position 0; for a value greater than the current size of the aggregation, the button is inserted at the last position"
            }
          ],
          description:
            "Inserts a button into the aggregation {@link #getButtons buttons}."
        },
        {
          name: "removeAllButtons",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getButtons buttons}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButton",
            description: "The removed button or <code>null</code>"
          },
          parameters: [
            {
              name: "vButton",
              type: "int|string|sap.ui.demokit.HexagonButton",
              optional: false,
              description: "The button to remove or its index or id"
            }
          ],
          description:
            "Removes a button from the aggregation {@link #getButtons buttons}."
        },
        {
          name: "setColspan",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.HexagonButtonGroup",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iColspan",
              type: "int",
              optional: false,
              description: "New value for property <code>colspan</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getColspan colspan}.\n\nHow many buttons might be placed in the same row of the grid\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>3</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.IndexLayout",
      basename: "IndexLayout",
      resource: "sap/ui/demokit/IndexLayout.js",
      module: "sap/ui/demokit/IndexLayout",
      export: "",
      static: true,
      visibility: "restricted",
      since: "1.17.0",
      extends: "sap.ui.core.Control",
      description:
        "Layout which renders content items with equal width and height. The items are arranged in rows.",
      experimental: {
        since: "1.17.0",
        text: "API is not yet finished and might change completely"
      },
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "itemWidth",
            type: "sap.ui.core.CSSSize",
            defaultValue: "200px",
            group: "Appearance",
            visibility: "public",
            description:
              "The width of a content item. Only px values are allowed.",
            methods: ["getItemWidth", "setItemWidth"]
          },
          {
            name: "itemHeight",
            type: "sap.ui.core.CSSSize",
            defaultValue: "200px",
            group: "Appearance",
            visibility: "public",
            description:
              "The height of a content item. Only px values are allowed.",
            methods: ["getItemHeight", "setItemHeight"]
          },
          {
            name: "enableScaling",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Whether the given item width/height should be scaled according to the screen size.",
            methods: ["getEnableScaling", "setEnableScaling"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The content items",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content"
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new IndexLayout.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.IndexLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.IndexLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
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
            "Creates a new subclass of class sap.ui.demokit.IndexLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe content items"
        },
        {
          name: "getEnableScaling",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableScaling</code>"
          },
          description:
            "Gets current value of property {@link #getEnableScaling enableScaling}.\n\nWhether the given item width/height should be scaled according to the screen size.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getItemHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>itemHeight</code>"
          },
          description:
            "Gets current value of property {@link #getItemHeight itemHeight}.\n\nThe height of a content item. Only px values are allowed.\n\nDefault value is <code>200px</code>."
        },
        {
          name: "getItemWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>itemWidth</code>"
          },
          description:
            "Gets current value of property {@link #getItemWidth itemWidth}.\n\nThe width of a content item. Only px values are allowed.\n\nDefault value is <code>200px</code>."
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
            "Returns a metadata object for class sap.ui.demokit.IndexLayout."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.IndexLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setEnableScaling",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.IndexLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableScaling",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enableScaling</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableScaling enableScaling}.\n\nWhether the given item width/height should be scaled according to the screen size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setItemHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.IndexLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sItemHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>itemHeight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getItemHeight itemHeight}.\n\nThe height of a content item. Only px values are allowed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>200px</code>."
        },
        {
          name: "setItemWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.IndexLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sItemWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>itemWidth</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getItemWidth itemWidth}.\n\nThe width of a content item. Only px values are allowed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>200px</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.Tag",
      basename: "Tag",
      resource: "sap/ui/demokit/Tag.js",
      module: "sap/ui/demokit/Tag",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Element",
      description: "A Tag in a TagCloud",
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The text to be disaplyed for this tag.",
            methods: ["getText", "setText"]
          },
          {
            name: "weight",
            type: "int",
            defaultValue: 1,
            group: "Misc",
            visibility: "public",
            description: "The weight for this tag. Can be any integer value.",
            methods: ["getWeight", "setWeight"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new Tag.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
            "Creates a new subclass of class sap.ui.demokit.Tag with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.ui.demokit.Tag."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nThe text to be disaplyed for this tag."
        },
        {
          name: "getWeight",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>weight</code>"
          },
          description:
            "Gets current value of property {@link #getWeight weight}.\n\nThe weight for this tag. Can be any integer value.\n\nDefault value is <code>1</code>."
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.Tag",
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
            "Sets a new value for property {@link #getText text}.\n\nThe text to be disaplyed for this tag.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setWeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.Tag",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iWeight",
              type: "int",
              optional: false,
              description: "New value for property <code>weight</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWeight weight}.\n\nThe weight for this tag. Can be any integer value.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.TagCloud",
      basename: "TagCloud",
      resource: "sap/ui/demokit/TagCloud.js",
      module: "sap/ui/demokit/TagCloud",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description: "A simple TagCloud representing a set of weighted tags",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "maxFontSize",
            type: "int",
            defaultValue: 30,
            group: "Misc",
            visibility: "public",
            description:
              "Maximum font size that may be chosen for a tag in this cloud",
            methods: ["getMaxFontSize", "setMaxFontSize"]
          },
          {
            name: "minFontSize",
            type: "int",
            defaultValue: 10,
            group: "Misc",
            visibility: "public",
            description:
              "Minimum font size that must be used for a tag in this cloud",
            methods: ["getMinFontSize", "setMinFontSize"]
          }
        ],
        aggregations: [
          {
            name: "tags",
            singularName: "tag",
            type: "sap.ui.demokit.Tag",
            cardinality: "0..n",
            visibility: "public",
            description: "The tags displayed in this tag cloud",
            methods: [
              "getTags",
              "destroyTags",
              "insertTag",
              "addTag",
              "removeTag",
              "indexOfTag",
              "removeAllTags"
            ]
          }
        ],
        defaultAggregation: "tags",
        events: [
          {
            name: "press",
            visibility: "public",
            description: "Fired when a Tag is clicked.",
            parameters: {
              tagId: {
                name: "tagId",
                type: "string",
                description: "Id of the selected Tag."
              }
            },
            methods: ["attachPress", "detachPress", "firePress"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new TagCloud.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                  optional: false,
                  parameterProperties: {
                    tagId: {
                      name: "tagId",
                      type: "string",
                      optional: false,
                      description: "Id of the selected Tag."
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when a Tag is clicked."
        }
      ],
      methods: [
        {
          name: "addTag",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTag",
              type: "sap.ui.demokit.Tag",
              optional: false,
              description: "The tag to add; if empty, nothing is inserted"
            }
          ],
          description: "Adds some tag to the aggregation {@link #getTags tags}."
        },
        {
          name: "attachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.TagCloud</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.ui.demokit.TagCloud</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.demokit.TagCloud</code> itself.\n\nFired when a Tag is clicked."
        },
        {
          name: "destroyTags",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the tags in the aggregation {@link #getTags tags}."
        },
        {
          name: "detachPress",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.ui.demokit.TagCloud</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.demokit.TagCloud with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "firePress",
          visibility: "protected",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                tagId: {
                  name: "tagId",
                  type: "string",
                  optional: true,
                  description: "Id of the selected Tag."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:press press} to attached listeners."
        },
        {
          name: "getMaxFontSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>maxFontSize</code>"
          },
          description:
            "Gets current value of property {@link #getMaxFontSize maxFontSize}.\n\nMaximum font size that may be chosen for a tag in this cloud\n\nDefault value is <code>30</code>."
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
            "Returns a metadata object for class sap.ui.demokit.TagCloud."
        },
        {
          name: "getMinFontSize",
          visibility: "public",
          returnValue: {
            type: "int",
            description: "Value of property <code>minFontSize</code>"
          },
          description:
            "Gets current value of property {@link #getMinFontSize minFontSize}.\n\nMinimum font size that must be used for a tag in this cloud\n\nDefault value is <code>10</code>."
        },
        {
          name: "getTags",
          visibility: "public",
          returnValue: { type: "sap.ui.demokit.Tag[]" },
          description:
            "Gets content of aggregation {@link #getTags tags}.\n\nThe tags displayed in this tag cloud"
        },
        {
          name: "indexOfTag",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oTag",
              type: "sap.ui.demokit.Tag",
              optional: false,
              description: "The tag whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.demokit.Tag</code> in the aggregation {@link #getTags tags}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertTag",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTag",
              type: "sap.ui.demokit.Tag",
              optional: false,
              description: "The tag to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the tag should be inserted at; for a negative value of <code>iIndex</code>, the tag is inserted at position 0; for a value greater than the current size of the aggregation, the tag is inserted at the last position"
            }
          ],
          description:
            "Inserts a tag into the aggregation {@link #getTags tags}."
        },
        {
          name: "removeAllTags",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.Tag[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getTags tags}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeTag",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.Tag",
            description: "The removed tag or <code>null</code>"
          },
          parameters: [
            {
              name: "vTag",
              type: "int|string|sap.ui.demokit.Tag",
              optional: false,
              description: "The tag to remove or its index or id"
            }
          ],
          description:
            "Removes a tag from the aggregation {@link #getTags tags}."
        },
        {
          name: "setMaxFontSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMaxFontSize",
              type: "int",
              optional: false,
              description: "New value for property <code>maxFontSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMaxFontSize maxFontSize}.\n\nMaximum font size that may be chosen for a tag in this cloud\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>30</code>."
        },
        {
          name: "setMinFontSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.TagCloud",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "iMinFontSize",
              type: "int",
              optional: false,
              description: "New value for property <code>minFontSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMinFontSize minFontSize}.\n\nMinimum font size that must be used for a tag in this cloud\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>10</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.UI5EntityCueCard",
      basename: "UI5EntityCueCard",
      resource: "sap/ui/demokit/UI5EntityCueCard.js",
      module: "sap/ui/demokit/UI5EntityCueCard",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Control",
      description:
        "Displays documentation for a UI5 entity (control or type).\n\nThe documentation will be read from a UI5 metamodel file that by default is loaded from the same resource location where the control or type would be loaded from (using the UI5 resource loading). This control displays all properties, aggregations, associations, events and methods that are described in the metamodel. For each part, it lists the name, type (where applicable) and documentation. If the navigable property is set to true, all types are shown as links and when pressed, the navigate event is fired. This allows consumers to react on a user click on such a type (and to e.g. navigate to the underlying type of a property or aggregation)",
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "collapsible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Whether the cue card can be collapsed at all. When set to true, the value of property expanded determines the current collapsed/expanded state. When false, the control is always expanded.",
            methods: ["getCollapsible", "setCollapsible"]
          },
          {
            name: "expanded",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Whether the cue card is currently expanded.",
            methods: ["getExpanded", "setExpanded"]
          },
          {
            name: "navigable",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Whether type information is navigable. Also see event 'navigate'.",
            methods: ["getNavigable", "setNavigable"]
          },
          {
            name: "entityName",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Qualified name of the control or type to show the documentation for. The name can be specified in the metamodel notation ('sap.ui.core/Control' or in the UI5 resource notation (sap.ui.core.Control).",
            methods: ["getEntityName", "setEntityName"]
          },
          {
            name: "style",
            type: "sap.ui.demokit.UI5EntityCueCardStyle",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Style of the cue card.",
            methods: ["getStyle", "setStyle"]
          }
        ],
        events: [
          {
            name: "navigate",
            visibility: "public",
            description:
              'Fired when a link for a type is activated (clicked) by the user.\n\nWhen property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).\n\nThe default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object.',
            parameters: {
              entityName: {
                name: "entityName",
                type: "string",
                description:
                  "Name of the entity (control or type) that has been clicked."
              }
            },
            methods: ["attachNavigate", "detachNavigate", "fireNavigate"]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new UI5EntityCueCard.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "navigate",
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
                    entityName: {
                      name: "entityName",
                      type: "string",
                      optional: false,
                      description:
                        "Name of the entity (control or type) that has been clicked."
                    }
                  }
                }
              }
            }
          ],
          description:
            'Fired when a link for a type is activated (clicked) by the user.\n\nWhen property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).\n\nThe default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object.'
        }
      ],
      methods: [
        {
          name: "attachNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
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
                "Context object to call the event handler with. Defaults to this <code>sap.ui.demokit.UI5EntityCueCard</code> itself"
            }
          ],
          description:
            'Attaches event handler <code>fnFunction</code> to the {@link #event:navigate navigate} event of this <code>sap.ui.demokit.UI5EntityCueCard</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.ui.demokit.UI5EntityCueCard</code> itself.\n\nFired when a link for a type is activated (clicked) by the user.\n\nWhen property "navigable" is set to true, type links are created for the types of properties, aggregations and associations, for the types of event or method parameters and for the return types of methods (if not void).\n\nThe default behavior for this event is to set the entityName property to the clicked entityName. Applications can prevent the default by calling the corresponding method on the event object.'
        },
        {
          name: "detachNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:navigate navigate} event of this <code>sap.ui.demokit.UI5EntityCueCard</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
            "Creates a new subclass of class sap.ui.demokit.UI5EntityCueCard with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireNavigate",
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
                entityName: {
                  name: "entityName",
                  type: "string",
                  optional: true,
                  description:
                    "Name of the entity (control or type) that has been clicked."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:navigate navigate} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "getCollapsible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>collapsible</code>"
          },
          description:
            "Gets current value of property {@link #getCollapsible collapsible}.\n\nWhether the cue card can be collapsed at all. When set to true, the value of property expanded determines the current collapsed/expanded state. When false, the control is always expanded.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getEntityName",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>entityName</code>"
          },
          description:
            "Gets current value of property {@link #getEntityName entityName}.\n\nQualified name of the control or type to show the documentation for. The name can be specified in the metamodel notation ('sap.ui.core/Control' or in the UI5 resource notation (sap.ui.core.Control)."
        },
        {
          name: "getExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>expanded</code>"
          },
          description:
            "Gets current value of property {@link #getExpanded expanded}.\n\nWhether the cue card is currently expanded.\n\nDefault value is <code>false</code>."
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
            "Returns a metadata object for class sap.ui.demokit.UI5EntityCueCard."
        },
        {
          name: "getNavigable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>navigable</code>"
          },
          description:
            "Gets current value of property {@link #getNavigable navigable}.\n\nWhether type information is navigable. Also see event 'navigate'.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getStyle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCardStyle",
            description: "Value of property <code>style</code>"
          },
          description:
            "Gets current value of property {@link #getStyle style}.\n\nStyle of the cue card."
        },
        {
          name: "setCollapsible",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bCollapsible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>collapsible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCollapsible collapsible}.\n\nWhether the cue card can be collapsed at all. When set to true, the value of property expanded determines the current collapsed/expanded state. When false, the control is always expanded.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setEntityName",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sEntityName",
              type: "string",
              optional: false,
              description: "New value for property <code>entityName</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEntityName entityName}.\n\nQualified name of the control or type to show the documentation for. The name can be specified in the metamodel notation ('sap.ui.core/Control' or in the UI5 resource notation (sap.ui.core.Control).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bExpanded",
              type: "boolean",
              optional: false,
              description: "New value for property <code>expanded</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExpanded expanded}.\n\nWhether the cue card is currently expanded.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setNavigable",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bNavigable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>navigable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getNavigable navigable}.\n\nWhether type information is navigable. Also see event 'navigate'.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setStyle",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UI5EntityCueCard",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sStyle",
              type: "sap.ui.demokit.UI5EntityCueCardStyle",
              optional: false,
              description: "New value for property <code>style</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getStyle style}.\n\nStyle of the cue card.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.ui.demokit.UI5EntityCueCardStyle",
      basename: "UI5EntityCueCardStyle",
      resource: "sap/ui/demokit/library.js",
      module: "sap/ui/demokit/library",
      export: "UI5EntityCueCardStyle",
      static: true,
      visibility: "restricted",
      description: "Different styles for an entity cue card.",
      properties: [
        {
          name: "Demokit",
          visibility: "public",
          static: true,
          type: "string",
          description: "Demokit style"
        },
        {
          name: "Standard",
          visibility: "public",
          static: true,
          type: "string",
          description: "default style (no special styling)."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.ui.demokit.UIAreaSubstitute",
      basename: "UIAreaSubstitute",
      resource: "sap/ui/demokit/UIAreaSubstitute.js",
      module: "sap/ui/demokit/UIAreaSubstitute",
      export: "",
      static: true,
      visibility: "restricted",
      extends: "sap.ui.core.Element",
      description:
        "A substitute for a UIArea that can be embedded in the control tree.",
      "ui5-metadata": {
        stereotype: "element",
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "Content Area used for the running sample code",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ]
      },
      constructor: {
        visibility: "restricted",
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
          "Constructor for a new UIAreaSubstitute.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UIAreaSubstitute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UIAreaSubstitute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
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
            "Creates a new subclass of class sap.ui.demokit.UIAreaSubstitute with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nContent Area used for the running sample code"
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
            "Returns a metadata object for class sap.ui.demokit.UIAreaSubstitute."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.demokit.UIAreaSubstitute",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        }
      ]
    }
  ]
};