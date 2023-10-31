require('dotenv').config();

const fetch = require('node-fetch');

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

async function getPing() {
  const tokenResponse = await fetch('https://connectapi.garmin.com/v3/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
  });

  if (tokenResponse.ok) {
    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    const pingResponse = await fetch('https://connectapi.garmin.com/v3/ping', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (pingResponse.ok) {
      const pingData = await pingResponse.json();
      console.log('Ping Response:', pingData);
    } else {
      console.error('Error fetching ping data:', pingResponse.statusText);
    }
  } else {
    console.error('Error fetching access token:', tokenResponse.statusText);
  }
}

getPing();
