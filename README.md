# Dynamic Form Inputs
## A simple library to create dynamic forms driven by a simple config file using React.

## sample config file
```
configuration = 
{
  "Comments": {
    "annotationType": "TextInput",
    "className": "textbox-comment",
    "maxLength": 256,
    "disabled": false,
    "placeholder": "Please Enter your comments",
  },
  "FirstName": {
     "annotationType": "TextInput",
    "className": "textbox-firstname",
    "maxLength": 10,
    "disabled": false,
    "placeholder": "Please Enter your first name",
  }
}
```

## How to use
```
<DynamicComponent toBeReplaced={regex|string} input={string} configuration={object}

//Sample Component
<DynamicComponent toBeReplaced='/\[(.*?)\]/g' input='The user [FirstName] provided the comment [Comment]' configuration = {configuration from config file} values={'firstName': 'sample name', 'comment': 'entered comments'} />


//Gets translated to =>
<span>The user <input type="text" maxLength=10  placeholder = "Please Enter your first name" ... ></input> provided the comment <input type="text" maxLength=256  placeholder = "Please Enter your comments" ... ></input></span>
```
