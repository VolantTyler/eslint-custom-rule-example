// enforce-foo-bar.js

module.exports = {
    meta: {
        type: "problem",
        docs: {
            description: "Enforce that a variable named `foo` can only be assigned a value of 'bar'.",
        },
        fixable: "code",
        schema: []
    },
    create(context) {
        return {
            // TODO: add callback function(s)
            VariableDeclarator(node) {
                if (node.parent.kind === "const") {
                    if (node.id.type === "Identifier" && node.id.name === "foo") {
                        if (node.init && node.init.type === "Literal" && node.init.value !== "bar") {

                            /*
                             * Report error to ESLint. Error message uses
                             * a message placeholder to include the incorrect value
                             * in the error message.
                             * Also includes a `fix(fixer)` function that replaces
                             * any values assigned to `const foo` with "bar".
                             */
                            context.report({
                                node,
                                message: 'Value other than "bar" assigned to `const foo`. Unexpected value: {{ notBar }}.',
                                data: {
                                    notBar: node.init.value
                                },
                                fix(fixer) {
                                    return fixer.replaceText(node.init, '"bar"');
                                }
                            });
                        }
                    }
                }
            }
        };
    }
};