const SortRepos = ({ repos }) => {
    if (!repos || repos.length === 0) {
        return <p>No repos available</p>;
    }

    const BUTTONS = [
        { type: "recent", text: "Most Recent" },
        { type: "stars", text: "Most Stars" },
        { type: "forks", text: "Most Forks" },
    ];

    return (
        <div className='mb-2 flex justify-center lg:justify-end'>
            {BUTTONS.map((button) => (
                <button
                    key={button.type}
                    type='button'
                    className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
                        button.type == sortType ? "border-blue-500" : ""
                    }`}
                    // onClick={() => onSort(button.type)}
                >
                    {button.text}
                </button>
            ))}
        </div>
    );
};

export default SortRepos;


// const SortRepos = ({onSort, sortType}) => {
// 	return (
// 		<div className='mb-2 flex justify-center lg:justify-end'>
// 			<button
// 				type='button'
// 				className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
// 					${sortType === "recent" ? "border-red-500": ""}
// 				`}
// 				onClick={() => onSort("recent")}
// 				>
// 				Most Recent
// 			</button>
// 			<button
// 				type='button'
// 				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
// 					${sortType === "recent" ? "border-red-500": ""}
// 				`}
// 				onClick={() => onSort("stars")}
// 				>
// 				Most Stars
// 			</button>
// 			<button
// 				type='button'
// 				className={`py-2.5 px-5 me-2 mb-2  text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass
// 					${sortType === "recent" ? "border-red-500": ""}
// 				`}
// 				onClick={() => onSort("forks")}
// 			>
// 				Most Forks
// 			</button>
// 		</div>
// 	);
// };

// export default SortRepos