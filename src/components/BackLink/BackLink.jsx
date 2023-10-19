import StyledLink from './StyledBackLink';

export const BackLink = ({ to, children }) => {
  return <StyledLink to={to}>{children}</StyledLink>;
};
