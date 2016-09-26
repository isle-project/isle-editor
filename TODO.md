TODO
====

1. Needed learning components:
    - A question component presenting students with two lists and are asking them to find pairs that belong together. Could use react-dnd to have a draggable interface.
    - ...
2. Figure out a way to open the R help pages for a specific function or topic, similar to how `help()` and `?` work inside the regular R shell or RStudio
3. Make data persistent so that students don't lose their progress once they refresh the page. Options: Storing in local storage, in the Mongo database on our server. Others?
4. Landing page before start of lesson showing the title, brief overview of content, learning objectives. Should include a way for users to clear the ISLE variables in localStorage.
5. Given student feedback, the free-text-question component should allow for re-submissions of answers by students. 
6. Figure out a good test setup and add unit tests to the project
    - Investigate [enzyme](https://github.com/airbnb/enzyme)
7. Many of the react components need properties for event handlers (onClick, onChange)...
8. Open questions:
    - Ways to decrease the use of global variables? 
    - Event system for communication between sibling components?
    

