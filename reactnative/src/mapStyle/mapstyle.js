//  customized map style
const mapJson=[
  // set the color of the map's overall geometry
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  // hide all icon labels
  {
    "elementType": "labels.icon",
    "stylers": [
      {
          "visibility": "off"
      }
    ]
  },
  // set the color of all text labels
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  // set the color of the outline of text labels
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  // set the color of the text labels for land parcels
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  // set the color of man-made landscape elements
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#eaedf2"
      }
    ]
  },
  // set the color of geometry elements for points of interest (POI)
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  // set the color of text labels for POI
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  // hide all business POI
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  // set the color of geometry elements for parks
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  // hide the text labels for parks
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  // set the color of text labels for parks
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  // set the color of geometry elements for roads
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  // set the color of text labels for arterial roads
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  // set the color of geometry elements for highways
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    // sets the fill color for highway geometry
    {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#879bd0"
        }
      ]
    },
    // sets the label text fill color for highways
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    // sets the fill color for local roads 
    {
      "featureType": "road.local",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#e6e9ee"
        }
      ]
    },
    // sets the color of icons used to label local roads
    {
      "featureType": "road.local",
      "elementType": "labels.icon",
      "stylers": [
        {
          "color": "#e6e9ee"
        },
        {
          "visibility": "on"
        },
        {
          "weight": 5
        }
      ]
    },
    // sets the label text fill color for local roads
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    // sets the color of transit lines
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    // sets the color of transit station geometry
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    //  sets the color of icons used to label airports
    {
      "featureType": "transit.station.airport",
      "elementType": "labels.icon",
      "stylers": [
        {
          "color": "#e6e9ee"
        },
        {
          "weight": 5
        }
      ]
    },
    // sets the color of water bodies 
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    // sets the label text fill color for water bodies
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

  // export the module of mapjson
  module.exports={ mapJson };