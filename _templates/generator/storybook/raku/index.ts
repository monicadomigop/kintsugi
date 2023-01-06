const DEFAULT_COMPONENT_COMMAND = 'structure'
const GROUP = [
  'Inputs',
  'Data display',
  'Feedback',
  'Surfaces',
  'Navigation',
  'Layout',
  'Utils',
]

/**
 * @example npm run generate:stories ComponentName structure
 * @example npm run generate:stories --name=ComponentName --folder=structure
 * @example npm run generate:stories
 */
module.exports = {
  prompt: ({ prompter, args }) => {
    const argvFolder = process.argv[process.argv.length - 1]
    const argvName = process.argv[process.argv.length - 2]

    const inputsAsParams =
      GROUP.includes(argvFolder) && argvName !== DEFAULT_COMPONENT_COMMAND

    const inputsAsArgs = args.name && args.folder && GROUP.includes(args.folder)

    if (inputsAsParams) {
      return Promise.resolve({ name: argvName, folder: argvFolder })
    }

    if (inputsAsArgs) {
      return Promise.resolve({ name: args.name, folder: args.folder })
    }

    return prompter.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What's the story name?",
      },
      {
        type: 'select',
        name: 'folder',
        message: `Which folder would you like to add this new stories?`,
        choices: GROUP,
      },
    ])
  },
}
