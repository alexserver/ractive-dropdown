# ractive-dropdown
A Dropdown list component for using with Ractivejs

## Live demo
Visit [http://alexserver.github.io/ractive-dropdown/demo/](http://alexserver.github.io/ractive-dropdown/demo/).

## Install
```
$ npm install ractive-dropdown
```

## Usage

### Component declaration
In node-like apps:
```
var ractive = new Ractive({
  ...
  components: {
    dropdown: require('ractive-dropdown')
  },
  ...
});
```

In browser-like apps:
```
var ractive = new Ractive({
  ...
  components: {
    dropdown: RactiveDropdown
  },
  ...
});
```

### Component usage
By having this data declared in the parent Ractive instance:
```
var ractive = new Ractive({
  ...
  data: {
    collection: {
      '001': 'David Gilmour',
      '002': 'Roger Waters',
      '003': 'Richard Wright',
      '004': 'Nick Mason',
      '005': 'Syd Barrett'
    },
    selected: '005'
  }
  ...
});
```
You can instantiate the component through the template, and passing needed data
```
<div>
  <dropdown list={{collection}} value={{selected}} />
</div>
```

### Fontawesome requirement and styling.
This component uses two fontawesome icon classes for the chevron:

- `fa-chevron-up` It is shown when the dropdown is closed.
- `fa-chevron-down` It is shown when the dropdown is open.

So there are two alternatives:

1- Adding fontawesome to the project
Add this in your main layout
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
```

2- Adding custom styling in your project css
Set the custom styling for the following classes:
```
  i.fa-chevron-up { /*styling for the up arrow*/ }
  i.fa-chevron-up { /*styling for the down arrow*/ }
```

Please [contact me](mailto:alexserverone@gmail.com) if you find this confusing.

## Initialization Options

#### list
It references a key/value hash, where the key is the option value, and the value is the option value.
#### value
It references the selected value, which may match to the same type as any of the keys in the provided list.
