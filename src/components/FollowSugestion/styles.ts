import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.div`
  width: 49px;
  height: 49px;
  border-radius: 50%;
  background: var(--gray);
  margin-right: 10px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  strong {
    font-size: 14px;
  }
  > span {
    color: var(--gray);
    font-size: 14px;
  }
`;
export const FollowButtom = styled(Button)`
  padding:6px 17px;
`;
