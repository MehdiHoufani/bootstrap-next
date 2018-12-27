class Selector {
	constructor({ type, startContainer, startOffset, endContainer, endOffset }){
		this._type = type;
		this._startContainer = startContainer;
		this._startOffset = startOffset;
		this._endContainer = endContainer;
		this._endOffset = endOffset;
	}

	get startContainer() {
		return this._startContainer;
	}

	get startOffset() {
		return this._startOffset;
	}

	get endContainer() {
		return this._endContainer;
	}

	get endOffset() {
		return this._endOffset;
	}

	set startContainer(value) {
		this._startContainer = value;
	}

	set startOffset(value) {
		this._startOffset = value;
	}

	set endContainer(value) {
		this._endContainer = value;
	}

	set endOffset(value) {
		this._endOffset = value;
	}

	getStart = () => ({
		key: this._startContainer.parentNode.dataset.key,
		offset: this._startOffset
	});

	getEnd = () => ({
		key: this._endContainer.parentNode.dataset.key,
		offset: this._endOffset
	})

}

export default Selector;