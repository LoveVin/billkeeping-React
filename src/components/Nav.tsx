import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import React from 'react';
import Icon from './Icon';
import 'helper.scss';

const NavWrapper = styled.div`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul{
    display:flex;
    > li{
      width: 33.333%;
      text-align: center;
      > a{
        padding: 4px 0;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #b7b8bb;
        .icon{
          width: 24px;
          height: 24px;
          fill: #b7b8bb;
        }
        &.selected{
          color: #ffaf3e;
          .icon{
            fill: #ffaf3e;
          }
        }
      }
    }
  }
`;

const Nav = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" activeClassName="selected">
                        <Icon name="tag"/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName="selected">
                        <Icon name="money"/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName="selected">
                        <Icon name="chart"/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    );
};

export default Nav;