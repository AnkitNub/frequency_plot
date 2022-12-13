# Frequency Plot

### Description 
Frontend React project which fetches a text file and finds the 20 most frequent words and plots them in a histogram.
(https://639865abb3b4120008c4e15c--ankitnub-frequency-plot.netlify.app/)

### Working 
1. Upon Clicking the `submit` button the site fetches the data from `.txt` file and parses the data into a array which is mapped with the frequency of words occurence in the file.
2. Then using the `react-chartjs-2` library we plot the histogram of Words vs Frequency.
3. The Histogram is the pictorial represntation of the parsed data. 
4. X-axis - Words, Y-axis - Frequency of words.



### How to run project.
1. Clone the repository. <br/>
2. Open repository in a code editor. <br/>
3. Run `npm install` <br/>
4. Run `npm start` to start the script. <br/>

### Deploy to Netlify

Want to deploy immediately? Click this button

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/AnkitNub/frequency_plot)

Clicking this button will create a new repo for you that looks exactly like this one, and sets that repo up immediately for deployment on Netlify.
