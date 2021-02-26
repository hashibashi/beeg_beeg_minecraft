var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Beeg Beeg Minecraft"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1614320822",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime Render",
            "zoomLevels": 19,
            "defaultZoom": 17,
            "maxZoom": 19,
            "path": "day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Beeg Beeg Minecraft",
            "last_rendertime": 1614289769,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -96,
                96,
                -16
            ],
            "minZoom": 0,
            "spawn": [
                -96,
                96,
                -16
            ],
            "north_direction": 0
        },
        {
            "name": "Night Render",
            "zoomLevels": 19,
            "defaultZoom": 17,
            "maxZoom": 19,
            "path": "night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Beeg Beeg Minecraft",
            "last_rendertime": 1614289769,
            "imgextension": "webp",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -96,
                96,
                -16
            ],
            "minZoom": 0,
            "spawn": [
                -96,
                96,
                -16
            ],
            "north_direction": 0
        }
    ]
};
