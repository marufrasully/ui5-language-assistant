import { join } from "path";
import {
  Config,
  ProjectName,
  ProjectType,
  TestFramework,
} from "@ui5-language-assistant/test-framework";

import { validatePropertyBindingInfo } from "../../../../../src/services/diagnostics/validators/property-binding-info-validator";
import {
  issueToSnapshot,
  ViewValidatorType,
  getViewValidator,
} from "../../../helper";

describe("property-binding-info-validator", () => {
  let framework: TestFramework;
  let root: string, documentPath: string;
  const viewFilePathSegments = [
    "app",
    "manage_travels",
    "webapp",
    "ext",
    "main",
    "Main.view.xml",
  ];
  let validateView: ViewValidatorType;
  beforeAll(async function () {
    const config: Config = {
      projectInfo: {
        name: ProjectName.cap,
        type: ProjectType.CAP,
        npmInstall: true,
        deleteBeforeCopy: false,
      },
    };
    framework = new TestFramework(config);

    root = framework.getProjectRoot();
    documentPath = join(root, ...viewFilePathSegments);
    validateView = getViewValidator(
      framework,
      viewFilePathSegments,
      documentPath,
      validatePropertyBindingInfo
    );
  });
  it("do not check empty string", async () => {
    const snippet = `
    <Text text="" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check {}", async () => {
    const snippet = `
    <Text text="{ }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check {path} [at least a key with colon must exits]", async () => {
    const snippet = `
    <Text text="{path}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check metadata binding", async () => {
    const snippet = `
    <Input maxLength="{/#Company/ZipCode/@maxLength}"/>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check simple binding", async () => {
    const snippet = `
   <Input value="{/firstName}"/>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check aggregation property", async () => {
    const snippet = `
   <List items="{invoice>/Invoices}"> </List>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check resource model", async () => {
    const snippet = `
   <Label labelFor="address" text="{i18n>address}:"/>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("check unknown char", async () => {
    const snippet = `
    <Text text="{ # path: '' }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: UnknownChar; text: Unknown character; severity:error; range:9:18-9:19",
    ]);
  });
  it("check wrong property binding", async () => {
    const snippet = `
    <Text text="{path: ' ', party }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:9:28-9:33",
    ]);
  });
  it("check missing colon", async () => {
    const snippet = `
    <Text text="{ events: {}, path }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingColon; text: Expect colon; severity:error; range:9:30-9:34",
    ]);
  });
  it("check missing colon when value exists", async () => {
    const snippet = `
    <Text text="{ path '', events: {}}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingColon; text: Expect colon; severity:error; range:9:18-9:22",
    ]);
  });
  it("check missing value", async () => {
    const snippet = `
    <Text text="{ path: }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingValue; text: Expect ' ' as a value; severity:error; range:9:18-9:23",
    ]);
  });
  it("check wrong value - allowed value are {} or ''", async () => {
    const snippet = `
    <Text text="{ type: 25 }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed values are { } or ' '; severity:error; range:9:24-9:26",
    ]);
  });
  it("check wrong collection value - allowed value are {} or ''", async () => {
    const snippet = `
    <Text text="{ type: [] }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed values are { } or ' '; severity:error; range:9:24-9:26",
    ]);
  });
  it("check wrong value - allowed value is string", async () => {
    const snippet = `
    <Text text="{ path: true }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed value is ' '; severity:error; range:9:24-9:28",
    ]);
  });
  it("check wrong value - allowed value is boolean", async () => {
    const snippet = `
    <Text text="{ suspended: '' }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed values are true or false; severity:error; range:9:29-9:31",
    ]);
  });
  it("check wrong value - allowed value is object", async () => {
    const snippet = `
    <Text text="{ events: true }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed value is { }; severity:error; range:9:26-9:30",
    ]);
  });
  it("check wrong value - allowed value is array", async () => {
    const snippet = `
    <Text text="{ parts: {} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed values are [{ }] or [' ']; severity:error; range:9:25-9:27",
    ]);
  });
  it("check wrong value - allowed value is array of object or string [array as value is required]", async () => {
    const snippet = `
    <Text text="{ parts: true }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed values are [{ }] or [' ']; severity:error; range:9:25-9:29",
    ]);
  });
  it("check wrong value - allowed value is array of object or string [array as value with wrong content]", async () => {
    const snippet = `
    <Text text="{ parts: [true] }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissMatchValue; text: Allowed values are { } or ' '; severity:error; range:9:26-9:30",
    ]);
  });
  it("do not check structure value - key and its value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: 'anyValue'} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check structure value inside collection - key and its value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: [ {collectionAnyKey: 'anyValue'} ] } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check structure value - nested key and its value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: {anotherKey: {nestedKey: [] } } } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check structure value inside collection - nested key and its value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: [{anotherKey: [{nestedKey: [] }] }] } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("do not check structure value inside collection - primitive value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: [true] } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
  });
  it("check missing colon in structure value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingColon; text: Expect colon; severity:error; range:9:27-9:43",
    ]);
  });
  it("check missing colon in structure value inside collection", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: [{collectionKey}]} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingColon; text: Expect colon; severity:error; range:9:47-9:60",
    ]);
  });
  it("check missing colon for collection", async () => {
    const snippet = `
    <Text text="{ events: {}, parts ['one'] }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingColon; text: Expect colon; severity:error; range:9:30-9:35",
    ]);
  });
  it("check missing colon in nested structure value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: {anotherKey: {nestedKey } } } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingColon; text: Expect colon; severity:error; range:9:59-9:68",
    ]);
  });
  it("check missing value in structure value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingValue; text: Expect a value; severity:error; range:9:27-9:44",
    ]);
  });
  it("check missing value in structure value inside collection", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: [{collectionKey:}]} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingValue; text: Expect a value; severity:error; range:9:47-9:61",
    ]);
  });
  it("check missing value in nested structure value", async () => {
    const snippet = `
    <Text text="{ events: {anyKeyNotChecked: {anotherKey: {nestedKey: } } } }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingValue; text: Expect a value; severity:error; range:9:59-9:69",
    ]);
  });
  it("check duplicate element", async () => {
    const snippet = `
    <Text text="{ path: '', path: '' }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: DuplicateProperty; text: Duplicate property; severity:error; range:9:28-9:32",
    ]);
  });
  it("check nested duplicate element", async () => {
    const snippet = `
    <Text text="{ events: {
      one: {
        abc: '',
        abc: {
          xy: true,
          xy: true
        }
      }
    }}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: DuplicateProperty; text: Duplicate property; severity:error; range:14:10-14:12",
      "kind: DuplicateProperty; text: Duplicate property; severity:error; range:12:8-12:11",
    ]);
  });
  it("check duplicate element - collection", async () => {
    const snippet = `
    <Text text="{ parts: [{path: '', path: ''}] }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: DuplicateProperty; text: Duplicate property; severity:error; range:9:37-9:41",
    ]);
  });
  it("check nested duplicate element - collection", async () => {
    const snippet = `
    <Text text="{ parts: [
      {
        one: [
          {
            abc: false,
            abc: true
          }
        ],
        one: {}
      }
    ]}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:11:8-11:11",
      "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:17:8-17:11",
      "kind: DuplicateProperty; text: Duplicate property; severity:error; range:17:8-17:11",
    ]);
  });
  it("check only one of elements [path, value or parts] is allowed", async () => {
    const snippet = `
    <Text text="{ parts: [''], path: '', value: '' }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: NotAllowedProperty; text: One of these elements [parts, path, value] are allowed; severity:info; range:9:18-9:23",
      "kind: NotAllowedProperty; text: One of these elements [parts, path, value] are allowed; severity:info; range:9:31-9:35",
      "kind: NotAllowedProperty; text: One of these elements [parts, path, value] are allowed; severity:info; range:9:41-9:46",
    ]);
  });
  it("check only one of elements [path, value or parts] is allowed - nested", async () => {
    const snippet = `
    <Text text="{ parts: [
      {
        path: '', value: ''
      }
    ]}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: NotAllowedProperty; text: One of these elements [path, value] are allowed; severity:info; range:11:8-11:12",
      "kind: NotAllowedProperty; text: One of these elements [path, value] are allowed; severity:info; range:11:18-11:23",
    ]);
  });
  it("check dependent element", async () => {
    const snippet = `
    <Text text="{formatOptions: {}}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      'kind: RequiredDependency; text: Required dependency "type" should be defined; severity:info; range:9:17-9:30',
    ]);
  });
  it("check required element has correct value", async () => {
    const snippet = `
    <Text text="{formatOptions: {}, type: {}}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      'kind: Unnecessary; text: "formatOptions" is only taken into account with "type" when "type" is defined as \' \'; severity:info; range:9:17-9:30',
    ]);
  });
  it("check recursive composite bindings", async () => {
    const snippet = `
    <Text text="{parts: [{
      parts: []
    }]}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingValue; text: Required values { } or ' ' must be provided; severity:error; range:10:13-10:15",
      "kind: RecursiveProperty; text: Recursive composite bindings is not allowed; severity:error; range:10:6-10:11",
    ]);
  });
  describe("parts", () => {
    it("check recursive composite bindings - nested", async () => {
      const snippet = `
    <Text text="{parts: [{
      p: [
        {
            parts: []
        }
      ]
    }]}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:10:6-10:7",
        "kind: RecursiveProperty; text: Recursive composite bindings is not allowed; severity:error; range:12:12-12:17",
      ]);
    });
    it("check wrong property binding", async () => {
      const snippet = `
    <Text text="{ parts: [{ party }] }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:9:28-9:33",
      ]);
    });
    it("check missing colon", async () => {
      const snippet = `
    <Text text="{ parts: [{ path }] }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingColon; text: Expect colon; severity:error; range:9:28-9:32",
      ]);
    });
    it("check missing value", async () => {
      const snippet = `
    <Text text="{ parts: [{ path: } }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingValue; text: Expect ' ' as a value; severity:error; range:9:28-9:33",
      ]);
    });
    it("check missing comma [parts]", async () => {
      const snippet = `
    <Text text="{ parts: [{ path: '' events: {} }}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingComma; text: Missing comma; severity:error; range:9:37-9:47",
      ]);
    });
    it("check missing comma for elements [parts]", async () => {
      const snippet = `
    <Text text="{ parts: [{ path: '01'} {path: '02'}]}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingComma; text: Missing comma; severity:error; range:9:40-9:52",
      ]);
    });
    it("check trailing comma [parts]", async () => {
      const snippet = `
    <Text text="{ parts: [{ path: ''}, ]}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: TrailingComma; text: Trailing comma; severity:error; range:9:37-9:38",
      ]);
    });
    it("check empty collection", async () => {
      const snippet = `
    <Text text="{ parts: []}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingValue; text: Required values { } or ' ' must be provided; severity:error; range:9:25-9:27",
      ]);
    });
    it("check collection with empty object", async () => {
      const snippet = `
    <Text text="{ parts: [{}]}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        'kind: MissingValue; text: A valid binding property info must be provided for "{}"; severity:error; range:9:26-9:28',
      ]);
    });
    it("check collection with mixed data", async () => {
      const snippet = `
    <Text text="{ parts: [{path: ' '}, '']}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
    });
    it("check nested collection", async () => {
      const snippet = `
    <Text text="{ parts: [[]]}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        'kind: MissingValue; text: Nested "[]" are not allowed; severity:error; range:9:26-9:28',
      ]);
    });
    it("check wrong value", async () => {
      const snippet = `
    <Text text="{ parts: '' }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissMatchValue; text: Allowed values are [{ }] or [' ']; severity:error; range:9:25-9:27",
      ]);
    });
  });
  it("check missing comma", async () => {
    const snippet = `
    <Text text="{ path: '' events:{} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: MissingComma; text: Missing comma; severity:error; range:9:27-9:36",
    ]);
  });
  it("check trailing comma", async () => {
    const snippet = `
    <Text text="{ path: '', events:{}, }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: TrailingComma; text: Trailing comma; severity:error; range:9:37-9:38",
    ]);
  });
  it("check too many commas", async () => {
    const snippet = `
    <Text text="{ path: '',,,, events:{} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: TooManyCommas; text: Too many commas; severity:error; range:9:27-9:30",
    ]);
  });
  it("check too many colon", async () => {
    const snippet = `
    <Text text="{ path::::: '', events:{} }" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: TooManyColons; text: Too many colon; severity:error; range:9:23-9:24",
    ]);
  });
  it("check too many object", async () => {
    const snippet = `
    <Text text="{events: {{}}}" id="test-id"></Text>`;
    const result = await validateView(snippet);
    expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
      "kind: Syntax; text: Expecting --> } <-- but found --> '{' <--; severity:error; range:9:26-9:27",
    ]);
  });
  describe("multiple binding", () => {
    it("check no unwanted error with text", async () => {
      const snippet = `
     <Label text="Hello Mr. {path: '/employees/0/lastName'}, {path: '/employees/0/firstName', formatter:'.myFormatter'}"/>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
    });
    it("check no unwanted error with special chars", async () => {
      const snippet = `
     <Label text="### {path: '/employees/0/lastName'} / {path: '/employees/0/firstName', formatter:'.myFormatter'}"/> $$$`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
    });
    it("check no unwanted error with escaped chars", async () => {
      const snippet = `
     <Label text="\\{ \\[ {path: 'test-value-01'} \\{ {path: 'test-value-02' }\\] \\}"/>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
    });
    it("check no unwanted error with text, escaped and special chars", async () => {
      const snippet = `
     <Input value="abc \\{ { path: ''} ###### { parts: [{path: ''}]}"/>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
    });
    it("check correct range for diagnostics with text, escaped and special chars", async () => {
      const snippet = `
     <Input value="abc \\{ { path: } ###### { parts: [{path ''}]}"/>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item)))
        .toMatchInlineSnapshot(`
        Array [
          "kind: MissingValue; text: Expect ' ' as a value; severity:error; range:9:28-9:33",
          "kind: MissingColon; text: Expect colon; severity:error; range:9:54-9:58",
        ]
      `);
    });
  });
  describe("quotes", () => {
    it("no wrong diagnostic for quotes", async () => {
      const snippet = `
    <Text text="{'path': &quot;SomeTestValue&quot;}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([]);
    });
    it("check wrong property binding", async () => {
      const snippet = `
    <Text text="{path: ' ', &quot;party&quot; }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:9:28-9:45",
      ]);
    });
    it("check missing colon", async () => {
      const snippet = `
    <Text text="{ events: {}, 'path' }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingColon; text: Expect colon; severity:error; range:9:30-9:36",
      ]);
    });
    it("check missing colon when value exists", async () => {
      const snippet = `
    <Text text="{ 'path' '', events: {}}" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingColon; text: Expect colon; severity:error; range:9:18-9:24",
      ]);
    });
    it("check missing value", async () => {
      const snippet = `
    <Text text="{ 'path': }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissingValue; text: Expect ' ' as a value; severity:error; range:9:18-9:25",
      ]);
    });
    it("check wrong value - allowed value are {} or ''", async () => {
      const snippet = `
    <Text text="{ 'type': 25 }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
        "kind: MissMatchValue; text: Allowed values are { } or ' '; severity:error; range:9:26-9:28",
      ]);
    });
    it("check only one of elements [path, value or parts] is allowed", async () => {
      const snippet = `
    <Text text="{ parts: [''], 'path': '', &quot;value&quot;: '' }" id="test-id"></Text>`;
      const result = await validateView(snippet);
      expect(result.map((item) => issueToSnapshot(item)))
        .toMatchInlineSnapshot(`
        Array [
          "kind: NotAllowedProperty; text: One of these elements [parts, 'path', &quot;value&quot;] are allowed; severity:info; range:9:18-9:23",
          "kind: NotAllowedProperty; text: One of these elements [parts, 'path', &quot;value&quot;] are allowed; severity:info; range:9:31-9:37",
          "kind: NotAllowedProperty; text: One of these elements [parts, 'path', &quot;value&quot;] are allowed; severity:info; range:9:43-9:60",
        ]
      `);
    });
    describe("nested", () => {
      it("check duplicate element", async () => {
        const snippet = `
    <Text text="{ 'events': {
      one: {
        'abc': '',
        'abc': {
          &quot;xy&quot;: true,
          'xy': true
        }
      }
    }}" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item)))
          .toMatchInlineSnapshot(`
          Array [
            "kind: DuplicateProperty; text: Duplicate property; severity:error; range:14:10-14:14",
            "kind: DuplicateProperty; text: Duplicate property; severity:error; range:12:8-12:13",
          ]
        `);
      });
      it("check missing value in nested structure value", async () => {
        const snippet = `
    <Text text="{ events: {'anyKeyNotChecked': {'anotherKey': {'nestedKey': } } } }" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item)))
          .toMatchInlineSnapshot(`
          Array [
            "kind: MissingValue; text: Expect a value; severity:error; range:9:63-9:75",
          ]
        `);
      });
      it("check missing colon in nested structure value", async () => {
        const snippet = `
    <Text text="{ events: {'anyKeyNotChecked': {'anotherKey': {'nestedKey' } } } }" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item)))
          .toMatchInlineSnapshot(`
          Array [
            "kind: MissingColon; text: Expect colon; severity:error; range:9:63-9:74",
          ]
        `);
      });
    });
    describe("parts", () => {
      it("check wrong property binding", async () => {
        const snippet = `
    <Text text="{ 'parts': [{ 'party' }] }" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
          "kind: UnknownPropertyBindingInfo; text: Unknown property binding info; severity:error; range:9:30-9:37",
        ]);
      });
      it("check missing colon", async () => {
        const snippet = `
    <Text text="{ 'parts': [{ 'path' }] }" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
          "kind: MissingColon; text: Expect colon; severity:error; range:9:30-9:36",
        ]);
      });
      it("check missing value", async () => {
        const snippet = `
    <Text text="{ 'parts': [{ 'path': } }" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
          "kind: MissingValue; text: Expect ' ' as a value; severity:error; range:9:30-9:37",
        ]);
      });
      it("check empty collection", async () => {
        const snippet = `
    <Text text="{ 'parts': []}" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
          "kind: MissingValue; text: Required values { } or ' ' must be provided; severity:error; range:9:27-9:29",
        ]);
      });
      it("check collection with empty object", async () => {
        const snippet = `
    <Text text="{ 'parts': [{}]}" id="test-id"></Text>`;
        const result = await validateView(snippet);
        expect(result.map((item) => issueToSnapshot(item))).toStrictEqual([
          'kind: MissingValue; text: A valid binding property info must be provided for "{}"; severity:error; range:9:28-9:30',
        ]);
      });
    });
  });
});