(function(){
    var script = {
 "desktopMipmappingEnabled": false,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A], 'gyroscopeAvailable'); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_2DFC4A46_0840_95FF_419E_3079B8E8EABB.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "contentOpaque": false,
 "children": [
  "this.MainViewer",
  "this.Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_22BB12F4_3075_D173_4184_EC3BC4955417",
  "this.Container_062AB830_1140_E215_41AF_6C9D65345420",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
  "this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010",
  "this.Image_1053C9E7_0841_96BE_4192_6160CED6048B"
 ],
 "id": "rootPlayer",
 "scrollBarMargin": 2,
 "definitions": [{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_28FB8B37_0840_AB9E_4169_7B6FD595724B",
 "automaticZoomSpeed": 10,
 "id": "camera_28FB7B37_0840_AB9E_41A1_247811708FB0",
 "initialPosition": {
  "yaw": -98.89,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_28E54B4E_0840_AB8E_41A1_ACF801517A0E",
 "automaticZoomSpeed": 10,
 "id": "camera_28E53B4E_0840_AB8E_4192_E7E98509ED99",
 "initialPosition": {
  "yaw": 112.86,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_2DAE0A77_0840_959D_4189_6F1BC4E71988",
 "automaticZoomSpeed": 10,
 "id": "camera_2DAFEA77_0840_959D_416E_2E4DE0CC1DA4",
 "initialPosition": {
  "yaw": -97.62,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "1",
 "id": "panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A",
 "adjacentPanoramas": [
  {
   "backwardYaw": -177.12,
   "yaw": 5.95,
   "distance": 1,
   "panorama": "this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "109%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_C6F1A727_C941_32B2_41E8_E760FE2151AC"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "partial": false,
 "label": "9",
 "id": "panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A",
 "adjacentPanoramas": [
  {
   "backwardYaw": 63.64,
   "yaw": -95.74,
   "distance": 1,
   "panorama": "this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -100.29,
   "yaw": 87.43,
   "distance": 1,
   "panorama": "this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DDEE410F_C943_6E72_41D5_441B0085DF08",
  "this.overlay_DF7A20BC_C941_2F96_41E4_F983B650DF30"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_174ADAEA_0840_AAB6_4183_4685E295DF37",
 "automaticZoomSpeed": 10,
 "id": "camera_174ACAEA_0840_AAB6_4183_FB1AE8AFE8B4",
 "initialPosition": {
  "yaw": -92.57,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "12",
 "id": "panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B",
 "adjacentPanoramas": [
  {
   "backwardYaw": -67.14,
   "yaw": -67.92,
   "distance": 1,
   "panorama": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DCB29997_C947_3192_41DC_52EE3884F7F6"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A",
   "camera": "this.panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B",
   "camera": "this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652",
   "camera": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_C22FA22B_C947_12B2_41C4_711345FD655A",
   "camera": "this.panorama_C22FA22B_C947_12B2_41C4_711345FD655A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2",
   "camera": "this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383",
   "camera": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A",
   "camera": "this.panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531",
   "camera": "this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A",
   "camera": "this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C",
   "camera": "this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF",
   "camera": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B",
   "camera": "this.panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 0)",
   "media": "this.panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7",
   "end": "this.trigger('tourEnded')",
   "camera": "this.panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A16CC9_C941_17FE_41AA_7C3A6C60E54F",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_camera",
 "initialPosition": {
  "yaw": -75.87,
  "pitch": 1.45,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "7",
 "id": "panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A",
 "adjacentPanoramas": [
  {
   "backwardYaw": -123.56,
   "yaw": 111.25,
   "distance": 1,
   "panorama": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DAC6F79A_C943_3192_41E3_A7BF50AFF6FF"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_130270AD_0840_F6B2_4188_24C7DD9E9715",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_2DFC4A46_0840_95FF_419E_3079B8E8EABB",
 "class": "PlayList"
},
{
 "partial": false,
 "label": "6",
 "id": "panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383",
 "adjacentPanoramas": [
  {
   "backwardYaw": -79.43,
   "yaw": -32.82,
   "distance": 1,
   "panorama": "this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 98.86,
   "yaw": 58.09,
   "distance": 1,
   "panorama": "this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 111.25,
   "yaw": -123.56,
   "distance": 1,
   "panorama": "this.panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DA51F3AF_C941_71B2_41E4_DA3E35804B09",
  "this.overlay_DC5EC574_C941_7696_41DA_257EA82AEF84",
  "this.overlay_DD705EC0_C943_13EE_41D1_50041F951885"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "duration": 0,
 "easing": "linear",
 "id": "effect_10FCCE2B_0847_EDB6_4190_916BBA0EC691",
 "class": "FadeOutEffect"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A00CC9_C941_17FE_41C5_51F96F387843",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_28F2CB3F_0840_AB8E_41A1_7F3497A86EC9",
 "automaticZoomSpeed": 10,
 "id": "camera_28F2BB3F_0840_AB8E_4192_58C06BE6D47D",
 "initialPosition": {
  "yaw": 112.08,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "media": "this.panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A",
   "camera": "this.panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "media": "this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B",
   "camera": "this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "media": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652",
   "camera": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "media": "this.panorama_C22FA22B_C947_12B2_41C4_711345FD655A",
   "camera": "this.panorama_C22FA22B_C947_12B2_41C4_711345FD655A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "media": "this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2",
   "camera": "this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "media": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383",
   "camera": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "media": "this.panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A",
   "camera": "this.panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "media": "this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531",
   "camera": "this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "media": "this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A",
   "camera": "this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "media": "this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C",
   "camera": "this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 11)",
   "media": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF",
   "camera": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 11, 12)",
   "media": "this.panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B",
   "camera": "this.panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  },
  {
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 12, 0)",
   "media": "this.panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7",
   "camera": "this.panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_camera",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "partial": false,
 "label": "10",
 "id": "panorama_C22F959A_C947_1192_41E7_D0EF2C48134C",
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.43,
   "yaw": -100.29,
   "distance": 1,
   "panorama": "this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 19.81,
   "yaw": 81.11,
   "distance": 1,
   "panorama": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DC4AC890_C941_3E6E_41BA_736BF67C1184",
  "this.overlay_DCA8AB47_C94F_72F1_41E8_8F19B08252D5"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_28E84B46_0840_ABFF_4186_93B303A61CDC",
 "automaticZoomSpeed": 10,
 "id": "camera_28E83B46_0840_ABFF_417E_1ED6C3CA203E",
 "initialPosition": {
  "yaw": 69.62,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7AF9CC9_C941_17FE_41E4_9A02923A9A74",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_camera",
 "initialPosition": {
  "yaw": 157.03,
  "pitch": 6.88,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "3",
 "id": "panorama_C22F4CA1_C947_37AE_41E3_0D476911B652",
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.38,
   "yaw": 123.5,
   "distance": 1,
   "panorama": "this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 83.53,
   "yaw": -39.05,
   "distance": 1,
   "panorama": "this.panorama_C22FA22B_C947_12B2_41C4_711345FD655A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 68.78,
   "yaw": -141.69,
   "distance": 1,
   "panorama": "this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_D81CEAC7_C95F_33F2_41C1_2E41685685CC",
  "this.overlay_DB5D3A86_C95F_1272_41BB_5DEC5095E6E1",
  "this.overlay_DA4D7D87_C941_1672_41C0_F6907684AFA7"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17188B1B_0840_AB95_4189_6470B10654BC",
 "automaticZoomSpeed": 10,
 "id": "camera_17187B1B_0840_AB95_4189_569CF55F27B4",
 "initialPosition": {
  "yaw": -56.5,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "duration": 0,
 "easing": "linear",
 "id": "effect_10FDDE2B_0847_EDB6_4198_415A8B58486E",
 "class": "FadeInEffect"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17108B22_0840_ABB6_4154_6F44FCA79185",
 "automaticZoomSpeed": 10,
 "id": "camera_17106B22_0840_ABB6_4184_0A5F93802E51",
 "initialPosition": {
  "yaw": 140.95,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "8",
 "id": "panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531",
 "adjacentPanoramas": [
  {
   "backwardYaw": -95.74,
   "yaw": 63.64,
   "distance": 1,
   "panorama": "this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -32.82,
   "yaw": -79.43,
   "distance": 1,
   "panorama": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DD2F044E_C941_36F2_41E5_8234380DE139",
  "this.overlay_DD2EAFD9_C941_319E_41D1_2E8130E6348A"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7AA8CB5_C941_1796_41D9_5C4ADDB9E043",
 "automaticZoomSpeed": 10,
 "id": "panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A1FCC9_C941_17FE_41D6_A4B395A79346",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22FA22B_C947_12B2_41C4_711345FD655A_camera",
 "initialPosition": {
  "yaw": 1.88,
  "pitch": -1.08,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_28DCDB55_0840_AB9D_4169_9678A0D48C9E",
 "automaticZoomSpeed": 10,
 "id": "camera_28DCCB55_0840_AB9D_419A_434B0C444F4A",
 "initialPosition": {
  "yaw": -121.91,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A1ACC9_C941_17FE_41D6_4AE7276C0F9E",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_camera",
 "initialPosition": {
  "yaw": 40.49,
  "pitch": -8.42,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17529ADB_0840_AA95_4199_AF292AAE94FA",
 "automaticZoomSpeed": 10,
 "id": "camera_17528ADB_0840_AA95_4196_809C2BF49407",
 "initialPosition": {
  "yaw": -96.47,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A1CCC9_C941_17FE_41C0_B6EC9D3E7451",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_camera",
 "initialPosition": {
  "yaw": -92.94,
  "pitch": -2.15,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "buttonToggleHotspots": "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "displayPlaybackBar": true,
 "viewerArea": "this.MainViewer",
 "mouseControlMode": "drag_acceleration",
 "gyroscopeVerticalDraggingEnabled": true,
 "touchControlMode": "drag_rotation",
 "buttonToggleGyroscope": "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17013B30_0840_AB92_415B_8BC42B29EF38",
 "automaticZoomSpeed": 10,
 "id": "camera_17012B30_0840_AB92_4193_63E09B48180E",
 "initialPosition": {
  "yaw": 147.18,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A0BCC9_C941_17FE_41C2_F2269B671988",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_camera",
 "initialPosition": {
  "yaw": 11.12,
  "pitch": -0.68,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "4",
 "id": "panorama_C22FA22B_C947_12B2_41C4_711345FD655A",
 "adjacentPanoramas": [
  {
   "backwardYaw": -39.05,
   "yaw": 83.53,
   "distance": 1,
   "panorama": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_D8A2D4E7_C941_17B2_41E6_66528C8136AC"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
   "media": "this.map_130270AD_0840_F6B2_4188_24C7DD9E9715",
   "player": "this.MapViewerMapPlayer",
   "class": "MapPlayListItem"
  }
 ],
 "id": "playList_2DFC7A46_0840_95FF_41A1_622FC660B883",
 "class": "PlayList"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17090B29_0840_ABB2_4173_E96A4C5E225E",
 "automaticZoomSpeed": 10,
 "id": "camera_170AFB29_0840_ABB2_4189_897CD8067A4E",
 "initialPosition": {
  "yaw": 84.26,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17360B06_0840_AB7F_4190_6AB9304670AF",
 "automaticZoomSpeed": 10,
 "id": "camera_1737FB06_0840_AB7F_416E_71B7D47BD302",
 "initialPosition": {
  "yaw": -68.75,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "movementMode": "constrained",
 "id": "MapViewerMapPlayer",
 "viewerArea": "this.MapViewer",
 "class": "MapPlayer"
},
{
 "partial": false,
 "label": "2",
 "id": "panorama_C22D76F5_C947_3396_41DA_A701CD7C124B",
 "adjacentPanoramas": [
  {
   "backwardYaw": 5.95,
   "yaw": -177.12,
   "distance": 1,
   "panorama": "this.panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 123.5,
   "yaw": 82.38,
   "distance": 1,
   "panorama": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_D9119D0E_C941_3672_41C1_433241B25203",
  "this.overlay_D9BB4B49_C941_12FE_41D8_7D39C6729EFE"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_2DB2EA6F_0840_958E_4199_0A10E3AB5680",
 "automaticZoomSpeed": 10,
 "id": "camera_2DB2CA6F_0840_958E_4197_488E20F25287",
 "initialPosition": {
  "yaw": -66.59,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A13CC9_C941_17FE_41CD_44F1EA3AE7BD",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22F97BC_C947_1196_41C2_276B24B317B2_camera",
 "initialPosition": {
  "yaw": -172.24,
  "pitch": -1.37,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_173D9AFF_0840_AA8E_4194_0B9B6935BDF1",
 "automaticZoomSpeed": 10,
 "id": "camera_173D8AFF_0840_AA8E_419C_F67B224775CA",
 "initialPosition": {
  "yaw": -81.14,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A03CC9_C941_17FE_41D3_AD70E99B80FE",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_camera",
 "initialPosition": {
  "yaw": -28.99,
  "pitch": -3.49,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "5",
 "id": "panorama_C22F97BC_C947_1196_41C2_276B24B317B2",
 "adjacentPanoramas": [
  {
   "backwardYaw": 58.09,
   "yaw": 98.86,
   "distance": 1,
   "panorama": "this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -141.69,
   "yaw": 68.78,
   "distance": 1,
   "panorama": "this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DB1772F0_C947_73AE_41E3_BCE2E7E19509",
  "this.overlay_DA424523_C94F_F6B2_41D3_324714FD1583"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_1745BAF8_0840_AA93_4180_FEB1D5755256",
 "automaticZoomSpeed": 10,
 "id": "camera_17459AF8_0840_AA93_4159_382BADA97BC8",
 "initialPosition": {
  "yaw": 100.57,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A0ECC9_C941_17FE_41D7_F8D44AB5EFB9",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_camera",
 "initialPosition": {
  "yaw": 0,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17435AF1_0840_AA95_4199_90F78DD07017",
 "automaticZoomSpeed": 10,
 "id": "camera_17434AF1_0840_AA95_4192_7D84ED9F6A5C",
 "initialPosition": {
  "yaw": -160.19,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "loop": true,
 "yaw": 0,
 "audio": {
  "oggUrl": "media/audio_28FF766E_0841_7D8F_4199_3672250E1C00.ogg",
  "mp3Url": "media/audio_28FF766E_0841_7D8F_4199_3672250E1C00.mp3",
  "class": "AudioResource"
 },
 "pitch": 1.53,
 "autoplay": true,
 "id": "audio_28FF766E_0841_7D8F_4199_3672250E1C00",
 "data": {
  "label": "Windmill Hut - The Legend of Zelda_ Ocarina Of Time [N3OZoErzJg0]"
 },
 "maximumAngle": 360,
 "class": "DirectionalPanoramaAudio"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A08CC9_C941_17FE_41D7_D4BED7C7FA01",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_camera",
 "initialPosition": {
  "yaw": 24.91,
  "pitch": -1.23,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_2DC82A5E_0840_958F_4196_F69387CB6F90",
 "automaticZoomSpeed": 10,
 "id": "camera_2DC81A5E_0840_958F_418C_70903E68D1FF",
 "initialPosition": {
  "yaw": 79.71,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "thumbnailUrl": "media/map_130270AD_0840_F6B2_4188_24C7DD9E9715_t.png",
 "image": {
  "levels": [
   {
    "url": "media/map_130270AD_0840_F6B2_4188_24C7DD9E9715.png",
    "width": 1366,
    "height": 728,
    "class": "ImageResourceLevel"
   },
   {
    "url": "media/map_130270AD_0840_F6B2_4188_24C7DD9E9715_lq.png",
    "width": 350,
    "tags": "preload",
    "height": 187,
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "label": "Keterangan dengan Gambar Rata Kiri",
 "initialZoomFactor": 1,
 "id": "map_130270AD_0840_F6B2_4188_24C7DD9E9715",
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "fieldOfViewOverlayOutsideColor": "#000000",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "scaleMode": "fit_inside",
 "fieldOfViewOverlayRadiusScale": 0.3,
 "maximumZoomFactor": 1.2,
 "width": 1366,
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 728,
 "class": "Map"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_172E0B0D_0840_AB72_4183_BE0F2938CF7B",
 "automaticZoomSpeed": 10,
 "id": "camera_172FFB0D_0840_AB72_4160_AF039A451FB0",
 "initialPosition": {
  "yaw": 56.44,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_2DD3CA57_0840_959E_417F_2FCB7C17C55A",
 "automaticZoomSpeed": 10,
 "id": "camera_2DD3BA57_0840_959E_417E_7A8E93D6F1E1",
 "initialPosition": {
  "yaw": -116.36,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_1756DAE1_0840_AAB5_4183_121248FD44D9",
 "automaticZoomSpeed": 10,
 "id": "camera_1756CAE1_0840_AAB5_418E_740F9E102F89",
 "initialPosition": {
  "yaw": -111.22,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_C7A07CC9_C941_17FE_41D7_4BA66255CC43",
 "automaticZoomSpeed": 10,
 "id": "panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_camera",
 "initialPosition": {
  "yaw": 33.28,
  "pitch": 19.21,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_28C9EB5D_0840_AB92_4196_7CEC15A995EA",
 "automaticZoomSpeed": 10,
 "id": "camera_28C9DB5D_0840_AB92_417E_7DB13EA52633",
 "initialPosition": {
  "yaw": 38.31,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_17209B14_0840_AB92_4191_E9A6BB0B1078",
 "automaticZoomSpeed": 10,
 "id": "camera_17208B14_0840_AB92_4171_281CD9A2EAA2",
 "initialPosition": {
  "yaw": -174.05,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "partial": false,
 "label": "11",
 "id": "panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF",
 "adjacentPanoramas": [
  {
   "backwardYaw": 81.11,
   "yaw": 19.81,
   "distance": 1,
   "panorama": "this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -67.92,
   "yaw": -67.14,
   "distance": 1,
   "panorama": "this.panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -110.38,
   "yaw": 113.41,
   "distance": 1,
   "panorama": "this.panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "overlays": [
  "this.overlay_DC422C79_C94F_169E_41E0_A2D1E0243C45",
  "this.overlay_DC91EBC9_C941_71FE_41E1_71C6271F74D3",
  "this.overlay_DC948BC3_C941_31F2_41D4_5FF79DACC5F0"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "partial": false,
 "label": "13",
 "id": "panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7",
 "adjacentPanoramas": [
  {
   "backwardYaw": 113.41,
   "yaw": -110.38,
   "distance": 1,
   "panorama": "this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF",
   "class": "AdjacentPanorama"
  }
 ],
 "hfovMin": "150%",
 "pitch": 0,
 "hfov": 360,
 "audios": [
  "this.audio_28FF766E_0841_7D8F_4199_3672250E1C00"
 ],
 "overlays": [
  "this.overlay_DF22C9D2_C941_1192_41C8_6ADC94D18EDF"
 ],
 "vfov": 180,
 "thumbnailUrl": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_t.jpg",
 "frames": [
  {
   "thumbnailUrl": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_t.jpg",
   "top": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/u/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/u/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/u/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/r/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/r/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/r/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/b/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/b/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/b/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/d/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/d/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/d/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "front": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/f/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/f/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/f/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/l/0/{row}_{column}.jpg",
      "rowCount": 4,
      "colCount": 4,
      "width": 2048,
      "tags": "ondemand",
      "height": 2048,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/l/1/{row}_{column}.jpg",
      "rowCount": 2,
      "colCount": 2,
      "width": 1024,
      "tags": "ondemand",
      "height": 1024,
      "class": "TiledImageResourceLevel"
     },
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0/l/2/{row}_{column}.jpg",
      "rowCount": 1,
      "colCount": 1,
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "height": 512,
      "class": "TiledImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "hfovMax": 130
},
{
 "manualRotationSpeed": 491,
 "initialSequence": "this.sequence_2DC65A67_0840_95BE_4178_311FD7E05CFE",
 "automaticZoomSpeed": 10,
 "id": "camera_2DC63A67_0840_95BE_4189_DA7421E76A81",
 "initialPosition": {
  "yaw": 2.88,
  "pitch": 0,
  "class": "PanoramaCameraPosition"
 },
 "class": "PanoramaCamera"
},
{
 "toolTipFontSize": 13,
 "toolTipPaddingBottom": 7,
 "playbackBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "width": "100%",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minHeight": 50,
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadow": true,
 "vrPointerSelectionColor": "#FF6600",
 "progressHeight": 10,
 "toolTipShadowOpacity": 0,
 "minWidth": 100,
 "progressBackgroundOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Georgia",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "playbackBarOpacity": 1,
 "progressBottom": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingBottom": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#FFFFFF",
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBackgroundColor": "#000000",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "paddingRight": 0,
 "toolTipPaddingRight": 10,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "top": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadWidth": 6,
 "borderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipOpacity": 0.5,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
  "this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36"
 ],
 "id": "Container_7F59BED9_7065_6DCD_41D6_B4AD3EEA9174",
 "left": "0%",
 "scrollBarMargin": 2,
 "width": 300,
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": "0%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--- LEFT PANEL"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "scrollBarMargin": 2,
 "width": 115.05,
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": "0%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": 641,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-- SETTINGS"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
  "this.Container_22BBD2F4_3075_D173_41B4_8504C593E6BF"
 ],
 "id": "Container_22BB12F4_3075_D173_4184_EC3BC4955417",
 "left": 70,
 "scrollBarMargin": 2,
 "width": 550,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": 34,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": 140,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "--STICKER"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_062A782F_1140_E20B_41AF_B3E5DE341773",
  "this.Container_062A9830_1140_E215_41A7_5F2BBE5C20E4"
 ],
 "id": "Container_062AB830_1140_E215_41AF_6C9D65345420",
 "left": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "--INFO photo"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
  "this.Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F"
 ],
 "id": "Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC",
 "left": "0%",
 "scrollBarMargin": 2,
 "creationPolicy": "inAdvance",
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.6,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "bottom": "0%",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "--REALTOR"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Image_1C25C589_08C0_9F75_4196_8A81EE8232CC",
  "this.Image_1BFDF811_08C1_B595_4162_73AF9A632A0D",
  "this.Image_1DF47A04_0841_757C_4150_C5D19A453582",
  "this.Image_1C05E045_0841_95F2_41A1_1321C7060FCD",
  "this.Image_1D44C4EE_0841_9E8F_4187_7126C2E1A20A",
  "this.Image_1C4470A1_0841_B6B2_4193_23B92931A04A",
  "this.Image_1CB0FC2C_0841_ADB3_419E_E0C5B6D86897",
  "this.Image_1CB21626_0841_9DBE_4160_DB3CD58866EA",
  "this.Image_1CB061AD_0841_768D_4179_1BEA49221828",
  "this.Image_1CB91CDD_0841_6E92_419C_DBAF8CF6C681",
  "this.Image_1CBE49E5_0840_96B2_4186_1B64DE2A4A74",
  "this.Image_1CB0D785_0840_BB7D_4185_C94D76B4DB5E"
 ],
 "id": "Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010",
 "scrollBarMargin": 2,
 "right": "12%",
 "width": "61.799%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "top": "12.96%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "71.537%",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "mapcontainer"
 }
},
{
 "maxHeight": 512,
 "id": "Image_1053C9E7_0841_96BE_4192_6160CED6048B",
 "right": "0.72%",
 "width": "4.775%",
 "maxWidth": 512,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1053C9E7_0841_96BE_4192_6160CED6048B.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "1.74%",
 "height": "7.834%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "if(!this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010.get('visible')){ this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, true, 0, this.effect_10FDDE2B_0847_EDB6_4198_415A8B58486E, 'showEffect', false) } else { this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, this.effect_10FCCE2B_0847_EDB6_4190_916BBA0EC691, 'hideEffect', false) }",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "map icon"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_28FB8B37_0840_AB9E_4169_7B6FD595724B",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_28E54B4E_0840_AB8E_41A1_ACF801517A0E",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_2DAE0A77_0840_959D_4189_6F1BC4E71988",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B, this.camera_2DC63A67_0840_95BE_4189_DA7421E76A81); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 5.95,
   "hfov": 14.05,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.05,
   "image": "this.AnimatedImageResource_D3CE533B_C9C1_7292_41DE_E2D10DF54770",
   "yaw": 5.95,
   "pitch": -4.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_C6F1A727_C941_32B2_41E8_E760FE2151AC",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531, this.camera_2DD3BA57_0840_959E_417E_7A8E93D6F1E1); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -95.74,
   "hfov": 21.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.24,
   "image": "this.AnimatedImageResource_D331933C_C9C1_7296_41E7_274EC2EE3441",
   "yaw": -95.74,
   "pitch": -16.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DDEE410F_C943_6E72_41D5_441B0085DF08",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C, this.camera_2DC81A5E_0840_958F_418C_70903E68D1FF); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 87.43,
   "hfov": 8.06,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.06,
   "image": "this.AnimatedImageResource_D0794B13_C943_7292_41E3_CF25A3259C79",
   "yaw": 87.43,
   "pitch": -11.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DF7A20BC_C941_2F96_41E4_F983B650DF30",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_174ADAEA_0840_AAB6_4183_4685E295DF37",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF, this.camera_28E53B4E_0840_AB8E_4192_E7E98509ED99); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -67.92,
   "hfov": 7.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.25,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_D333B33D_C9C1_7296_41DD_2EF986CCDD39",
   "yaw": -67.92,
   "pitch": -2.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DCB29997_C947_3192_41DC_52EE3884F7F6",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A16CC9_C941_17FE_41AA_7C3A6C60E54F",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383, this.camera_172FFB0D_0840_AB72_4160_AF039A451FB0); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 111.25,
   "hfov": 10.74,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.55,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.74,
   "image": "this.AnimatedImageResource_D330A33C_C9C1_7296_41E3_3567F1A7D594",
   "yaw": 111.25,
   "pitch": -6.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DAC6F79A_C943_3192_41E3_A7BF50AFF6FF",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531, this.camera_17459AF8_0840_AA93_4159_382BADA97BC8); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -32.82,
   "hfov": 13.1,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.35,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.1,
   "image": "this.AnimatedImageResource_DE2CC9A9_C941_11BE_41D6_C4DF595900B9",
   "yaw": -32.82,
   "pitch": -1.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA51F3AF_C941_71B2_41E4_DA3E35804B09",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2, this.camera_173D8AFF_0840_AA8E_419C_F67B224775CA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 58.09,
   "hfov": 7.87,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.87,
   "image": "this.AnimatedImageResource_DE2C99AE_C941_11B2_41DA_C4831AC9E372",
   "yaw": 58.09,
   "pitch": -3.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC5EC574_C941_7696_41DA_257EA82AEF84",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A, this.camera_1737FB06_0840_AB7F_416E_71B7D47BD302); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -123.56,
   "hfov": 6.89,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.89,
   "image": "this.AnimatedImageResource_DE2C39AE_C941_11B2_41D7_03DF1D44CC8B",
   "yaw": -123.56,
   "pitch": -3.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD705EC0_C943_13EE_41D1_50041F951885",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A00CC9_C941_17FE_41C5_51F96F387843",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_28F2CB3F_0840_AB8E_41A1_7F3497A86EC9",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A, this.camera_174ACAEA_0840_AAB6_4183_FB1AE8AFE8B4); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -100.29,
   "hfov": 12.3,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.81,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.3,
   "image": "this.AnimatedImageResource_D332333C_C9C1_7296_4195_9C46E9004EF7",
   "yaw": -100.29,
   "pitch": -10.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC4AC890_C941_3E6E_41BA_736BF67C1184",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF, this.camera_17434AF1_0840_AA95_4192_7D84ED9F6A5C); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 81.11,
   "hfov": 5.99,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.22,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 5.99,
   "image": "this.AnimatedImageResource_D0798B13_C943_7292_41C7_39C8A46E2BAC",
   "yaw": 81.11,
   "pitch": -2.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DCA8AB47_C94F_72F1_41E8_8F19B08252D5",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_28E84B46_0840_ABFF_4186_93B303A61CDC",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7AF9CC9_C941_17FE_41E4_9A02923A9A74",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22FA22B_C947_12B2_41C4_711345FD655A, this.camera_17528ADB_0840_AA95_4196_809C2BF49407); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -39.05,
   "hfov": 7.81,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.39,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.81,
   "image": "this.AnimatedImageResource_DE2EB9A8_C941_11BE_41D8_34E3CA3A4966",
   "yaw": -39.05,
   "pitch": -3.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D81CEAC7_C95F_33F2_41C1_2E41685685CC",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F97BC_C947_1196_41C2_276B24B317B2, this.camera_1756CAE1_0840_AAB5_418E_740F9E102F89); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -141.69,
   "hfov": 8.57,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.41,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.57,
   "image": "this.AnimatedImageResource_DE2E69A8_C941_11BE_41E5_C3E514C68D81",
   "yaw": -141.69,
   "pitch": -4.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB5D3A86_C95F_1272_41BB_5DEC5095E6E1",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22D76F5_C947_3396_41DA_A701CD7C124B, this.camera_2DAFEA77_0840_959D_416E_2E4DE0CC1DA4); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 123.5,
   "hfov": 10.69,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.15,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.69,
   "image": "this.AnimatedImageResource_DE2E19A8_C941_11BE_41E0_3BEB07D24098",
   "yaw": 123.5,
   "pitch": -6.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DA4D7D87_C941_1672_41C0_F6907684AFA7",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17188B1B_0840_AB95_4189_6470B10654BC",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17108B22_0840_ABB6_4154_6F44FCA79185",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383, this.camera_17012B30_0840_AB92_4193_63E09B48180E); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -79.43,
   "hfov": 11.24,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.11,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.24,
   "image": "this.AnimatedImageResource_D331133C_C9C1_7296_41E0_5317DD6020B0",
   "yaw": -79.43,
   "pitch": -4.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_DD2F044E_C941_36F2_41E5_8234380DE139",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A, this.camera_170AFB29_0840_ABB2_4189_897CD8067A4E); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 63.64,
   "hfov": 13.77,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.12,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.77,
   "image": "this.AnimatedImageResource_DE2410BE_C943_2F92_41DE_7BA0524D0009",
   "yaw": 63.64,
   "pitch": -12.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DD2EAFD9_C941_319E_41D1_2E8130E6348A",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7AA8CB5_C941_1796_41D9_5C4ADDB9E043",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A1FCC9_C941_17FE_41D6_A4B395A79346",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_28DCDB55_0840_AB9D_4169_9678A0D48C9E",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A1ACC9_C941_17FE_41D6_4AE7276C0F9E",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17529ADB_0840_AA95_4199_AF292AAE94FA",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A1CCC9_C941_17FE_41C0_B6EC9D3E7451",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
 "width": 58,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton HS "
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
 "width": 58,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": 58,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton GYRO"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17013B30_0840_AB92_415B_8BC42B29EF38",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A0BCC9_C941_17FE_41C2_F2269B671988",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652, this.camera_17106B22_0840_ABB6_4184_0A5F93802E51); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 83.53,
   "hfov": 10.79,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.69,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.79,
   "image": "this.AnimatedImageResource_DE2FC9A8_C941_11BE_416D_565F23ED4828",
   "yaw": 83.53,
   "pitch": -6.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D8A2D4E7_C941_17B2_41E6_66528C8136AC",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17090B29_0840_ABB2_4173_E96A4C5E225E",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17360B06_0840_AB7F_4190_6AB9304670AF",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "toolTipFontSize": 12,
 "toolTipPaddingBottom": 4,
 "playbackBarBorderSize": 0,
 "id": "MapViewer",
 "left": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "width": "100%",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minHeight": 1,
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadow": true,
 "vrPointerSelectionColor": "#FF6600",
 "progressHeight": 10,
 "toolTipShadowOpacity": 1,
 "minWidth": 1,
 "progressBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "height": "99.975%",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarOpacity": 1,
 "progressBottom": 2,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingBottom": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "paddingRight": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "top": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadWidth": 6,
 "borderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "data": {
  "name": "Floor Plan"
 },
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A, this.camera_17208B14_0840_AB92_4171_281CD9A2EAA2); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -177.12,
   "hfov": 13.15,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.26,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.15,
   "image": "this.AnimatedImageResource_DAB27FA7_C941_11B2_41D0_C94986149FDE",
   "yaw": -177.12,
   "pitch": -8.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9119D0E_C941_3672_41C1_433241B25203",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652, this.camera_17187B1B_0840_AB95_4189_569CF55F27B4); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 82.38,
   "hfov": 14.04,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.71,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.04,
   "image": "this.AnimatedImageResource_DC4C5A45_C943_12F6_41CC_C01D3D983573",
   "yaw": 82.38,
   "pitch": -4.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_D9BB4B49_C941_12FE_41D8_7D39C6729EFE",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_2DB2EA6F_0840_958E_4199_0A10E3AB5680",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A13CC9_C941_17FE_41CD_44F1EA3AE7BD",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_173D9AFF_0840_AA8E_4194_0B9B6935BDF1",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A03CC9_C941_17FE_41D3_AD70E99B80FE",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383, this.camera_28DCCB55_0840_AB9D_419A_434B0C444F4A); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 98.86,
   "hfov": 7.26,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.18,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.26,
   "image": "this.AnimatedImageResource_DE2F79A8_C941_11BE_41E1_71608E1C3E21",
   "yaw": 98.86,
   "pitch": -5.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DB1772F0_C947_73AE_41E3_BCE2E7E19509",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F4CA1_C947_37AE_41E3_0D476911B652, this.camera_28C9DB5D_0840_AB92_417E_7DB13EA52633); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 68.78,
   "hfov": 13.22,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.23,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.22,
   "image": "this.AnimatedImageResource_DE2F19A9_C941_11BE_41E2_46EB64C9EFD2",
   "yaw": 68.78,
   "pitch": -11.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_DA424523_C94F_F6B2_41D3_324714FD1583",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_1745BAF8_0840_AA93_4180_FEB1D5755256",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A0ECC9_C941_17FE_41D7_F8D44AB5EFB9",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17435AF1_0840_AA95_4199_90F78DD07017",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A08CC9_C941_17FE_41D7_D4BED7C7FA01",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_2DC82A5E_0840_958F_4196_F69387CB6F90",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_172E0B0D_0840_AB72_4183_BE0F2938CF7B",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_2DD3CA57_0840_959E_417F_2FCB7C17C55A",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_1756DAE1_0840_AAB5_4183_121248FD44D9",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_C7A07CC9_C941_17FE_41D7_4BA66255CC43",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_28C9EB5D_0840_AB92_4196_7CEC15A995EA",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_17209B14_0840_AB92_4191_E9A6BB0B1078",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F959A_C947_1192_41E7_D0EF2C48134C, this.camera_28FB7B37_0840_AB9E_41A1_247811708FB0); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 19.81,
   "hfov": 38.33,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0_HS_0_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.49,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.33,
   "image": "this.AnimatedImageResource_D332B33C_C9C1_7296_41CF_6C0FBD8DA444",
   "yaw": 19.81,
   "pitch": -9.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC422C79_C94F_169E_41E0_A2D1E0243C45",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B, this.camera_28F2BB3F_0840_AB8E_4192_58C06BE6D47D); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -67.14,
   "hfov": 7.48,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0_HS_1_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_D078CB13_C943_7292_417E_9DC86341D18F",
   "yaw": -67.14,
   "pitch": -2.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_DC91EBC9_C941_71FE_41E1_71C6271F74D3",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7, this.camera_28E83B46_0840_ABFF_417E_1ED6C3CA203E); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": 113.41,
   "hfov": 6.09,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0_HS_2_0_0_map.gif",
      "width": 37,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.61,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.09,
   "image": "this.AnimatedImageResource_D333E33D_C9C1_7296_41D1_44F6052B012B",
   "yaw": 113.41,
   "pitch": -3.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_DC948BC3_C941_31F2_41D4_5FF79DACC5F0",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF, this.camera_2DB2CA6F_0840_958E_4197_488E20F25287); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "maps": [
  {
   "yaw": -110.38,
   "hfov": 3.95,
   "image": {
    "levels": [
     {
      "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0_HS_0_0_0_map.gif",
      "width": 26,
      "height": 16,
      "class": "ImageResourceLevel"
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.01,
   "class": "HotspotPanoramaOverlayMap"
  }
 ],
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.95,
   "image": "this.AnimatedImageResource_D07B3B13_C943_7292_4180_E89DD10C257C",
   "yaw": -110.38,
   "pitch": -2.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_DF22C9D2_C941_1192_41C8_6ADC94D18EDF",
 "data": {
  "label": "Circle Arrow 01b"
 },
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay"
},
{
 "restartMovementOnUserInteraction": false,
 "id": "sequence_2DC65A67_0840_95BE_4178_311FD7E05CFE",
 "movements": [
  {
   "easing": "cubic_in",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "linear",
   "yawSpeed": 7.96,
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement"
  },
  {
   "easing": "cubic_out",
   "yawSpeed": 7.96,
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement"
  }
 ],
 "class": "PanoramaCameraSequence"
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
  "this.IconButton_7FF185EF_706F_7FC6_41A5_21B418265412"
 ],
 "id": "Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D",
 "left": "0%",
 "scrollBarMargin": 2,
 "width": 66,
 "creationPolicy": "inAdvance",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": "0%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": "100%",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "- COLLAPSE"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
  "this.Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
  "this.Image_1AD86CE2_0843_6EB6_4182_FBB001314805"
 ],
 "id": "Container_7DB20382_7065_343F_4186_6E0B0B3AFF36",
 "scrollBarMargin": 2,
 "width": 300,
 "right": "0%",
 "paddingRight": 40,
 "class": "Container",
 "paddingLeft": 40,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.7,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 40,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 40,
 "data": {
  "name": "- EXPANDED"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "scrollBarMargin": 2,
 "width": 110,
 "right": "0%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "overflow": "visible",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": "0%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "height": 110,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "button menu sup"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.IconButton_EE9FBAB2_E389_8E06_41D7_903ABEDD153A",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEEB3760_E38B_8603_41D6_FE6B11A3DA96",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "scrollBarMargin": 2,
 "right": "0%",
 "width": "91.304%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "bottom": "0%",
 "height": "85.959%",
 "gap": 3,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-button set"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83"
 ],
 "id": "Container_22BBC2F4_3075_D173_41B4_71F7A3560C34",
 "left": "0%",
 "shadowBlurRadius": 8,
 "width": 366,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "top": 2,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "height": 78,
 "layout": "absolute",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "white block"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Label_22BB32F4_3075_D173_4191_C8B45B85DEB8"
 ],
 "id": "Container_22BBD2F4_3075_D173_41B4_8504C593E6BF",
 "left": 169.85,
 "shadowBlurRadius": 7,
 "width": 196,
 "shadowColor": "#000000",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "borderRadius": 0,
 "bottom": 8,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0.01
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "shadowVerticalLength": 0,
 "verticalAlign": "top",
 "height": 46,
 "layout": "absolute",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "blue block"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
  "this.Container_062A082F_1140_E20A_4193_DF1A4391DC79"
 ],
 "id": "Container_062A782F_1140_E20B_41AF_B3E5DE341773",
 "left": "15%",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "creationPolicy": "inAdvance",
 "right": "15.55%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "top": "10%",
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.IconButton_062A8830_1140_E215_419D_3439F16CCB3E"
 ],
 "id": "Container_062A9830_1140_E215_41A7_5F2BBE5C20E4",
 "left": "15%",
 "scrollBarMargin": 2,
 "right": "15%",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "bottom": "80%",
 "top": "10%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.MapViewer",
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C"
 ],
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "overflow": "visible",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
  "this.Container_06C58BA5_1140_A63F_419D_EC83F94F8C54"
 ],
 "id": "Container_06C5DBA5_1140_A63F_41AD_1D83A33F1255",
 "left": "15%",
 "shadowBlurRadius": 25,
 "shadowColor": "#000000",
 "right": "15%",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "shadowOpacity": 0.3,
 "overflow": "scroll",
 "shadowHorizontalLength": 0,
 "minHeight": 1,
 "top": "10%",
 "shadowVerticalLength": 0,
 "bottom": "10%",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "gap": 10,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "shadow": true,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Global"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81"
 ],
 "id": "Container_06C43BA5_1140_A63F_41A1_96DC8F4CAD2F",
 "left": "15%",
 "scrollBarMargin": 2,
 "right": "15%",
 "paddingRight": 20,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "bottom": "80%",
 "top": "10%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 20,
 "data": {
  "name": "Container X global"
 }
},
{
 "maxHeight": 555,
 "id": "Image_1C25C589_08C0_9F75_4196_8A81EE8232CC",
 "right": "8.05%",
 "width": "76.67%",
 "maxWidth": 800,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1C25C589_08C0_9F75_4196_8A81EE8232CC.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "6.04%",
 "height": "86.146%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "map"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1BFDF811_08C1_B595_4162_73AF9A632A0D",
 "left": "21.36%",
 "width": "3.214%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1BFDF811_08C1_B595_4162_73AF9A632A0D.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "40.65%",
 "height": "5.267%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "id": "Image_1DF47A04_0841_757C_4150_C5D19A453582",
 "right": "27.09%",
 "width": "3.96%",
 "maxWidth": 512,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1DF47A04_0841_757C_4150_C5D19A453582.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "24.24%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 12)",
 "height": "7.292%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "id": "Image_1C05E045_0841_95F2_41A1_1321C7060FCD",
 "right": "14.22%",
 "width": "3.393%",
 "maxWidth": 512,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1C05E045_0841_95F2_41A1_1321C7060FCD.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "37.38%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 10)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1D44C4EE_0841_9E8F_4187_7126C2E1A20A",
 "left": "29.31%",
 "width": "3.393%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1D44C4EE_0841_9E8F_4187_7126C2E1A20A.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "39.34%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.mainPlayList.set('selectedIndex', 1); this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1C4470A1_0841_B6B2_4193_23B92931A04A",
 "left": "28.52%",
 "width": "3.393%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1C4470A1_0841_B6B2_4193_23B92931A04A.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "27.97%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 2)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1CB0FC2C_0841_ADB3_419E_E0C5B6D86897",
 "left": "28.08%",
 "width": "3.393%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1CB0FC2C_0841_ADB3_419E_E0C5B6D86897.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "16.43%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 3)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1CB21626_0841_9DBE_4160_DB3CD58866EA",
 "left": "40.28%",
 "width": "3.393%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1CB21626_0841_9DBE_4160_DB3CD58866EA.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "25.66%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 4)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1CB061AD_0841_768D_4179_1BEA49221828",
 "left": "40.51%",
 "width": "3.393%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1CB061AD_0841_768D_4179_1BEA49221828.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "36.32%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 5)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "maxWidth": 512,
 "id": "Image_1CB91CDD_0841_6E92_419C_DBAF8CF6C681",
 "left": "40.62%",
 "width": "3.393%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1CB91CDD_0841_6E92_419C_DBAF8CF6C681.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "39.88%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 6)",
 "height": "6.398%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "id": "Image_1CBE49E5_0840_96B2_4186_1B64DE2A4A74",
 "right": "34.82%",
 "width": "3.393%",
 "maxWidth": 512,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1CBE49E5_0840_96B2_4186_1B64DE2A4A74.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "37.56%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 8)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "maxHeight": 512,
 "id": "Image_1CB0D785_0840_BB7D_4185_C94D76B4DB5E",
 "right": "14.22%",
 "width": "3.393%",
 "maxWidth": 512,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1CB0D785_0840_BB7D_4185_C94D76B4DB5E.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "bottom": "24.77%",
 "height": "6.398%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_1B91F2C0_08C0_FAF3_417E_2FF40DE83010, false, 0, null, null, false); this.mainPlayList.set('selectedIndex', 11)",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image15114"
 }
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D3CE533B_C9C1_7292_41DE_E2D10DF54770",
 "levels": [
  {
   "url": "media/panorama_C5B0CEF1_C940_F3AE_41E6_AD947BB91E6A_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D331933C_C9C1_7296_41E7_274EC2EE3441",
 "levels": [
  {
   "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D0794B13_C943_7292_41E3_CF25A3259C79",
 "levels": [
  {
   "url": "media/panorama_C22FAF70_C947_72AE_41D6_1C295E7D9F9A_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D333B33D_C9C1_7296_41DD_2EF986CCDD39",
 "levels": [
  {
   "url": "media/panorama_C22E6145_C947_2EF6_41D4_15158C3DE31B_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D330A33C_C9C1_7296_41E3_3567F1A7D594",
 "levels": [
  {
   "url": "media/panorama_C22F9373_C947_7292_41D3_7AAD9AA0391A_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2CC9A9_C941_11BE_41D6_C4DF595900B9",
 "levels": [
  {
   "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2C99AE_C941_11B2_41DA_C4831AC9E372",
 "levels": [
  {
   "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2C39AE_C941_11B2_41D7_03DF1D44CC8B",
 "levels": [
  {
   "url": "media/panorama_C22F8D5E_C947_1692_41DC_7F863E1BF383_0_HS_2_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D332333C_C9C1_7296_4195_9C46E9004EF7",
 "levels": [
  {
   "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D0798B13_C943_7292_41C7_39C8A46E2BAC",
 "levels": [
  {
   "url": "media/panorama_C22F959A_C947_1192_41E7_D0EF2C48134C_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2EB9A8_C941_11BE_41D8_34E3CA3A4966",
 "levels": [
  {
   "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2E69A8_C941_11BE_41E5_C3E514C68D81",
 "levels": [
  {
   "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2E19A8_C941_11BE_41E0_3BEB07D24098",
 "levels": [
  {
   "url": "media/panorama_C22F4CA1_C947_37AE_41E3_0D476911B652_0_HS_2_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D331133C_C9C1_7296_41E0_5317DD6020B0",
 "levels": [
  {
   "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2410BE_C943_2F92_41DE_7BA0524D0009",
 "levels": [
  {
   "url": "media/panorama_C22FA97B_C947_7E92_41D8_AF94DDE88531_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2FC9A8_C941_11BE_416D_565F23ED4828",
 "levels": [
  {
   "url": "media/panorama_C22FA22B_C947_12B2_41C4_711345FD655A_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DAB27FA7_C941_11B2_41D0_C94986149FDE",
 "levels": [
  {
   "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DC4C5A45_C943_12F6_41CC_C01D3D983573",
 "levels": [
  {
   "url": "media/panorama_C22D76F5_C947_3396_41DA_A701CD7C124B_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_DE2F79A8_C941_11BE_41E1_71608E1C3E21",
 "levels": [
  {
   "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_DE2F19A9_C941_11BE_41E2_46EB64C9EFD2",
 "levels": [
  {
   "url": "media/panorama_C22F97BC_C947_1196_41C2_276B24B317B2_0_HS_2_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D332B33C_C9C1_7296_41CF_6C0FBD8DA444",
 "levels": [
  {
   "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0_HS_0_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 55,
 "id": "AnimatedImageResource_D078CB13_C943_7292_417E_9DC86341D18F",
 "levels": [
  {
   "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0_HS_1_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D333E33D_C9C1_7296_41D1_44F6052B012B",
 "levels": [
  {
   "url": "media/panorama_C22EEB48_C947_12FE_41D3_3DA8E01867BF_0_HS_2_0.png",
   "width": 1220,
   "height": 780,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "rowCount": 6,
 "frameCount": 24,
 "colCount": 4,
 "frameDuration": 41,
 "id": "AnimatedImageResource_D07B3B13_C943_7292_4180_E89DD10C257C",
 "levels": [
  {
   "url": "media/panorama_C22F8754_C947_3296_41E3_803CBC5D2EA7_0_HS_0_0.png",
   "width": 1220,
   "height": 1110,
   "class": "ImageResourceLevel"
  }
 ],
 "class": "AnimatedImageResource"
},
{
 "contentOpaque": false,
 "id": "Container_7FF195EF_706F_7FC6_41D7_A104CA87824D",
 "left": "0%",
 "scrollBarMargin": 2,
 "width": 36,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.4,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "borderRadius": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container black"
 }
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7FF185EF_706F_7FC6_41A5_21B418265412",
 "left": 10,
 "width": 50,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "top": "40%",
 "bottom": "40%",
 "borderRadius": 0,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, false, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, true, 0, null, null, false)",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412_rollover.png",
 "iconURL": "skin/IconButton_7FF185EF_706F_7FC6_41A5_21B418265412.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton arrow"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
  "this.Container_7DB30382_7065_343F_416C_8610BCBA9F50",
  "this.Button_7DB33382_7065_343F_41B1_0B0F019C1828",
  "this.Container_7DB32382_7065_343F_419E_6594814C420F",
  "this.Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
  "this.Container_7DBC9382_7065_343F_41CC_ED357655BB95",
  "this.Container_7DBCB382_7065_343F_41D8_AB382D384291",
  "this.Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
  "this.Button_1310DFA6_085F_AABF_4182_829672E917B1"
 ],
 "id": "Container_7DB3F373_7065_34CE_41B4_E77DDA40A4F3",
 "scrollBarMargin": 2,
 "right": "0%",
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "bottom": "25%",
 "top": "25%",
 "gap": 0,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "middle",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container buttons"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
  "this.HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
  "this.IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4"
 ],
 "id": "Container_7DBCC382_7065_343F_41D5_9D3C36B5F479",
 "scrollBarMargin": 2,
 "right": "0%",
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "bottom": "0%",
 "height": "26.316%",
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "vertical",
 "verticalAlign": "bottom",
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "-Container footer"
 }
},
{
 "maxHeight": 850,
 "id": "Image_1AD86CE2_0843_6EB6_4182_FBB001314805",
 "right": "9.55%",
 "width": "78.636%",
 "maxWidth": 850,
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_1AD86CE2_0843_6EB6_4182_FBB001314805.png",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0.12%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "height": "26.45%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "Image10524"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": 60,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "mode": "toggle",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "image button menu"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB22F4_3075_D173_41BB_3ACDC6CCCC83",
 "width": 320.6,
 "right": 0.05,
 "paddingRight": 0,
 "class": "Label",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "fontColor": "#000000",
 "text": "Universitas",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "top": 0.35,
 "minWidth": 1,
 "borderSize": 0,
 "fontSize": 61,
 "propagateClick": true,
 "height": 75,
 "fontStyle": "italic",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadow": false,
 "fontWeight": "bold",
 "paddingTop": 0,
 "data": {
  "name": "text 1"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Label_22BB32F4_3075_D173_4191_C8B45B85DEB8",
 "width": 167,
 "right": 10.35,
 "paddingRight": 0,
 "class": "Label",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "textShadowHorizontalLength": 0,
 "text": "Pancasakti Tegal",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "bottom": 0,
 "height": 44,
 "minWidth": 1,
 "borderSize": 0,
 "fontSize": 28,
 "propagateClick": true,
 "textShadowColor": "#000000",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "textShadowOpacity": 1,
 "textShadowVerticalLength": 0,
 "shadow": false,
 "fontWeight": "normal",
 "paddingTop": 0,
 "textShadowBlurRadius": 10,
 "data": {
  "name": "text 2"
 }
},
{
 "visible": false,
 "contentOpaque": false,
 "children": [
  "this.Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A"
 ],
 "id": "Container_062A682F_1140_E20B_41B0_3071FCBF3DC9",
 "scrollBarMargin": 2,
 "width": "85%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_062A3830_1140_E215_4195_1698933FE51C",
  "this.Container_062A2830_1140_E215_41AA_EB25B7BD381C",
  "this.Container_062AE830_1140_E215_4180_196ED689F4BD"
 ],
 "id": "Container_062A082F_1140_E20A_4193_DF1A4391DC79",
 "scrollBarMargin": 2,
 "width": "45.835%",
 "paddingRight": 50,
 "class": "Container",
 "paddingLeft": 50,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "minWidth": 460,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "paddingBottom": 20,
 "layout": "vertical",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_062A8830_1140_E215_419D_3439F16CCB3E",
 "width": "25%",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_062AB830_1140_E215_41AF_6C9D65345420, false, 0, null, null, false); this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_pressed.jpg",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E_rollover.jpg",
 "height": "75%",
 "iconURL": "skin/IconButton_062A8830_1140_E215_419D_3439F16CCB3E.jpg",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 140,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "header"
 }
},
{
 "paddingTop": 10,
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "left": 0,
 "itemVerticalAlign": "top",
 "itemLabelFontWeight": "normal",
 "itemLabelTextDecoration": "none",
 "class": "ThumbnailGrid",
 "scrollBarWidth": 10,
 "width": "100%",
 "paddingLeft": 70,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "itemThumbnailBorderRadius": 0,
 "itemLabelFontSize": 16,
 "itemThumbnailScaleMode": "fit_outside",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemHeight": 160,
 "selectedItemThumbnailShadow": true,
 "gap": 26,
 "minWidth": 1,
 "scrollBarVisible": "rollOver",
 "height": "92%",
 "itemLabelFontColor": "#666666",
 "propagateClick": false,
 "scrollBarColor": "#04A3E1",
 "itemLabelGap": 7,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "scrollBarOpacity": 0.5,
 "itemBackgroundColorDirection": "vertical",
 "itemThumbnailHeight": 125,
 "paddingBottom": 70,
 "itemBackgroundOpacity": 0,
 "rollOverItemLabelFontColor": "#04A3E1",
 "verticalAlign": "middle",
 "itemHorizontalAlign": "center",
 "itemWidth": 220,
 "itemPaddingBottom": 3,
 "shadow": false,
 "itemMode": "normal",
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "itemLabelFontStyle": "italic",
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "itemLabelHorizontalAlign": "center",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemLabelFontFamily": "Oswald",
 "itemThumbnailOpacity": 1,
 "paddingRight": 70,
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemBorderRadius": 0,
 "itemThumbnailWidth": 220,
 "itemPaddingRight": 3,
 "itemMaxWidth": 1000,
 "itemPaddingLeft": 3,
 "selectedItemLabelFontColor": "#04A3E1",
 "borderRadius": 5,
 "itemMaxHeight": 1000,
 "itemOpacity": 1,
 "itemMinHeight": 50,
 "bottom": -0.2,
 "borderSize": 0,
 "itemThumbnailShadow": false,
 "selectedItemLabelFontWeight": "bold",
 "itemPaddingTop": 3,
 "rollOverItemThumbnailShadow": true,
 "itemLabelPosition": "bottom",
 "itemBackgroundColor": [],
 "itemBackgroundColorRatios": [],
 "itemMinWidth": 50,
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "data": {
  "name": "ThumbnailList"
 },
 "scrollBarMargin": 2
},
{
 "contentOpaque": false,
 "children": [
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 140,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "header"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container photo"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397"
 ],
 "id": "Container_06C5ABA5_1140_A63F_41A9_850CF958D0DB",
 "scrollBarMargin": 2,
 "width": "55%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#000000"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "middle",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "-left"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
  "this.Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
  "this.Container_06C42BA5_1140_A63F_4195_037A0687532F"
 ],
 "id": "Container_06C58BA5_1140_A63F_419D_EC83F94F8C54",
 "scrollBarMargin": 2,
 "width": "45%",
 "paddingRight": 60,
 "class": "Container",
 "paddingLeft": 60,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "visible",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "minWidth": 460,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#0069A3",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.51,
 "paddingBottom": 20,
 "layout": "vertical",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81",
 "width": "25%",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "borderRadius": 0,
 "transparencyActive": false,
 "minWidth": 50,
 "borderSize": 0,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_06C41BA5_1140_A63F_41AE_B0CBD78DEFDC, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_pressed.jpg",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81_rollover.jpg",
 "height": "75%",
 "iconURL": "skin/IconButton_06C40BA5_1140_A63F_41AC_FA560325FD81.jpg",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "X"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DB3E382_7065_343F_41C2_E1E6BB5BA055",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DB30382_7065_343F_416C_8610BCBA9F50",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "id": "Button_7DB33382_7065_343F_41B1_0B0F019C1828",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 0.8,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "paddingRight": 0,
 "class": "Button",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "shadowSpread": 1,
 "fontSize": 18,
 "propagateClick": true,
 "label": "About Tour",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "pressedBackgroundOpacity": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "fontWeight": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button Panorama List"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DB32382_7065_343F_419E_6594814C420F",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DB34382_7065_343F_41CB_A5B96E9749EE",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DBC9382_7065_343F_41CC_ED357655BB95",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DBCB382_7065_343F_41D8_AB382D384291",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DBCD382_7065_343F_41D8_FC14DFF91DA9",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 1,
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "line"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Poppins",
 "id": "Button_1310DFA6_085F_AABF_4182_829672E917B1",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "shadowColor": "#000000",
 "rollOverBackgroundColor": [
  "#5CA1DE"
 ],
 "width": "100%",
 "paddingRight": 0,
 "class": "Button",
 "paddingLeft": 10,
 "horizontalAlign": "left",
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "borderColor": "#000000",
 "rollOverBackgroundColorRatios": [
  0
 ],
 "height": 50,
 "minWidth": 1,
 "mode": "push",
 "shadowSpread": 1,
 "fontSize": 18,
 "propagateClick": true,
 "label": "Panorama List",
 "iconBeforeLabel": true,
 "borderSize": 0,
 "iconHeight": 32,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "backgroundColorRatios": [
  0,
  1
 ],
 "gap": 23,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "fontStyle": "italic",
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "rollOverBackgroundOpacity": 0.8,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "fontWeight": "normal",
 "paddingTop": 0,
 "cursor": "hand",
 "pressedBackgroundOpacity": 1,
 "data": {
  "name": "Button Panorama List"
 }
},
{
 "contentOpaque": false,
 "id": "Container_7DB2F382_7065_343F_41C8_85C6AE9C717F",
 "scrollBarMargin": 2,
 "width": 40,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 1,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "visible",
 "borderRadius": 0,
 "backgroundColor": [
  "#5CA1DE"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "height": 2,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "blue line"
 }
},
{
 "id": "HTMLText_7DB2E382_7065_343F_41C2_951F708170F1",
 "width": "100%",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": 78,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Universitas Pancasakti tegal</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>www.upstegal.ac.id</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Info@upstegal.ac.id</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#ffffff;font-size:14px;font-family:'Oswald Regular';\"><I>Telp: +62 2833 51082</I></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText47602"
 }
},
{
 "maxHeight": 80,
 "maxWidth": 80,
 "id": "IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4",
 "width": 42,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "height": 42,
 "minWidth": 1,
 "borderSize": 0,
 "transparencyActive": true,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_7DB20382_7065_343F_4186_6E0B0B3AFF36, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "mode": "push",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4_rollover.png",
 "iconURL": "skin/IconButton_7DB21382_7065_343F_41B1_484EDBCD16A4.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton collapse"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A",
 "left": "24.53%",
 "right": "8.05%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_062A182F_1140_E20B_41B0_9CB8FFD6AA5A.jpg",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "top": "20.81%",
 "borderRadius": 0,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "height": "34.149%",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "shadow": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0,
 "data": {
  "name": "Image"
 }
},
{
 "contentOpaque": false,
 "id": "Container_062A3830_1140_E215_4195_1698933FE51C",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "height": 50,
 "gap": 0,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.HTMLText_062AD830_1140_E215_41B0_321699661E7F",
  "this.Button_062AF830_1140_E215_418D_D2FC11B12C47"
 ],
 "id": "Container_062A2830_1140_E215_41AA_EB25B7BD381C",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 300,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "minWidth": 100,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "paddingBottom": 10,
 "layout": "vertical",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "contentOpaque": false,
 "id": "Container_062AE830_1140_E215_4180_196ED689F4BD",
 "scrollBarMargin": 2,
 "width": 370,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "height": 30,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "maxHeight": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "right": 20,
 "width": "100%",
 "maxWidth": 60,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "top": 20,
 "borderRadius": 0,
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "height": "36.14%",
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "right": 20,
 "width": "100%",
 "maxWidth": 60,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "top": 20,
 "borderRadius": 0,
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "propagateClick": false,
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "height": "36.14%",
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "toolTipFontSize": 12,
 "toolTipPaddingBottom": 4,
 "playbackBarBorderSize": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressOpacity": 1,
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "toolTipTextShadowBlurRadius": 3,
 "paddingTop": 0,
 "width": "100%",
 "toolTipShadowColor": "#333333",
 "toolTipFontWeight": "normal",
 "displayTooltipInTouchScreens": true,
 "class": "ViewerArea",
 "playbackBarHeadShadowColor": "#000000",
 "paddingLeft": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "minHeight": 1,
 "vrPointerSelectionTime": 2000,
 "progressOpacity": 1,
 "firstTransitionDuration": 0,
 "progressRight": 0,
 "progressBarBackgroundColorDirection": "vertical",
 "toolTipFontStyle": "normal",
 "playbackBarHeadShadow": true,
 "vrPointerSelectionColor": "#FF6600",
 "progressHeight": 10,
 "toolTipShadowOpacity": 1,
 "minWidth": 1,
 "progressBackgroundOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "toolTipFontFamily": "Arial",
 "vrPointerColor": "#FFFFFF",
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "height": "100%",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarOpacity": 1,
 "progressBottom": 2,
 "playbackBarHeadShadowOpacity": 0.7,
 "progressBarOpacity": 1,
 "progressBorderSize": 0,
 "paddingBottom": 0,
 "toolTipShadowVerticalLength": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipFontColor": "#606060",
 "shadow": false,
 "progressBackgroundColorRatios": [
  0.01
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "transitionDuration": 500,
 "playbackBarBottom": 0,
 "progressBarBorderColor": "#0066FF",
 "playbackBarHeadShadowVerticalLength": 0,
 "progressBorderColor": "#FFFFFF",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderSize": 1,
 "paddingRight": 0,
 "toolTipPaddingRight": 6,
 "playbackBarHeadOpacity": 1,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "toolTipDisplayTime": 600,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "top": "0%",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarHeadWidth": 6,
 "borderRadius": 0,
 "playbackBarBackgroundColorDirection": "vertical",
 "borderSize": 0,
 "transitionMode": "blending",
 "toolTipBorderRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarRight": 0,
 "toolTipBorderColor": "#767676",
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowSpread": 0,
 "playbackBarProgressBorderRadius": 0,
 "playbackBarBorderRadius": 0,
 "toolTipOpacity": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipShadowBlurRadius": 3,
 "data": {
  "name": "Viewer photoalbum 1"
 },
 "playbackBarHeadBorderColor": "#000000",
 "toolTipTextShadowColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 0
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "borderRadius": 0,
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "propagateClick": true,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "right": 10,
 "width": "14.22%",
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "top": "20%",
 "bottom": "20%",
 "borderRadius": 0,
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "propagateClick": true,
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingBottom": 0,
 "verticalAlign": "middle",
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "right": 20,
 "width": "10%",
 "maxWidth": 60,
 "paddingRight": 0,
 "class": "IconButton",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0,
 "minHeight": 50,
 "top": 20,
 "borderRadius": 0,
 "minWidth": 50,
 "borderSize": 0,
 "transparencyActive": false,
 "propagateClick": true,
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false); this.setComponentVisibility(this.Container_22BB12F4_3075_D173_4184_EC3BC4955417, true, 0, null, null, false); this.setComponentVisibility(this.Container_7FF1F5EF_706F_7FC6_41C7_BCBB555D2D3D, true, 0, null, null, false)",
 "mode": "push",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingBottom": 0,
 "verticalAlign": "top",
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "height": "10%",
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "shadow": false,
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "IconButton X"
 }
},
{
 "maxHeight": 1000,
 "maxWidth": 2000,
 "id": "Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397",
 "left": "0%",
 "width": "100%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_06C5BBA5_1140_A63F_41A7_E6D01D4CC397.jpg",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0,
 "minHeight": 1,
 "borderRadius": 0,
 "top": "0%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "height": "100%",
 "paddingBottom": 0,
 "verticalAlign": "bottom",
 "shadow": false,
 "scaleMode": "fit_outside",
 "paddingTop": 0,
 "data": {
  "name": "Image40635"
 }
},
{
 "contentOpaque": false,
 "id": "Container_06C59BA5_1140_A63F_41B1_4B41E3B7D98D",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "right",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 0,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 0,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "height": "5%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 20,
 "data": {
  "name": "Container space"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
  "this.Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C"
 ],
 "id": "Container_06C46BA5_1140_A63F_4151_B5A20B4EA86A",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 520,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "minWidth": 100,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#E73B2C",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.79,
 "paddingBottom": 30,
 "layout": "vertical",
 "verticalAlign": "top",
 "height": "100%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container text"
 }
},
{
 "contentOpaque": false,
 "id": "Container_06C42BA5_1140_A63F_4195_037A0687532F",
 "scrollBarMargin": 2,
 "width": 370,
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "overflow": "scroll",
 "borderRadius": 0,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "height": 40,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "Container space"
 }
},
{
 "id": "HTMLText_062AD830_1140_E215_41B0_321699661E7F",
 "width": "100%",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 20,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>DOLOR SIT AME</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B>CONSECTETUR ADIPISCING ELIT. MORBI BIBENDUM PHARETRA LOREM, ACCUMSAN SAN NULLA.</B></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>DONEC FEUGIAT:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:1.65vh;\"> </SPAN>\u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.54vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.54vh;font-family:'Oswald';\"><B><I>LOREM IPSUM:</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.8vh;font-family:'Oswald';\"><B>$150,000</B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText"
 }
},
{
 "textDecoration": "none",
 "fontFamily": "Oswald",
 "id": "Button_062AF830_1140_E215_418D_D2FC11B12C47",
 "iconWidth": 32,
 "shadowBlurRadius": 6,
 "rollOverBackgroundOpacity": 1,
 "width": 180,
 "shadowColor": "#000000",
 "pressedBackgroundColorRatios": [
  0
 ],
 "paddingRight": 0,
 "class": "Button",
 "paddingLeft": 0,
 "horizontalAlign": "center",
 "backgroundOpacity": 0.7,
 "minHeight": 1,
 "fontColor": "#FFFFFF",
 "borderColor": "#000000",
 "iconBeforeLabel": true,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "borderRadius": 50,
 "backgroundColor": [
  "#04A3E1"
 ],
 "shadowSpread": 1,
 "minWidth": 1,
 "borderSize": 0,
 "gap": 5,
 "fontSize": "2.39vh",
 "propagateClick": false,
 "label": "LOREM IPSUM",
 "mode": "push",
 "iconHeight": 32,
 "backgroundColorRatios": [
  0
 ],
 "fontStyle": "italic",
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "middle",
 "height": 50,
 "pressedBackgroundOpacity": 1,
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "fontWeight": "bold",
 "paddingTop": 0,
 "cursor": "hand",
 "data": {
  "name": "Button31015"
 }
},
{
 "id": "HTMLText_0B42C466_11C0_623D_4193_9FAB57A5AC33",
 "width": "100%",
 "paddingRight": 0,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 0,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "46%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:8.39vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>LOREM IPSUM</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Oswald';\"><B><I>DOLOR SIT AMET</I></B></SPAN></SPAN></DIV></div>",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText18899"
 }
},
{
 "contentOpaque": false,
 "children": [
  "this.Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
  "this.HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE"
 ],
 "id": "Container_0D9BF47A_11C0_E215_41A4_A63C8527FF9C",
 "scrollBarMargin": 2,
 "width": "100%",
 "paddingRight": 0,
 "class": "Container",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "backgroundOpacity": 0.3,
 "scrollBarWidth": 10,
 "minHeight": 1,
 "borderRadius": 0,
 "overflow": "scroll",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "gap": 10,
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "layout": "horizontal",
 "verticalAlign": "top",
 "height": "75%",
 "shadow": false,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "data": {
  "name": "- content"
 }
},
{
 "maxHeight": 200,
 "maxWidth": 200,
 "id": "Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0",
 "width": "25%",
 "paddingRight": 0,
 "class": "Image",
 "url": "skin/Image_0B48D65D_11C0_6E0F_41A2_4D6F373BABA0.jpg",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "paddingBottom": 0,
 "verticalAlign": "top",
 "shadow": false,
 "scaleMode": "fit_inside",
 "paddingTop": 0,
 "data": {
  "name": "agent photo"
 }
},
{
 "id": "HTMLText_0B4B0DC1_11C0_6277_41A4_201A5BB3F7AE",
 "width": "75%",
 "paddingRight": 10,
 "class": "HTMLText",
 "scrollBarWidth": 10,
 "paddingLeft": 10,
 "minHeight": 1,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "height": "100%",
 "minWidth": 1,
 "borderSize": 0,
 "propagateClick": false,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#04A3E1",
 "scrollBarOpacity": 0.5,
 "paddingBottom": 10,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:2.54vh;font-family:'Oswald';\"><B><I>JOHN DOE</I></B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Oswald';\"><I>Licensed Real Estate Salesperson</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.91vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>Tlf.: +11 111 111 111</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>jhondoe@realestate.com</I></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#999999;font-size:1.91vh;font-family:'Oswald';\"><I>www.loremipsum.com</I></SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:1.14vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:1.14vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV></div>",
 "shadow": false,
 "paddingTop": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "HTMLText19460"
 }
}],
 "vrPolyfillScale": 0.5,
 "paddingRight": 0,
 "class": "Player",
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "minHeight": 20,
 "backgroundPreloadEnabled": true,
 "width": "100%",
 "defaultVRPointer": "laser",
 "borderRadius": 0,
 "overflow": "visible",
 "mobileMipmappingEnabled": false,
 "minWidth": 20,
 "borderSize": 0,
 "gap": 10,
 "propagateClick": true,
 "scrollBarVisible": "rollOver",
 "scrollBarColor": "#000000",
 "scrollBarOpacity": 0.5,
 "scripts": {
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "registerKey": function(key, value){  window[key] = value; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } }
 },
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "layout": "absolute",
 "verticalAlign": "top",
 "height": "100%",
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "downloadEnabled": false,
 "mouseWheelEnabled": true,
 "shadow": false,
 "paddingTop": 0,
 "data": {
  "name": "Player468"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
