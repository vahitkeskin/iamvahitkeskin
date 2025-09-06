// Weather API - Free and No API Key Required
let selectedCity = localStorage.getItem('selectedCity') || 'Istanbul';
let currentWeather = null;
let userLocation = null;

// Get user's location by IP (no permission required)
async function getUserLocationByIP() {
  try {
    // First try to get location from IP
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    if (data.latitude && data.longitude) {
      // Get the most specific location available
      let locationName = data.city || data.region || data.country_name || 'Bilinmeyen Konum';
      
      // If we have both city and region, combine them for better specificity
      if (data.city && data.region && data.city !== data.region) {
        locationName = `${data.city}, ${data.region}`;
      }
      
      userLocation = {
        lat: parseFloat(data.latitude),
        lon: parseFloat(data.longitude),
        city: locationName,
        country: data.country_name || 'Bilinmeyen Ülke',
        region: data.region || '',
        timezone: data.timezone || 'Europe/Istanbul'
      };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      
      console.log('Location detected:', userLocation);
      
      // Update timezone based on user location
      updateTimeZone(userLocation.lat, userLocation.lon);
      
      // Get weather for user's location
      await getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
      return;
    }
  } catch (error) {
    console.log('IP location failed, trying alternative method:', error);
  }
  
  // Fallback: Try alternative IP geolocation service
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const ipData = await response.json();
    
    const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
    const geoData = await geoResponse.json();
    
    if (geoData.latitude && geoData.longitude) {
      // Get the most specific location available
      let locationName = geoData.city || geoData.region || geoData.country_name || 'Bilinmeyen Konum';
      
      // If we have both city and region, combine them for better specificity
      if (geoData.city && geoData.region && geoData.city !== geoData.region) {
        locationName = `${geoData.city}, ${geoData.region}`;
      }
      
      userLocation = {
        lat: parseFloat(geoData.latitude),
        lon: parseFloat(geoData.longitude),
        city: locationName,
        country: geoData.country_name || 'Bilinmeyen Ülke',
        region: geoData.region || '',
        timezone: geoData.timezone || 'Europe/Istanbul'
      };
      localStorage.setItem('userLocation', JSON.stringify(userLocation));
      
      console.log('Location detected (fallback):', userLocation);
      
      updateTimeZone(userLocation.lat, userLocation.lon);
      getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
      return;
    }
  } catch (error) {
    console.log('Alternative IP location failed');
  }
  
  // Final fallback: Use default city
  console.log('Using default city');
  getWeather(selectedCity);
}

async function getWeatherByCoords(lat, lon, cityName) {
  try {
    // Try wttr.in first (most reliable free API)
    const response = await fetch(`https://wttr.in/${lat},${lon}?format=j1&lang=tr`);
    const data = await response.json();
    
    if (data.current_condition && data.current_condition[0]) {
      const weather = data.current_condition[0];
      currentWeather = {
        temp: weather.temp_C,
        condition: weather.weatherDesc[0].value,
        icon: getWeatherIconFromWttr(weather.weatherCode),
        city: cityName || 'Konum'
      };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
      return;
    }
  } catch (error) {
    console.error('wttr.in error:', error);
  }
  
  // Fallback: Try open-meteo.com
  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=auto`);
    const data = await response.json();
    
    if (data.current_weather) {
      const weather = data.current_weather;
      currentWeather = {
        temp: Math.round(weather.temperature),
        condition: getWeatherDescriptionByCode(weather.weathercode),
        icon: getWeatherIconByCode(weather.weathercode),
        city: cityName || 'Konum'
      };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
      return;
    }
  } catch (error) {
    console.error('open-meteo error:', error);
  }
  
  // Final fallback: Try wttr.in with city name
  try {
    const response = await fetch(`https://wttr.in/${cityName}?format=j1&lang=tr`);
    const data = await response.json();
    
    if (data.current_condition && data.current_condition[0]) {
      const weather = data.current_condition[0];
      currentWeather = {
        temp: weather.temp_C,
        condition: weather.weatherDesc[0].value,
        icon: getWeatherIconFromWttr(weather.weatherCode),
          city: data.nearest_area[0].areaName[0].value || cityName || 'Konum'
        };
        updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
      }
    } catch (fallbackError) {
      console.error('Wttr.in error:', fallbackError);
      
      // Final fallback: Use Open-Meteo
      try {
        const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`);
        const data = await response.json();
        
        if (data.current) {
          currentWeather = {
            temp: Math.round(data.current.temperature_2m),
            condition: getWeatherDescriptionByCode(data.current.weather_code),
            icon: getWeatherIconByCode(data.current.weather_code),
            city: cityName || 'Konum'
          };
          updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
        }
      } catch (finalError) {
        console.error('All weather APIs failed:', finalError);
        updateWeatherDisplay('N/A', 'Hava durumu alınamadı', '❓', cityName || 'Konum');
      }
    }
  }
}

async function getWeather(city) {
  try {
    // Use free weather API for city
    const response = await fetch(`https://wttr.in/${encodeURIComponent(city)}?format=j1&lang=tr`);
    const data = await response.json();
    
    if (data.current_condition && data.current_condition[0]) {
      const weather = data.current_condition[0];
      currentWeather = {
        temp: weather.temp_C,
        condition: weather.weatherDesc[0].value,
        icon: getWeatherIconFromWttr(weather.weatherCode),
        city: data.nearest_area[0].areaName[0].value || city
      };
      updateWeatherDisplay(currentWeather.temp, currentWeather.condition, currentWeather.icon, currentWeather.city);
    }
  } catch (error) {
    console.error('Weather fetch error:', error);
    updateWeatherDisplay('N/A', 'Hava durumu alınamadı', '❓', city);
  }
}

function getWeatherDescription(weatherText) {
  const descriptions = {
    'Sunny': 'Güneşli',
    'Partly cloudy': 'Parçalı bulutlu',
    'Cloudy': 'Bulutlu',
    'Overcast': 'Kapalı',
    'Mist': 'Sisli',
    'Patchy rain possible': 'Yağmur ihtimali',
    'Patchy snow possible': 'Kar ihtimali',
    'Patchy sleet possible': 'Karla karışık yağmur',
    'Patchy freezing drizzle possible': 'Donan yağmur',
    'Thundery outbreaks possible': 'Gök gürültülü',
    'Blowing snow': 'Tipi',
    'Blizzard': 'Kar fırtınası',
    'Fog': 'Sis',
    'Freezing fog': 'Donan sis',
    'Patchy light drizzle': 'Hafif çisenti',
    'Light drizzle': 'Çisenti',
    'Freezing drizzle': 'Donan çisenti',
    'Heavy freezing drizzle': 'Şiddetli donan çisenti',
    'Patchy light rain': 'Hafif yağmur',
    'Light rain': 'Yağmur',
    'Moderate rain at times': 'Orta şiddetli yağmur',
    'Moderate rain': 'Orta şiddetli yağmur',
    'Heavy rain at times': 'Şiddetli yağmur',
    'Heavy rain': 'Şiddetli yağmur',
    'Light freezing rain': 'Hafif donan yağmur',
    'Moderate or heavy freezing rain': 'Donan yağmur',
    'Light sleet': 'Karla karışık yağmur',
    'Moderate or heavy sleet': 'Şiddetli karla karışık yağmur',
    'Patchy light snow': 'Hafif kar',
    'Light snow': 'Kar',
    'Patchy moderate snow': 'Orta şiddetli kar',
    'Moderate snow': 'Orta şiddetli kar',
    'Patchy heavy snow': 'Şiddetli kar',
    'Heavy snow': 'Şiddetli kar',
    'Ice pellets': 'Dolu',
    'Light rain shower': 'Hafif sağanak',
    'Moderate or heavy rain shower': 'Sağanak',
    'Torrential rain shower': 'Şiddetli sağanak',
    'Light sleet showers': 'Karla karışık sağanak',
    'Moderate or heavy sleet showers': 'Şiddetli karla karışık sağanak',
    'Light snow showers': 'Kar sağanağı',
    'Moderate or heavy snow showers': 'Şiddetli kar sağanağı',
    'Light showers of ice pellets': 'Dolu sağanağı',
    'Moderate or heavy showers of ice pellets': 'Şiddetli dolu sağanağı',
    'Patchy light rain with thunder': 'Gök gürültülü hafif yağmur',
    'Moderate or heavy rain with thunder': 'Gök gürültülü yağmur',
    'Patchy light snow with thunder': 'Gök gürültülü hafif kar',
    'Moderate or heavy snow with thunder': 'Gök gürültülü kar'
  };
  
  return descriptions[weatherText] || weatherText;
}

function getWeatherIconFromCode(iconCode) {
  // OpenWeatherMap icon codes
  const iconMap = {
    '01d': '☀️', // clear sky day
    '01n': '🌙', // clear sky night
    '02d': '⛅', // few clouds day
    '02n': '☁️', // few clouds night
    '03d': '☁️', // scattered clouds
    '03n': '☁️', // scattered clouds
    '04d': '☁️', // broken clouds
    '04n': '☁️', // broken clouds
    '09d': '🌧️', // shower rain
    '09n': '🌧️', // shower rain
    '10d': '🌦️', // rain day
    '10n': '🌧️', // rain night
    '11d': '⛈️', // thunderstorm
    '11n': '⛈️', // thunderstorm
    '13d': '🌨️', // snow
    '13n': '🌨️', // snow
    '50d': '🌫️', // mist
    '50n': '🌫️'  // mist
  };
  
  return iconMap[iconCode] || '🌤️';
}

function getWeatherIconFromWttr(weatherCode) {
  // Wttr.in weather codes
  const iconMap = {
    '113': '☀️', // Sunny
    '116': '⛅', // Partly cloudy
    '119': '☁️', // Cloudy
    '122': '☁️', // Overcast
    '143': '🌫️', // Mist
    '176': '🌧️', // Patchy rain
    '179': '🌨️', // Patchy snow
    '182': '🌨️', // Patchy sleet
    '185': '🌨️', // Patchy freezing drizzle
    '200': '⛈️', // Thundery outbreaks
    '227': '🌨️', // Blowing snow
    '230': '🌨️', // Blizzard
    '248': '🌫️', // Fog
    '260': '🌫️', // Freezing fog
    '263': '🌧️', // Patchy light drizzle
    '266': '🌧️', // Light drizzle
    '281': '🌨️', // Freezing drizzle
    '284': '🌨️', // Heavy freezing drizzle
    '293': '🌧️', // Patchy light rain
    '296': '🌧️', // Light rain
    '299': '🌧️', // Moderate rain at times
    '302': '🌧️', // Moderate rain
    '305': '🌧️', // Heavy rain at times
    '308': '🌧️', // Heavy rain
    '311': '🌨️', // Light freezing rain
    '314': '🌨️', // Moderate or heavy freezing rain
    '317': '🌨️', // Light sleet
    '320': '🌨️', // Moderate or heavy sleet
    '323': '🌨️', // Patchy light snow
    '326': '🌨️', // Light snow
    '329': '🌨️', // Patchy moderate snow
    '332': '🌨️', // Moderate snow
    '335': '🌨️', // Patchy heavy snow
    '338': '🌨️', // Heavy snow
    '350': '🌨️', // Ice pellets
    '353': '🌧️', // Light rain shower
    '356': '🌧️', // Moderate or heavy rain shower
    '359': '🌧️', // Torrential rain shower
    '362': '🌨️', // Light sleet showers
    '365': '🌨️', // Moderate or heavy sleet showers
    '368': '🌨️', // Light snow showers
    '371': '🌨️', // Moderate or heavy snow showers
    '374': '🌨️', // Light showers of ice pellets
    '377': '🌨️', // Moderate or heavy showers of ice pellets
    '386': '⛈️', // Patchy light rain with thunder
    '389': '⛈️', // Moderate or heavy rain with thunder
    '392': '⛈️', // Patchy light snow with thunder
    '395': '⛈️'  // Moderate or heavy snow with thunder
  };
  
  return iconMap[weatherCode] || '🌤️';
}

function getWeatherDescriptionByCode(code) {
  const descriptions = {
    0: 'Açık',
    1: 'Az bulutlu',
    2: 'Parçalı bulutlu',
    3: 'Kapalı',
    45: 'Sisli',
    48: 'Donan sisli',
    51: 'Hafif çisenti',
    53: 'Çisenti',
    55: 'Şiddetli çisenti',
    56: 'Donan hafif çisenti',
    57: 'Donan şiddetli çisenti',
    61: 'Hafif yağmur',
    63: 'Yağmur',
    65: 'Şiddetli yağmur',
    66: 'Donan hafif yağmur',
    67: 'Donan şiddetli yağmur',
    71: 'Hafif kar',
    73: 'Kar',
    75: 'Şiddetli kar',
    77: 'Kar taneleri',
    80: 'Hafif sağanak',
    81: 'Sağanak',
    82: 'Şiddetli sağanak',
    85: 'Hafif kar sağanağı',
    86: 'Şiddetli kar sağanağı',
    95: 'Gök gürültülü',
    96: 'Gök gürültülü dolu',
    99: 'Şiddetli gök gürültülü dolu'
  };
  
  return descriptions[code] || 'Bilinmeyen';
}

function getWeatherIconByCode(code) {
  const icons = {
    0: '☀️', // Açık
    1: '🌤️', // Az bulutlu
    2: '⛅', // Parçalı bulutlu
    3: '☁️', // Kapalı
    45: '🌫️', // Sisli
    48: '🌫️', // Donan sisli
    51: '🌧️', // Hafif çisenti
    53: '🌧️', // Çisenti
    55: '🌧️', // Şiddetli çisenti
    56: '🌨️', // Donan hafif çisenti
    57: '🌨️', // Donan şiddetli çisenti
    61: '🌧️', // Hafif yağmur
    63: '🌧️', // Yağmur
    65: '🌧️', // Şiddetli yağmur
    66: '🌨️', // Donan hafif yağmur
    67: '🌨️', // Donan şiddetli yağmur
    71: '🌨️', // Hafif kar
    73: '🌨️', // Kar
    75: '🌨️', // Şiddetli kar
    77: '🌨️', // Kar taneleri
    80: '🌧️', // Hafif sağanak
    81: '🌧️', // Sağanak
    82: '🌧️', // Şiddetli sağanak
    85: '🌨️', // Hafif kar sağanağı
    86: '🌨️', // Şiddetli kar sağanağı
    95: '⛈️', // Gök gürültülü
    96: '⛈️', // Gök gürültülü dolu
    99: '⛈️'  // Şiddetli gök gürültülü dolu
  };
  
  return icons[code] || '🌤️';
}

function updateWeatherDisplay(temp, condition, icon, city) {
  const weatherIcon = $('#weather-icon');
  const weatherTemp = $('#weather-temp');
  const weatherDesc = $('#weather-desc');
  const currentCity = $('#current-city');
  
  if (weatherIcon) weatherIcon.textContent = icon;
  if (weatherTemp) weatherTemp.textContent = `${temp}°C`;
  if (weatherDesc) weatherDesc.textContent = condition;
  if (currentCity) {
    // Show the most specific location available
    currentCity.textContent = city || 'Konum alınıyor...';
  }
  
  console.log('Weather updated for:', city, `${temp}°C`, condition);
}

function setupWeather() {
  // Get user location by IP (no permission required)
  getUserLocationByIP().catch(error => {
    console.error('Weather setup failed:', error);
    // Fallback to default city
    getWeather(selectedCity);
  });
  
  // Update weather every 30 minutes
  setInterval(() => {
    if (userLocation) {
      getWeatherByCoords(userLocation.lat, userLocation.lon, userLocation.city);
    } else {
      getWeather(selectedCity);
    }
  }, 30 * 60 * 1000);
}
