const {Command, flags} = require('@oclif/command')
const fs = require("fs");
const path = require("path")


class CreatePackageCommand extends Command {

  static args = [
    {
      name: 'packageName',
      required: true,
      description: 'The name of the package you\'d like to create'
    }
  ]

  async run() {

    const {args} = this.parse(CreatePackageCommand)

    let model = fs.readFileSync(path.join(__dirname, "../templates/model.js"), {encoding:'utf8', flag:'r'});

    this.log(model)

    model = model.replace(/MODELNAME/g, args.packageName)
         .replace(/modelname/g, args.packageName.toLowerCase());

    fs.writeFileSync(path.join(__dirname, `../models/${args.packageName}.js`), model);

    console.log(`Created new Model [${args.packageName}]`)

    let service = fs.readFileSync(path.join(__dirname, "../templates/service.js"), {encoding:'utf8', flag:'r'});

    service = service.replace(/NAME/g, args.packageName)

    fs.writeFileSync(path.join(__dirname, `../services/${args.packageName}.js`), service);

    console.log(`Created new Service [${args.packageName}]`)
  }
}

CreatePackageCommand.description = `Describe the command here
...
Extra documentation goes here
`


module.exports = CreatePackageCommand
