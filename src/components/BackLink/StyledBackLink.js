import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 15px 20px;
  color: #000;
  text-decoration: none;
  font-weight: 600;
`;

export default StyledLink;
