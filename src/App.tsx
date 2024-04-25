import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import LoginForm from "./components/LoginForm";
import ForgotPasswordForm from "./components/ForgotPasswordForm";
import NeedHelp from "./pages/NeedHelp";
import AuthLayout from "./layouts/AuthLayout";
import HelpLayout from "./layouts/HelpLayout";

/*
 I imported the components and rendered them on a different layout accodring to their function
 or the screen where them belong.
*/

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <>you're in 👍🏽</>
            </RequireAuth>
          }
        />
      </Route>
      <Route element={<HelpLayout />}>
        <Route path="/help" element={<NeedHelp />} />
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Route>
    </Routes>
  );
};

//function to protect private route if user is not auth.
function RequireAuth({ children }: { children: JSX.Element }) {
  let auth = sessionStorage.getItem("isAuthenticated");
  let location = useLocation();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default App;
