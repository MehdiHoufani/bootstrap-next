export default {
	id: 1,
	document: [
		{
			id: '1',
			type: 'p',
			attr: {},
			children: [{
				id: '1.1',
				type: 'span',
				attr: {className: 'test'},
				children: [
					{
						id: '1.1.1',
						type: 'text',
						data: 'je suis '
					},
					{
						id: '1.1.2',
						type: 'strong',
						attr: {},
						children: [
							{
								id: '1.1.2.1',
								type: 'text',
								data: 'medmed'
							}
						]
					},
					{
						id: '1.1.3',
						type: 'text',
						data: ' je suis derriere'
					}
				]
			}]

		},
		{
			id: '2',
			type: 'p',
			children: [{
				id: '2.1',
				type: 'span',
				attr: {},
				children: [
					{
						id: '2.1.1',
						type: 'text',
						data: 'je suis '
					},
					{

						id: '2.1.2',
						type: 'strong',
						attr: {},
						children: [{
							id: '2.1.2.1',
							type: 'text',
							data: 'medmed sur la 2e'
						}]


					}
				]
			}]

		}
	]
};