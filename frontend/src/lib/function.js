// if you want to store more functions nd wanrrt to access from anywhere ike this one but im not using it cause its only one maybe in future
// using this oone two times one in login another in signup so..,,
export const handleLoginWithGithub = () => {
    window.open("http://localhost:5000/api/auth/github", "_self");
};
// ToUse
// import { handleLoginWithGithub } from "../lib/function";
// onClick={handleLoginWithGithub}