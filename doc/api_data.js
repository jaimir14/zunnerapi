define({ "api": [
  {
    "type": "post",
    "url": "/api/auth",
    "title": "",
    "name": "authenticate_User",
    "description": "<p>This service provides a token in order to be used in all service calls that require authentication</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>user identification</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>user password</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "endpoint: api/auth\n\nbody:\n{\n  \"username\": \"admin\",\n  \"password\": \"pass123\"\n}",
        "type": "json"
      }
    ],
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "boolean",
            "optional": false,
            "field": "success",
            "description": "<p>true if the authentication was successful</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>shows the success message</p>"
          },
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>identifies the actual session in the server</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    HTTP/1.1 200 OK\n    {\n\t\t\"success\": true\n\t\t\"message\": \"Token created\"\n\t\t\"token\": \"token-string-here\"\n    }",
          "type": "json"
        }
      ]
    },
    "group": "Authentication",
    "version": "0.1.0",
    "filename": "./controllers/api/auth/index.js",
    "groupTitle": "Authentication",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication failed. Wrong password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Authentication failed. Wrong password\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/categories",
    "title": "",
    "name": "get_list_of_Categories",
    "description": "<p>This service provides a list of categories registered in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Categories",
    "version": "0.0.0",
    "filename": "./controllers/api/categories/index.js",
    "groupTitle": "Categories",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/categories",
    "title": "",
    "name": "post_a_Categories",
    "description": "<p>This service creates a new category in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Categories",
    "version": "0.0.0",
    "filename": "./controllers/api/categories/index.js",
    "groupTitle": "Categories",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "E__Zunner_doc_main_js",
    "groupTitle": "E__Zunner_doc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/api/shipments",
    "title": "",
    "name": "get_list_of_Shipments",
    "description": "<p>This service provides a list of shipments registered in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Shipments",
    "version": "0.0.0",
    "filename": "./controllers/api/shipments/index.js",
    "groupTitle": "Shipments",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/shipments",
    "title": "",
    "name": "post_a_Shipment",
    "description": "<p>This service creates a new Shipment in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Shipments",
    "version": "0.0.0",
    "filename": "./controllers/api/shipments/index.js",
    "groupTitle": "Shipments",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/subcategories",
    "title": "",
    "name": "get_list_of_Subcategories",
    "description": "<p>This service provides a list of Subcategories registered in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Subcategories",
    "version": "0.0.0",
    "filename": "./controllers/api/subcategories/index.js",
    "groupTitle": "Subcategories",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/subcategories",
    "title": "",
    "name": "post_a_Subcategory",
    "description": "<p>This service creates a new Subcategory in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Subcategories",
    "version": "0.0.0",
    "filename": "./controllers/api/subcategories/index.js",
    "groupTitle": "Subcategories",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "get",
    "url": "/api/users",
    "title": "",
    "name": "get_list_of_Users",
    "description": "<p>This service provides a list of users registered in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Users",
    "version": "0.0.0",
    "filename": "./controllers/api/users/index.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/api/users",
    "title": "",
    "name": "post_a_User",
    "description": "<p>This service creates a new User in the database</p>",
    "permission": [
      {
        "name": "login",
        "title": "User access only",
        "description": "<p>Is required to be logged in to use this service, and provide the token</p>"
      }
    ],
    "group": "Users",
    "version": "0.0.0",
    "filename": "./controllers/api/users/index.js",
    "groupTitle": "Users",
    "error": {
      "fields": {
        "auth": [
          {
            "group": "auth",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>false because the authentication was not successful</p>"
          },
          {
            "group": "auth",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Failed to athenticate token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 403 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"Failed to athenticate token\"\n    }",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "    HTTP/1.1 401 Auth failed\n    {\n      \"success\": \"false\",\n\t\t \"message\": \"No token provided\"\n    }",
          "type": "json"
        }
      ]
    }
  }
] });
