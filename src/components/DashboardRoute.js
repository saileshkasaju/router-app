import { Route } from 'react-router-dom';

function DashboardRoute({ children, path, ...otherProps }) {
  return (
    <Route path={path} {...otherProps}>
      <h3>Dashboard</h3>
      {children}
    </Route>
  );
}

export default DashboardRoute;
