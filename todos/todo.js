import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';


Todos = new Mongo.Collection("todos");

Todos.insert({
    name: "Walk the dog",
    completed: false,
    createdAt: new Date()
});


Todos.insert({
    name: "Walk the cat",
    completed: false,
    createdAt: new Date()
});


