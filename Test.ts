/ challenge.ts
// Déclarer une interface User avec des propriétés typées
interface User {
    name: string;
    age?: number;
    birthday?: string;
}
// Déclarer des types pour le paramètre et le retour de la fonction prettyPrintWilder
const prettyPrintWilder = (users: Array<User>): void => {

    users.map((user: User) => {
        if ((user.age)) {
            console.log(`${user.name} is ${user.age} years old`);
        }
        else {
            console.log(`${user.name} is born on ${user.birthday}`); // Adapter user2 pour qu'il n'affiche plus d'erreur
        }
    });
};

// Typer wilders
const wilders: User[] = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);

