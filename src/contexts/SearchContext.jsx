import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
	const [searchQuery, setSearchQuery] = useState("");

	return (
		<SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
			{children}
		</SearchContext.Provider>
	);
}

function useSearch() {
	const context = useContext(SearchContext);
	if (context === undefined) {
		throw new Error(
			"SearchContext seems to be used outside SearchProvider."
		);
	}
	return context;
}

export { SearchProvider, useSearch };
