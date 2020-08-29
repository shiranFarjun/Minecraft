createWord (){
    row:20;  
    col:20;
    nummatrix:{0:5 , 1:1 , 2:12 3:white ,4:try  ,5:bron ,6:ston }
}

optionGame{
    woodchopper,stone,Ashovel.
}


{   
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
    [2,2,3,3,3,2,3,3,3,3,2,2,2,2,2,2,2,2,2,2]
    [2,2,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2]
    [2,2,2,2,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2]
    [2,2,2,2,2,2,2,3,3,2,2,2,2,2,2,2,2,2,2,2]
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,2,2,2]    
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,2,2,2]
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,4,4,4,2,2,2]
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2]
    [2,2,2,2,4,2,2,2,2,2,2,2,2,2,2,5,2,2,2,2]
    [2,2,2,4,4,4,2,2,2,2,2,2,6,6,2,5,2,2,2,6]
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

}

step one:
1. Build a matrix within which there will be values ​​according to the image that appears in the same div.
2. The matrix can be constructed using a loop or "manual".
3. When the metric is built [] we will define for each position (0,0) (1,1) which is div.
4. Using classList.add we will create a class name that is the same for each div as a tile.
5. Depending on the value received for each location we will add another class depending on the image it displays.
6. We will insert each location into its "parent" using appendChild.


Before performing remove ():
1. Check what type of action the user is performing.
2. Change the position of the game board variable (1,2) and access the class name for that position.
Depending on the type of operation Decide on what type of nameClass the operation can be performed: for example a digging pen can only be on a class called ground. So what in the test will we do if (name of an array that holds the class names that can be changed). Includs (the class name for the point = location selected) and if the answer is yes then call the remove function.

second level:
Ramove Remove Function () ->
In order for us to remove a location we need to do a few steps in advance:
 1. Check with the help of a flag that we define it globally as false, whether the user clicks on action to perform
If so - (ie the variable changed to true before the function was called)
- We will perform on target.location change of background color to sky color.
- We will save the image that serves as the background for the target within a variable that is physically located in the tools.
- We will define the existing variable in the tool, its background will be the address of the image received from the target.
-


If not - display in console.log a message stating that the user did not choose to perform an action.




---------------------------------------------------------

Insert function:

We want that when the user clicks on the "Repository" button in the tool he will get access to the image that was last clicked on the screen and then when he clicks on the game board in the same place a new image will now appear.
Steps:
1. We will connect to the "listener" database - so that as soon as the user clicks on the database, we will go directly to the function that will be added.
2. Once the user clicks on the game board we will check the class of the target location.
If class = sky -> it means that the image can be replaced on it which is actually the action done.
- Replacing the image with an image that was in the repository.
- Update the class name to the name that was for the image.
3. In the image button we will send to a function that initializes the image to a blank image,
And also update flag = empty.