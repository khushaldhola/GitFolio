import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from "react-hot-toast"

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ExplorePage from "./pages/ExplorePage";
import LikesPage from "./pages/LikesPage";
import Sidebar from "./components/Sidebar";
import { useAuthContext } from "./context/AuthContext";

function App() {

  const { authUser, loading } = useAuthContext();
	// console.log("Authenticated user:", authUser);
  // console.log("App.jsx, AuthUser: ", authUser)
  // now it's global so we can access it from anywhere

  if (loading) return null; // when we refresh we do not wants to pass to home pg everytime so,

  return (
      <div className="flex text-red-900">
        <Sidebar />
        <div className='max-w-5xl my-5 mx-auto transition-all duration-300 flex-1 text-white'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path="/login" element={<LoginPage />} />, now we should not able to see this page once we authenticated so, */}
            <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
            <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />} />
            <Route path='/explore' element={authUser ? <ExplorePage /> : <Navigate to={"/login"} />} />
            <Route path='/likes' element={authUser ? <LikesPage /> : <Navigate to={"/login"} />} />
          </Routes>
          <Toaster />
        </div>
      </div>
  )
}

export default App
