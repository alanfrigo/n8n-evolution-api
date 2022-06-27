module.exports = {
	root: true,

	env: {
		browser: true,
		es6: true,
		node: true,
	},

	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.json'],
		sourceType: 'module',
		extraFileExtensions: ['.json'],
	},
	ignorePatterns: [
		'.eslintrc.js',
		'**/*.js',
		'**/node_modules/**',
		'**/dist/**',
		'**/test/**',
		'**/templates/**',
		'**/ormconfig.ts',
		'**/migrations/**',
	],

	overrides: [
		{
			files: ['package.json'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/community-package-json-author-email-still-default': 'error',
				'n8n-nodes-base/community-package-json-author-missing': 'error',
				'n8n-nodes-base/community-package-json-author-name-missing': 'error',
				'n8n-nodes-base/community-package-json-author-name-still-default': 'error',
				'n8n-nodes-base/community-package-json-description-missing': 'error',
				'n8n-nodes-base/community-package-json-description-still-default': 'error',
				'n8n-nodes-base/community-package-json-keywords-missing': 'error',
				'n8n-nodes-base/community-package-json-keywords-without-official-tag': 'error',
				'n8n-nodes-base/community-package-json-license-missing': 'error',
				'n8n-nodes-base/community-package-json-license-not-default': 'error',
				'n8n-nodes-base/community-package-json-n8n-missing': 'error',
				'n8n-nodes-base/community-package-json-n8n-nodes-empty': 'error',
				'n8n-nodes-base/community-package-json-n8n-nodes-missing': 'error',
				'n8n-nodes-base/community-package-json-name-missing': 'error',
				'n8n-nodes-base/community-package-json-name-still-default': 'error',
				'n8n-nodes-base/community-package-json-repository-url-still-default': 'error',
				'n8n-nodes-base/community-package-json-version-missing': 'error',
			},
		},
		{
			files: ['./credentials/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/filesystem-wrong-cred-filename': 'error',
			},
		},
		{
			files: ['./nodes/**/*.ts'],
			plugins: ['eslint-plugin-n8n-nodes-base'],
			rules: {
				'n8n-nodes-base/filesystem-wrong-node-filename': 'error',
				'n8n-nodes-base/node-class-description-empty-string': 'error',
				'n8n-nodes-base/node-class-description-icon-not-svg': 'error',
				'n8n-nodes-base/node-class-description-inputs-wrong-trigger-node': 'error',
				'n8n-nodes-base/node-class-description-missing-subtitle': 'error',
				'n8n-nodes-base/node-class-description-outputs-wrong': 'error',
				'n8n-nodes-base/node-execute-block-double-assertion-for-items': 'error',
				'n8n-nodes-base/node-param-collection-type-unsorted-items': 'error',
				'n8n-nodes-base/node-param-default-missing': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-boolean': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-collection': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-fixed-collection': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-fixed-collection': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-multi-options': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-number': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-simplify': 'error',
				'n8n-nodes-base/node-param-default-wrong-for-string': 'error',
				'n8n-nodes-base/node-param-description-boolean-without-whether': 'error',
				'n8n-nodes-base/node-param-description-comma-separated-hyphen': 'error',
				'n8n-nodes-base/node-param-description-empty-string': 'error',
				'n8n-nodes-base/node-param-description-excess-final-period': 'error',
				'n8n-nodes-base/node-param-description-excess-inner-whitespace': 'error',
				'n8n-nodes-base/node-param-description-identical-to-display-name': 'error',
				'n8n-nodes-base/node-param-description-line-break-html-tag': 'error',
				'n8n-nodes-base/node-param-description-lowercase-first-char': 'error',
				'n8n-nodes-base/node-param-description-miscased-id': 'error',
				'n8n-nodes-base/node-param-description-miscased-json': 'error',
				'n8n-nodes-base/node-param-description-miscased-url': 'error',
				'n8n-nodes-base/node-param-description-missing-final-period': 'error',
				'n8n-nodes-base/node-param-description-missing-for-ignore-ssl-issues': 'error',
				'n8n-nodes-base/node-param-description-missing-for-return-all': 'error',
				'n8n-nodes-base/node-param-description-missing-for-simplify': 'error',
				'n8n-nodes-base/node-param-description-missing-from-dynamic-options': 'error',
				'n8n-nodes-base/node-param-description-missing-from-limit': 'error',
				'n8n-nodes-base/node-param-description-unencoded-angle-brackets': 'error',
				'n8n-nodes-base/node-param-description-unneeded-backticks': 'error',
				'n8n-nodes-base/node-param-description-untrimmed': 'error',
				'n8n-nodes-base/node-param-description-url-missing-protocol': 'error',
				'n8n-nodes-base/node-param-description-weak': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-dynamic-multi-options': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-dynamic-options': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-ignore-ssl-issues': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-limit': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-return-all': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-simplify': 'error',
				'n8n-nodes-base/node-param-description-wrong-for-upsert': 'error',
				'n8n-nodes-base/node-param-display-name-excess-inner-whitespace': 'error',
				'n8n-nodes-base/node-param-display-name-miscased': 'error',
				'n8n-nodes-base/node-param-display-name-miscased-id': 'error',
				'n8n-nodes-base/node-param-display-name-untrimmed': 'error',
				'n8n-nodes-base/node-param-display-name-wrong-for-dynamic-multi-options': 'error',
				'n8n-nodes-base/node-param-display-name-wrong-for-dynamic-options': 'error',
				'n8n-nodes-base/node-param-display-name-wrong-for-simplify': 'error',
				'n8n-nodes-base/node-param-display-name-wrong-for-update-fields': 'error',
				'n8n-nodes-base/node-param-min-value-wrong-for-limit': 'error',
				'n8n-nodes-base/node-param-multi-options-type-unsorted-items': 'error',
				'n8n-nodes-base/node-param-operation-without-no-data-expression': 'error',
				'n8n-nodes-base/node-param-option-description-identical-to-name': 'error',
				'n8n-nodes-base/node-param-option-name-containing-star': 'error',
				'n8n-nodes-base/node-param-option-name-duplicate': 'error',
				'n8n-nodes-base/node-param-option-name-wrong-for-get-all': 'error',
				'n8n-nodes-base/node-param-option-name-wrong-for-upsert': 'error',
				'n8n-nodes-base/node-param-option-value-duplicate': 'error',
				'n8n-nodes-base/node-param-options-type-unsorted-items': 'error',
				'n8n-nodes-base/node-param-placeholder-miscased-id': 'error',
				'n8n-nodes-base/node-param-placeholder-missing-email': 'error',
				'n8n-nodes-base/node-param-required-false': 'error',
				'n8n-nodes-base/node-param-resource-with-plural-option': 'error',
				'n8n-nodes-base/node-param-resource-without-no-data-expression': 'error',
				'n8n-nodes-base/node-param-type-options-missing-from-limit': 'error',
				'n8n-nodes-base/node-class-description-inputs-wrong-regular-node': 'error',
			},
		},
	],
};