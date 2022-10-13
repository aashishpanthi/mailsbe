import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/PageNotFound";
import ProtectedDashboard from "./components/ProtectedDashboard";
import Overview from "./pages/Overview";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="sign-up" element={<SignUp />} />
          <Route path="sign-in" element={<SignIn />} />
          <Route path="/" element={<Home />} />

          <Route path="/app" element={<ProtectedDashboard />}>
            <Route index element={<Overview />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster />
    </>
  );
}

export default App;
