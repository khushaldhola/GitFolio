export const explorePopularRepos = async (req, res) => {

    const { language } = req.params;
    try {
        const response = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=10`, {
				headers:{
					authorization: `token ${process.env.GITHUB_API_KEY}`
				}
			});
			// console.log("res: ", res)
			const data = await response.json();
            console.log("data: ", data)
            
            res.status(200).json({repos: data.items})
            
        } catch (error) {
        console.log("explore.controller.js: Maybe url err")
        res.status(500).json({message: error.message});
    }
}