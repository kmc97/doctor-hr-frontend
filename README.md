

# doctor-hr-frontend
Basic Heart Rate Viewer

UI that interfaces with previous assignments server connected to MongosDB database. To use, make sure that both the MongosDB and Gunicorn connections are up and running on a screen in your virtual machine (you will be connecting to http://vcm-3738.vm.duke.edu:5000/)

Next, you must run "npm run start" to launch the React App.

To use, simply type the user email into the text box, then click the button to retrieve the data. A table showing all heart rates and the time stamps of the heart rates is created. In addition, the maximum heart rate value is returned at the top of the table. The UI looks like this after an email has successfully been pulled from the database:

![Alt text](https://github.com/kmc97/doctor-hr-frontend/blob/master/screenshot.png "Optional Title")


A maybe less important feature of the UI is the fun button on the top of the interface, that you may press as you please for tons of immediate fun.
