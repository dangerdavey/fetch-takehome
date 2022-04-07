
# fetch-takehome

This is a basic RESTful API implementation for managing a user's rewards points.

## Outline
A user recieves points from specific payers. The User can spend their available 
points whenever. Those points are spent from oldest transaction date to newest
without considering which payer they came from. 

The API handles this by allowing http requests to add transactions, 
spend points, and to retrieve data about payers and the points they've 
provided.
 
* One can add a transaction via a `POST` to the `/points` route by specifying the `payer`, the amount of `points` (negative or positive), and the `timestamp`.

* One can also spend points via a `POST` to the `/points/spend` route by specifying the `payer` as well as the amount of `points`

* One can return all payer-point balances via a `GET` to the `/points` route.

## Usage

This project runs with [Node.js](https://nodejs.org/) and requires you to have it installed and up-to-date.

Please click on the Node.js hyperlink above to go to the Node website and choose your download. 
Follow the installation instructions or check if you have node installed via this command:
```
node --version
```

### Step 1: Clone or Download repository
If you have git installed, clone this repo on your machine by navigating via command line to your desired folder and typing:
```
git clone https://github.com/dangerdavey/fetch-takehome.git
```

If you do not have git installed then either download and install git or you can download this repository in the upper right as a zip file and unzip it into your desired folder.

### Step 2: Navigate to folder and install dependencies
Either open the command line in the project folder or navigate to the folder from the command line using the command below. You need to replace the path with that of your folder containing the index.js file.
```
cd /your/path/to/the/folder/fetch-takehome
```
Once you are in the project folder/directory, run this command:
```
npm install
```
This will install all of the dependencies listed at the bottom of this README.

### Step 3: Start the Server
You can start the local server by running the command below in the same command line window as before:
```
npm start
```
The server should now be running and it should indicate that via a message on the command line. You should see `it's working! http://localhost:8080` printed to the screen.
### Step 4: 
