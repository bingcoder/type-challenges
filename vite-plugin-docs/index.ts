import { Plugin, normalizePath } from 'vite';
import fs from 'fs';
import path from 'path';
import watch from 'node-watch';

const map = {
  ts: 'typescript',
  js: 'javascript',
  tsx: 'typescriptreact',
  jsx: 'javascriptreact',
  html: 'html',
  css: 'css',
  md: 'markdown',
};
function getLanguage(name: string) {
  for (const key in map) {
    if (Object.prototype.hasOwnProperty.call(map, key)) {
      if (name.endsWith(`.${key}`)) {
        return map[key as keyof typeof map];
      }
    }
  }
  return 'plaintext';
}

function getCharList(s: string) {
  const list: string[] = [];
  let lastNumber: boolean = false;
  for (let index = 0; index < s.length; index++) {
    const current = s[index];
    if (/\d/.test(current)) {
      if (lastNumber) {
        const lastIndex = list.length - 1;
        list[lastIndex] = list[lastIndex] + current;
      } else {
        lastNumber = true;
        list.push(current);
      }
    } else {
      lastNumber = false;
      list.push(current);
    }
  }
  return list;
}

function dirToTree(dir: string[]) {
  const dirs = fs.readdirSync(path.resolve(...dir)).sort((a, b) => {
    const la = getCharList(a);
    const lb = getCharList(b);

    for (let index = 0; index < 100; index++) {
      const ia = la[index];
      const ib = lb[index];
      if (!ia) return -1;
      if (!ib) return 1;
      if (ia === ib) continue;
      if (/\d/.test(ia) && /\d/.test(ib)) {
        return +ia - +ib;
      } else if (/\d/.test(ia)) {
        return -1;
      } else if (/\d/.test(ib)) {
        return 1;
      } else {
        return ia.charCodeAt(0) - ib.charCodeAt(0);
      }
    }
    return -1;
  });
  const directoryList: any = [];
  const fileList: any = [];
  dirs.forEach((item) => {
    const stat = fs.statSync(path.resolve(...dir, item));
    const key = `file:///${dir.join('/')}/${item}`.replace('/code', '');
    if (stat.isDirectory()) {
      directoryList.push({
        key,
        title: item,
        children: dirToTree([...dir, item]),
      });
    } else if (stat.isFile()) {
      fileList.push({
        key,
        title: item,
        isLeaf: true,
        value: fs.readFileSync(path.resolve(...dir, item), { encoding: 'utf-8' }),
        language: getLanguage(item),
      });
    }
  });

  return [...directoryList, ...fileList];
}

function genDocTree(dir = 'code'): Plugin {
  const pluginName = 'docs-tree-generator';
  const docsPath = path.resolve(dir);
  const virtualModuleId = `virtual:${pluginName}`;
  const resolvedVirtualModuleId = '\0' + virtualModuleId;
  let tree: string;
  function updateTree() {
    tree = JSON.stringify(dirToTree([dir]));
  }
  return {
    name: pluginName,
    buildStart() {
      updateTree();
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${tree}`;
      }
    },
    configureServer(server) {
      // TODO hot-update
      watch(
        docsPath,
        {
          recursive: true,
        },
        () => {
          server.restart();
        }
      );
    },
  };
}

export default genDocTree;
