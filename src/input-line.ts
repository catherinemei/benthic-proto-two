import { Hypergraph } from "./priority-traversal-types";

export const lineGraphHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Line Graph",
    description:
      "Monthly Average Temperature for Reggane and Tallinn. Line graph. With axes month and temperature Celsius.",
    descriptionTokens: {
      label: "Line Graph",
      shortDescription: "Monthly Average Temperature for Reggane and Tallinn.",
      longDescription:
        "Monthly Average Temperature for Reggane and Tallinn. Line graph. With axes month and temperature Celsius.",
    },
    parents: [],
    children: ["1", "2", "41"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "X-axis",
    description: "X Axis. Contains January to December.",
    descriptionTokens: {
      label: "X-axis",
      shortDescription: "Contains 12 months.",
      longDescription:
        "Contains 12 months. January to December.",
    },
    parents: ["0"],
    children: ["3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Legend",
    description: "Legend. Contains Reggane, Tallinn",
    descriptionTokens: {
      label: "Legend",
      shortDescription: "Contains 2 cities.",
      longDescription: "Contains Reggane, Tallinn",
    },
    parents: ["0"],
    children: ["15", "16"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "January",
    description:
      "Month: January. Contains: 2 points. Temperature of Reggane, Tallinn in January",
    descriptionTokens: {
      label: "January",
      shortDescription: "Month: January. Contains: 2 points.",
      longDescription:
        "Month: January. Contains: 2 points. Temperature of Reggane, Tallinn in January.",
    },
    parents: ["1"],
    children: ["17", "18"],
    priority: 3,
  },
    "4": {
    id: "4",
    displayName: "February",
    description:
      "Month: February. Contains: 2 points. Temperature of Reggane, Tallinn in February.",
    descriptionTokens: {
      label: "February",
      shortDescription: "Month: February. Contains: 2 points.",
      longDescription:
        "Month: February. Contains: 2 points. Temperature of Reggane, Tallinn in February.",
    },
    parents: ["1"],
    children: ["19", "20"],
    priority: 3,
  },
  "5": {
    id: "5",
    displayName: "March",
    description:
      "Month: March. Contains: 2 points. Temperature of Reggane, Tallinn in March.",
    descriptionTokens: {
      label: "March",
      shortDescription: "Month: March. Contains: 2 points.",
      longDescription:
        "Month: March. Contains: 2 points. Temperature of Reggane, Tallinn in March.",
    },
    parents: ["1"],
    children: ["21", "22"],
    priority: 3,
  },
  "6": {
    id: "6",
    displayName: "April",
    description:
      "Month: April. Contains: 2 points. Temperature of Reggane, Tallinn in April.",
    descriptionTokens: {
      label: "April",
      shortDescription: "Month: April. Contains: 2 points.",
      longDescription:
        "Month: April. Contains: 2 points. Temperature of Reggane, Tallinn in April.",
    },
    parents: ["1"],
    children: ["23", "24"],
    priority: 3,
  },
  "7": {
    id: "7",
    displayName: "May",
    description:
      "Month: May. Contains: 2 points. Temperature of Reggane, Tallinn in May.",
    descriptionTokens: {
      label: "May",
      shortDescription: "Month: May. Contains: 2 points.",
      longDescription:
        "Month: May. Contains: 2 points. Temperature of Reggane, Tallinn in May.",
    },
    parents: ["1"],
    children: ["25", "26"],
    priority: 3,
  },
  "8": {
    id: "8",
    displayName: "June",
    description:
      "Month: June. Contains: 2 points. Temperature of Reggane, Tallinn in June.",
    descriptionTokens: {
      label: "June",
      shortDescription: "Month: June. Contains: 2 points.",
      longDescription:
        "Month: June. Contains: 2 points. Temperature of Reggane, Tallinn in June.",
    },
    parents: ["1"],
    children: ["27", "28"],
    priority: 3,
  },
  "9": {
    id: "9",
    displayName: "July",
    description:
      "Month: July. Contains: 2 points. Temperature of Reggane, Tallinn in July.",
    descriptionTokens: {
      label: "July",
      shortDescription: "Month: July. Contains: 2 points.",
      longDescription:
        "Month: July. Contains: 2 points. Temperature of Reggane, Tallinn in July.",
    },
    parents: ["1"],
    children: ["29", "30"],
    priority: 3,
  },
  "10": {
    id: "10",
    displayName: "August",
    description:
      "Month: August. Contains: 2 points. Temperature of Reggane, Tallinn in August.",
    descriptionTokens: {
      label: "August",
      shortDescription: "Month: August. Contains: 2 points.",
      longDescription:
        "Month: August. Contains: 2 points. Temperature of Reggane, Tallinn in August.",
    },
    parents: ["1"],
    children: ["31", "32"],
    priority: 3,
  },
  "11": {
    id: "11",
    displayName: "September",
    description:
      "Month: September. Contains: 2 points. Temperature of Reggane, Tallinn in September.",
    descriptionTokens: {
      label: "September",
      shortDescription: "Month: September. Contains: 2 points.",
      longDescription:
        "Month: September. Contains: 2 points. Temperature of Reggane, Tallinn in September.",
    },
    parents: ["1"],
    children: ["33", "34"],
    priority: 3,
  },
  "12": {
    id: "12",
    displayName: "October",
    description:
      "Month: October. Contains: 2 points. Temperature of Reggane, Tallinn in October.",
    descriptionTokens: {
      label: "October",
      shortDescription: "Month: October. Contains: 2 points.",
      longDescription:
        "Month: October. Contains: 2 points. Temperature of Reggane, Tallinn in October.",
    },
    parents: ["1"],
    children: ["35", "36"],
    priority: 3,
  },
  "13": {
    id: "13",
    displayName: "November",
    description:
      "Month: November. Contains: 2 points. Temperature of Reggane, Tallinn in November.",
    descriptionTokens: {
      label: "November",
      shortDescription: "Month: November. Contains: 2 points.",
      longDescription:
        "Month: November. Contains: 2 points. Temperature of Reggane, Tallinn in November.",
    },
    parents: ["1"],
    children: ["37", "38"],
    priority: 3,
  },
  "14": {
    id: "14",
    displayName: "December",
    description:
      "Month: December. Contains: 2 points. Temperature of Reggane, Tallinn in December.",
    descriptionTokens: {
      label: "December",
      shortDescription: "Month: December. Contains: 2 points.",
      longDescription:
        "Month: December. Contains: 2 points. Temperature of Reggane, Tallinn in December.",
    },
    parents: ["1"],
    children: ["39", "40"],
    priority: 3,
  },
  "15": {
    id: "15",
    displayName: "Reggane",
    description:
      "City: Reggane. Contains: 12 temperature points. Monthly temperature data for Reggane.",
    descriptionTokens: {
      label: "Reggane",
      shortDescription: "Contains: 12 temperature points.",
      longDescription:
        "City: Reggane. Contains: 12 temperature points. Monthly temperature data for Reggane.",
    },
    parents: ["2"],
    children: ["17", "19", "21", "23", "25", "27", "29", "31", "33", "35", "37", "39"],
    priority: 3,
  },
  "16": {
    id: "16",
    displayName: "Tallinn",
    description:
      "City: Tallinn. Contains: 12 temperature points. Monthly temperature data for Tallinn.",
    descriptionTokens: {
      label: "Tallinn",
      shortDescription: "Contains: 12 temperature points.",
      longDescription:
        "City: Tallinn. Contains: 12 temperature points. Monthly temperature data for Tallinn.",
    },
    parents: ["2"],
    children: ["18", "20", "22", "24", "26", "28", "30", "32", "34", "36", "38", "40"],
    priority: 3,
  },
  "17": {
    id: "17",
    displayName: "January, Reggane, 16 Celsius",
    description:
      "Month: January. City: Reggane. Average temperature: 16 Celsius.",
    descriptionTokens: {
      label: "16 Celsius",
      shortDescription: "Month: January. City: Reggane. Average temperature: 16 Celsius.",
      longDescription:
        "Month: January. City: Reggane. Average temperature: 16 Celsius.",
    },
    parents: ["3", "15"],
    children: [],
    priority: 4,
  },
  "18": {
    id: "18",
    displayName: "January, Tallinn, -2.9 Celsius",
    description:
      "Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",
    descriptionTokens: {
      label: "-2.9 Celsius",
      shortDescription: "Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",
      longDescription:
        "Month: January. City: Tallinn. Average temperature: -2.9 Celsius.",
    },
    parents: ["3", "16"],
    children: [],
    priority: 4,
  },
  "19": {
    id: "19",
    displayName: "February, Reggane, 18.2 Celsius",
    description:
      "Month: February. City: Reggane. Average temperature: 18.2 Celsius.",
    descriptionTokens: {
      label: "18.2 Celsius",
      shortDescription: "Month: February. City: Reggane. Average temperature: 18.2 Celsius.",
      longDescription:
        "Month: February. City: Reggane. Average temperature: 18.2 Celsius.",
    },
    parents: ["4", "15"],
    children: [],
    priority: 4,
  },
  "20": {
    id: "20",
    displayName: "February, Tallinn, -3.6 Celsius",
    description:
      "Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",
    descriptionTokens: {
      label: "-3.6 Celsius",
      shortDescription: "Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",
      longDescription:
        "Month: February. City: Tallinn. Average temperature: -3.6 Celsius.",
    },
    parents: ["4", "16"],
    children: [],
    priority: 4,
  },
  "21": {
    id: "21",
    displayName: "March, Reggane, 23.1 Celsius",
    description:
      "Month: March. City: Reggane. Average temperature: 23.1 Celsius.",
    descriptionTokens: {
      label: "23.1 Celsius",
      shortDescription: "Month: March. City: Reggane. Average temperature: 23.1 Celsius.",
      longDescription:
        "Month: March. City: Reggane. Average temperature: 23.1 Celsius.",
    },
    parents: ["5", "15"],
    children: [],
    priority: 4,
  },
  "22": {
    id: "22",
    displayName: "March, Tallinn, -0.6 Celsius",
    description:
      "Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",
    descriptionTokens: {
      label: "-0.6 Celsius",
      shortDescription: "Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",
      longDescription:
        "Month: March. City: Tallinn. Average temperature: -0.6 Celsius.",
    },
    parents: ["5", "16"],
    children: [],
    priority: 4,
  },
  "23": {
    id: "23",
    displayName: "April, Reggane, 27.9 Celsius",
    description:
      "Month: April. City: Reggane. Average temperature: 27.9 Celsius.",
    descriptionTokens: {
      label: "27.9 Celsius",
      shortDescription: "Month: April. City: Reggane. Average temperature: 27.9 Celsius.",
      longDescription:
        "Month: April. City: Reggane. Average temperature: 27.9 Celsius.",
    },
    parents: ["6", "15"],
    children: [],
    priority: 4,
  },
  "24": {
    id: "24",
    displayName: "April, Tallinn, 4.8 Celsius",
    description:
      "Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",
    descriptionTokens: {
      label: "4.8 Celsius",
      shortDescription: "Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",
      longDescription:
        "Month: April. City: Tallinn. Average temperature: 4.8 Celsius.",
    },
    parents: ["6", "16"],
    children: [],
    priority: 4,
  },
  "25": {
    id: "25",
    displayName: "May, Reggane, 32.2 Celsius",
    description:
      "Month: May. City: Reggane. Average temperature: 32.2 Celsius.",
    descriptionTokens: {
      label: "32.2 Celsius",
      shortDescription: "Month: May. City: Reggane. Average temperature: 32.2 Celsius.",
      longDescription:
        "Month: May. City: Reggane. Average temperature: 32.2 Celsius.",
    },
    parents: ["7", "15"],
    children: [],
    priority: 4,
  },
  "26": {
    id: "26",
    displayName: "May, Tallinn, 10.2 Celsius",
    description:
      "Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",
    descriptionTokens: {
      label: "10.2 Celsius",
      shortDescription: "Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",
      longDescription:
        "Month: May. City: Tallinn. Average temperature: 10.2 Celsius.",
    },
    parents: ["7", "16"],
    children: [],
    priority: 4,
  },
  "27": {
    id: "27",
    displayName: "June, Reggane, 36.4 Celsius",
    description:
      "Month: June. City: Reggane. Average temperature: 36.4 Celsius.",
    descriptionTokens: {
      label: "36.4 Celsius",
      shortDescription: "Month: June. City: Reggane. Average temperature: 36.4 Celsius.",
      longDescription:
        "Month: June. City: Reggane. Average temperature: 36.4 Celsius.",
    },
    parents: ["8", "15"],
    children: [],
    priority: 4,
  },
  "28": {
    id: "28",
    displayName: "June, Tallinn, 14.5 Celsius",
    description:
      "Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",
    descriptionTokens: {
      label: "14.5 Celsius",
      shortDescription: "Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",
      longDescription:
        "Month: June. City: Tallinn. Average temperature: 14.5 Celsius.",
    },
    parents: ["8", "16"],
    children: [],
    priority: 4,
  },
  "29": {
    id: "29",
    displayName: "July, Reggane, 39.8 Celsius",
    description:
      "Month: July. City: Reggane. Average temperature: 39.8 Celsius.",
    descriptionTokens: {
      label: "39.8 Celsius",
      shortDescription: "Month: July. City: Reggane. Average temperature: 39.8 Celsius.",
      longDescription:
        "Month: July. City: Reggane. Average temperature: 39.8 Celsius.",
    },
    parents: ["9", "15"],
    children: [],
    priority: 4,
  },
  "30": {
    id: "30",
    displayName: "July, Tallinn, 17.6 Celsius",
    description:
      "Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",
    descriptionTokens: {
      label: "17.6 Celsius",
      shortDescription: "Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",
      longDescription:
        "Month: July. City: Tallinn. Average temperature: 17.6 Celsius.",
    },
    parents: ["9", "16"],
    children: [],
    priority: 4,
  },
  "31": {
    id: "31",
    displayName: "August, Reggane, 38.4 Celsius",
    description:
      "Month: August. City: Reggane. Average temperature: 38.4 Celsius.",
    descriptionTokens: {
      label: "38.4 Celsius",
      shortDescription: "Month: August. City: Reggane. Average temperature: 38.4 Celsius.",
      longDescription:
        "Month: August. City: Reggane. Average temperature: 38.4 Celsius.",
    },
    parents: ["10", "15"],
    children: [],
    priority: 4,
  },
  "32": {
    id: "32",
    displayName: "August, Tallinn, 16.5 Celsius",
    description:
      "Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",
    descriptionTokens: {
      label: "16.5 Celsius",
      shortDescription: "Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",
      longDescription:
        "Month: August. City: Tallinn. Average temperature: 16.5 Celsius.",
    },
    parents: ["10", "16"],
    children: [],
    priority: 4,
  },
  "33": {
    id: "33",
    displayName: "September, Reggane, 35.5 Celsius",
    description:
      "Month: September. City: Reggane. Average temperature: 35.5 Celsius.",
    descriptionTokens: {
      label: "35.5 Celsius",
      shortDescription: "Month: September. City: Reggane. Average temperature: 35.5 Celsius.",
      longDescription:
        "Month: September. City: Reggane. Average temperature: 35.5 Celsius.",
    },
    parents: ["11", "15"],
    children: [],
    priority: 4,
  },
  "34": {
    id: "34",
    displayName: "September, Tallinn, 12 Celsius",
    description:
      "Month: September. City: Tallinn. Average temperature: 12 Celsius.",
    descriptionTokens: {
      label: "12 Celsius",
      shortDescription: "Month: September. City: Tallinn. Average temperature: 12 Celsius.",
      longDescription:
        "Month: September. City: Tallinn. Average temperature: 12 Celsius.",
    },
    parents: ["11", "16"],
    children: [],
    priority: 4,
  },
  "35": {
    id: "35",
    displayName: "October, Reggane, 29.2 Celsius",
    description:
      "Month: October. City: Reggane. Average temperature: 29.2 Celsius.",
    descriptionTokens: {
      label: "29.2 Celsius",
      shortDescription: "Month: October. City: Reggane. Average temperature: 29.2 Celsius.",
      longDescription:
        "Month: October. City: Reggane. Average temperature: 29.2 Celsius.",
    },
    parents: ["12", "15"],
    children: [],
    priority: 4,
  },
  "36": {
    id: "36",
    displayName: "October, Tallinn, 6.5 Celsius",
    description:
      "Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",
    descriptionTokens: {
      label: "6.5 Celsius",
      shortDescription: "Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",
      longDescription:
        "Month: October. City: Tallinn. Average temperature: 6.5 Celsius.",
    },
    parents: ["12", "16"],
    children: [],
    priority: 4,
  },
  "37": {
    id: "37",
    displayName: "November, Reggane, 22 Celsius",
    description:
      "Month: November. City: Reggane. Average temperature: 22 Celsius.",
    descriptionTokens: {
      label: "22 Celsius",
      shortDescription: "Month: November. City: Reggane. Average temperature: 22 Celsius.",
      longDescription:
        "Month: November. City: Reggane. Average temperature: 22 Celsius.",
    },
    parents: ["13", "15"],
    children: [],
    priority: 4,
  },
  "38": {
    id: "38",
    displayName: "November, Tallinn, 2 Celsius",
    description:
      "Month: November. City: Tallinn. Average temperature: 2 Celsius.",
    descriptionTokens: {
      label: "2 Celsius",
      shortDescription: "Month: November. City: Tallinn. Average temperature: 2 Celsius.",
      longDescription:
        "Month: November. City: Tallinn. Average temperature: 2 Celsius.",
    },
    parents: ["13", "16"],
    children: [],
    priority: 4,
  },
  "39": {
    id: "39",
    displayName: "December, Reggane, 17.8 Celsius",
    description:
      "Month: December. City: Reggane. Average temperature: 17.8 Celsius.",
    descriptionTokens: {
      label: "17.8 Celsius",
      shortDescription: "Month: December. City: Reggane. Average temperature: 17.8 Celsius.",
      longDescription:
        "Month: December. City: Reggane. Average temperature: 17.8 Celsius.",
    },
    parents: ["14", "15"],
    children: [],
    priority: 4,
  },
  "40": {
    id: "40",
    displayName: "December, Tallinn, -0.9 Celsius",
    description:
      "Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",
    descriptionTokens: {
      label: "-0.9 Celsius",
      shortDescription: "Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",
      longDescription:
        "Month: December. City: Tallinn. Average temperature: -0.9 Celsius.",
    },
    parents: ["14", "16"],
    children: [],
    priority: 4,
  },
  "41": {
    id: "41",
    displayName: "Y-axis",
    description:
      "Y-axis. Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale.",
    descriptionTokens: {
      label: "Y-axis",
      shortDescription: "Y-axis. Temperature in Celsius",
      longDescription:
        "Y-axis. Label: Temperature in Celsius. Values range from -10 to 50 on a numerical scale.",
    },
    parents: ["0"],
    children: [],
    priority: 2,
  },
};