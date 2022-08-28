import  UserList from "./userlist.js";
const resolvers = {


    
    Query: {
        getUsers:() => {
            console.log("someone hit get users");

            return UserList;    
        },

        getUser:(parent, args, context, info) => {
            console.log("someone hit get user on: ", args.name);

            var user = UserList.find(obj => {
                return obj.username === args.name
              });

            return user;
        }
    },



    Mutation: {
        createUser:(parent, args) => {
            console.log("someone hit create user");
            if (UserList.length >20) {
                return
            }

            var lastId = parseInt(UserList[UserList.length - 1].id) ?? 0;
            UserList.push({
                id: lastId++,
                username: args.input.username,
                chatScore: args.input.chatScore,
                attendanceRating: args.input.attendanceRating
            });
            
            return UserList[UserList.length -1];
        },

        deleteUser:(parent, args) => {
            console.log("someone hit delete user");

            var user = UserList.find(function (user) {
                return user.id == args.input;
             });

             UserList.splice(UserList.indexOf(user) , 1);

            return user;
        }
    },
}

export default resolvers;