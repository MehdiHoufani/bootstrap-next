class HandleEvents {
	constructor(id){
		this._id = id;
		this.Element = document.getElementById(id);
	}

	setTarget = id => {
		this._id = id;
		this.Element = document.getElementById(id);
		return this;
	};

	on = () => {
		this.Element.addEventListener('mousedown', event => console.log(event.type, event));
		this.Element.addEventListener('mouseenter', event => console.log(event.type, event));
		this.Element.addEventListener('mouseleave', event => console.log(event.type, event));
		this.Element.addEventListener('mouseout', event => console.log(event.type, event));
		this.Element.addEventListener('mouseover', event => console.log(event.type, event));
		this.Element.addEventListener('mouseup', event => console.log(event.type, event));
		return this;
	};

	off = () => {

	}

}

export default HandleEvents;