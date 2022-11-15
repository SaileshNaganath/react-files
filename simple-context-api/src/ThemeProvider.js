import React ,{useState} from 'react'

export const ThemeContext = React.createContext(false)

function ThemeProvider({children}){
  const [toggle, setToggle] = useState(false)
  const toggleFunction = ()=>{
    setToggle(!toggle);
  }
  return(
    <ThemeContext.Provider value = {{toggle, toggleFunction}}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;



/* The code starts by creating a new React context.
 
This is a special type of variable that allows you to keep track of state across different parts of your code.

The context will be used later in the code to store information about the current theme.

Next, the code creates two variables: toggle and setToggle .

These variables will be used to store information about whether or not the theme is currently being displayed.

The next part of the code is where the magic happens.

It defines a function called toggleFunction .

This function will be responsible for changing the state of toggle based on user input.

Finally, the ThemeProvider component is created and assigned as an attribute to the context object.

This component will contain all of the logic necessary to display and change themes.

The code creates a context which will be used to store the state of the toggle function.

The context will also be used to render the children of the ThemeProvider .

The useState() function is used to store the state of the toggle function.

When the code is executed, it will first set the state of the toggle to false .

Then, it will create a function called toggleFunction which will take one parameter - which will be set to true when the state of the toggle is false and false when it is true .

Finally, it returns a React component called ThemeContext.Provider which renders a list of children.*/