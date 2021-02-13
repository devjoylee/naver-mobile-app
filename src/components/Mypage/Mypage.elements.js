import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RiEdit2Fill } from 'react-icons/ri';

// Navbar
export const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const HomeLogo = styled(Link)`
  width: 45px;
  height: 45px;
`;

export const NavTitle = styled.div`
  background-color: #08c741;
  width: 100%;
  height: 45px;
  padding: 10px;
  color: #fff;
  font-size: 20px;
  letter-spacing: -1px;
  box-sizing: border-box;
`;

// UserInfo
export const InfoWrapper = styled.div`
  background-color: #00bb38;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  border-top: 1px solid #00ac34;
  padding: 24px 20px;
`;

export const ProfileImage = styled.img`
  border-radius: 50%;
  width: 100px;
`;

export const ProfileDetail = styled.div`
  padding-left: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
`;

export const EditButton = styled(RiEdit2Fill)`
  margin-bottom: -2px;
  margin-left: 4px;
  font-size: 22px;
  cursor: pointer;
`;

export const Email = styled.p`
  font-size: 15px;
  margin-left: 3px;
`;

export const Buttons = styled.div`
  display: flex;
  margin-top: 15px;

  span {
    width: 92px;
    padding: 10px 0;
    margin-right: 8px;
    font-size: 14px;
    text-align: center;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 25px;
    cursor: pointer;
  }
`;

// InfoLink
export const LinkWrapper = styled.div`
  display: block;
  padding: 20px 15px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  cursor: pointer;

  display: flex;
  align-items: center;

  & > svg:first-child {
    color: #ccc;
    font-size: 22px;
  }

  & > svg:last-child {
    color: #999;
    font-size: 25px;
  }
`;

export const LinkMenu = styled.div`
  flex: 1;
  margin-left: 12px;
`;

export const Title = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #999;
  font-size: 15px;
`;

// Logout Button
export const LogoutButton = styled.button`
  display: block;
  width: 80px;
  margin: 0 auto;
  border: 1px solid #d6d6d6;
  background: #eff2f8;
  padding: 7px 12px;
  color: #666;
  outline: none;
  cursor: pointer;
`;
