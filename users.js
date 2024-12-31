let users = []

const add_user = ({ id, name, room, color }) => {
    if (!name || !room) {
        return { error: "Invalid input: name or room is missing" }; 
    }

    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const userExist = users.find(usr => usr.room === room && usr.name === name);

    if (userExist) {
        return { error: "User with this name is already exists" }; // Fixed typo: "error" instead of "erorr"
    }

    const user = { id, name, room, color };
    users.push(user);
    return { user };
};

const remove_user = (id) => {
    const index = users.findIndex((usr) => usr.id === id)

    if(index !== -1) {
        return users.splice(index, 1)[0]
    }
}

const get_user = (id) => users.find(usr => usr.id === id)

const get_room_users = (room) => users.filter(usr => usr.room === room)

module.exports = { add_user, remove_user, get_user, get_room_users }