import styled from 'styled-components';
import icons from '../icons';
import { TabRecord } from '../type';

const TabTitleContainer = styled.div`
  display: flex;
  align-items: center;
  > svg {
    padding-top: 2px;
    margin-right: 4px;
    width: 16px;
    height: 18px;
  }
`;
const TabTitleBox = styled.div`
  flex: 1 0 auto;
  max-width: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const TabTitleClose = styled.div`
  padding: 2px;
  border-radius: 4px;
  height: 20px;
  margin-left: 4px;
  opacity: 0;
  &:hover {
    opacity: 1;
    background: rgba(90, 93, 94, 0.31);
  }
`;
interface TabTitleProps {
  item: TabRecord;
  onClick: (e: any) => void;
}

const TabTitle: React.FC<TabTitleProps> = ({ children, onClick, item }) => {
  return (
    <TabTitleContainer>
      {icons.get(item.language)}
      <TabTitleBox>{item.title}</TabTitleBox>
      <TabTitleClose onClick={onClick}>
        <svg
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3219"
          width={16}
          height={16}
        >
          <path
            d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z"
            p-id="3220"
            fill="#dedede"
          ></path>
        </svg>
      </TabTitleClose>
    </TabTitleContainer>
  );
};

export default TabTitle;
