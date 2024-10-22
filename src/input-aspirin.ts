import { Hypergraph } from "./priority-traversal-types";

export const aspirinHypergraph: Hypergraph = {
  "0": {
    id: "0",
    displayName: "Aspirin",
    description:
      "Chemical diagram for aspirin. Contains benzene, ester, and carboxylic acid.",
    descriptionTokens: {
      label: "Aspirin",
      shortDescription: "Chemical diagram for aspirin",
      longDescription:
        "Chemical diagram for aspirin. Contains benzene ring, ester, and carboxylic acid.",
    },
    parents: [],
    children: ["1", "2", "3"],
    priority: 0,
  },
  "1": {
    id: "1",
    displayName: "Benzene ring",
    description:
      "Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",
    descriptionTokens: {
      label: "Benzene ring",
      shortDescription: "Benzene ring with 6 carbons.",
      longDescription:
        "Benzene ring with 6 carbons. Substitutions at position 1 (ester) and position 2 (carboxylic acid).",
    },
    parents: ["0"],
    children: ["4", "5", "6", "7", "8", "9"],
    priority: 1,
  },
  "2": {
    id: "2",
    displayName: "Ester",
    description: "Ester group single bonded to C1 of benzene ring.",
    descriptionTokens: {
      label: "Ester",
      shortDescription: "Ester group single bonded to C1 of benzene ring.",
      longDescription: "Ester group single bonded to C1 of benzene ring.",
    },
    parents: ["0"],
    children: ["4", "10", "11", "12", "13"],
    priority: 2,
  },
  "3": {
    id: "3",
    displayName: "Carboxylic acid",
    description: "Carboxylic acid group single bonded to C2 of benzene ring.",
    descriptionTokens: {
      label: "Carboxylic acid",
      shortDescription:
        "Carboxylic acid group single bonded to C2 of benzene ring.",
      longDescription:
        "Carboxylic acid group single bonded to C2 of benzene ring.",
    },
    parents: ["0"],
    children: ["5", "14", "15", "16"],
    priority: 2,
  },
  "4": {
    id: "4",
    displayName: "Carbon 1 (C1 of benzene)",
    description:
      "Double bonded to C2 of benzene. Single bonded to O1 of ester and C6 of benzene.",
    descriptionTokens: {
      label: "Carbon 1 (C1 of benzene)",
      shortDescription:
        "Double bonded to C2 of benzene. Single bonded to O1 of ester and C6 of benzene.",
      longDescription:
        "Double bonded to C2 of benzene. Single bonded to O1 of ester and C6 of benzene.",
    },
    parents: ["1", "2"],
    children: [],
    priority: 2,
  },
  "5": {
    id: "5",
    displayName: "Carbon 2 (C2 of benzene)",
    description:
      "Double bonded to C1 of benzene. Single bonded to C3 of benzene and C9 of carboxylic acid.",
    descriptionTokens: {
      label: "Carbon 2 (C2 of benzene)",
      shortDescription:
        "Double bonded to C1 of benzene. Single bonded to C3 of benzene and C9 of carboxylic acid.",
      longDescription:
        "Double bonded to C1 of benzene. Single bonded to C3 of benzene and C9 of carboxylic acid.",
    },
    parents: ["1", "3"],
    children: [],
    priority: 2,
  },
  "6": {
    id: "6",
    displayName: "Carbon 3 (C3 of benzene)",
    description:
      "Double bonded to C4 of benzene. Single bonded to C2 of benzene.",
    descriptionTokens: {
      label: "Carbon 3 (C3 of benzene)",
      shortDescription:
        "Double bonded to C4 of benzene. Single bonded to C2 of benzene.",
      longDescription:
        "Double bonded to C4 of benzene. Single bonded to C2 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "7": {
    id: "7",
    displayName: "Carbon 4 (C4 of benzene)",
    description:
      "Double bonded to C3 of benzene. Single bonded to C5 of benzene.",
    descriptionTokens: {
      label: "Carbon 4 (C4 of benzene)",
      shortDescription:
        "Double bonded to C3 of benzene. Single bonded to C5 of benzene.",
      longDescription:
        "Double bonded to C3 of benzene. Single bonded to C5 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "8": {
    id: "8",
    displayName: "Carbon 5 (C5 of benzene)",
    description:
      "Double bonded to C6 of benzene. Single bonded to C4 of benzene.",
    descriptionTokens: {
      label: "Carbon 5 (C5 of benzene)",
      shortDescription:
        "Double bonded to C6 of benzene. Single bonded to C4 of benzene.",
      longDescription:
        "Double bonded to C6 of benzene. Single bonded to C4 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "9": {
    id: "9",
    displayName: "Carbon 6 (C6 of benzene)",
    description:
      "Double bonded to C5 of benzene. Single bonded to C1 of benzene.",
    descriptionTokens: {
      label: "Carbon 6 (C6 of benzene)",
      shortDescription:
        "Double bonded to C5 of benzene. Single bonded to C1 of benzene.",
      longDescription:
        "Double bonded to C5 of benzene. Single bonded to C1 of benzene.",
    },
    parents: ["1"],
    children: [],
    priority: 2,
  },
  "10": {
    id: "10",
    displayName: "Oxygen 1 (O1 of ester)",
    description: "Single bonded to C1 of benzene and C7 of ester.",
    descriptionTokens: {
      label: "Oxygen 1 (O1 of ester)",
      shortDescription: "Single bonded to C1 of benzene and C7 of ester.",
      longDescription: "Single bonded to C1 of benzene and C7 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "11": {
    id: "11",
    displayName: "Carbon 7 (C7 of ester)",
    description:
      "Double bonded to O2 of ester. Single bonded to O1 of ester and C8 of ester.",
    descriptionTokens: {
      label: "Carbon 7 (C7 of ester)",
      shortDescription:
        "Double bonded to O2 of ester. Single bonded to O1 of ester and C8 of ester.",
      longDescription:
        "Double bonded to O2 of ester. Single bonded to O1 of ester and C8 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "12": {
    id: "12",
    displayName: "Oxygen 2 (O2 of ester)",
    description: "Double bonded to C7 of ester.",
    descriptionTokens: {
      label: "Oxygen 2 (O2 of ester)",
      shortDescription: "Double bonded to C7 of ester.",
      longDescription: "Double bonded to C7 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "13": {
    id: "13",
    displayName: "Carbon 8 (C8 of ester)",
    description: "Single bonded to C7 of ester.",
    descriptionTokens: {
      label: "Carbon 8 (C8 of ester)",
      shortDescription: "Single bonded to C7 of ester.",
      longDescription: "Single bonded to C7 of ester.",
    },
    parents: ["2"],
    children: [],
    priority: 3,
  },
  "14": {
    id: "14",
    displayName: "Carbon 9 (C9 of carboxylic acid)",
    description:
      "Double bonded to O3 of carboxylic acid. Single bonded to C2 of benzene and OH of carboxylic acid.",
    descriptionTokens: {
      label: "Carbon 9 (C9 of carboxylic acid)",
      shortDescription:
        "Double bonded to O3 of carboxylic acid. Single bonded to C2 of benzene and OH of carboxylic acid.",
      longDescription:
        "Double bonded to O3 of carboxylic acid. Single bonded to C2 of benzene and OH of carboxylic acid.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "15": {
    id: "15",
    displayName: "Oxygen 3 (O3 of carboxylic acid)",
    description: "Double bonded to C9 of carboxylic acid.",
    descriptionTokens: {
      label: "Oxygen 3 (O3 of carboxylic acid)",
      shortDescription: "Double bonded to C9 of carboxylic acid.",
      longDescription: "Double bonded to C9 of carboxylic acid.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
  "16": {
    id: "16",
    displayName: "Hydroxyl (OH of carboxylic acid)",
    description: "Single bonded to C9 of carboxylic acid.",
    descriptionTokens: {
      label: "Hydroxyl (OH of carboxylic acid)",
      shortDescription: "Single bonded to C9 of carboxylic acid.",
      longDescription: "Single bonded to C9 of carboxylic acid.",
    },
    parents: ["3"],
    children: [],
    priority: 3,
  },
};
