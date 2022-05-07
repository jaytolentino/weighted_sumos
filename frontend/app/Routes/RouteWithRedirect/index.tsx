import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

const RouteWithRedirect: React.FC<IProps> = (props) => {
  const { shouldRedirect, redirectTo } = props;

  if (shouldRedirect) {
    return <Redirect to={redirectTo} />;
  }
  return <Route {...props} />
}

interface IProps extends RouteProps {
  shouldRedirect: boolean;
  redirectTo?: string;
}

RouteWithRedirect.defaultProps = {
  redirectTo: '/',
}

export default RouteWithRedirect;