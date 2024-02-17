export type Launch = {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_date_unix: number;
  launch_date_utc: string;
  launch_date_local: string;
  is_tentative: boolean;
  tentative_max_precision: string;
  tbd: boolean;
  launch_window: number | null;
  rocket: {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        core_serial: string;
        flight: number;
        block?: number | null;
        gridfins: boolean;
        legs: boolean;
        reused: boolean;
        land_success: boolean | null;
        landing_intent: boolean;
        landing_type: string | null;
        landing_vehicle: string | null;
      }[];
    };
    second_stage: {
      block?: number | null;
      payloads: {
        payload_id: string;
        norad_id: number[];
        reused: boolean;
        customers: string[];
        nationality: string;
        manufacturer: string;
        payload_type: string;
        payload_mass_kg: number | null;
        payload_mass_lbs: number | null;
        orbit: string;
        orbit_params: {
          reference_system: string | null;
          regime: string | null;
          longitude?: number | null;
          semi_major_axis_km?: number | null;
          eccentricity?: number | null;
          periapsis_km?: number | null;
          apoapsis_km?: number | null;
          inclination_deg?: number | null;
          period_min?: number | null;
          lifespan_years?: number | null;
          epoch?: string | null;
          mean_motion?: number | null;
          raan?: number | null;
          arg_of_pericenter?: number | null;
          mean_anomaly?: number | null;
        };
      }[];
    };
    fairings?: {
      reused: boolean;
      recovery_attempt: boolean;
      recovered: boolean;
      ship: string | null;
    };
  };
  ships: string[];
  telemetry: {
    flight_club: string | null;
  };
  launch_site: {
    site_id: string;
    site_name: string;
    site_name_long: string;
  };
  launch_success?: boolean;
  links: {
    mission_patch?: string;
    mission_patch_small?: string;
    reddit_campaign?: string;
    reddit_launch?: string;
    reddit_recovery?: string;
    reddit_media?: string;
    presskit?: string;
    article_link?: string;
    wikipedia?: string;
    video_link?: string;
    youtube_id?: string;
    flickr_images: string[];
  };
  details?: string | null;
  upcoming: boolean;
  static_fire_date_utc: string | null;
  static_fire_date_unix: number | null;
  timeline: { [key: string]: number | null } | null;
  crew: null | string[];
};
