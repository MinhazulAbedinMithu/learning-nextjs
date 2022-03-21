const makeSlug = (title: string) => {
	const slug = title.split(" ").join("-").toLowerCase();
	return slug;
};

export { makeSlug };
