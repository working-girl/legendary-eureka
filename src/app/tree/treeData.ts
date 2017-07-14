export let treeData =
/*  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      { 
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          { "name": "Son of A", "parent": "Level 2: A" },
          { "name": "Daughter of A", "parent": "Level 2: A" }
        ]
      },
      { "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  };*/


//  treeData = [
  {
    "name": "Top Level",
    "parent": "null",
    "children": [
      {
        "name": "Level 2: A",
        "parent": "Top Level",
        "children": [
          {
            "name": "Son of A",
            "parent": "Level 2: A"
          },
          {
            "name": "Daughter of A",
            "parent": "Level 2: A",
            "children": [
            {
              "name": "Son of Daughter of A",
              "parent": "Level 2: A"
            },
            {
              "name": "Son of Daughter of A",
              "parent": "Level 2: A"
            },
            {
              "name": "Son of Daughter of A",
              "parent": "Level 2: A"
            },
            {
              "name": "Son of Daughter of A",
              "parent": "Level 2: A"
            },
            {
              "name": "Daughter^2 of A",
              "parent": "Level 2: A"
            }
            ]
          }
        ]
      },
      {
        "name": "Level 2: B",
        "parent": "Top Level"
      }
    ]
  };
//];