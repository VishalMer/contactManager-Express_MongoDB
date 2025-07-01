//@desc Get all contacts
//@route GET/api/contacts
//access public
const getContacts = (req, res) => {
    res.status(200).json({message:"Get all contacts"});
};

//@desc create new contact
//@route POST/api/contacts
//access public
const CreateContact = (req, res) => {
    res.status(201).json({message:"Created a contact"});
};

//@desc Get contact
//@route GET/api/contacts/:id
//access public
const getContact = (req, res) => {
    res.status(200).json({message:`Get contact for ${req.params.id}`});
};

//@desc Update contact
//@route PUT/api/contacts/:id
//access public
const updateContact = (req, res) => {
    res.status(200).json({message:`Updated contact for ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE/api/contacts/:id
//access public
const deleteContact = (req, res) => {
    res.status(200).json({message:`Deleted contact for ${req.params.id}`});
};

module.exports = {getContacts, CreateContact, getContact, updateContact, deleteContact};