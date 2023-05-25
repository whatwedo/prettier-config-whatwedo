module.exports = {
    singleQuote: true,
    semi: true,
    printWidth: 120,
    tabWidth: 4,
    overrides: [
        {
            files: ['*.md'],
            options: {
                proseWrap: 'always'
            }
        },
        {
            files: ['*.yml'],
            options: {
                singleQuote: false,
            }
        }
    ]
};