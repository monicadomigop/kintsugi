const DEFAULT_COMPONENT_COMMAND = 'atoms'
const ATOMIC = ['atoms', 'molecules', 'organism', 'templates', 'tokens']

/**
 * @example npm run generate:component ComponentName atoms
 * @example npm run generate:component --name=NAME --folder=ATOMS
 * @example npm run generate:component
 */
module.exports = {
  prompt: ({ prompter, args }) => {
    const argvFolder = process.argv[process.argv.length - 1]
    const argvName = process.argv[process.argv.length - 2]

    const inputsAsParams =
      ATOMIC.includes(argvFolder) && argvName !== DEFAULT_COMPONENT_COMMAND

    const inputsAsArgs =
      args.name && args.folder && ATOMIC.includes(args.folder)

    if (inputsAsArgs) {
      return Promise.resolve({ name: args.name, folder: args.folder })
    }
    if (inputsAsParams) {
      return Promise.resolve({ name: argvName, folder: argvFolder })
    }

    return prompter.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's the component name?",
      },
      {
        type: 'select',
        name: 'folder',
        message: `Which folder would you like to add this new component?`,
        choices: ATOMIC,
      },
    ])
  },
}
