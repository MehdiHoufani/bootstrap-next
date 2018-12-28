export const findParentNode = (nodes, dataKey, idx = 0) => {
	if( idx < dataKey.length - 1 )
		return findParentNode(nodes[dataKey[idx] - 1].children, dataKey, idx + 1);
	return nodes[dataKey[idx] - 1];
};

export const findNode = (nodes, dataKey, idx = 0) => {
	if( idx < dataKey.length - 1 )
		return findParentNode(nodes[dataKey[idx] - 1].children, dataKey, idx + 1);
	return nodes[dataKey[idx] - 1];
};

export const delNodesRange = (value, start) => {
	const keyIn = start.key.split('.');
	console.log('key', keyIn);
	console.log('delNodeRange', findNode(value.document, keyIn));
};

