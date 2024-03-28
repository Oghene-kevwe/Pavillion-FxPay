import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { SharedLayout } from "./pages/sharedLayout";
import { Login } from "./pages/login";
import { Signup } from "./pages/signup";
import { AccountDetails } from "./pages/account-Details";
import { Dashboard } from "./pages/dashboard";
import { SetupUsername } from "./pages/setupUsername";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="account-details" element={<AccountDetails />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="setup-username" element={<SetupUsername />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
