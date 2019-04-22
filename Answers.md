1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

The store is where your application state is stored. It holds the state of your application in one tree so you can access it from any component and pass data around more easily. 

Actions contain an action type and sometimes some additional data to be passed on called a payload. Actions are passed on to the reducers. The type is what tells the reducer what to do next while the payload is the data for the reducer to use if the reducer makes use of data.

Reducers create the new version of the state. They are the functions that connect the actions and the store. 

When an action is dispatched it goes to the reducer. The reducer does what it's supposed to do for that data type and returns the new version of the state which is saved in the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Your application state the main data in your app. Your component state is only available in that component and child components the data is passed down to.

If the data needs to be shared across many components the application state is a good place for it. Application state should be used for data that needs to persist through routes as well.

Component state is good for things that don't affect the app as a whole. Things like form inputs work well in component state because you generally won't be using that information anywhere else in the app and once the info is submitted it can be added to the redux store.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows you to make use of promises. Actions are by default synchronous and redux-thunk allows us to have asynchronous actions. 
