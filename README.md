# Follower Goal Widget for Kick Streaming Platform

A customizable **Follower Goal Widget** designed specifically for the **Kick streaming platform**. This widget tracks and displays the follower count progress in real-time. It was created as a solution to issues with existing widgets (like BotRix) not working properly on some channels. Now, you can easily add a professional-looking follower goal to your stream!

## 📋 Features
- **Real-Time Follower Count**: Tracks the number of followers on your Kick channel.
- **Customizable Goal**: Set your follower goal and watch the progress live!
- **Simple Integration**: Easy to set up and use with OBS or any other streaming software that supports web sources.
- **Responsive Design**: Works on any screen size, ensuring a clean look for your stream.

## ⚙️ Requirements
- **Node.js**: This project is built using Node.js. Make sure you have it installed on your system.

## 🚀 Installation & Setup

Follow these simple steps to get your Follower Goal Widget up and running:

### 1. Clone the Repository
First, clone this repository to your local machine:
```bash
git clone https://github.com/yourusername/follower-goal-widget.git
cd follower-goal-widget
```

### 2. Install Dependencies
Open your terminal (or Command Prompt) in the project folder and run the following command to install the required packages:
```bash
npm install
```
This will install the necessary dependencies, including **Express** (for the server) and **Puppeteer** (for scraping follower data).

### 3. Configure Your Settings
Before starting the widget, open the `config.json` file and replace the following values:
- `kickUsername`: Your Kick streaming username. The follower count will be fetched for this username.
- `title`: The title of the widget. This title will be displayed on the widget.
- `follwerGoal`: Your follower goal.
- `design`: You can add your designs to `public` folder and use them with this setting.
- `barColor`: The color of the follower progress bar. "#4caf50" is a green color, but you can choose any color code you like.
- `textColor`: The color of the text on the widget. "#FFFFFF" is white, but you can change it to any color code.
- `port`: The port number where the web server will run. You can access the widget using this port.
- `refreshInterval`: The interval (in milliseconds) at which the follower count will be updated. This value is set to 10 seconds (10000 ms) but can be adjusted as needed.


Example:
```json
{
  "kickUsername": "rootcf",
    "title": "Follower Goal",
    "followerGoal": 100,
    "design": "normal",
    "barColor": "#4caf50",
    "textColor": "#FFFFFF",
    "port": 3000,
    "refreshInterval": 10000
}
```

### 4. Start the Widget
Once everything is set up, run the following command to start the widget:
```bash
node app.js
```

### 5. Add WebSource in OBS
1. Open OBS (or any streaming software).
2. Add a new **WebSource**.
3. Set the URL to `http://localhost:3000`.
4. Customize the widget's size and position on your stream layout.

And that's it! Your follower goal widget is now live and updating in real-time!

## 🖥️ How It Works
The widget uses **Puppeteer** to scrape the follower count from your Kick channel. It updates the follower count every 15 seconds (or as configured) and displays the progress towards your goal. The widget is served via a local Express server, which you can access using the URL `http://localhost:3000`.

## 🔧 Customization
You can easily customize the look and feel of the widget by modifying the HTML and CSS files located in the `html/` and `public/` directories. Adjust the colors, fonts, and layout to match your streaming style.

## 🐞 Troubleshooting
- **CSS not loading**: Make sure your CSS file is in the `public` directory and `design` setting changed.
- **Follower count not updating**: Check if your Kick username is correctly configured in `config.json` and that Puppeteer can access the Kick website without issues.

## 📄 License
This project is open-source and licensed under the MIT License. Feel free to contribute or modify it for your needs.
```
