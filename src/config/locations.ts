export enum Tags {
  Small = "small",
  Medium = "medium",
  Large = "large",
  Campsite = "campsite",
  House = "house",
}

export type Location = {
  name: string;
  tags: Tags[];
};

const locations: Location[] = [
  {
    name: "Bleasdale Farmhouse",
    tags: [Tags.Small, Tags.House],
  },
  {
    name: "42 Edgefield Road",
    tags: [Tags.Small, Tags.House],
  },
  {
    name: "Grafton Farmhouse",
    tags: [Tags.Small, Tags.House],
  },
  {
    name: "Point Hope",
    tags: [Tags.Small],
  },
  {
    name: "10 Ridgeview Court",
    tags: [Tags.Small, Tags.House],
  },
  {
    name: "6 Tanglewood Drive",
    tags: [Tags.Small, Tags.House],
  },
  {
    name: "13 Willow Street",
    tags: [Tags.Small, Tags.House],
  },
  {
    name: "Camp Woodwind",

    tags: [Tags.Small, Tags.Campsite],
  },
  {
    name: "Maple Lodge Campsite",
    tags: [Tags.Medium, Tags.Campsite],
  },
  {
    name: "Prison",
    tags: [Tags.Medium],
  },
  {
    name: "Sunny Meadows - Restricted",
    tags: [Tags.Medium],
  },
  {
    name: "Brownstone High School",
    tags: [Tags.Large],
  },
  {
    name: "Sunny Meadows",
    tags: [Tags.Large],
  },
];

export default locations;
