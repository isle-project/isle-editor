const observe = jest.fn();
const unobserve = jest.fn();

window.IntersectionObserver = jest.fn( () => ({
	observe,
	unobserve
}) );
