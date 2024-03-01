// Posts.js
import { postStore } from "../state/postStore.js";

export default class Posts extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		document.title = "Posts";
		this.unsubscribe = null; // Initialize unsubscribe function
	}

	static get observedAttributes() {
		return [];
	}

	attributeChangedCallback(name, oldValue, newValue) {}

	connectedCallback() {
		this.render();
		this.unsubscribe = postStore.subscribe(() => {
			this.render();
		});
		this.fetchPosts(); // Call fetchPosts method to initiate data fetching
	}

	disconnectedCallback() {
		if (this.unsubscribe) {
			this.unsubscribe(); // Unsubscribe from store updates
		}
	}

	async fetchPosts() {
		await postStore.fetchPosts(); // Call fetchPosts method from store
	}

	render() {
		const { posts, loading, errors } = postStore.getState(); // Get state from store

		let content;
		if (loading) {
			content = "Loading..."; // Display loading message
		} else if (errors) {
			content = `Error: ${errors}`; // Display error message
		} else {
			const postsHtml = posts.map((post) => this.getPostTemplate(post)).join("");
			content = `<ul>${postsHtml}</ul>`;
		}

		this.shadowRoot.innerHTML = /*html*/ `
            <h1>Posts</h1>
			<c-searchpost></c-searchpost>
            ${content}
        `;
	}

	getPostTemplate(post) {
		return /*html*/ `
		<li>
			<c-link href="/posts/${post.id}">${post.title}</c-link>
		</li>`;
	}
}
