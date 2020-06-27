1. What problem does the context API help solve?
   Context API helps in passing data across all levels of the application - specifically prop drilling.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

   Reducers are in charge of managing the applications state.
   Actions are a description of what happened in the application.
   The store is an object that allows components to share state - just like a database.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

- Application state is state that is shared with all components. A good use of application state is when we want to create a CRUD application.
- Component State is state that is shared within a component. A good use of component state is state that is managing fields in a form.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   Redux thunk is a middleware that allow us to return async functions and dispatch actions. Since actions don't really do anything - they're just plain objects - we can't really make use of them. If we want an action to do something, the code needs to live inside of the thunk function which let's us bundle some work to be done.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux is my favorite so far. In my opinion it's much easier to manage state and it doesn't trigger a re-render on every update like Context.
