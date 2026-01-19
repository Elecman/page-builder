import type {EditorState} from '@craftjs/core/lib/interfaces/editor';
import {Node, type Nodes, ROOT_NODE} from '@craftjs/core';

const MAP_COMPONENT_ELEMENTS: Record<string, string> = {
  CaptionGroup: 'CaptionGroup'
};

export const dataMapper = (state: Readonly<EditorState>) => {
  const filteredNodes = Object.entries(state.nodes).filter(([key, _]) => key !== ROOT_NODE);

  const rootElement: TMap = {
    type: state.nodes[ROOT_NODE].data.name,
    name: state.nodes[ROOT_NODE].id,
    elements: []
  };
  if (state.nodes[ROOT_NODE].data.nodes.length) {
    const rootNodes = state.nodes[ROOT_NODE].data.nodes.map((s => getEl(state.nodes[s])));
    rootElement.elements = getEls(Object.fromEntries(filteredNodes), rootNodes);
  }
  return rootElement;
};
type TMap = {
  name: string
  type: string
  caption?: any
  elements: TMap[]
}
const getEls = (data: Nodes, rootElement: TMap[]) => {
  const arr: TMap[] = [];
  for (const item of rootElement) {
    arr.push(item);
  }

  for (const [key, dataValue] of Object.entries(data)) {
    const existNode = arr.find((a) => a.name === key);
    if (!existNode) {
      const findParent = arr.find((a) => a.name === dataValue.data.parent);
      const obj: TMap = {
        name: dataValue.id,
        type: dataValue.data.name,
        caption: getChildrenEls(data, Object.values(dataValue.data.linkedNodes)),
        elements: getChildrenEls(data, dataValue.data.nodes)
      };
      if (findParent) {
        findParent.elements.push(obj);
      }
    }
  }
  return arr;
};

const getChildrenEls = (data: Nodes, keys: string[]) => {
  const arr: TMap[] = [];
  for (const [key, node] of Object.entries(data)) {
    const foundKey = keys.find(a => a === key);
    if (foundKey) {
      const obj: TMap = {
        name: node.id,
        type: node.data.name,
        caption: getChildrenEls(data, Object.values(node.data.linkedNodes)),
        elements: getChildrenEls(data, node.data.nodes)
      };

      arr.push(obj);
    }
  }

  return arr;
};

const getEl = (value: Node) => {
  return {
    type: value.data.name,
    name: value.id,
    elements: []
  };
};
