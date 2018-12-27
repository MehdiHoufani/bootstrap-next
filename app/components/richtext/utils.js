export const delNodesRange = (value, start) => {
	let newValue = {...value };
	newValue.nodes.forEach( node => {
		if( node.id === start.key) {
			node.blocks.forEach( block => {
				if(block.value){ block.value = block.value.substr(0, start.offset);}
			});
		}
	});
	return newValue;
};