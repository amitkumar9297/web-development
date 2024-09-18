const http = require("http");
const fs = require("fs");
const requests = require("requests");
const querystring = require("querystring");

// Load area.json to get coordinates
const areas = require("../area.json");

const homeFile = fs.readFileSync("../app/index.html", "utf-8");

const port = 8000 || process.env.PORT;
const host = "127.0.0.1";

// Function to replace placeholders in HTML
const replaceVal = (tempVal, orgVal) => {
  let temperature = tempVal.replace(
    "{%tempval%}",
    (orgVal.main.temp - 273.15).toFixed(2)
  );
  temperature = temperature.replace(
    "{%tempmin%}",
    (orgVal.main.temp_min - 273.15).toFixed(2)
  );
  temperature = temperature.replace(
    "{%tempmax%}",
    (orgVal.main.temp_max - 273.15).toFixed(2)
  );
  temperature = temperature.replace("{%location%}", orgVal.name);
  temperature = temperature.replace("{%country%}", orgVal.sys.country);
  return temperature;
};

// Function to find coordinates based on city name
const findCoordinates = (cityName) => {
  return areas.find(
    (area) => area.name.toLowerCase() === cityName.toLowerCase()
  );
};

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    // Serve the search page (default GET request)
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(homeFile);
    res.end();
  } else if (req.method === "POST") {
    // Handle the form submission (POST request)
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const postData = querystring.parse(body);
      const cityName = postData.city;

      const coordinates = findCoordinates(cityName);
      if (coordinates) {
        const lat = coordinates.lat;
        const lon = coordinates.lon;

        // OpenWeather API URL with coordinates
        const apiKey = "f4dc4ac509932489072739af08e32f66"; // Replace with your API key
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

        requests(apiUrl)
          .on("data", (chunk) => {
            const objData = JSON.parse(chunk);
            const arrData = [objData];
            let realTimeData = arrData
              .map((val) => replaceVal(homeFile, val))
              .join("");

            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(realTimeData);
          })
          .on("end", (err) => {
            if (err) return console.log("connection closed due to error", err);
            res.end();
          });
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.write("<h1>City not found in database!</h1>");
        res.end();
      }
    });
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
