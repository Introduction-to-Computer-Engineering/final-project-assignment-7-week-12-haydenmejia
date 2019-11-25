# CPE 1040 - Introduction to Computer Engineering

 

## Assignment: Final Project

 

## Part I (Week 12, Assignment #7)

 

#### Week 12 - micro:bit I/O

 

### LEDs:

 

   1. The [micro:bit original-guide](original-guide.js) program utilizes  3 external LEDs of different colors that are secured  to a circuit board. The LEDs will light up, changing state one at a time. This video showcases the micro:bit program working, [micro:bit original-guide video](https://www.youtube.com/watch?v=UwvZo6rz1pk&feature=youtu.be).
   
   2. [micro:bit enable-matrix](enable-matrix.js) is a rewritten program of micro:bit original-guide that enables the LED matrix, this will display a heart and turn on/off the LEDs. Here a short video of its operation, [micro:bit enable-matrix video](http://imgur.com/gallery/ohaQHvc).
   
   3. [micro:bit twenty-eight](twenty-eight.js) is an extension of the screensaver program and adds the external LEDs into the changing patterns. Here is a link to showcase the project [micro:bit twenty-eight](http://imgur.com/gallery/VqaPnSS).
   
### Soil Sensor:

 

   1. This micro:bit digital-in project was previously released, here a video [micro:bit digital-in video](https://imgur.com/gallery/0Vkbxuh).
   
   2.  The project [micro:bit manual-calibration](manual-calibration.js) makes use of a soil sensor which returns a large value range i.e. 7-831. We then manually take this wide range and remap it to something more user friendly, 0-4. After mapping we periodically turn on power to the sensor and take a reading before turning it off soon after. This saves on power and sensor life. Then we use the reading to display 1 to 4 bars on the LED to symbolize moisture level.  [micro:bit manual calibration](http://imgur.com/gallery/gVGtsxj).
   
   3. The [micro:bit auto-calibration](auto-calibration.js) program uses a for loop to count from 0-5. Within the for loop lies a custom function, which depending on whether the loop is in a positive or negative count, displays an arrow direction, low/high, and then takes a sample and appends it to an array. Once the for loop is done, an average is calculated for the even values in the array (our lows) and an average is calculated for the odd values (highs) in the array as well. After the averages are calculated they are displayed as "low ### High ###" (### being the number calculated for each). This happens instead of "calibration succesfull" which takes a long time to scoll. The averages are then fed into a Math.map function as the high and low values to map from. Thus producing automatic mapping. from there the rest of "manual-calibration.js" is used to display moisture levels as bars on the LED disply. Here is a short video of the [micro:bit auto-calibration](http://imgur.com/gallery/YWcCOuL).

