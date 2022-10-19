import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import axios from 'axios';

dotenv.config();

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const todaysDate = mm + '/' + dd + '/' + yyyy;



// async function addDatabase(databaseId: string) {
//   const notion = new Client({
//     auth: process.env.NOTION_TOKEN,
//   });

//   var data = JSON.stringify({
//     "parent": {
//       "type": "page_id",
//       "page_id": "c2590c9a6e2748399dfda36587b0e1c9"
//     },
//     "properties": {
//       "Name": {
//         "title": {
//           "type": "text",
//           "text": {
//               "content": "Grocery List",
//               "link": null
//           }
//         }
//       },    
//       "Price": {
//         "number": {
//           "format": "dollar"
//         }
//       },
//       "Last ordered": {
//         "date": {}
//       },
//     }
//   })

//   const options = {
//     method: 'post',
//     url: 'https://api.notion.com/v1/databases',
//     headers: {
//       accept: 'application/json',
//       'Notion-Version': '2022-06-28',
//       'content-type': 'application/json',
//       'Authorization': 'Bearer ' + 'secret_6hTU1lPLpW2PyBkFCWz09REFWxLxduJHibc2pcXYBZH'
//     },
//     data: data
//   };

//   console.log("IN FN")

//   axios(options).then(function (response) {
//     console.log("IN RES", response.data)
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error)
//   })

// }

async function main() {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

  const response = await notion.pages.create({
    "icon": {
        "type": "emoji",
        "emoji": "✔️"
    },
    "parent": {
        "type": "page_id",
        "page_id": "c2590c9a6e2748399dfda36587b0e1c9"
    },
    "properties": {
        "title": [
            {
                "text": {
                    "content": todaysDate
                }
            }
        ]
    },
    "children": [
      {
        "type": "to_do",
        //...other keys excluded
        "to_do": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": "",
              "link": null
            }
          }],
          "checked": false,
          "color": "gray",
        }
      },
      {
        "type": "to_do",
        //...other keys excluded
        "to_do": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": "",
              "link": null
            }
          }],
          "checked": false,
          "color": "gray",
        }
      },
      {
        "type": "to_do",
        //...other keys excluded
        "to_do": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": "",
              "link": null
            }
          }],
          "checked": false,
          "color": "gray",
        }
      },
      {
        "type": "to_do",
        //...other keys excluded
        "to_do": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": "",
              "link": null
            }
          }],
          "checked": false,
          "color": "gray",
        }
      },
      {
        "type": "to_do",
        //...other keys excluded
        "to_do": {
          "rich_text": [{
            "type": "text",
            "text": {
              "content": "",
              "link": null
            }
          }],
          "checked": false,
          "color": "gray",
        }
      },
    ]
});
  
  console.log("Got response:", response);
  console.log("PAGE ID", response.id)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
