import React, { Component } from "react";

class Index extends Component {
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
		return { userAgent };
	}

	render() {
		return ( <div> salut </div> );
	}
}

export default Index;