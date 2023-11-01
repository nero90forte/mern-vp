import fetch from 'node-fetch';

const clientId = "512a889e-af52-4575-90fe-4b58313f2a04";
const clientSecret = "0Rfm7a636xd9JpizLA58HprXe8URsK7max";

// bodycomposition
export async function getPingbodycomposition() {
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

// dailies
export async function getPingdailies() {
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

// deregistration
export async function getPingderegistration() {
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

//   epochs
export async function getPingepochs() {
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

//   pulseox
export async function getPingpulseox() {
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

//   respiration
export async function getPingrespiration() {
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

//   sleeps
export async function getPingsleeps() {
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


//   stress
export async function getPingstress() {
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

//   thirdpartydailies
export async function getPingthirdpartydailies() {
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

//   user
export async function getPinguser() {
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

//   usermetrics
export async function getPingusermetrics() {
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

//   bloodpressure 
export async function getPingbloodpressure() {
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

//   hrvsummary
export async function getPinghrvsummary() {
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

//   healthsanpshot
export async function getPinghealthsanpshot() {
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

getPingbodycomposition();
getPingdailies();
getPingderegistration;
getPingepochs();
getPingpulseox();
getPingrespiration();
getPingsleeps();
getPingstress();
getPingthirdpartydailies();
getPinguser();
getPingusermetrics();
getPingbloodpressure();
getPinghrvsummary();
getPinghealthsanpshot();