# ractive-dropdown
A Dropdown list component for using with Ractivejs

## Live demo
Visit [http://alexserver.github.io/ractive-dropdown/demo/](http://alexserver.github.io/ractive-dropdown/demo/).

## Install
TODO

## Usage

### Declaration
In node-like apps:
```
var ractive = new Ractive({
  ...
  components: {
    dropdown: require('ractive-dropdown')
  }
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

### Component usage
In any part that you want to add the component
```
<div>
  <dropdown list={{collection}} value={{selected}} />
</div>
```