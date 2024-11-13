import { Hypergraph } from "./priority-traversal-types";

export const aspirinHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Aspirin",
    description:
      "Chemical diagram for aspirin. Contains benzene, ester, and carboxylic acid.",
    descriptionTokens: {
      label: "Aspirin",
      shortDescription: "Chemical diagram for aspirin. Contains benzene ring, ester, and carboxylic acid.",
      longDescription:
        "Molecule containing benzene ring, ester, and carboxylic acid.",
    },
    parents: [],
    children: ["1", "2", "3"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Benzene",
    description:
      "Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",
    descriptionTokens: {
      label: "Benzene",
      shortDescription: "Benzene ring with 6 carbons.",
      longDescription:
        "Ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",
    },
    parents: ["0"],
    children: ["4", "5", "6", "7", "8", "9"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Ester",
    description: "Ester group bonded to C1 of benzene ring.",
    descriptionTokens: {
      label: "Ester",
      shortDescription: "Ester group bonded to C1 of benzene ring.",
      longDescription: "Group bonded to C1 of benzene ring.",
    },
    parents: ["0"],
    children: ["4", "10", "11", "12", "13"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "Carboxylic acid",
    description: "Carboxylic acid group bonded to C2 of benzene ring.",
    descriptionTokens: {
      label: "Carboxylic acid",
      shortDescription:
        "Carboxylic acid group bonded to C2 of benzene ring.",
      longDescription:
        "Group bonded to C2 of benzene ring.",
    },
    parents: ["0"],
    children: ["5", "14", "15", "16"],
    priority: 2,
  },
  "4": {
    id: "4",
    displayName: "C1 of benzene",
    description:
      "Bonded to C2 and C6 of benzene and O1 of ester.",
    descriptionTokens: {
      label: "C1 of benzene",
      shortDescription:
        "Bonded to C2 and C6 of benzene and O1 of ester.",
      longDescription:
        "Bonded to C2 and C6 of benzene and O1 of ester.",
    },
    parents: ["1", "2"],
    children: [],
    priority: 2,
  },
  "5": {
    id: "5",
    displayName: "C2 of benzene",
    description:
      "Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",
    descriptionTokens: {
      label: "C2 of benzene",
      shortDescription:
        "Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",
      longDescription:
        "Bonded to C1 and C3 of benzene and C9 of carboxylic acid.",
    },
    parents: ["1", "3"],
    children: [],
    priority: 2,
  },
  "6": {
    id: "6",
    displayName: "C3 of benzene",
    description:
      "Bonded to C2 and C4 of benzene.",
    descriptionTokens: {
      label: "C3 of benzene",
      shortDescription:
        "Bonded to C2 and C4 of benzene.",
      longDescription:
        "Bonded to C2 and C4 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "7": {
    id: "7",
    displayName: "C4 of benzene",
    description:
      "Bonded to C3 and C5 of benzene.",
    descriptionTokens: {
      label: "C4 of benzene",
      shortDescription:
        "Bonded to C3 and C5 of benzene.",
      longDescription:
        "Bonded to C3 and C5 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "8": {
    id: "8",
    displayName: "C5 of benzene",
    description:
      "Bonded to C4 and C6 of benzene.",
    descriptionTokens: {
      label: "C5 of benzene",
      shortDescription:
        "Bonded to C4 and C6 of benzene.",
      longDescription:
        "Bonded to C4 and C6 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "9": {
    id: "9",
    displayName: "C6 of benzene",
    description:
      "Bonded to C1 and C5 of benzene.",
    descriptionTokens: {
      label: "C6 of benzene",
      shortDescription:
        "Bonded to C1 and C5 of benzene.",
      longDescription:
        "Bonded to C1 and C5 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "10": {
    id: "10",
    displayName: "O1 of ester",
    description: "Bonded to C1 of benzene and C7 of ester.",
    descriptionTokens: {
      label: "O1 of ester",
      shortDescription: "Bonded to C1 of benzene and C7 of ester.",
      longDescription: "Bonded to C1 of benzene and C7 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "11": {
    id: "11",
    displayName: "C7 of ester",
    description:
     "Bonded to O1, O2, and C8 of ester",
    descriptionTokens: {
      label: "C7 of ester",
      shortDescription:
        "Bonded to O1, O2, and C8 of ester",
      longDescription:
        "Bonded to O1, O2, and C8 of ester",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "12": {
    id: "12",
    displayName: "O2 of ester",
    description: "Bonded to C7 of ester.",
    descriptionTokens: {
      label: "O2 of ester",
      shortDescription: "Bonded to C7 of ester.",
      longDescription: "Bonded to C7 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "13": {
    id: "13",
    displayName: "C8 of ester",
    description: "Bonded to C7 of ester.",
    descriptionTokens: {
      label: "C8 of ester",
      shortDescription: "Bonded to C7 of ester.",
      longDescription: "Bonded to C7 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "14": {
    id: "14",
    displayName: "C9 of carboxylic acid",
    description:
      "Bonded to O3 and hydroxyl in carboxylic acid.",
    descriptionTokens: {
      label: "C9 of carboxylic acid",
      shortDescription:
        "Bonded to O3 and hydroxyl in carboxylic acid.",
      longDescription:
        "Bonded to O3 and hydroxyl in carboxylic acid.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "15": {
    id: "15",
    displayName: "O3 of carboxylic acid",
    description: "Bonded to C9 of carboxylic acid.",
    descriptionTokens: {
      label: "O3 of carboxylic acid",
      shortDescription: "Bonded to C9 of carboxylic acid.",
      longDescription: "Bonded to C9 of carboxylic acid.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "16": {
    id: "16",
    displayName: "Hydroxyl in carboxylic acid",
    description: "Bonded to C9 of carboxylic acid.",
    descriptionTokens: {
      label: "Hydroxyl in carboxylic acid",
      shortDescription: "Bonded to C9 of carboxylic acid.",
      longDescription: "Bonded to C9 of carboxylic acid.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
};
