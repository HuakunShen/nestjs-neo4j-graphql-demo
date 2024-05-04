import jwt from "jsonwebtoken";
// const token = await jwt.sign({ sub: "9ef1d82a-9d49-488a-acc2-5cffb8a1be95" }, 'secret');

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
console.log(token);
