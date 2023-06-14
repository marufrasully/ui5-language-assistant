import {
  CompletionItem,
  CompletionItemKind,
  InsertTextFormat,
} from "vscode-languageserver-types";
import { BindingParserTypes as BindingTypes } from "@ui5-language-assistant/binding-parser";

import { propertyBindingInfoElements } from "../../../definition/definition";
import { typesToValue } from "../../../utils";
import { getDocumentation } from "./documentation";
import { BindContext } from "../../../types";

export const createKeyValue = (
  context: BindContext,
  binding: BindingTypes.StructureValue
): CompletionItem[] => {
  // exclude duplicate
  return propertyBindingInfoElements
    .filter((item) => {
      if (
        !binding.elements.find(
          (data) => data.key && data.key.text === item.name
        )
      ) {
        return true;
      }
      return false;
    })
    .map((item) => {
      const type = typesToValue(item.type, context);
      let text = "";
      if (type.length === 1) {
        text = `${item.name}: ${type[0]}`;
      } else {
        let choice = type.join(",");
        choice = choice.replace(/\$0/g, "");
        choice = "${1|" + choice + "|}$0";
        text = `${item.name}: ${choice}`;
      }
      const documentation = getDocumentation(item);
      return {
        label: item.name,
        insertTextFormat: InsertTextFormat.Snippet,
        insertText: text,
        kind: CompletionItemKind.Snippet,
        documentation,
      };
    });
};