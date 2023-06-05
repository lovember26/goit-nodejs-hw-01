const contactsService = require("./contacts");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contactList = await contactsService.listContacts();
      console.log(contactList);
      break;

    case "get":
      const contactItem = await contactsService.getContactById(id);
      console.log(contactItem);
      break;

    case "add":
      const newContact = await contactsService.addContact(name, email, phone);
      console.log(newContact);
      break;

    case "remove":
      const removedContact = await contactsService.removeContact(id);
      console.log(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

invokeAction(argv);
