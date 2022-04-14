# CP1291-jQueryPlugin
Advanced JavaScript Course Project - jQuery Plugin

## Description
# Download & Installation
## Step 1:
* Download the files located in the git repo https://github.com/LauraJohnston20/CP1291-CourseProject-jQueryPlugin or [click here](https://github.com/LauraJohnston20/CP1291-CourseProject-JQueryPlugin/archive/refs/heads/main.zip).
* Unzip the downloaded folder and add the following files to the existing website: 
  * [app.js](https://github.com/LauraJohnston20/CP1291-CourseProject-JQueryPlugin/blob/main/app.js)
  * [jquery.conversion.popup.js](https://github.com/LauraJohnston20/CP1291-CourseProject-JQueryPlugin/blob/main/jquery.conversion-popup.js)
* To demo the plugin, launch [index.html](https://github.com/LauraJohnston20/CP1291-CourseProject-JQueryPlugin/blob/main/index.html) in your default browser.
* 
## Step 2:
Add the following HTML tags to your HTML file:
```javascript
     <div id="volumeConversion">
        <label for="volume_input"> Volume: </label>
        <input type="text" id="initial_volume">
        <select id="initial_unit">
            <option>Initial Unit</option>
            <option>Millilitre</option>
            <option>Teaspoon</option>
            <option>Tablespoon</option>
            <option>Fluid ounce</option>
            <option>Pint</option>
            <option>Cup</option>
            <option>Litre</option>
            <option>Quart</option>
            <option>Gallon</option>
        </select>
        <label for="to"> to </label>
        <select id="final_unit">
            <option>Final Unit</option>
            <option>Millilitre</option>
            <option>Teaspoon</option>
            <option>Tablespoon</option>
            <option>Fluid ounce</option>
            <option>Pint</option>
            <option>Cup</option>
            <option>Litre</option>
            <option>Quart</option>
            <option>Gallon</option>
        </select>
        <input type="button" id="convert" value="Convert">
    </div>
```
Add the following script tags to your HTML file:
```javascript
    <script src="http://code.jquery.com/jquery-3.6.0.min.js" type="text/javascript"></script> 
    <!--YOUR JS FILE-->
    <script src="jquery.conversion-popup.js" type="text/javascript"></script>
    <script src="app.js" type="text/javascript"></script>
```
## Step 3:
Customize the popup overlay

# Using the Plugin
## Step 1:
Enter the original volume and select original measurement from the first dropdown list.

![image](https://user-images.githubusercontent.com/95102375/162336423-dd15a9e6-5275-412f-b249-1fbfdef52f1c.png)

## Step 2:
After an original volume and measurement have been selected, choose the final measurement to be converted to from the second dropdown list. Click Convert button.

![image](https://user-images.githubusercontent.com/95102375/162336453-be6f378a-0e32-4a5c-a0d3-fe612d7dedb2.png)

* Note: Original volume must be a valid decimal number and both the initial and final measurements must be selected before 
clicking enter. Otherwise an alert message will be displayed advising of the correction to be made.
## Step 3: 
Once the Convert button is clocked, the popup overlay will be displayed over the current webpage. This will display the correct conversion to scale the measurement. To close the popup, the "X" located in the upper right hand corner of the webpage must be clicked. The popup must be closed to restart the process and generate another conversion.

![image](https://user-images.githubusercontent.com/95102375/162336595-454490a9-3d52-4617-b8fa-1ec7255c059d.png)

