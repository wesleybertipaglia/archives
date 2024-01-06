// contact object
function Contact(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
}

// contact list 
const contactList = document.querySelector("#contact-list tbody");
const contacts = [];
const contactElementNode = [];

// initialize app
let id = 0;
function initialize() {
    returnTotal();
}

initialize();

// return the total of contacts
function returnTotal() {
    let total = document.querySelector("#total");
    total.innerHTML = contacts.length;
    return total;
}

// form controller
const contactForm = document.querySelector("#contact-form");
contactForm.onsubmit = function (e) {
    e.preventDefault();
    createContact();
};

// create contact
function createContact() {
    let contactName = document.querySelector("input[name='name']").value;
    let contactEmail = document.querySelector("input[name='email']").value;

    if (contactName !== "" && contactEmail !== "") {
        const contact = new Contact(id, contactName, contactEmail);
        contacts.push(contact);
        addContactToNode(contact);
        console.log("created contact: ", contact);
        id++;
    } else {
        window.alert("Please input the contact information");
        throw new Error("Please input the contact information");
    }
}

// add contact to the list
function addContactToNode(contact) {
    const contactElement = document.createElement('tr');
    contactElement.className = 'contact-item';

    contactElement.innerHTML = `
      <td class="contact-id">${contact.id}</td>
      <td class="contact-name">${contact.name}</td>
      <td class="contact-email">${contact.email}</td>
      <td class="contact-email"><span class="btn-delete" title="Delete this contact">Delete</span></td>
    `;
    contactList.appendChild(contactElement);
    contactElementNode.push(contactElement);
    console.log("Appended contact to the list: ", contactList);
    addDeleteListeners(contactElement);
    returnTotal();
}

// delete buttons 
function addDeleteListeners(contactElement) {
    const deleteButton = contactElement.querySelector('.btn-delete');
    console.log("Add delete button: ", deleteButton);
    deleteButton.addEventListener('click', function () {
        deleteContact(contactElement);
    });
}

function deleteContact(contactElement) {
    const index = contactElementNode.indexOf(contactElement);
    console.log("Deleted contact: ", contacts[index]);
    contacts.splice(index, 1);
    id = contacts[contacts.length - 1].id + 1;
    contactElementNode.splice(index, 1);
    contactElement.remove();
    returnTotal();
}
