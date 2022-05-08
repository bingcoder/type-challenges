import { Breadcrumb } from 'antd';
import { useMemo } from 'react';
import icons from '../icons';
import { TabRecord } from '../type';

const Bread: React.FC<{ tab: TabRecord }> = ({ tab }) => {
  if (!tab.key) return null;
  const dir = useMemo(() => {
    return tab.key.replace('file:///', '').split('/');
  }, [tab.key]);
  return (
    <Breadcrumb separator=">">
      {dir.map((p, i) => (
        <Breadcrumb.Item
          key={p}
          className={i === dir.length - 1 ? 'ant-breadcrumb-link icon-crumb' : ''}
        >
          {i === dir.length - 1 && icons.get(tab.language)}
          <span>{p}</span>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Bread;
