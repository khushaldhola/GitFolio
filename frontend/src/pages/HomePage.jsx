import { useCallback, useEffect, useState } from "react"
import toast from "react-hot-toast"

import Search from "../components/Search"
import SortRepos from "../components/SortRepos"
import ProfileInfo from "../components/ProfileInfo"
import Repos from "../components/Repos"
import Spinner from "../components/Spinner"
import DownParticularRepo from "../components/DownParticularRepo"
import { useAuthContext } from "../context/AuthContext"

const HomePage = () => {

	const [userProfile, setUserProfile] = useState(null);
	const [repos, setRepos] = useState([]);
	const [loading, setLoading] = useState(false);

	const [sortType, setSortType] = useState("recent");

	const { authUser } = useAuthContext();
	const defaultUsername = authUser?.username || "github";
	
	// console.log('here')
	// console.log(profile)
	const getUserProfileAndRepos = useCallback(async (username = defaultUsername) => {
		setLoading(true); 
		try {
			const res = await fetch(`/api/users/profile/${username}`);
			const {repos, userProfile} = await res.json();
			// at first gettin cors error so use cors in server to solve
			// const userRes = await fetch(`https://api.github.com/users/${username}`, {
				// 	headers:{
			// 		authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
			// 	},
			// });
			// // authorization: `token directly pasted api here/same as env` , with this header included sometimes it doesnt work
			// const userProfile = await userRes.json();
			// setUserProfile(userProfile);
			// console.log(userRes)
			
			// const repoRes = await fetch(userProfile.repos_url);
			// const repos = await repoRes.json();
			repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
			setRepos(repos);
			setUserProfile(userProfile);
			// console.log("repos: ",repos)


	
			// console.log('HMPG - userProfile: ', userProfile);
			// console.log('HMPG - userRepo: ', repos);
			return { userProfile, repos }
			
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		getUserProfileAndRepos();
	}, [getUserProfileAndRepos]);

	const onSearch = async (e, username) => {
		e.preventDefault();

		setLoading(true);
		setRepos([]);
		setUserProfile(null);

		const { userProfile, repos } = await getUserProfileAndRepos(username);

		setUserProfile(userProfile);
		setRepos(repos);
		setLoading(false);
		// setSortType("recent");
	};

	const onSort = (sortType) => {
		let sortedRepos = [...repos]; // Create a new array to store sorted repos
	
		if (sortType === "recent") {
			sortedRepos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)); //descending, recent first
		} else if (sortType === "stars") {
			sortedRepos.sort((a, b) => b.stargazers_count - a.stargazers_count); //descending, most stars first
		} else if (sortType === "forks") {
			sortedRepos.sort((a, b) => b.forks_count - a.forks_count); //descending, most forks first
		}
	
		setSortType(sortType);
		setRepos(sortedRepos); // Update state with the new sorted array
	};

	// console.log("userProfile", userProfile)
	return (
		<div className='m-4'>
			<Search onSearch={onSearch} />
			{/* {repos.length > 0 && <SortRepos onSort={onSort} sortType={sortType} />} */}
			{repos.length > 0 && <SortRepos />}
			<div className='flex gap-4 flex-col lg:flex-row justify-center items-start'>
				{userProfile && !loading && <ProfileInfo userProfile={userProfile} />}
				{!loading && <Repos repos={repos}/>}
				{loading && <Spinner />}
				{/* {!loading && <DownParticularRepo/>} */}
			</div>
		</div>
	);
};

export default HomePage;