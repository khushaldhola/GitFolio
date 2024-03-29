import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

export const useAuthContext = () => {
	return useContext(AuthContext);
};

export const AuthContextProvider = ({ children }) => {
	const [authUser, setAuthUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const checkUserLoggedIn = async () => {
			setLoading(true);
			try {
                // console.log("happens to be err in fetch");
				const res = await fetch("/api/auth/check");
                // console.log("res", res);
				const data = await res.json(); // responce will be user obj check out auth.route.js check
                // console.log("data.user", data);
				setAuthUser(data.user); // null or authenticated user object
			} catch (error) {
                // console.log("err in auth");
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		checkUserLoggedIn();
	}, []);

	return <AuthContext.Provider value={{ authUser, setAuthUser, loading }}>{children}</AuthContext.Provider>;
};