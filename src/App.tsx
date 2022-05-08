import React, { useEffect, useRef, useState } from 'react';
import { Tabs, Tree } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import treeData from 'virtual:docs-tree-generator';
import * as u from './utils';
const tree = new u.Tree(treeData);

import MonacoEditor, { useMonaco } from '@monaco-editor/react';
import TabTitle from './components/TabTitle';
import icons from './icons';
import Breadcrumb from './components/Breadcrumb';
import { TabRecord } from './type';

const { DirectoryTree } = Tree;
const initTab = { key: '', title: '', language: '', value: '' };
const App: React.FC = () => {
  const monaco = useMonaco();
  const [activeTab, setActiveTab] = useState<TabRecord>(initTab);
  const [tabs, setTabs] = useState<{ activeTabs: Array<TabRecord>; historyTabs: Array<TabRecord> }>(
    {
      activeTabs: [],
      historyTabs: [],
    }
  );

  const { activeTabs, historyTabs } = tabs;

  useEffect(() => {
    if (monaco) {
      monaco.languages.typescript.typescriptDefaults.setCompilerOptions({
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        strict: true,
      });
      tree.forEach((c) => {
        if ('isLeaf' in c) {
          const path = monaco.Uri.parse(c.key);
          if (!monaco.editor.getModel(path)) {
            monaco.editor.createModel(c.value, c.language, path);
          }
        }
      });
    }
  }, [monaco]);

  const handleClose = (key: string) => {
    setTabs({
      activeTabs: activeTabs.filter((item) => item.key !== key),
      historyTabs: historyTabs.filter((item) => item.key !== key),
    });
  };

  useEffect(() => {
    if (activeTabs.length === 0) {
      setActiveTab(initTab);
      return;
    }
    if (!activeTabs.find((item) => item.key === activeTab.key)) {
      setActiveTab(historyTabs[historyTabs.length - 1]);
    }
  }, [activeTabs]);

  return (
    <>
      {/* <div> */}
      {/* <Input /> */}
      <DirectoryTree
        showLine
        defaultExpandAll
        switcherIcon={<DownOutlined />}
        treeData={treeData}
        selectedKeys={[activeTab.key]}
        icon={(p) => {
          if (p.isLeaf) {
            if (icons.has((p as any).language)) {
              return icons.get((p as any).language);
            }
            return icons.get('default_file');
          } else {
            if (p.expanded) {
              return icons.get('default_folder_opened');
            }
            return icons.get('default_folder');
          }
        }}
        onSelect={(k, { selectedNodes }) => {
          const selectedNode = selectedNodes[0] as any;
          if (selectedNode.isLeaf) {
            const tab = {
              key: selectedNode.key,
              title: selectedNode.title,
              language: selectedNode.language,
              value: selectedNode.value,
            };
            setActiveTab(tab);
            setTabs({
              activeTabs: activeTabs.find((item) => item.key === k[0])
                ? activeTabs
                : [...activeTabs, tab],
              historyTabs: [...historyTabs.filter((item) => item.key !== k[0]), tab],
            });
          }
        }}
      />
      {/* </div> */}
      <div id="editor">
        <Tabs
          type="card"
          size="small"
          tabBarGutter={0}
          activeKey={activeTab.key}
          onChange={(k) => {
            setActiveTab(activeTabs.find((item) => item.key === k)!);
            setTabs({
              activeTabs,
              historyTabs: [
                ...historyTabs.filter((item) => item.key !== k),
                historyTabs.find((item) => item.key === k)!,
              ],
            });
          }}
        >
          {activeTabs.map((item) => (
            <Tabs.TabPane
              tab={
                <TabTitle
                  onClick={(e: any) => {
                    console.log(e);
                    e.stopPropagation();

                    handleClose(item.key);
                  }}
                  item={item}
                />
              }
              key={item.key}
            />
          ))}
        </Tabs>
        <Breadcrumb tab={activeTab} />
        {!!activeTab.key && (
          <MonacoEditor
            path={activeTab.key}
            defaultValue={activeTab.value}
            defaultLanguage={activeTab.language}
            theme="vs-dark"
            options={{
              fontSize: 16,
            }}
          />
        )}
      </div>
    </>
  );
};

export default App;
