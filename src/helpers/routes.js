import { Route, redirect } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...restProps }) {
  console.log(user);
  return (
    <Route
      {...restProps}
      render={() => {
        if (!user) {
          return children;
        }

        if (user) {
          redirect(loggedInPath);
          // <Redirect
          //   to={{
          //     pathname: loggedInPath,
          //   }}
          // />;
        }
      }}
    />
  );
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={({ location }) => {
        if (user) {
          return children;
        }

        if (!user) {
          redirect("/signin");
        }

        return null;
      }}
    />
  );
}
