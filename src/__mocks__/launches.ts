import { Launch } from "../services/types";

export const launchesMock = [
  {
    flight_number: 107,
    mission_name: "Crew-1",
    launch_date_local: "2020-11-15T19:27:00-05:00",
    rocket: {
      rocket_name: "Falcon 9",
    },
    launch_site: {
      site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
    },
    links: {
      mission_patch_small: "https://i.imgur.com/BzaSAnx.png",
      flickr_images: [
        "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
      ],
    },
    details: "SpaceX",
  },
  {
    flight_number: 106,
    mission_name: "Crew-0",
    launch_date_local: "2019-11-15T19:27:00-05:00",
    rocket: {
      rocket_name: "Falcon 7",
    },
    launch_site: {
      site_name_long: "Kennedy Space Center Historic Launch Complex 39A",
    },
    links: {
      mission_patch_small: "https://i.imgur.com/BzaSAnx.png",
      flickr_images: [
        "https://live.staticflickr.com/65535/50618376646_8f52c31fc4_o.jpg",
      ],
    },
    details: "SpaceX",
  },
] as Launch[];
